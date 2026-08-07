SAP Table Logic
===============

.. rubric:: *Sample 2*

After extraction, all tables are prepared so they have a ``PERNR`` / ``USRID`` / email. For a summary of the logic applied to each, see the flowcharts below.

For ``PA0000``, only current records are considered: records where the start date is before today and the end date is after today.
    
.. rst-class:: img-caption-top

*Preparing PA0000*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/SAP_AD_Expiry_Recon/FlowchartPA0000(New).png
        :alt: Preparing PA0000
        :width: 100%
        :align: center
        :class: tb-blue-rule-wide 

|br|

.. rst-class:: img-caption-top

*Preparing PA0105*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/SAP_AD_Expiry_Recon/FlowchartPA0105(New).png
        :alt: Preparing PA0105
        :width: 100%
        :align: center
        :class: tb-blue-rule-wide 

|br|

.. rst-class:: img-caption-top

*Preparing PA0016*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/SAP_AD_Expiry_Recon/FlowchartPA0016(New2).png
        :alt: Preparing PA0016
        :width: 100%
        :align: center
        :class: tb-blue-rule-wide 

|br|

.. rst-class:: img-caption-top

*Preparing Additional Tables*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/SAP_AD_Expiry_Recon/Flowchart_AdditionalTables(New).png
        :alt: Preparing Additional Tables
        :width: 100%
        :align: center
        :class: tb-blue-rule-wide

|br|

Before joining these tables, ``idError`` and ``idWarning`` flags are generated. An ``idError`` is raised if there is no matching record in ``PA0016``, while an ``idWarning`` is raised if there is no match in ``PA0105``.

For join conditions, see the diagram below.

.. rst-class:: img-caption-top

*Entity Relationships*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/SAP_AD_Expiry_Recon/Data_JoiningSAP(New).png
        :alt: Entity Relationships
        :width: 100%
        :align: center
        :class: tb-blue-rule-wide 

