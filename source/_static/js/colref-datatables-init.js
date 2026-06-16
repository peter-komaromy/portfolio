// _static/colref-datatables-init.js


// _static/js/colref-datatables-init.js
(function () {
    "use strict";

    const TABLE_SELECTOR = "table.sphinx-datatable";
    const READY_CLASS = "colref-dt-ready";
    const STYLE_ID = "colref-dt-anti-fouc";
    const FAILSAFE_MS = 2500;

    // ---------------------------------------------------------------------------
    // 1) Kill the “raw Sphinx table flash” (FOUC)
    //
    // The raw HTML table is painted before DataTables initialises.
    // We hide colref tables by default, then unhide them in initComplete.
    // ---------------------------------------------------------------------------
    (function injectAntiFoucCss() {
        if (document.getElementById(STYLE_ID)) return;

        const style = document.createElement("style");
        style.id = STYLE_ID;
        style.textContent = `
      /* Prevent flash of the uninitialised table */
      ${TABLE_SELECTOR} { opacity: 0; }
      ${TABLE_SELECTOR}.${READY_CLASS} { opacity: 1; }
    `;
        document.head.appendChild(style);
    })();

    function hasClass(el, cls) {
        return !!(el && el.classList && el.classList.contains(cls));
    }

    function detectProfile(table) {
        // Explicit per-page override via table class
        if (hasClass(table, "dt-profile-perf")) return "perf6";
        if (hasClass(table, "dt-profile-colref8")) return "colref8";
        if (hasClass(table, "dt-profile-perf5")) return "perf5";

        // Fallback auto-detect by column count
        const thCount = table.querySelectorAll("thead th").length;
        if (thCount === 6) return "perf6";
        if (thCount === 8) return "colref8";
        if (thCount === 5) return "perf5";

        // Safe default
        return "colref8";
    }

    function markReady(table) {
        table.classList.add(READY_CLASS);
    }

    function initOne(table) {
        // Deps check
        if (!window.jQuery || !jQuery.fn || !jQuery.fn.dataTable) return;

        // Avoid double-init
        if (jQuery.fn.dataTable.isDataTable(table)) {
            markReady(table);
            return;
        }

        const base = {
            // We are supplying explicit widths (percentages), so don’t let DT guess.
            autoWidth: false,

            order: [],

            responsive: {
                details: { renderer: DataTable.Responsive.renderer.listHiddenNodes() },
            },

            columnControl: ["order", ["search", "spacer", "orderAsc", "orderDesc", "orderClear"]],

            ordering: { indicators: false },

            // Unhide only when DT is fully ready (prevents the raw-table flash).
            initComplete: function () {
                const api = this.api();
                const node = api.table().node();

                markReady(node);

                // (opacity:0 doesn't affect layout, but this keeps things consistent.)
                api.columns.adjust().responsive.recalc();
            },
        };

        const profiles = {
            // 7-column colref pages (INFO_Person, INFO_Trips):
            // 0 ColName, 1 Def, 2 Samples, 3 SourceSys, 4 SourceTable, 5 Remark, 6 TechNotes
            colref8: {
                // Fixed widths for the 4 visible columns. Columns 4–6 are forced into Responsive child rows via className: "none".
                columns: [
                    { width: "16%" }, // Data Mart
                    { width: "26%" }, // Column Name
                    { width: "26%" }, // Definition
                    { width: "16%" }, // Sample Value(s)
                    { width: "16%" }, // Source System(s)
                    {}, // Source Table (child row)
                    {}, // Remark (child row)
                    {}, // Technical Notes (child row)
                ],

                columnDefs: [
                    { 
                        targets: 0,
                        responsivePriority: 1,
                        className: "dt-trunc dt-colname",
                        columnControl: ["order", ["searchList", "spacer", "orderAsc", "orderDesc", "orderClear"]],
                    },
                    { targets: 1, responsivePriority: 2, className: "dt-trunc dt-colname" },
                    { targets: 2, responsivePriority: 2, className: "dt-trunc dt-definition" },
                    {
                        targets: 3,
                        responsivePriority: 3,
                        className: "dt-trunc dt-samples",
                        columnControl: ["order", ["searchList", "spacer", "orderAsc", "orderDesc", "orderClear"]],
                    },
                    {
                        targets: 4,
                        responsivePriority: 4,
                        className: "dt-trunc dt-sourcesys",
                        columnControl: ["order", ["searchList", "spacer", "orderAsc", "orderDesc", "orderClear"]],
                    },

                    // Always hidden in main table (shown in Responsive child rows)
                    { targets: 5, className: "none" }, 
                    { targets: 6, className: "none" }, 
                    { targets: 7, className: "none" }, 
                ],
            },

            // 6-column performance pages:
            // 0 ColName, 1 Def, 2 Samples, 3 SourceSys, 4 Remark, 5 DataOriginLogic
            perf6: {
                // Fixed widths for the 4 visible columns. Columns 4–5 are forced into Responsive child rows via className: "none".
                columns: [
                    { width: "20%" }, // Column Name
                    { width: "40%" }, // Definition
                    { width: "20%" }, // Sample Value(s)
                    { width: "20%" }, // Source System(s)
                    {}, // Remark (child row)
                    {}, // Data Origin & Logic (child row)
                ],

                columnDefs: [
                    { targets: 0, responsivePriority: 1, className: "dt-trunc dt-colname" },
                    { targets: 1, responsivePriority: 2, className: "dt-trunc dt-definition" },
                    {
                        targets: 2,
                        responsivePriority: 3,
                        className: "dt-trunc dt-samples",
                        columnControl: ["order", ["searchList", "spacer", "orderAsc", "orderDesc", "orderClear"]],
                    },
                    {
                        targets: 3,
                        responsivePriority: 4,
                        className: "dt-trunc dt-sourcesys",
                        columnControl: ["order", ["searchList", "spacer", "orderAsc", "orderDesc", "orderClear"]],
                    },

                    // Always hidden in main table (shown in Responsive child rows)
                    { targets: 4, className: "none" }, // Remark
                    { targets: 5, className: "none dt-origin-logic" }, // Data Origin & Logic
                ],
            },

            // 5-column performance pages:
            // Temporary sandbox content -- to be deleted later!
            perf5: {
                // Fixed widths for the 4 visible columns. Columns 4–5 are forced into Responsive child rows via className: "none".
                columns: [
                    { width: "20%" }, // Column Name
                    { width: "40%" }, // Definition
                    { width: "20%" }, // Sample Value(s)
                    { width: "20%" }, // Source System(s)
                    {}, // Remark (child row)
                ],
                columnDefs: [
                    { targets: 0, responsivePriority: 1, className: "dt-trunc dt-colname" },
                    { targets: 1, responsivePriority: 2, className: "dt-trunc dt-definition" },
                    {
                        targets: 2,
                        responsivePriority: 3,
                        className: "dt-trunc dt-samples",
                        columnControl: ["order", ["searchList", "spacer", "orderAsc", "orderDesc", "orderClear"]],
                    },
                    {
                        targets: 3,
                        responsivePriority: 4,
                        className: "dt-trunc dt-sourcesys",
                        columnControl: ["order", ["searchList", "spacer", "orderAsc", "orderDesc", "orderClear"]],
                    },

                    // Always hidden in main table (shown in Responsive child rows)
                    { targets: 4, className: "none" }, // Remark
                ],
            },

        };

        const profile = detectProfile(table);
        const opts = jQuery.extend(true, {}, base, profiles[profile] || {});
        jQuery(table).DataTable(opts);
    }

    function initAll() {
        document.querySelectorAll(TABLE_SELECTOR).forEach(initOne);
    }

    function boot() {
        try {
            initAll();
        } catch (e) {
            // Don’t leave the page blank if something throws.
            document.querySelectorAll(TABLE_SELECTOR).forEach(markReady);
            return;
        }

        // Failsafe: if DT never initialises for a table, show the raw table after a short delay.
        window.setTimeout(function () {
            document.querySelectorAll(TABLE_SELECTOR).forEach(function (t) {
                if (t.classList.contains(READY_CLASS)) return;

                const dtOk =
                    window.jQuery &&
                    jQuery.fn &&
                    jQuery.fn.dataTable &&
                    jQuery.fn.dataTable.isDataTable(t);

                if (!dtOk) markReady(t);
            });
        }, FAILSAFE_MS);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot);
    } else {
        boot();
    }

    // If fonts/layout shift after full load, fix sizing once.
    window.addEventListener("load", function () {
        if (!window.jQuery || !jQuery.fn || !jQuery.fn.dataTable) return;

        document.querySelectorAll(TABLE_SELECTOR).forEach(function (t) {
            if (jQuery.fn.dataTable.isDataTable(t)) {
                jQuery(t).DataTable().columns.adjust().responsive.recalc();
            }
        });
    });
})();






