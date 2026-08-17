..
   :html_theme.sidebar_secondary.remove: true

.. raw:: html

   <style>
      /* .bd-main .bd-content .bd-article-container { max-width: 100%; } */
      /* .bd-page-width { max-width: 100%; } */
      .case-study-card { height: 100%; }
      .case-study-card .sd-card-body { display: flex; flex-direction: column; }
      .case-study-card .sd-card-body > p:last-child { margin-top: auto; }
      .case-study-note { max-width: 52rem; margin-bottom: 1.5rem; }
      html[data-theme="light"] { --card-title-color: #004080; } html[data-theme="dark"] {--card-title-color: #6195c9; }
      .sd-card-title { color: var(--card-title-color); }
   </style>

.. rst-class:: case-study-note


Case Studies
============

Sanitized reconstructions with synthetic names, systems, and values.

.. grid:: 2
   :gutter: 2   

   .. grid-item-card:: Data Dictionary
      :shadow: sm
      :class-card: sd-rounded-2 case-study-card

      Searchable field documentation with lineage, filters, and notes.

      :doc:`Open case study <case-studies/data-dictionary>`

   .. grid-item-card:: Reverse-engineering an RPA
      :shadow: sm
      :class-card: sd-rounded-2 case-study-card

      Reconstruction of an unattended invoice-processing system

      :doc:`Open case study <case-studies/invoice-processing-case-study>`

   .. grid-item-card:: Connection Guide
      :shadow: sm
      :class-card: sd-rounded-2 case-study-card

      A versioned user guide organized by environment and data tool.

      :doc:`Open case study <case-studies/connection-guide>`
   
   .. grid-item-card:: Screen Reference
      :shadow: sm
      :class-card: sd-rounded-2 case-study-card

      Screen interactions, variables, and XPath expressions.

      :doc:`Open case study <case-studies/process-docs>`

.. toctree::
   :hidden:
   :maxdepth: 1
   
   case-studies/data-dictionary
   case-studies/invoice-processing-case-study
   case-studies/connection-guide
   case-studies/process-docs