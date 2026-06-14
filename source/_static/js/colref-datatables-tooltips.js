// _static/colref-datatables-tooltips.js
// (Repurposed: creates copyable Bootstrap popovers for truncated DataTables cells)


(function () {
    "use strict";

    function hasBootstrapPopover() {
        return !!(window.bootstrap && bootstrap.Popover);
    }

    function isTruncated(el) {
        return el && el.scrollWidth > el.clientWidth + 1;
    }

    function norm(s) {
        return (s || "").replace(/\s+/g, " ").trim();
    }

    function cellText(td) {
        return norm(td.innerText || td.textContent || "");
    }

    function targetFor(td) {
        // Prefer the docutils wrapper (p/span/code). That’s what is actually ellipsized.
        return td.querySelector(":scope > p, :scope > span, :scope > code") || td;
    }

    // Track active triggers so we can close everything on redraw / outside click.
    const triggers = new Set();

    function getInst(el) {
        return hasBootstrapPopover() ? bootstrap.Popover.getInstance(el) : null;
    }

    function hideAll(exceptEl) {
        Array.from(triggers).forEach((el) => {
            // Prune detached nodes
            if (!el || !el.isConnected) {
                triggers.delete(el);
                return;
            }
            if (exceptEl && el === exceptEl) return;
            const inst = getInst(el);
            if (inst) inst.hide();
        });
    }

    function detach(el) {
        const inst = getInst(el);
        if (inst) {
            try { inst.dispose(); } catch (e) { }
        }
        triggers.delete(el);
        el.removeAttribute("title");
        el.removeAttribute("data-colref-popover");
    }

    function attach(el, text) {
        if (!hasBootstrapPopover()) return;

        // Store current content (popover pulls from this at show-time)
        el._colrefPopoverText = text;

        // Avoid native browser tooltip
        el.removeAttribute("title");

        // Mark as our trigger (used by outside-click handler)
        el.setAttribute("data-colref-popover", "1");

        // Create (or reuse) the instance.
        // Use trigger: 'manual' so we control show/hide and keep it open for copy/paste.
        bootstrap.Popover.getOrCreateInstance(el, {
            container: "body",
            placement: "top",
            fallbackPlacements: ["top", "right", "left", "bottom"],
            boundary: "viewport",
            trigger: "manual",
            html: false,                  // plain text = safest + copyable
            content: function () { return el._colrefPopoverText || ""; }
        });

        // Bind click handler once.
        if (!el._colrefPopoverBound) {
            el.addEventListener("click", function (e) {
                const inst = getInst(el);
                if (!inst) return; // if not attached anymore, behave normally

                // Prevent DataTables Responsive toggle when clicking the text region.
                e.preventDefault();
                e.stopPropagation();

                const isOpen = !!el.getAttribute("aria-describedby");
                if (isOpen) {
                    inst.hide();
                } else {
                    hideAll(el);
                    inst.show();
                }
            });

            el._colrefPopoverBound = true;
        }

        triggers.add(el);
    }

    function apply(root) {
        if (!hasBootstrapPopover()) return;

        const scope = root || document;

        // Only main rows (exclude Responsive child rows)
        scope
            .querySelectorAll(".dt-container table.dataTable tbody tr:not(.child) td.dt-trunc")
            .forEach((td) => {
                // Don’t popover the offcanvas icon button.
                if (td.querySelector("[data-colref-open]")) return;

                const text = cellText(td);
                if (!text) return;

                const t = targetFor(td);
                const truncated = isTruncated(t) || (t !== td && isTruncated(td));

                if (truncated) attach(t, text);
                else detach(t);
            });
    }

    function scheduleApply(node) {
        // DataTables sometimes fires before final widths settle.
        // rAF makes truncation detection reliable.
        window.requestAnimationFrame(function () { apply(node || document); });
    }

    function hook() {
        scheduleApply(document);

        // Re-apply on DataTables lifecycle events
        if (window.jQuery && jQuery.fn && jQuery.fn.dataTable) {
            jQuery(document).on(
                "init.dt draw.dt responsive-display.dt column-visibility.dt",
                function (e, settings) {
                    hideAll(null);
                    try {
                        const api = new jQuery.fn.dataTable.Api(settings);
                        scheduleApply(api.table().node());
                    } catch (err) {
                        scheduleApply(document);
                    }
                }
            );
        }

        // Close on outside click (capture phase)
        document.addEventListener(
            "click",
            function (e) {
                if (e.target.closest(".popover")) return;
                if (e.target.closest("[data-colref-popover='1']")) return;
                hideAll(null);
            },
            true
        );

        // Close on Escape
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") hideAll(null);
        });

        // Re-check truncation on resize
        window.addEventListener("resize", function () {
            hideAll(null);
            scheduleApply(document);
        });
    }

    window.addEventListener("load", hook);
})();
