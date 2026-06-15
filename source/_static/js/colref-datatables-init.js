// _static/js/colref-datatables-init.js

(function () {
    "use strict";

    const TABLE_SELECTOR = "table.sphinx-datatable";
    const READY_CLASS = "colref-dt-ready";
    const STYLE_ID = "colref-dt-anti-fouc";
    const FAILSAFE_MS = 3000;
    const RETRY_LIMIT = 30;
    const RETRY_DELAY_MS = 100;

    (function injectAntiFoucCss() {
        if (document.getElementById(STYLE_ID)) return;

        const style = document.createElement("style");
        style.id = STYLE_ID;
        style.textContent = `
            ${TABLE_SELECTOR} { opacity: 0; }
            ${TABLE_SELECTOR}.${READY_CLASS} { opacity: 1; }
        `;
        document.head.appendChild(style);
    })();

    function hasClass(el, cls) {
        return !!(el && el.classList && el.classList.contains(cls));
    }

    function depsReady() {
        return !!(
            window.jQuery &&
            jQuery.fn &&
            jQuery.fn.dataTable &&
            window.DataTable &&
            DataTable.Responsive &&
            DataTable.Responsive.renderer &&
            DataTable.Responsive.renderer.listHiddenNodes
        );
    }

    function detectProfile(table) {
        if (hasClass(table, "dt-profile-perf")) return "perf6";
        if (hasClass(table, "dt-profile-colref7")) return "colref7";

        const thCount = table.querySelectorAll("thead th").length;
        if (thCount === 6) return "perf6";
        if (thCount === 7) return "colref7";

        return "colref7";
    }

    function markReady(table) {
        table.classList.add(READY_CLASS);
    }

    function initOne(table) {
        if (!depsReady()) return false;

        if (jQuery.fn.dataTable.isDataTable(table)) {
            markReady(table);
            return true;
        }

        const base = {
            autoWidth: false,
            order: [],

            responsive: {
                details: {
                    renderer: DataTable.Responsive.renderer.listHiddenNodes()
                }
            },

            columnControl: [
                "order",
                ["search", "spacer", "orderAsc", "orderDesc", "orderClear"]
            ],

            ordering: {
                indicators: false
            },

            initComplete: function () {
                const api = this.api();
                const node = api.table().node();

                markReady(node);
                api.columns.adjust().responsive.recalc();
            }
        };

        const profiles = {
            colref7: {
                columns: [
                    { width: "39%" },
                    { width: "29%" },
                    { width: "16%" },
                    { width: "16%" },
                    {},
                    {},
                    {}
                ],

                columnDefs: [
                    { targets: 0, responsivePriority: 1, className: "dt-trunc dt-colname" },
                    { targets: 1, responsivePriority: 2, className: "dt-trunc dt-definition" },
                    {
                        targets: 2,
                        responsivePriority: 3,
                        className: "dt-trunc dt-samples",
                        columnControl: [
                            "order",
                            ["searchList", "spacer", "orderAsc", "orderDesc", "orderClear"]
                        ]
                    },
                    {
                        targets: 3,
                        responsivePriority: 4,
                        className: "dt-trunc dt-sourcesys",
                        columnControl: [
                            "order",
                            ["searchList", "spacer", "orderAsc", "orderDesc", "orderClear"]
                        ]
                    },
                    { targets: 4, className: "none" },
                    { targets: 5, className: "none" },
                    { targets: 6, className: "none" }
                ]
            },

            perf6: {
                columns: [
                    { width: "20%" },
                    { width: "40%" },
                    { width: "20%" },
                    { width: "20%" },
                    {},
                    {}
                ],

                columnDefs: [
                    { targets: 0, responsivePriority: 1, className: "dt-trunc dt-colname" },
                    { targets: 1, responsivePriority: 2, className: "dt-trunc dt-definition" },
                    {
                        targets: 2,
                        responsivePriority: 3,
                        className: "dt-trunc dt-samples",
                        columnControl: [
                            "order",
                            ["searchList", "spacer", "orderAsc", "orderDesc", "orderClear"]
                        ]
                    },
                    {
                        targets: 3,
                        responsivePriority: 4,
                        className: "dt-trunc dt-sourcesys",
                        columnControl: [
                            "order",
                            ["searchList", "spacer", "orderAsc", "orderDesc", "orderClear"]
                        ]
                    },
                    { targets: 4, className: "none" },
                    { targets: 5, className: "none dt-origin-logic" }
                ]
            }
        };

        const profile = detectProfile(table);
        const opts = jQuery.extend(true, {}, base, profiles[profile] || {});

        try {
            jQuery(table).DataTable(opts);
            return true;
        } catch (e) {
            console.error("colref DataTables init failed:", e, table);
            markReady(table);
            return true;
        }
    }

    function initAll(attempt) {
        attempt = attempt || 1;

        let allDone = true;

        document.querySelectorAll(TABLE_SELECTOR).forEach(function (table) {
            const ok = initOne(table);

            if (!ok && !jQuery.fn.dataTable.isDataTable(table)) {
                allDone = false;
            }
        });

        if (!allDone && attempt < RETRY_LIMIT) {
            window.setTimeout(function () {
                initAll(attempt + 1);
            }, RETRY_DELAY_MS);
        }
    }

    function boot() {
        initAll(1);

        window.setTimeout(function () {
            document.querySelectorAll(TABLE_SELECTOR).forEach(function (table) {
                const dtOk =
                    window.jQuery &&
                    jQuery.fn &&
                    jQuery.fn.dataTable &&
                    jQuery.fn.dataTable.isDataTable(table);

                if (!dtOk) {
                    console.warn("DataTables did not initialize; showing raw table:", table);
                    markReady(table);
                }
            });
        }, FAILSAFE_MS);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot);
    } else {
        boot();
    }

    window.addEventListener("load", function () {
        if (!depsReady()) return;

        document.querySelectorAll(TABLE_SELECTOR).forEach(function (table) {
            if (jQuery.fn.dataTable.isDataTable(table)) {
                jQuery(table).DataTable().columns.adjust().responsive.recalc();
            }
        });
    });
})();