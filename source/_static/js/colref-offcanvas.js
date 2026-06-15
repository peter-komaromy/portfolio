// _static/colref-offcanvas.js


(function () {
    "use strict";

    const OFFCANVAS_ID = "colrefOffcanvas";
    const originalPos = new WeakMap(); // el -> { parent, nextSibling }

    function cleanLabel(s) {
        // Remove zero-width chars / directionality marks that sometimes sneak into HTML text nodes.
        return (s || "")
            .replace(/\u00A0/g, " ")                    // NBSP -> space
            .replace(/[\u200B-\u200D\uFEFF]/g, "")      // ZWSP/ZWNJ/ZWJ/BOM
            .replace(/[\u202A-\u202E\u2066-\u2069]/g, "") // bidi marks/isolation
            .replace(/\s+/g, " ")
            .trim();
    }

    function readMetaContent(name) {
        const el = document.querySelector(`meta[name="${name}"]`);
        return el ? cleanLabel(el.getAttribute("content") || "") : "";
    }

    function getSwitcherLabel(detailEl) {
        // Priority:
        // 1) per-detail override (future-proof): data-colref-switcher-label="Action type"
        // 2) per-page override: <meta name="colref-switcher-label" content="Action type">
        // 3) optional global override: window.COLREF_SWITCHER_LABEL = "Action type"
        // 4) default
        const fromDetail = cleanLabel(detailEl?.dataset?.colrefSwitcherLabel);
        if (fromDetail) return fromDetail;

        const fromMeta = readMetaContent("colref-switcher-label");
        if (fromMeta) return fromMeta;

        const fromGlobal = cleanLabel(window.COLREF_SWITCHER_LABEL);
        if (fromGlobal) return fromGlobal;

        return "Case type";
    }

    function ensureOffcanvas() {
        let oc = document.getElementById(OFFCANVAS_ID);
        if (oc) return oc;

        oc = document.createElement("div");
        oc.id = OFFCANVAS_ID;
        oc.className = "offcanvas offcanvas-end colref-offcanvas";
        oc.tabIndex = -1;
        oc.setAttribute("aria-labelledby", OFFCANVAS_ID + "Label");
        oc.className = "offcanvas offcanvas-end colref-offcanvas colref-autoheight";

        // Width is controlled by this Bootstrap variable, so set a sane default here too.
        oc.style.setProperty("--bs-offcanvas-width", "min(1100px, 92vw)");

        oc.innerHTML = `
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="${OFFCANVAS_ID}Label">
          <i class="fa-solid fa-circle-info colref-oc-icon" aria-hidden="true"></i>
          <span class="colref-oc-title"></span>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="colref-toolbar"></div>
        <div class="colref-body"></div>
      </div>
    `;

        document.body.appendChild(oc);
        return oc;
    }

    function rememberPos(el) {
        if (originalPos.has(el)) return;
        originalPos.set(el, { parent: el.parentNode, nextSibling: el.nextSibling });
    }

    function restore(el) {
        const pos = originalPos.get(el);
        if (pos && pos.parent) {
            if (pos.nextSibling && pos.nextSibling.parentNode === pos.parent) {
                pos.parent.insertBefore(el, pos.nextSibling);
            } else {
                pos.parent.appendChild(el);
            }
        }
        el.hidden = true;
        el.classList.remove("colref-use-dropdown");
    }

    function clearDrawer(oc) {
        const toolbar = oc.querySelector(".colref-toolbar");
        const body = oc.querySelector(".colref-body");

        toolbar.replaceChildren();

        const current = body.querySelector(".colref-detail");
        if (current) restore(current);

        body.replaceChildren();
    }

    function buildSystemDropdown(detailEl, toolbarEl) {
        const tabSet = detailEl.querySelector(".sd-tab-set");
        if (!tabSet) return;

        const inputs = Array.from(tabSet.querySelectorAll('input[type="radio"]'));
        const labels = Array.from(tabSet.querySelectorAll(".sd-tab-label"));
        if (!inputs.length || !labels.length) return;

        // If there is only one tab, don’t show a meaningless “Case type” switcher.
        if (inputs.length <= 1) return;

        const labelByFor = new Map(
            labels
                .map((l) => [l.getAttribute("for"), cleanLabel(l.textContent)])
                .filter(([k]) => !!k)
        );

        const checked = inputs.find((i) => i.checked) || inputs[0];
        const currentLabel = cleanLabel(labelByFor.get(checked.id) || checked.id);

        // One compact control (right side). No separate left label.
        const dd = document.createElement("div");
        dd.className = "dropdown colref-switcher";

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "colref-switcher-btn";
        btn.setAttribute("data-bs-toggle", "dropdown");
        btn.setAttribute("aria-expanded", "false");

        const rawLabel = getSwitcherLabel(detailEl);
        const label = cleanLabel(rawLabel).replace(/:\s*$/, ""); // accept "Action type" or "Action type:"
        const prefixText = `${label}:`;

        btn.setAttribute("aria-label", label);

        btn.innerHTML = `
        <i class="fa-solid fa-filter colref-switcher-icon" aria-hidden="true"></i>
        <span class="colref-switcher-prefix"></span>
        <span class="colref-switcher-current"></span>
        <span class="colref-switcher-caret" aria-hidden="true">▾</span>
        `;

        const prefixSpan = btn.querySelector(".colref-switcher-prefix");
        if (prefixSpan) prefixSpan.textContent = prefixText;


        const currentSpan = btn.querySelector(".colref-switcher-current");

        function setCurrentText(t) {
            currentSpan.textContent = t;
            btn.title = t; // tooltip for truncated values
        }
        setCurrentText(currentLabel);

        const menu = document.createElement("ul");
        menu.className = "dropdown-menu dropdown-menu-end colref-switcher-menu";

        dd.appendChild(btn);
        dd.appendChild(menu);

        const ddInst =
            bootstrap.Dropdown && bootstrap.Dropdown.getOrCreateInstance
                ? bootstrap.Dropdown.getOrCreateInstance(btn)
                : null;

        // Use our own selection class. Do NOT use Bootstrap .active.
        function setSelected(activeId) {
            menu.querySelectorAll(".dropdown-item.is-selected").forEach((n) => {
                n.classList.remove("is-selected");
                n.removeAttribute("aria-current");
            });
            const activeBtn = menu.querySelector(
                `[data-colref-tab="${CSS.escape(activeId)}"]`
            );
            if (activeBtn) {
                activeBtn.classList.add("is-selected");
                activeBtn.setAttribute("aria-current", "true");
            }
        }

        inputs.forEach((inp) => {
            const name = cleanLabel(labelByFor.get(inp.id) || inp.id);

            const li = document.createElement("li");

            const item = document.createElement("button");
            item.type = "button";
            item.className = "dropdown-item";
            item.setAttribute("data-colref-tab", inp.id);

            item.innerHTML = `
        <span class="colref-dd-check" aria-hidden="true">✓</span>
        <span class="colref-dd-text"></span>
        `;
            item.querySelector(".colref-dd-text").textContent = name;

            if (inp.id === checked.id) {
                item.classList.add("is-selected");
                item.setAttribute("aria-current", "true");
            }

            item.addEventListener("click", () => {
                inp.checked = true;
                inp.dispatchEvent(new Event("change", { bubbles: true }));

                setCurrentText(name);
                setSelected(inp.id);

                if (ddInst) ddInst.hide();
            });

            li.appendChild(item);
            menu.appendChild(li);
        });

        toolbarEl.appendChild(dd);
        detailEl.classList.add("colref-use-dropdown");
    }

    function getMetaContext(tabContent) {
        // Legacy: meta list inside a no-bullets card
        const card = tabContent.querySelector(":scope > .sd-card.no-bullets");
        if (card) {
            const body = card.querySelector(".sd-card-body") || card;
            const list = Array.from(body.children).find(
                (n) => n.tagName && /^(UL|OL)$/i.test(n.tagName)
            );
            if (list) return { list, anchor: card };
        }

        // New: first direct child list of the tab content
        const list = Array.from(tabContent.children).find(
            (n) => n.tagName && /^(UL|OL)$/i.test(n.tagName)
        );
        if (list) return { list, anchor: list };

        return null;
    }

    function normalizeMetaCards(detailEl) {
        const ICON_LEAF_SELECTOR =
            'svg[data-icon], svg.svg-inline--fa, i.fa-solid, i.fa-regular, i.fa-brands, i.fa';

        function isListEl(el) {
            return !!el && !!el.tagName && /^(UL|OL)$/i.test(el.tagName);
        }

        function firstDirectList(parent) {
            return Array.from(parent.children).find(isListEl) || null;
        }

        function getMetaCtxForTab(tabEl) {
            // Legacy structure: meta list inside a sphinx-design card (.sd-card.no-bullets)
            const card = tabEl.querySelector(":scope > .sd-card.no-bullets");
            if (card) {
                const body = card.querySelector(".sd-card-body") || card;
                const list = firstDirectList(body);
                if (list) return { card, list };
            }

            // Simplified structure: meta list is the first direct child list of the tab content
            const list = firstDirectList(tabEl);
            if (list) return { card: null, list };

            // Fallback: first list anywhere (last resort)
            const anyList = tabEl.querySelector("ul, ol");
            if (anyList) return { card: null, list: anyList };

            return null;
        }

        function findLeadingIconContainer(wrapEl) {
            // Prefer “first icon in DOM order”
            let leaf = wrapEl.querySelector(ICON_LEAF_SELECTOR);
            if (!leaf) return null;

            // Promote to the nearest wrapper under wrapEl that contains only the icon,
            // so we move the whole icon container (handles svg-with-js wrappers etc).
            let cur = leaf;
            while (cur.parentElement && cur.parentElement !== wrapEl) {
                const p = cur.parentElement;

                // Only climb if parent is essentially “just a wrapper around the icon”
                if (p.childElementCount !== 1) break;
                if ((p.textContent || "").trim() !== "") break;

                cur = p;
            }
            return cur;
        }

        function splitListItem(li) {
            if (!(li instanceof HTMLElement)) return;
            if (li.querySelector(":scope > .colref-kv-key")) return; // already normalized

            // Docutils often emits <li><p>...</p></li>. Work inside that <p> if present.
            const wrap = li.querySelector(":scope > p") || li;

            // Label is the emphasized “Key:” bit.
            const labelEl = wrap.querySelector("em, strong");
            if (!labelEl) return;

            const rawLabel = cleanLabel(labelEl.textContent);
            if (!rawLabel) return;

            // Safety: avoid destroying arbitrary lists. Your meta keys always contain a colon.
            if (rawLabel.indexOf(":") === -1) return;

            const labelText = rawLabel.replace(/:$/, "");

            const iconContainer = findLeadingIconContainer(wrap);

            const key = document.createElement("span");
            key.className = "colref-kv-key";
            if (iconContainer) key.appendChild(iconContainer);
            key.append(labelText);

            const val = document.createElement("span");
            val.className = "colref-kv-val";

            // Extract everything after the label (works even if labelEl is nested).
            const range = document.createRange();
            range.selectNodeContents(wrap);

            try {
                range.setStartAfter(labelEl);
            } catch (e) {
                // If something is unexpectedly shaped, bail without breaking the DOM.
                return;
            }

            const frag = range.extractContents();
            labelEl.remove();

            // Trim leading whitespace and a stray ":" if the author wrote *Label* : value
            if (frag.firstChild && frag.firstChild.nodeType === 3) {
                frag.firstChild.textContent = frag.firstChild.textContent
                    .replace(/^\s+/, "")
                    .replace(/^:\s*/, "");
                if (!frag.firstChild.textContent) frag.firstChild.remove();
            }

            val.appendChild(frag);

            // If there are additional blocks in the <li> (extra <p>, lists, etc),
            // move them into the value column so wrapped lines align under the value.
            if (wrap !== li) {
                let sib = wrap.nextSibling;
                while (sib) {
                    const next = sib.nextSibling;

                    // Skip empty whitespace text nodes
                    if (sib.nodeType === 3 && !sib.textContent.trim()) {
                        sib = next;
                        continue;
                    }
                    val.appendChild(sib);
                    sib = next;
                }
            }

            li.replaceChildren(key, val);
        }

        // Run per tab (each “case type” is a tab). If there are no tabs (single-definition
        // pages like DM_Trips), treat the detail container as the one “tab”.
        const tabs = detailEl.querySelectorAll(".sd-tab-content");
        const tabTargets = tabs.length ? Array.from(tabs) : [detailEl];

        tabTargets.forEach((tab) => {
            const ctx = getMetaCtxForTab(tab);
            if (!ctx) return;

            const { card, list } = ctx;

            // Mark for CSS (supports both old and new markup)
            if (card) card.classList.add("colref-meta");
            list.classList.add("colref-kv", "colref-meta");

            Array.from(list.children).forEach(splitListItem);
        });
    }


    function addTechnicalNotesToggle(detailEl) {
        const tabs = detailEl.querySelectorAll(".sd-tab-content");
        const tabTargets = tabs.length ? Array.from(tabs) : [detailEl];

        tabTargets.forEach((tab) => {
            const ctx = getMetaContext(tab);
            if (!ctx) return;

            const { list, anchor } = ctx;

            // If we already wrapped notes for this tab, do nothing
            if (tab.querySelector(":scope > .colref-notes")) return;

            // Insert notes wrapper right AFTER the meta anchor (card or list)
            const notes = document.createElement("div");
            notes.className = "colref-notes";
            notes.hidden = true;
            anchor.after(notes);

            // Move everything after notes into notes (this becomes your “Technical notes” content)
            let node = notes.nextSibling;
            while (node) {
                const next = node.nextSibling;
                if (node.nodeType === 3 && !node.textContent.trim()) {
                    node = next;
                    continue;
                }
                notes.appendChild(node);
                node = next;
            }

            // If nothing was moved, remove wrapper and skip creating the toggle row
            if (!notes.firstChild) {
                notes.remove();
                return;
            }

            // Do not duplicate the toggle row
            if (list.querySelector(".colref-notes-toggle")) return;

            const li = document.createElement("li");
            li.className = "colref-notes-row";

            const key = document.createElement("span");
            key.className = "colref-kv-key";

            const icon = document.createElement("i");
            icon.className = "fa-solid fa-pen-to-square";
            icon.setAttribute("aria-hidden", "true");
            key.append(icon, "Technical notes");

            const val = document.createElement("span");
            val.className = "colref-kv-val";

            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "colref-notes-toggle";
            btn.setAttribute("aria-expanded", "false");
            btn.innerHTML = `
        <span class="colref-notes-toggle-text">Click to show</span>
        <span class="colref-notes-chevron" aria-hidden="true">›</span>
        `;

            btn.addEventListener("click", () => {
                const open = notes.hidden;     // if hidden, open it
                notes.hidden = !open;
                li.classList.toggle("is-open", open);
                btn.setAttribute("aria-expanded", String(open));
                btn.querySelector(".colref-notes-toggle-text").textContent = open
                    ? "Click to hide"
                    : "Click to show";
            });

            val.appendChild(btn);
            li.append(key, val);
            list.appendChild(li);
        });
    }


    function showDetail(detailId) {
        const oc = ensureOffcanvas();
        const toolbarEl = oc.querySelector(".colref-toolbar");
        const bodyEl = oc.querySelector(".colref-body");

        clearDrawer(oc);

        const detailEl = document.getElementById("colref-detail-" + detailId);
        if (!detailEl) return;

        rememberPos(detailEl);

        const title = cleanLabel(detailEl.dataset.colrefTitle || detailId);
        oc.querySelector(".colref-oc-title").textContent = title;

        detailEl.hidden = false;
        bodyEl.appendChild(detailEl);

        // Default: show toolbar only if we actually add a control to it.
        toolbarEl.hidden = false;
        buildSystemDropdown(detailEl, toolbarEl);
        toolbarEl.hidden = toolbarEl.children.length === 0;

        normalizeMetaCards(detailEl);
        addTechnicalNotesToggle(detailEl);

        const inst = bootstrap.Offcanvas.getOrCreateInstance
            ? bootstrap.Offcanvas.getOrCreateInstance(oc)
            : new bootstrap.Offcanvas(oc);

        inst.show();
    }

    // Capture-phase click handler so we stop DataTables' row toggle click.
    document.addEventListener(
        "click",
        function (e) {
            const btn = e.target.closest("[data-colref-open]");
            if (!btn) return;

            e.preventDefault();
            e.stopPropagation();

            const id = btn.getAttribute("data-colref-open");
            if (id) showDetail(id);
        },
        true
    );

    document.addEventListener("hidden.bs.offcanvas", function (e) {
        if (e.target && e.target.id === OFFCANVAS_ID) clearDrawer(e.target);
    });
})();
