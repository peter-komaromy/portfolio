..
   Portfolio landing page. Created on 2026-06-10.

   LANDING PAGE:
   - both primary and secondary sidebars removed
   - default title hidden, custom title added
   - wrappers and custom CSS classes applied
   - existing gdw-* class names preserved intentionally
   - mind that you cannot add comments anywhere within the main <div> directive as it breaks the directive

:html_theme.sidebar_secondary.remove: true

.. raw:: html

   <style>
      h1.gdw-hero-title, p.gdw-hero-subtitle { text-align: center; }
      .gdw-landing .sd-card.gdw-hero>.sd-card-body { text-align: center; }
      .gdw-landing .gdw-meta { text-align: center; justify-content: center !important;}
      .bd-main .bd-content .bd-article-container .bd-article { padding-left: 0 !important; padding-top: 1.5rem !important; }
      .sd-container-fluid.sd-sphinx-override.sd-mb-4.docutils { margin-bottom: 1.3rem !important; }
      .bd-main .bd-content .bd-article-container { max-width: 130em;}
      .bd-page-width { max-width: 100%; }
      html[data-theme="light"] { --card-title-color: #004080; } html[data-theme="dark"] {--card-title-color: #6195c9; }
      .sd-card-title { color: var(--card-title-color); }
   </style>
    

.. rst-class:: pst-primary-sidebar-narrow

.. only:: not html

   Péter Komáromy Portfolio
   ========================
   
.. ------------------------------------------------------------------------------------------

.. div:: gdw-landing

   .. div:: sd-card sd-shadow-sm gdw-hero sd-mb-2

      .. div:: sd-card-body sd-p-0

         .. div:: gdw-hero-inner

            .. raw:: html
                                 
               <h1 class="gdw-hero-title">PÉTER KOMÁROMY PORTFOLIO</h1>
               <p class="gdw-hero-subtitle">Technical Writer | Data Documentation | Sphinx UX Design</p>

            I design documentation for complex technical systems where readers need fast orientation, reliable structure, and enough detail to act.

            This portfolio presents selected case studies, writing samples, documentation design work, and docs-as-code implementation examples.

         .. grid:: 2
               :gutter: 4

               .. grid-item::
                  :columns: 3
         
               .. grid-item::
                  :columns: 2
         
                  .. button-link:: #
                     :color: secondary
                     :class: sd-mt-2

                     View case studies

               .. grid-item::
                  :columns: 2

                  .. button-link:: #
                     :color: secondary
                     :class: sd-mt-2

                     View writing samples

               .. grid-item::
                  :columns: 2

                  .. button-link:: #
                     :color: secondary
                     :class: sd-mt-2

                     Download CV

               .. grid-item::
                  :columns: 3

   .. grid:: 1 2 2 3
      :gutter: 2

      .. grid-item-card:: Documentation Design
         :shadow: sm
         :class-card: sd-rounded-2
         
         Navigation, entry points, reusable templates, and page structures.

         :dead-link:`Open documentation design`

      .. grid-item-card:: Data Documentation
         :shadow: sm
         :class-card: sd-rounded-2
         
         Lineage context, source logic, technical notes, and data dictionary patterns.

         :dead-link:`Open data documentation`

      .. grid-item-card:: Writing Samples
         :shadow: sm
         :class-card: sd-rounded-2
         
         Procedures, concepts, reference material, troubleshooting notes, and rewrite examples.

         :dead-link:`Open writing samples`

      .. grid-item-card:: Docs-as-Code
         :shadow: sm
         :class-card: sd-rounded-2
         
         Sphinx, GitHub Pages, version control, and static documentation publishing.

         :dead-link:`Open docs-as-code`
      

   .. div:: gdw-meta

      .. rst-class:: gdw-meta__item

      **Last updated:** |today|

      .. raw:: html

         <span class="gdw-meta__sep" aria-hidden="true">|</span>
         <a class="gdw-meta__link" href="_sources/index.rst.txt" target="_blank" rel="nofollow noopener">View source</a>

   .. div:: gdw-utility

      .. rst-class:: gdw-utility__label

      **Useful links:**

      .. raw:: html

         <a class="gdw-utility__link" href="#" target="_blank" rel="noopener">GitHub</a>
         <span class="gdw-utility__sep" aria-hidden="true">|</span>
         <a class="gdw-utility__link" href="#" target="_blank" rel="noopener">LinkedIn</a>
         <span class="gdw-utility__sep" aria-hidden="true">|</span>
         <a class="gdw-utility__link" href="#" target="_blank" rel="noopener">CV</a>
         <span class="gdw-utility__sep" aria-hidden="true">|</span>
         <a class="gdw-utility__link" href="#" target="_blank" rel="noopener">Contact</a>

.. -----------------------------------------------------------------------------------------
   .. toctree::
      :hidden:
      :includehidden:

      case-studies/index
      documentation-design/index
      data-documentation/index
      writing-samples/index
      docs-as-code/index
      about/index
      cv-contact/index


.. toctree::
   :hidden:
   :includehidden:

   1link/link
   2link/link
   3link/link
   4link/link
   5link/link


