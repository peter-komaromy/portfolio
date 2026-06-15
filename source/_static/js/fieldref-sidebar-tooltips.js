// Adds tooltips to truncated field references in the sidebar.
// It is necessary because the sidebar isn't wide enough to display long field names, and wrapping them would look awkward (e.g., SAP ones)


(function () {
    var selector = '.bd-sidebar-primary nav.bd-links a.reference.internal';

    function isTruncated(el) { return el && el.scrollWidth > el.clientWidth; }

    function makeTip(a, full) {
        a.removeAttribute('title'); // avoid native tooltip
        if (a._fieldrefTip) { try { a._fieldrefTip.dispose(); } catch (e) { } }
        a._fieldrefTip = new bootstrap.Tooltip(a, {
            title: full,
            container: 'body',               // avoid clipping by the sidebar
            placement: 'auto',               // let Popper choose the side
            fallbackPlacements: ['right', 'left', 'top', 'bottom'],
            boundary: 'viewport',
            trigger: 'hover focus',
            customClass: 'fieldref-tip',
            delay: { show: 120, hide: 80 }
        });
    }

    function dropTip(a) {
        if (a._fieldrefTip) { try { a._fieldrefTip.dispose(); } catch (e) { } }
        a._fieldrefTip = null;
        a.removeAttribute('title');
    }

    function apply() {
        document.querySelectorAll(selector).forEach(function (a) {
            var full = (a.textContent || '').trim().replace(/\s+/g, ' ');
            if (!full) { dropTip(a); return; }
            if (isTruncated(a)) { if (!a._fieldrefTip) makeTip(a, full); }
            else { dropTip(a); }
        });
    }

    window.addEventListener('load', apply);
    window.addEventListener('resize', apply);
})();


