# Configuration file.
# For a full list of Sphinx built-in config. values, see https://www.sphinx-doc.org/en/master/usage/configuration.html
# For a full list of keys allowed in PyData, see https://pydata-sphinx-theme.readthedocs.io/en/stable/user_guide/layout.html#remove-the-primary-sidebar-from-pages


# ==================================================
# -- Project metadata ------------------------------
# ==================================================

project = 'Portfolio'
copyright = '2026, Peter Komaromy'
author = 'Peter Komaromy'
release = '0.1'

# ===========================================================
# -- General config and custom assets -----------------------
# ===========================================================

templates_path = ["_templates"]
exclude_patterns = [                    # means: do not treat these as source folders    
   '_stash/**',
   '_snippets/**',
]

html_theme = 'pydata_sphinx_theme'
html_static_path = ['_static']
html_theme_options = {
    "navigation_with_keys": True,           # allow navigation with 'arrows' on keyboard
    "navbar_start": ["navbar-logo"],        # on the very left of the top bar
    "navbar_center": ["navbar-nav"],
    "navbar_persistent": ["search-field"],  # on the right of the top bar
    "search_bar_text": "Search...",
    "navbar_align": "content",              # section links on top are centrally aligned
    "show_toc_level": 3,
    "pygments_light_style": "default",
    "logo": {
        "text": "Péter Komáromy",
        "alt_text": "Péter Komáromy - Home",
    },
}
html_logo = "_static/png/Logos_&_Icons/logo.png"
html_favicon = "_static/png/Logos_&_Icons/sphinx-favicon.png"
html_title = "Portfolio"
today_fmt = "%Y-%m-%d"              # timestamp allowed and yyyy-mm-dd format specified
# html_show_sourcelink = True       # Sphinx’s built‑in page-source link
# html_copy_source = True           # default, but kept explicit
html_sidebars = {                   # Landing page is full-width. Primary sidebar kept only for interior pages (theme defaults).
    "index": [],
}

extensions = [
   "sphinx.ext.githubpages",
]


html_css_files = [
    "css/custom.css",                   # general site-wide custom rules (both global and classes)
    "css/landing-page.css",             # custom rules scoped to landing page
    "css/fieldref-ellipsis.css",        # custom rules for truncating long text in sidebar (only used on DOA portal currently)
    "css/datatables_custom.css",        # custom rules for sphinx-datatables
    "css/mermaid-custom.css",
]

'''
html_js_files = [
    "js/fieldref-sidebar-tooltips.js",
    "js/bots-datatables-init.js",        # for interactive tables (sphinx-datatables) to work properly
    "js/colref-datatables-tooltips.js",  # popovers have now replaced tooltips for datatables but still, best not to drop this before thorough review
    "js/sidebar-wip-dim.js",             # class you can apply to pages in development to dim their sidebar links
    "js/mermaid-fullscreen-zoom.js",
]
'''


'''
# -- Options for HTML output -------------------------------------------------

html_theme_options = {
    "navigation_with_keys": True,           
    "navbar_start": ["navbar-logo"],        
    "navbar_center": ["navbar-nav"],    
    "navbar_persistent": ["search-field"],  
    "search_bar_text": "Search...",    
    "navbar_align": "content",              
    "show_toc_level": 3,
    "pygments_light_style": "default",    
}

'''

# ======================================================================
# -------- Custom roles ------------------------------------------------
# ======================================================================

from pathlib import Path
rst_prolog = (            # See custom role definitions in the _snippets folder
    Path(__file__).parent / "_snippets" / "rst_prolog.rst"
).read_text(encoding="utf-8")



# =========================================================================
# --- Extensions ----------------------------------------------------------
# =========================================================================

# import os
# import sys
# sys.path.insert(0, os.path.abspath("_ext")) # load custom extensions (poa_ext.py)
extensions = [
    "sphinx_design",
    "sphinx_copybutton",
    "sphinx_togglebutton",   
    "sphinx_datatables",
    "sphinxcontrib.jquery",                 # needed for sphinx-datatables    
    # "poa_ext",                            # custom extensions
]

# ===========================================================================
# --- Togglebutton & Datatables ---------------------------------------------
# ===========================================================================

'''

togglebutton_selector = ".toggle, .admonition.dropdown, .admonition.landing-toggle" # needed for these classes to work
datatables_version = "2.3.5"
datatables_js  = "js/datatables.min.js"
datatables_css = "css/datatables.min.css"
datatables_class = "datatable-disabled" # set to something non-existing which is never used
datatables_options = "{}"               # string here left empty because we init in bots_datatables_init.js

'''

# ============================================================================
# ---- Substitution definitions ----------------------------------------------
# ============================================================================

rst_epilog = open("_snippets/rst_epilog.rst", encoding="utf-8").read()


'''
# ============================================================================
# --- Disabled (jinja2 templating for landing page) --------------------------
# ============================================================================

html_sidebars = {                     # makes left sidebar show on landing page
    "index": [        
        "sidebar-nav-bs.html",
        "sidebar-ethical-ads.html",
        "sidebar-last-updated.html",  # added template for timestamp
        "source_min.html",            # adds only "Show source" link (without the default "This Page" text)
        "feedback.html",              # adds link to "Report an issue" form in offcanvas
    ]
}
'''
