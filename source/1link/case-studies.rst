..
   :html_theme.sidebar_secondary.remove: true

.. raw:: html

   <style>
      .bd-main .bd-content .bd-article-container { max-width: 100%; }
      .bd-page-width { max-width: 100%; }
      .case-study-card { height: 100%; }
      .case-study-card .sd-card-body { display: flex; flex-direction: column; }
      .case-study-card .sd-card-body > p:last-child { margin-top: auto; }
      .case-study-note { max-width: 52rem; margin-bottom: 1.5rem; }
      html[data-theme="light"] { --card-title-color: #004080; } html[data-theme="dark"] {--card-title-color: #6195c9; }
      .sd-card-title { color: var(--card-title-color); }
   </style>

.. rst-class:: case-study-note pst-primary-sidebar-narrow


Case Studies
============

Sanitized reconstructions with synthetic names, systems, and values.

.. grid:: 1 1 3 3
   :gutter: 2

   .. grid-item-card:: Portal UX
      :shadow: sm
      :class-card: sd-rounded-2 case-study-card

      Entry points, navigation, onboarding paths, and maintenance links.

      :doc:`Open case study <case-studies/portal-ux>`

   .. grid-item-card:: Data Dictionary
      :shadow: sm
      :class-card: sd-rounded-2 case-study-card

      Searchable field documentation with lineage, filters, and notes.

      :doc:`Open case study <case-studies/data-dictionary>`

   .. grid-item-card:: Process Docs
      :shadow: sm
      :class-card: sd-rounded-2 case-study-card

      Process logic, data-model context, and task-based procedures.

      :doc:`Open case study <case-studies/process-docs>`

.. toctree::
   :hidden:
   :maxdepth: 1

   case-studies/portal-ux
   case-studies/data-dictionary
   case-studies/process-docs