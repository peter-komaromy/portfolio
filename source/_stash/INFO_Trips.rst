:html_theme.sidebar_secondary.remove: true

.. raw:: html

    <div id="colref-scope" hidden></div>
    <style>
        .bd-main .bd-content .bd-article-container { max-width: 100%; }
        .bd-page-width { max-width: 100%; }
        .table thead tr { background-color: #fff; border-bottom: 2px solid #000; }
        :root{ --colref-colname-max: 30rem; --colref-samples-max: 34rem; }
        p { margin-bottom: 4px; } 
    </style>

.. ================================================================================================================

.. rst-class:: pst-primary-sidebar-narrow

Mart_Trips
==========

**Column Reference**

|br|

Filter with header icons > Expand row toggles for hidden fields > Click truncated text or :fas:`circle-info;sd-text-info` for full details. \| For table introductions, see :doc:`User Guides <../../1_User_Guides/User_Guides>`. \| To contribute, use the |ColRef_Excel_Link_Mart_Trips|.

.. =================================================================================================================
.. --- Mart_Trips Col. Ref. ----------------------------------------------------------------------------------------
.. =================================================================================================================

.. list-table::
    :header-rows: 1
    :widths: auto
    :class: sphinx-datatable display hover nowrap dt-profile-colref7

    * - Column Name
      - Definition
      - Sample Value(s)
      - Source System(s)
      - Source Table
      - Remark
      - Technical Notes

    * - PTRV_HEAD.PERNR_Personnel Number
      - Personnel Number of the traveler to whom the trip record belongs in SAP.
      - ``00000123``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - task.number
      - Identifier of the trip's upstream workflow data in SG.
      - ``TRVL0018921``
      - Request Portal
      - ``SN.10-task``
      - N/A
      - SP updates the column by matching SAP's ``REINR`` to SN's travel case field; next, uses the travel case’s ``sys_id`` to fetch the corresponding SN task data; lastly, copies task number into the target.

    * - PTRV_HEAD.REINR_Trip Number
      - System-assigned number that uniquely identifies the traveler's trip document.
      - ``0000000031``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.HDVRS_Sequential Number of Travel Expenses Table THEADER
      - Sequential number that links the trip header to the corresponding record in the Travel Expenses header table (THEADER).
      - ``54``, ``66``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.ZLAND_Trip Country / Trip Country Group
      - Code that classifies the country or country group of the trip's destination.
      - ``001``, ``002``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.DATV1_Beginning Date of Trip Segment
      - Calendar date when the trip segment starts.
      - ``2025-01-03``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.MOLGA_Country Grouping
      - Code that classifies the HR country grouping used for the trip.
      - ``UN``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - Text description equivalent: ``Non-profit organisations``
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.MOREI_Trip Provision Variant
      - Code that classifies the trip provision variant
      - ``90``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - ``90`` = ``UN per diem``
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.SCHEM_Trip Schema
      - Code that indicates the trip schema applied to the document.
      - ``02``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - ``02`` = ``International``
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.KZREA_Trip Type: Statutory
      - Code that indicates the statutory (legal) trip type selected for the trip.
      - ``H``, ``N``, ``P``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.BEREI_Trip Type: Enterprise-Specific
      - Code that indicates the enterprise-specific trip type defined by CLIENT.
      - ``5``, ``9``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - ``5`` = ``1-60 days``, ``9`` = ``over 60 days``
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.KZTKT_Trip Activity Type
      - Code that classifies the type of activity performed on the trip.
      - ``A``, ``B``, ``C``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - Text equivalents include ``Family Visit``, ``Consultant Travel``, etc.
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.ZORT1_Location
      - Free-text name of the trip's primary location (the city or locality)
      - ``Istanbul``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.HRGIO_Region of Main Destination
      - Numeric identifier for the region of the trip's main destination.
      - ``001``, ``002``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.NDNST_Name of new administrative office (P.S.)
      - Text field for the name of the new administrative office (P.S.) relevant to the trip
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.KUNDE_Reason for Trip (for example, customer/requisitioner)
      - Free‑text describing the purpose of the trip and/or the requesting unit/person.
      - ``Field visit to ECD Center``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.UHRV1_Beginning Time of Trip Segment
      - Time of day when the trip segment starts.
      - ``01:25:00``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.DATB1_End Date of Trip Segment
      - Date when the trip segment ends.
      - ``2025-01-03``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.UHRB1_End Time of Trip Segment
      - Time of day when the trip segment ends.
      - ``01:25:00``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.DATH1_Border Crossing (Trip Out): Date
      - Date when the traveler crosses a border on the outbound leg of the trip.
      - ``2025-01-03``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.UHRH1_Time: Border crossing (trip out)
      - Time of day when the traveler crosses a border on the outbound leg of the trip.
      - ``01:25:00``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.DATR1_Border Crossing (Return Trip): Date
      - Date when the traveler crosses the border on the return leg of the trip.
      - ``2025-01-03``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.UHRR1_Time: Border crossing(return trip)
      - Time of day when the traveler crosses the border on the return leg of the trip.
      - ``01:25:00``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.AGRZ1_Trip Country / Trip Country Group
      - Code that classifies the country or country group relevant to the trip record.
      - ``066``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.GRGIO_Region of Border Crossing: Return Trip
      - Code that identifies the region where the return‑trip border crossing occured.
      - ``110``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.GRBER_Border crossing: Trip type enterprise-specific
      - CLIENT‑defined code for the enterprise‑specific trip type which applies when the border is crossed.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.UZKVG_Confirmation of Moving Costs Refund
      - Shows whether a moving‑costs refund has been confirmed for the traveler.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.ZUSAG_Admin. Office That Confirmed Moving Costs Compensation (PS)
      - Name of the administrative office that issued the confirmation for moving‑costs compensation.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.ENDRG_Different End of Travel Allowance (in Separation Allowance)
      - Shows whether the entitlement to separation/travel allowance ends on a date different from the trip’s end date.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.DEPAR_Departure from Residence or Place of Work
      - Shows whether the trip started from the traveler’s residence or place of work.
      - ``1``, ``X``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.ARRVL_Return Trip: Arrival at Place of Residence or Work
      - Shows whether the return leg of the trip ends at the traveler’s residence or place of work.
      - ``1``, ``X``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.RETRN_Arrival at Accommodations or New Workplace
      - Shows whether the traveler has reached the temporary accommodation or new workplace for the trip.
      - ``1``, ``X``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.DATES_Date of Last Change
      - Date when this trip header record was last changed in SAP.
      - ``2025-01-03``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.TIMES_Time of Last Change
      - Time of day when this trip header record was last changed in SAP.
      - ``01:25:00``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.UNAME_Name of person who changed object
      - SAP user ID of the person who last changed the trip header record.
      - ``JSMITH``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.REPID_Change Report
      - Technical identifier of the SAP application/report or transaction that performed the last change.
      - ``SAPMP56T/PR01``, ``SAPMP56T/PR05``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - ``PR01`` = travel request, ``PR05`` = travel expenses
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.DANTN_Trip Number of Corresponding Trip to Start Work
      - Cross‑reference: the Trip Number of the ``PTRV_HEAD`` record that documents the Start‑Work trip.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.FINTN_Trip Number of Associated Business Trip Return
      - Cross‑reference: the Trip Number of the ``PTRV_HEAD`` record that documents the Return trip.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.REQUEST_Indicator for objects request, plan and expense report
      - Shows whether a travel request exists for the trip.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.TRAVEL_PLAN_Indicator for objects request, plan and expense report
      - Shows whether a travel plan exists for the trip.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.EXPENSES_Indicator for objects request, plan and expense report
      - Shows whether an expense report exists for the trip.
      - ``X``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - ``X`` = yes
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.ST_TRGTG_Start of Taxation for Per Diem Separation Allowance
      - Date when taxation of the traveler’s per‑diem separation allowance begins for this trip.
      - ``2025-01-03``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.ST_TRGALL_Start of Taxation for Complete Separation Allowance
      - Date when taxation of the traveler’s full separation allowance begins for this trip.
      - ``2025-01-03``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.PERIODENART_Associated Trip Period Types
      - Shows whether the trip is handled as a normal trip or split into separation‑allowance periods.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.DAT_REDUC1_Reduction of Entire Separation or Travel Allowance Level 1
      - Date when the first reduction level for separation/travel allowance takes effect for the trip.
      - ``2025-01-03``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.DAT_REDUC2_Reduction of Separation or Travel Allowance Level 2
      - Date when the second reduction level for separation/travel allowance takes effect for the trip.
      - ``2025-01-03``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.DATV1_DIENST_Date of Commencement of Work
      - Date the traveler starts work at the duty location for the trip or assignment.
      - ``2025-01-03``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.UHRV1_DIENST_Time at Which Work Commences
      - Time of day when work begins for the trip or assignment.
      - ``01:25:00``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.DATB1_DIENST_Date on Which Work Ends
      - Date when the traveler’s work ends for the trip or assignment.
      - ``2025-01-03``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.UHRB1_DIENST_Time at Which Work Ends
      - Time of day when work ends for the trip or assignment.
      - ``01:25:00``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.ABORDNUNG_Associated Superior Separation Allowance
      - Identifier that links the trip to the parent separation‑allowance case (i.e., the superior secondment under which it falls).
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.ST_TRG_TYP_Temporary Assignment (Indicator)
      - Shows whether the trip is part of a temporary assignment/secondment for separation‑allowance and taxation handling.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.ST_WOHN_TYP_Home for Separation Allowance Taxation
      - Identifies which home location is used as taxation baseline for separation‑allowance calculations on the trip.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.KEIN_REISEGELD_No Separation Allowance for Travel Is Paid (Indicator)
      - Shows whether no separation allowance is paid for this trip.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.TAX_PER_DIEM_Automatic Taxation of Meals and Accommodations Per Diems
      - Shows whether the system automatically taxes meal and lodging per‑diem entitlements for the trip.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.TAX_PD_MAN_Manually Triggered Taxation of Meals Per Diems
      - Shows whether taxation of meal per‑diem entitlements was triggered manually for the trip.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.TAX_OV_MAN_Manually Triggered Taxation of Accommodations Per Diems
      - Shows whether taxation of accommodation per‑diem entitlements was triggered manually for the trip.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.EXCHANGE_DATE_Reference Date of Trip
      - Reference date that determines currency exchange rates for the trip.
      - ``2025-01-03``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.ROUNDING_Travel Amounts Are Rounded (Indicator)
      - Shows whether travel amounts are rounded according to system rules.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.DZ_LIMIT_180_Limitation of DA Fee to 180 Days
      - Shows whether the daily allowance (DA) is limited to 180 days for the trip.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.CALID_Factory Calendar
      - Code that identifies the factory calendar used to interpret working and non‑working days for the trip.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.DURATION_TRIP_BREAKS_Details on Duration of Private Trip Breaks (PS)
      - Duration of any private breaks within the trip.
      - ``NULL``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.AGRZ1_Trip Country / Trip Country Group:T706O.TEXT25_Name of Trip Country/Country Group/Region
      - Name of the country, country group, or region recorded for the trip.
      - ``Cairo``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.BEREI_Trip Type: Enterprise-Specific:T706X.TEXT25_Name for enterprise-specific trip type
      - Name of the enterprise‑specific trip type applied.
      - ``1-60 DAYS``, ``OVER 60 DAYS``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.GRBER_Border crossing: Trip type enterprise-specific:T706X.TEXT25_Name for enterprise-specific trip type
      - Name of the enterprise‑specific trip type applied when the traveller crosses the border.
      - ``1-60 DAYS``, ``OVER 60 DAYS``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.GRGIO_Region of Border Crossing: Return Trip:T706O.TEXT25_Name of Trip Country/Country Group/Region
      - Name of the region where the return‑trip border crossing occurs.
      - ``Cairo``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.KZREA_Trip Type: Statutory:T706G.RETXT_Name for Statutory Trip Type
      - Name of the statutory (legal) trip type which applies to the trip.
      - ``1-60 DAYS``, ``OVER 60 DAYS``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.KZTKT_Trip Activity Type:T706R.TKTXT_Name for trip activity type
      - Name of the activity type which applies to the trip.
      - ``Family Visit``, ``Consultant Travel IP``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.MOREI_Trip Provision Variant:T706N.TEXT25_Name for trip provision variant
      - Name of the trip provision variant which applies to the trip.
      - ``UN per diem``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.SCHEM_Trip Schema:T706T.STEXT_Name for trip schema
      - Name of the trip schema which applies to the trip.
      - ``International``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.ZLAND_Trip Country / Trip Country Group:T706O.TEXT25_Name of Trip Country/Country Group/Region
      - Name of the destination country, country group, or region that applies to the trip.
      - ``Cairo``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.MOLGA_Country Grouping:T500T.LTEXT_Name of HR Country Grouping
      - Name of the HR country grouping used for the trip.
      - ``Non-Profit Organizations``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.Extract_Timestamp
      - Date and time when the trip header record was extracted from SAP into Mart_Trips.
      - ``2025-01-03 00:09:40.000``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - N/A
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PTRV_HEAD.tabkey
      - Key that uniquely identifies the trip header record in the source system .
      - ``30000000533000032506099``
      - SAP
      - PTRV_HEAD (General Trip Data)
      - For technical purposes
      - Inserted unchanged from ``SAP.[10-PTRV_HEAD]``

    * - PA0001.ENAME_Formatted Name of Employee or Applicant
      - The traveller's full name.
      - ``Jane Smith``
      - SAP
      - PA0001 HR Master Record (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0001.SNAME_Employee’s Name (Sortable by LAST NAME FIRST NAME)
      - The traveller's sortable full name (LAST NAME FIRST NAME)
      - ``SMITH JANE``
      - SAP
      - PA0001 HR Master Record (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0002.MIDNM_Middle Name
      - The traveller's middle name.
      - ``ANNE``
      - SAP
      - PA0002 HR Master Record (Personal Data)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0002.NACHN_Last Name
      - The traveller's last name.
      - ``SMITH``
      - SAP
      - PA0002 HR Master Record (Personal Data)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person```

    * - PA0002.NATIO_Nationality
      - Code for the traveller's nationality.
      - ``134``
      - SAP
      - PA0002 HR Master Record (Personal Data)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0002.VORNA_First Name
      - The traveller's first name
      - ``JANE``
      - SAP
      - PA0002 HR Master Record (Personal Data)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0105-0010.USRID_LONG_Communication: Long Identification/Number
      - The traveller's CLIENT email address
      - ``jsmith@example.org``
      - SAP
      - PA0105-0010 HR Master Record (Communications)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0000.STAT2_Employment Status
      - Shows whether the traveller has active's employment status 
      - ``3``, ``0``
      - SAP
      - PA0000 HR Master Record (Actions)
      - ``3`` = active, ``0`` = not active
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0016.CTTYP_Contract Type:T547S.CTTXT_Text for contract type (Contract Elements infotype)
      - Name of the traveller's contract type.
      - ``Fixed-term``, ``Permanent``
      - SAP
      - PA0016 HR Master Record (Contract Elements)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0008.TRFGR_Pay Scale Group
      - Code for the traveller's post level.
      - ``P-2``, ``G-5``
      - SAP
      - PA0008 HR Master Record (Basic Pay)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0001.PERSG_Employee Group
      - Code for the traveller's employee group.
      - ``1``, ``3``, ``C``, ``D`` 
      - SAP
      - PA0001 HR Master Record (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0001.PERSG_Employee Group:T501T.PTEXT_Name of Employee Group
      - Nem of the traveller's employee group
      - ``Intl. professionals``, ``Local Staff``
      - SAP
      - PA0001 HR Master Record (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0001.PERSK_Employee Subgroup
      - Code for the traveller's employee subgroup.
      - ``AM``, ``GN``, ``NO``
      - SAP
      - PA0001 HR Master Record (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0001.PERSK_Employee Subgroup:T503T.PTEXT_Name of Employee Subgroup
      - Nem of the traveller's employee subgroup
      - ``Field Service``, ``Internship``
      - SAP
      - PA0001 HR Master Record (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0001.PLANS_Position
      - Code for the traveller's post.
      - ``00000179``
      - SAP
      - PA0001 HR Master Record (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0001.PLANS_Position:HRP1000.STEXT_Object Name
      - Name of the traveller's post title.
      - ``Accounting Officer``
      - SAP
      - PA0001 HR Master Record (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0001.WERKS_Personnel Area
      - Code for the traveller's personnel area.
      - ``006``
      - SAP
      - PA0001 HR Master Record (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0001.WERKS_Personnel Area:T500P.NAME1_Personnel Area Text
      - Nem of the traveller's personnel area
      - ``Hungary``, ``Egypt``
      - SAP
      - PA0001 HR Master Record (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0001.BTRTL_Personnel Subarea
      - Code for the traveller's personnel subarea.
      - ``054D``
      - SAP
      - PA0001 HR Master Record (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0001.BTRTL_Personnel Subarea:T001P.BTEXT_Personnel Subarea Text
      - Name of the traveller's personnel subarea
      - ``Budapest``, ``Cairo``
      - SAP
      - PA0001 HR Master Record (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0001.ORGEH_Organizational Unit
      - Code for the traveller's organizational unit.
      - ``00000303``
      - SAP
      - PA0001 HR Master Record (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0001.ORGEH_Organizational Unit:T527X.ORGTX_Short Text of Organizational Unit
      - Name of the traveller's organizational unit
      - ``Finance Unit, Demo``, ``Operations Section, Cairo``
      - SAP
      - PA0001 HR Master Record (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0001.GSBER_Service Area PA0001.GSBER_Service Area:TGSBT.GTEXT_Service Area description
      - Code for the traveller's Service Area.
      - ``1950``, ``4500``
      - SAP
      - PA0001 HR Master Record (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0001.GSBER_Service Area:TGSBT.GTEXT_Service Area description
      - Name of the traveller's Service Area.
      - ``Demo``, ``Egypt``
      - SAP
      - PA0001 HR Master Record (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - PA0077.FUNC_TITLE_Comment
      - Free-text comment to describe the traveller's function or title.
      - ``Annual Results Report Writer``
      - SAP
      - PA0077 HR Master Record (Additional Personal Data)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - LFA1.LIFNR_Account Number of Vendor or Creditor
      - Vendor account number in the traveller's SAP vendor master record.
      - ``1900004747``
      - SAP
      - LFA1 Vendor Master (General)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - LFA1.NAME1_Name 1
      - Vendor name in the traveller's SAP vendor master record.
      - ``Jane Smith``
      - SAP
      - LFA1 Vendor Master (General)
      - N/A
      - Inserted unchanged from ``Mart.Mart_Person``

    * - LFA1.KTOKK_Supplier Account Group
      - Code for the vendor's supplier account group.
      - ``ZCON``, ``LOCV``
      - SAP
      - LFA1 Vendor Master (General)
      - N/A
      - ?

    * - LFA1.KTOKK_Supplier account group:T077Y.TXT30_Account Group Name
      - Name of the vendor's supplier account group.
      - ``NULL``
      - SAP
      - LFA1 Vendor Master (General)
      - N/A
      - ?

    * - PTRV_SHDR.CURRENCY_Currency Key
      - Code that identifies the currency used for all amounts in the trip record
      - ``USD``
      - SAP
      - PTRV_SHDR (Trip Statistics - Trip Amounts)
      - N/A
      - 

    * - PTRV_SHDR.NUMBER_OF_IMAGES_Number of Attachments
      - Number of files attached to the trip record (e.g., scanned receipts)
      - ``1``, ``2``, ``3``
      - SAP
      - PTRV_SHDR (Trip Statistics - Trip Amounts)
      - N/A
      - 

    * - PTRV_SHDR.PD_FOOD_Reimbursement Amount (Total) for Meals per Diems
      - Total amount paid for daily meal allowances on the trip.
      - ``280``
      - SAP
      - PTRV_SHDR (Trip Statistics - Trip Amounts)
      - N/A
      - 

    * - PTRV_SHDR.PD_HOUSING_Reimbursement Amount (Total) for Accommodations per Diems
      - Total amount paid for daily lodging allowances on the trip.
      - ``280``
      - SAP
      - PTRV_SHDR (Trip Statistics - Trip Amounts)
      - N/A
      - 

    * - PTRV_SHDR.SUM_PAYOUT_Payment Amount
      - Total amount paid out for the trip.
      - ``2800.00``
      - SAP
      - PTRV_SHDR (Trip Statistics - Trip Amounts)
      - N/A
      - 

    * - PTRV_SHDR.SUM_REIMBU_Reimbursement Amount for a Trip
      - Total amount reimbursed to the traveler for the trip.
      - ``2800.00``
      - SAP
      - PTRV_SHDR (Trip Statistics - Trip Amounts)
      - N/A
      - 

    * - PTRV_SHDR.TRIP_TOTAL_Total Cost of Trip
      - Total cost of the trip, including all expense types.
      - ``2800.00``
      - SAP
      - PTRV_SHDR (Trip Statistics - Trip Amounts)
      - N/A
      - 

    * - PTRV_SHDR.TRIPDUR_Trip Duration in Days
      - Length of the trip in days, from departure to return.
      - ``1``, ``2``, ``3``
      - SAP
      - PTRV_SHDR (Trip Statistics - Trip Amounts)
      - N/A
      - 

    * - PTRV_SHDR.TXF_FOOD_Total of Tax-Exempt Paid Meals per Diems
      - Total amount paid for daily meal allowances on the trip that are not taxable.
      - ``280.00``
      - SAP
      - PTRV_SHDR (Trip Statistics - Trip Amounts)
      - N/A
      - 

    * - PTRV_SHDR.Extract_Timestamp
      - Date and time when the trip record was extracted from SAP.
      - ``2025-01-03 00:09:40.000``
      - SAP
      - PTRV_SHDR (Trip Statistics - Trip Amounts)
      - N/A
      - 

    * - TR-Agent: Count
      - Number of travel angencies used during the trip
      - ``1``, ``2``, ``3``, ``4``, ``5``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Count`

    * - TR-Agent: (First)
      - Transaction code for the first travel agency used on the trip
      - ``ZV28``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_First`

    * - TR-Agent: (Second)
      - Transaction code for the second travel agency used on the trip
      - ``ZV28``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Second`

    * - TR-Agent: (Third)
      - Transaction code for the third travel agency used on the trip
      - ``ZV28``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Third`

    * - TR-Agent: (Fourth)
      - Transaction code for the fourth travel agency used on the trip
      - ``ZV28``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Fourth`

    * - TR-Agent: (Fifth)
      - Transaction code for the fifth travel agency used on the trip
      - ``ZV28``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Fifth`

    * - TR-Agent: (First) USD
      - Service-fee charged by the first travel agency used on the trip
      - ``498.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_First_USD`

    * - TR-Agent: (Second) USD
      - Service-fee charged by the second travel agency used on the trip
      - ``498.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Second_USD`

    * - TR-Agent: (Third) USD
      - Service-fee charged by the third travel agency used on the trip
      - ``498.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Third_USD`

    * - TR-Agent: (Fourth) USD
      - Service-fee charged by the fourth travel agency used on the trip
      - ``498.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Fourth_USD`

    * - TR-Agent: (Fifth) USD
      - Service-fee charged by the fifth travel agency used on the trip
      - ``498.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Fifth_USD`

    * - TR-Agent: (First) Name
      - Name of the first travel agency used on the trip
      - ``TR-Agent:TVTR04 Adors Turistik``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_First_Name`

    * - TR-Agent: (Second) Name
      - Name of the second travel agency used on the trip
      - ``TR-Agent:TVTR04 Adors Turistik``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Second_Name`

    * - TR-Agent: (Third) Name
      - Name of the third travel agency used on the trip
      - ``TR-Agent:TVTR04 Adors Turistik``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Third_Name`

    * - TR-Agent: (Fourth) Name
      - Name of the fourth travel agency used on the trip
      - ``TR-Agent:TVTR04 Adors Turistik``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Fourth_Name`

    * - TR-Agent: (Fifth) Name
      - Name of the fifth travel agency used on the trip
      - ``TR-Agent:TVTR04 Adors Turistik``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Fifth_Name`

    * - PTRV_SREC.EXP_TYPE > TR-Agent
      - Total amount of travel agent service‑fee expenses.
      - ``2800.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent`

    * - PTRV_SREC.EXP_TYPE > TERM - Terminal
      - Total amount of expenses at airport/train/bus terminals, e.g., porterage or terminal service fees.
      - ``2800.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_TERM`

    * - PTRV_SREC.EXP_TYPE > GR2% - 2% Carbon Offsetting
      - Total amount of the 2% levy to fund carbon offsetting (applied to eligible travel costs).
      - ``4.09``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - Related columns: Same levy is later split by staff category (``Entl IP`` = International Professional; ``Entl LS`` = Local Staff).
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_GR2%`

    * - PTRV_SREC.EXP_TYPE > ZMSC - Miscellaneous Trav. Expenses
      - Total amount of miscellaneous travel expenses.
      - ``280``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_ZMSC`

    * - PTRV_SREC.EXP_TYPE > AIRP - Airfare (Paid by CLIENT NYHO)
      - Total amount of airfare expenses paid by CLIENT New York HO.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_AIRP`

    * - PTRV_SREC.EXP_TYPE > ZENT - Staff Entitlement Expenses
      - Total amount of staff entitlement expenses (payments made directly to staff under organizational travel/HR entitlements, e.g., per‑diem‑type allowances).
      - ``2800.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_ZENT`

    * - PTRV_SREC.EXP_TYPE > AIR - Airfare (Paid by Person/Lump)
      - Total amount of airfare expenses paid by the traveler or via a lump sum.
      - ``2800.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_AIR`

    * - PTRV_SREC.EXP_TYPE > HOTL - Hotel
      - Total amount of hotel expenses for the trip.
      - ``2800.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_HOTL`

    * - PTRV_SREC.EXP_TYPE > GR2E - 2% Carbon Offset - Entl IP
      - Total amount of 2% carbon‑offsetting expenses for International Professional staff (Entl IP).
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_GR2E`

    * - PTRV_SREC.EXP_TYPE > AIRT - Airport Tax
      - Total amount of airport tax expenses.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_AIRT`

    * - PTRV_SREC.EXP_TYPE > AGNV - Airfare (Paid by CLIENT GVA)
      - Total amount of airfare expenses paid by CLIENT Geneva for the trip.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_AGNV`

    * - PTRV_SREC.EXP_TYPE > VIPA - VISA/Passport
      - Total amount of visa and passport expenses for the trip.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_VIPA`

    * - PTRV_SREC.EXP_TYPE > AUTO - Local Car Hire
      - Total amount of local car hire expenses for the trip.
      - ``2800.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_AUTO`

    * - PTRV_SREC.EXP_TYPE > MED - Medical Srvcs (Vaccine, Etc.)
      - Total amount of medical services expenses for the trip.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_MED`

    * - PTRV_SREC.EXP_TYPE > ZCAR - Personal Vehicle/Mileage
      - Total amount of personal‑vehicle mileage expenses for the trip.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_ZCAR`

    * - PTRV_SREC.EXP_TYPE > ACPH - Airfare (Paid by CLIENT CPH)
      - Total amount of airfare expenses paid by CLIENT Copenhagen.
      - ``2800.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_ACPH`

    * - PTRV_SREC.EXP_TYPE > EXBG - Excess Baggage
      - Total amount of excess baggage expenses for the trip.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_EXBG`

    * - PTRV_SREC.EXP_TYPE > TELE - Telecommunication
      - Total amount of telecommunication expenses for the trip.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_TELE`

    * - PTRV_SREC.EXP_TYPE > DNGR - Danger Pay
      - Total amount of the UN allowance for visiting hazardous duty stations.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_DNGR`
    
    * - PTRV_SREC.EXP_TYPE > GR1L - 1% Acces. Premise Entl LS
      - Total amount of 1% CLIENT-premise accessibility expenses for Local Staff (Entl LS).
      - ``28.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_GR1L`

    * - PTRV_SREC.EXP_TYPE > GR2L - 2% Carbon Offset - Entl LS
      - Total amount of 2% carbon‑offsetting expenses for Local Staff (Entl LS).
      - ``28.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_GR2L`

    * - PTRV_SREC.EXP_TYPE > OTRN - Other Transpo. (Train, Etc.)
      - Total amount of non‑air transportation expenses.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_OTRN`

    * - PTRV_SREC.EXP_TYPE > FCUV - Fuel Cost (CLIENT Vehicle)
      - Total amount of fuel expenses for CLIENT vehicles.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_FCUV`

    * - PTRV_SREC.EXP_TYPE > SEAL - Security Escort Allowance
      - Total amount of security escort allowance expenses.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_SEAL`

    * - PTRV_SREC.EXP_TYPE > AIRS - Airfare (Self-Ticketing)
      - Total amount of airfare expenses for self‑ticketed travel.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_AIRS`

    * - PTRV_SREC.EXP_TYPE > CPCK - Conference Package
      - Total amount of conference package expenses.
      - ``2800.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_CPCK`

    * - PTRV_SREC.EXP_TYPE > MOMS - Airfare Additional Tax (CPH)
      - Total amount of airfare additional‑tax expenses (CPH).
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_MOMS`

    * - PTRV_SREC.EXP_TYPE > CFEE - Conference Registration Fee
      - Total amount of conference registration fee expenses.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_CFEE`

    * - PTRV_SREC.EXP_TYPE > SEAT - Seat Selection
      - Total amount of seat selection expenses.
      - ``28.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_SEAT`

    * - PTRV_SREC.EXP_TYPE > CRHI - Conference Room Hire
      - Total amount of conference room hire expenses.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_CRHI`

    * - PTRV_SREC.EXP_TYPE > YCPH - CPH: SN Brussels Airlines
      - Total amount of Brussels Airlines (in Copenhagen) (SN) airfare expenses.
      - ``NULL``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_YCPH`

    * - PTRV_PERIO.ACCDT_Trip Settlement Date
      - Date when the costs of the trip were finalized for payment.
      - ``NULL``
      - SAP
      - PTRV_PERIO (Period Data of a Trip)
      - N/A
      - 

    * - PTRV_PERIO.ZTV_INITIATOR_User Name in User Master Record
      - SAP user ID of the person who created the trip record.
      - ``JSMITH``
      - SAP
      - PTRV_PERIO (Period Data of a Trip)
      - N/A
      - 

    * - PTRV_PERIO.ZTV_SELF_TICKET_Requesting Self-Ticket
      - Shows whether the traveler reserves their own tickets (rather than doing it via an agency).
      - ``NULL``
      - SAP
      - PTRV_PERIO (Period Data of a Trip)
      - N/A
      - 

    * - PTRV_PERIO.ZTV_TRIP_REASON_Trip Reason
      - Text field describing the main reason for the trip.
      - ``Mission International Travel``
      - SAP
      - PTRV_PERIO (Period Data of a Trip)
      - N/A
      - 

    * - PTRV_PERIO.ZTV_TRV_TYPE_TXT_Travel Type
      - Text field describing the type of the trip.
      - ``Duty Travel``
      - SAP
      - PTRV_PERIO (Period Data of a Trip)
      - N/A
      - 

    * - PTRV_PERIO.ZTV_TRV_SUBTYPE_TXT_Travel SubType
      - Text field giving more detail about the type of the trip.
      - ``International``
      - SAP
      - PTRV_PERIO (Period Data of a Trip)
      - N/A
      - 

    * - PTRV_PERIO.ZTV_STF_DEVISION_Short Text of Organizational Unit
      - Short name of the traveler’s organizational unit.
      - ``Senegal``
      - SAP
      - PTRV_PERIO (Period Data of a Trip)
      - N/A
      - 

    * - PTRV_PERIO.ZTV_ET_TYPE_TRV_ET Travel Type
      - Text field describing the type of entitlement travel.
      - ``Home Leave``
      - SAP
      - PTRV_PERIO (Period Data of a Trip)
      - N/A
      - 

    * - PTRV_PERIO.ZTV_ET_LAST_FROM_ET Last Taken From
      - Start date of the traveler’s most recent entitlement trip.
      - ``2025-01-03``
      - SAP
      - PTRV_PERIO (Period Data of a Trip)
      - N/A
      - 

    * - PTRV_PERIO.ZTV_ET_LAST_TO_ET Last Taken To
      - End date of the traveler’s most recent entitlement trip.
      - ``2025-01-03``
      - SAP
      - PTRV_PERIO (Period Data of a Trip)
      - N/A
      - 

    * - PTRV_PERIO.ZZTV_PERS_DAY_INVL_Personal Days Involved flag
      - Shows whether the trip includes any personal (non‑work) days.
      - ``NULL``
      - SAP
      - PTRV_PERIO (Period Data of a Trip)
      - N/A
      - 

    * - PTRV_PERIO.ABKR1_Payroll Area
      - Payroll area code for the traveler.
      - ``1K``, ``1C``, ``NG``, ``07``
      - SAP
      - PTRV_PERIO (Period Data of a Trip)
      - N/A
      - 

    * - PTRV_PERIO.ABKR2_Payroll Area
      - Second payroll area code for the traveler.
      - ``1K``, ``1C``, ``NG``, ``07``
      - SAP
      - PTRV_PERIO (Period Data of a Trip)
      - N/A
      - 

    * - PTRV_PERIO.ANUEP_Number of Overnight Stays for Per-Diem Settlement
      - Number of nights used to calculate the daily travel allowances for this trip.
      - ``1``, ``2``, ``3``
      - SAP
      - PTRV_PERIO (Period Data of a Trip)
      - N/A
      - 

    * - PTRV_PERIO.ZTV_AMT_PER_ADULT_Amount Per Adult
      - Amount paid per adult for the trip.
      - ``2800.00``
      - SAP
      - PTRV_PERIO (Period Data of a Trip)
      - N/A
      - 

    * - PTRV_PERIO.ZTV_AMT_PER_CHLD_Amount Per Child
      - Amount paid per child for the trip.
      - ``2800.00``
      - SAP
      - PTRV_PERIO (Period Data of a Trip)
      - N/A
      - 

    * - PTRV_PERIO.ZTV_AMT_LUMSUM_Amount Total Lumsum
      - Total amount paid via a lump sum.
      - ``2800.00``
      - SAP
      - PTRV_PERIO (Period Data of a Trip)
      - N/A
      - 

    * - PTRV_PERIO.ZTV_SELF_TICK_AMNT_Self Ticketing Amount
      - Amount reimbursed to the traveler for tickets they bought themselves.
      - ``NULL``
      - SAP
      - PTRV_PERIO (Period Data of a Trip)
      - N/A
      - 

.. ================================================================================================================================
.. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.. -------- OFFCANVAS DETAILS -----------------------------------------------------------------------------------------------------
.. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.. ================================================================================================================================

.. =====================================================================================================

.. colref-detail:: trips_TR-Agent_Count
    :title: TR-Agent: Count

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[EXP_TYPE_Travel Expense Type]``
    - :fa:`tag` *Setting Type:* Derived - Calculation
    - :fa:`cogs` *How:* Counts the number of distinct TR-Agent expense-type codes recorded on the trip.
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` is ``Z___`` and ends in two digits.

    .. code-block:: tsql        

        UPDATE t
        SET [TR-Agent: Count] =
        (
            SELECT COUNT(DISTINCT s.[EXP_TYPE_Travel Expense Type])
            FROM SAP_raw.PTRV_SREC AS s
            WHERE s.[REINR_Trip Number] = t.[PTRV_HEAD.REINR_Trip Number]
                AND s.[EXP_TYPE_Travel Expense Type] LIKE 'Z___'
                AND TRY_CAST(RIGHT(s.[EXP_TYPE_Travel Expense Type], 2) AS int) IS NOT NULL
        )
        FROM Mart.Mart_Trips AS t;

.. =====================================================================================================

.. colref-detail:: trips_TR-Agent_First
    :title: TR-Agent: (First)

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[EXP_TYPE_Travel Expense Type]``
    - :fa:`tag` *Setting Type:* Derived - Mapping
    - :fa:`cogs` *How:* Stores the 1st distinct TR-Agent ``EXP_TYPE`` code for the trip (ordered by the code value).
    - :fa:`filter` *Filter:* Distinct ``EXP_TYPE`` values on the trip where the code is ``Z___`` and ends in two digits.   
    
    .. code-block:: tsql
        
        UPDATE t
        SET t.[TR-Agent: (First)] = b.[EXP_TYPE_Travel Expense Type],
            t.[TR-Agent: (First) Name] = b.[SPTXT_Name of Travel Expense Type]
        FROM Mart.Mart_Trips t
        JOIN [temp].SREC_TR_Agent b
            ON t.[PTRV_HEAD.REINR_Trip Number] = b.[REINR_Trip Number]
            AND b.RowNum = 1;

.. =====================================================================================================

.. colref-detail:: trips_TR-Agent_Second
    :title: TR-Agent: (Second)

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[EXP_TYPE_Travel Expense Type]``
    - :fa:`tag` *Setting Type:* Derived - Mapping
    - :fa:`cogs` *How:* Stores the 2nd distinct TR-Agent ``EXP_TYPE`` code for the trip (ordered by the code value).
    - :fa:`filter` *Filter:* Distinct ``EXP_TYPE`` values on the trip where the code is ``Z___`` and ends in two digits.
    
    .. code-block:: tsql
             
        UPDATE t
        SET t.[TR-Agent: (Second)] = b.[EXP_TYPE_Travel Expense Type],
            t.[TR-Agent: (Second) Name] = b.[SPTXT_Name of Travel Expense Type]
        FROM Mart.Mart_Trips t
        JOIN [temp].SREC_TR_Agent b
            ON t.[PTRV_HEAD.REINR_Trip Number] = b.[REINR_Trip Number]
            AND b.RowNum = 2;

.. =====================================================================================================

.. colref-detail:: trips_TR-Agent_Third
    :title: TR-Agent: (Third)

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[EXP_TYPE_Travel Expense Type]``
    - :fa:`tag` *Setting Type:* Derived - Mapping
    - :fa:`cogs` *How:* Stores the 3rd distinct TR-Agent ``EXP_TYPE`` code for the trip (ordered by the code value).
    - :fa:`filter` *Filter:* Distinct ``EXP_TYPE`` values on the trip where the code is ``Z___`` and ends in two digits.  
    
    .. code-block:: tsql
        
        UPDATE t
        SET t.[TR-Agent: (Third)] = b.[EXP_TYPE_Travel Expense Type],
            t.[TR-Agent: (Third) Name] = b.[SPTXT_Name of Travel Expense Type]
        FROM Mart.Mart_Trips t
        JOIN [temp].SREC_TR_Agent b
            ON t.[PTRV_HEAD.REINR_Trip Number] = b.[REINR_Trip Number]
            AND b.RowNum = 3;

.. =====================================================================================================

.. colref-detail:: trips_TR-Agent_Fourth
    :title: TR-Agent: (Forth)

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[EXP_TYPE_Travel Expense Type]``
    - :fa:`tag` *Setting Type:* Derived - Mapping
    - :fa:`cogs` *How:* Stores the 4th distinct TR-Agent ``EXP_TYPE`` code for the trip (ordered by the code value).
    - :fa:`filter` *Filter:* Distinct ``EXP_TYPE`` values on the trip where the code is ``Z___`` and ends in two digits.

    .. code-block:: tsql        
        
        UPDATE t
        SET t.[TR-Agent: (Forth)] = b.[EXP_TYPE_Travel Expense Type],
            t.[TR-Agent: (Forth) Name] = b.[SPTXT_Name of Travel Expense Type]
        FROM Mart.Mart_Trips t
        JOIN [temp].SREC_TR_Agent b
            ON t.[PTRV_HEAD.REINR_Trip Number] = b.[REINR_Trip Number]
            AND b.RowNum = 4;

        -- Note that Fourth is spelt "Forth" in the SP.

.. =====================================================================================================

.. colref-detail:: trips_TR-Agent_Fifth
    :title: TR-Agent: (Fifth)

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[EXP_TYPE_Travel Expense Type]``
    - :fa:`tag` *Setting Type:* Derived - Mapping
    - :fa:`cogs` *How:* Stores the 5th distinct TR-Agent ``EXP_TYPE`` code for the trip (ordered by the code value).
    - :fa:`filter` *Filter:* Distinct ``EXP_TYPE`` values on the trip where the code is ``Z___`` and ends in two digits.

    .. code-block:: tsql
        
        UPDATE t
        SET t.[TR-Agent: (Fifth)] = b.[EXP_TYPE_Travel Expense Type],
            t.[TR-Agent: (Fifth) Name] = b.[SPTXT_Name of Travel Expense Type]
        FROM Mart.Mart_Trips t
        JOIN [temp].SREC_TR_Agent b
            ON t.[PTRV_HEAD.REINR_Trip Number] = b.[REINR_Trip Number]
            AND b.RowNum = 5;

.. =====================================================================================================

.. colref-detail:: trips_TR-Agent_First_USD
    :title: TR-Agent: (First) USD

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]`` + ``REF.REF_Exchange_Rates.[RatePer1From_Practical rate per 1 unit of from currency]``
    - :fa:`tag` *Setting Type:* Derived - Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where ``EXP_TYPE`` equals the TR-Agent code in the 1st slot and converts the total to USD (rounded to 2 decimals).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the 1st TR-Agent slot’s code.

    .. code-block:: tsql

        UPDATE t
        SET [TR-Agent: (First) USD] =
        (
            SELECT ROUND(
                SUM(
                    CASE
                        WHEN b.[loc_curr_currency key] = 'USD'
                            THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                        ELSE b.[LOC_AMOUNT_Receipt amount in local currency]
                            * r.[RatePer1From_Practical rate per 1 unit of from currency]
                    END
                ),
                2
            )
            FROM SAP_raw.PTRV_SREC b
            JOIN [temp].SREC_TR_Agent s
                ON t.[PTRV_HEAD.REINR_Trip Number] = s.[REINR_Trip Number]
                AND s.RowNum = 1
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = t.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = s.[EXP_TYPE_Travel Expense Type]
        )
        FROM Mart.Mart_Trips t;

.. =====================================================================================================

.. colref-detail:: trips_TR-Agent_Second_USD
    :title: TR-Agent: (Second) USD

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]`` + ``REF.REF_Exchange_Rates.[RatePer1From_Practical rate per 1 unit of from currency]``
    - :fa:`tag` *Setting Type:* Derived - Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where ``EXP_TYPE`` equals the TR-Agent code in the 1st slot and converts the total to USD (rounded to 2 decimals).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the 2nd TR-Agent slot’s code.    
    
    .. code-block:: tsql

        UPDATE t
        SET [TR-Agent: (Second) USD] =
        (
            SELECT ROUND(
                SUM(
                    CASE
                        WHEN b.[loc_curr_currency key] = 'USD'
                            THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                        ELSE b.[LOC_AMOUNT_Receipt amount in local currency]
                            * r.[RatePer1From_Practical rate per 1 unit of from currency]
                    END
                ),
                2
            )
            FROM SAP_raw.PTRV_SREC b
            JOIN [temp].SREC_TR_Agent s
                ON t.[PTRV_HEAD.REINR_Trip Number] = s.[REINR_Trip Number]
                AND s.RowNum = 2
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = t.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = s.[EXP_TYPE_Travel Expense Type]
        )
        FROM Mart.Mart_Trips t;

.. =====================================================================================================

.. colref-detail:: trips_TR-Agent_Third_USD
    :title: TR-Agent: (Third) USD

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]`` + ``REF.REF_Exchange_Rates.[RatePer1From_Practical rate per 1 unit of from currency]``
    - :fa:`tag` *Setting Type:* Derived - Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where ``EXP_TYPE`` equals the TR-Agent code in the 1st slot and converts the total to USD (rounded to 2 decimals).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the 3rd TR-Agent slot’s code.

    .. code-block:: tsql

        UPDATE t
        SET [TR-Agent: (Third) USD] =
        (
            SELECT ROUND(
                SUM(
                    CASE
                        WHEN b.[loc_curr_currency key] = 'USD'
                            THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                        ELSE b.[LOC_AMOUNT_Receipt amount in local currency]
                            * r.[RatePer1From_Practical rate per 1 unit of from currency]
                    END
                ),
                2
            )
            FROM SAP_raw.PTRV_SREC b
            JOIN [temp].SREC_TR_Agent s
                ON t.[PTRV_HEAD.REINR_Trip Number] = s.[REINR_Trip Number]
                AND s.RowNum = 3
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = t.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = s.[EXP_TYPE_Travel Expense Type]
        )
        FROM Mart.Mart_Trips t;

.. =====================================================================================================

.. colref-detail:: trips_TR-Agent_Fourth_USD
    :title: TR-Agent: (Forth) USD

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]`` + ``REF.REF_Exchange_Rates.[RatePer1From_Practical rate per 1 unit of from currency]``
    - :fa:`tag` *Setting Type:* Derived - Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where ``EXP_TYPE`` equals the TR-Agent code in the 1st slot and converts the total to USD (rounded to 2 decimals).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the 4th TR-Agent slot’s code.

    .. code-block:: tsql
        
        UPDATE t
        SET [TR-Agent: (Forth) USD] =
        (
            SELECT ROUND(
                SUM(
                    CASE
                        WHEN b.[loc_curr_currency key] = 'USD'
                            THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                        ELSE b.[LOC_AMOUNT_Receipt amount in local currency]
                            * r.[RatePer1From_Practical rate per 1 unit of from currency]
                    END
                ),
                2
            )
            FROM SAP_raw.PTRV_SREC b
            JOIN [temp].SREC_TR_Agent s
                ON t.[PTRV_HEAD.REINR_Trip Number] = s.[REINR_Trip Number]
                AND s.RowNum = 4
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = t.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = s.[EXP_TYPE_Travel Expense Type]
        )
        FROM Mart.Mart_Trips t;

        -- Note that SP spells Fourth as 'Forth'

.. =====================================================================================================

.. colref-detail:: trips_TR-Agent_Fifth_USD
    :title: TR-Agent: (Fifth) USD

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]`` + ``REF.REF_Exchange_Rates.[RatePer1From_Practical rate per 1 unit of from currency]``
    - :fa:`tag` *Setting Type:* Derived - Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where ``EXP_TYPE`` equals the TR-Agent code in the 1st slot and converts the total to USD (rounded to 2 decimals).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the 5th TR-Agent slot’s code.

    .. code-block:: tsql

        UPDATE t
        SET [TR-Agent: (Fifth) USD] =
        (
            SELECT ROUND(
                SUM(
                    CASE
                        WHEN b.[loc_curr_currency key] = 'USD'
                            THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                        ELSE b.[LOC_AMOUNT_Receipt amount in local currency]
                            * r.[RatePer1From_Practical rate per 1 unit of from currency]
                    END
                ),
                2
            )
            FROM SAP_raw.PTRV_SREC b
            JOIN [temp].SREC_TR_Agent s
                ON t.[PTRV_HEAD.REINR_Trip Number] = s.[REINR_Trip Number]
                AND s.RowNum = 5
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = t.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = s.[EXP_TYPE_Travel Expense Type]
        )
        FROM Mart.Mart_Trips t;

.. =====================================================================================================

.. colref-detail:: trips_TR-Agent_First_Name
    :title: TR-Agent: (First) Name

    - :fa:`database` *Lineage:* ``SAP_raw.T706B5.[SPTXT_Name of Travel Expense Type]`` + ``SAP_raw.PTRV_SREC.[EXP_TYPE_Travel Expense Type]``
    - :fa:`tag` *Setting Type:* Derived - Mapping
    - :fa:`cogs` *How:* Stores the English description for the TR-Agent code in the 1st TR-Agent slot for the trip.
    - :fa:`filter` *Filter:* TR-Agent transaction codes only (``Z___ ending in two digits``) and English text rows (language key ``'E'``).

    .. code-block:: tsql

        -- Source is [temp].SREC_TR_Agent.[SPTXT_Name of Travel Expense Type]
        -- where [temp].SREC_TR_Agent is built from PTRV_SREC joined to T706B5 (SPRAS='E')
        -- and RowNum is assigned per trip by ORDER BY [EXP_TYPE_Travel Expense Type].

        UPDATE t
        SET t.[TR-Agent: (First)]      = b.[EXP_TYPE_Travel Expense Type],
            t.[TR-Agent: (First) Name] = b.[SPTXT_Name of Travel Expense Type]
        FROM Mart.Mart_Trips t
        JOIN [temp].SREC_TR_Agent b
            ON t.[PTRV_HEAD.REINR_Trip Number] = b.[REINR_Trip Number]
            AND b.RowNum = 1;

.. =====================================================================================================

.. colref-detail:: trips_TR-Agent_Second_Name
    :title: TR-Agent: (Second) Name

    - :fa:`database` *Lineage:* ``SAP_raw.T706B5.[SPTXT_Name of Travel Expense Type]`` + ``SAP_raw.PTRV_SREC.[EXP_TYPE_Travel Expense Type]``
    - :fa:`tag` *Setting Type:* Derived - Mapping
    - :fa:`cogs` *How:* Stores the English description for the TR-Agent code in the 2nd TR-Agent slot for the trip.
    - :fa:`filter` *Filter:* TR-Agent transaction codes only (``Z___ ending in two digits``) and English text rows (language key ``'E'``).

    .. code-block:: tsql

        -- Source is [temp].SREC_TR_Agent.[SPTXT_Name of Travel Expense Type]
        -- where [temp].SREC_TR_Agent is built from PTRV_SREC joined to T706B5 (SPRAS='E')
        -- and RowNum is assigned per trip by ORDER BY [EXP_TYPE_Travel Expense Type].
        
        UPDATE t
        SET t.[TR-Agent: (Second)]      = b.[EXP_TYPE_Travel Expense Type],
            t.[TR-Agent: (Second) Name] = b.[SPTXT_Name of Travel Expense Type]
        FROM Mart.Mart_Trips t
        JOIN [temp].SREC_TR_Agent b
            ON t.[PTRV_HEAD.REINR_Trip Number] = b.[REINR_Trip Number]
            AND b.RowNum = 2;

.. =====================================================================================================

.. colref-detail:: trips_TR-Agent_Third_Name
    :title: TR-Agent: (Third) Name

    - :fa:`database` *Lineage:* ``SAP_raw.T706B5.[SPTXT_Name of Travel Expense Type]`` + ``SAP_raw.PTRV_SREC.[EXP_TYPE_Travel Expense Type]``
    - :fa:`tag` *Setting Type:* Derived - Mapping
    - :fa:`cogs` *How:* Stores the English description for the TR-Agent code in the 3rd TR-Agent slot for the trip.
    - :fa:`filter` *Filter:* TR-Agent transaction codes only (``Z___ ending in two digits``) and English text rows (language key ``'E'``).

    .. code-block:: tsql

        -- Source is [temp].SREC_TR_Agent.[SPTXT_Name of Travel Expense Type]
        -- where [temp].SREC_TR_Agent is built from PTRV_SREC joined to T706B5 (SPRAS='E')
        -- and RowNum is assigned per trip by ORDER BY [EXP_TYPE_Travel Expense Type].
        
        UPDATE t
        SET t.[TR-Agent: (Third)]      = b.[EXP_TYPE_Travel Expense Type],
            t.[TR-Agent: (Third) Name] = b.[SPTXT_Name of Travel Expense Type]
        FROM Mart.Mart_Trips t
        JOIN [temp].SREC_TR_Agent b
            ON t.[PTRV_HEAD.REINR_Trip Number] = b.[REINR_Trip Number]
            AND b.RowNum = 3;

.. =====================================================================================================

.. colref-detail:: trips_TR-Agent_Fourth_Name
    :title: TR-Agent: (Fourth) Name

    - :fa:`database` *Lineage:* ``SAP_raw.T706B5.[SPTXT_Name of Travel Expense Type]`` + ``SAP_raw.PTRV_SREC.[EXP_TYPE_Travel Expense Type]``
    - :fa:`tag` *Setting Type:* Derived - Mapping
    - :fa:`cogs` *How:* Stores the English description for the TR-Agent code in the 4th TR-Agent slot for the trip.
    - :fa:`filter` *Filter:* TR-Agent transaction codes only (``Z___ ending in two digits``) and English text rows (language key ``'E'``).

    .. code-block:: tsql

        -- Source is [temp].SREC_TR_Agent.[SPTXT_Name of Travel Expense Type]
        -- where [temp].SREC_TR_Agent is built from PTRV_SREC joined to T706B5 (SPRAS='E')
        -- and RowNum is assigned per trip by ORDER BY [EXP_TYPE_Travel Expense Type].

        UPDATE t
        SET t.[TR-Agent: (Forth)]      = b.[EXP_TYPE_Travel Expense Type],
            t.[TR-Agent: (Forth) Name] = b.[SPTXT_Name of Travel Expense Type]
        FROM Mart.Mart_Trips t
        JOIN [temp].SREC_TR_Agent b
            ON t.[PTRV_HEAD.REINR_Trip Number] = b.[REINR_Trip Number]
            AND b.RowNum = 4;

        -- Note that Fourth is spelt "Forth" in the SP

.. =====================================================================================================

.. colref-detail:: trips_TR-Agent_Fifth_Name
    :title: TR-Agent: (Fifth) Name

    - :fa:`database` *Lineage:* ``SAP_raw.T706B5.[SPTXT_Name of Travel Expense Type]`` + ``SAP_raw.PTRV_SREC.[EXP_TYPE_Travel Expense Type]``
    - :fa:`tag` *Setting Type:* Derived - Mapping
    - :fa:`cogs` *How:* Stores the English description for the TR-Agent code in the 5th TR-Agent slot for the trip.
    - :fa:`filter` *Filter:* TR-Agent transaction codes only (``Z___ ending in two digits``) and English text rows (language key ``'E'``).

    .. code-block:: tsql

        -- Source is [temp].SREC_TR_Agent.[SPTXT_Name of Travel Expense Type]
        -- where [temp].SREC_TR_Agent is built from PTRV_SREC joined to T706B5 (SPRAS='E')
        -- and RowNum is assigned per trip by ORDER BY [EXP_TYPE_Travel Expense Type].
        
        UPDATE t
        SET t.[TR-Agent: (Fifth)]      = b.[EXP_TYPE_Travel Expense Type],
            t.[TR-Agent: (Fifth) Name] = b.[SPTXT_Name of Travel Expense Type]
        FROM Mart.Mart_Trips t
        JOIN [temp].SREC_TR_Agent b
            ON t.[PTRV_HEAD.REINR_Trip Number] = b.[REINR_Trip Number]
            AND b.RowNum = 5;

.. =====================================================================================================

.. colref-detail:: trips_TR-Agent
    :title: PTRV_SREC.EXP_TYPE > TR-Agent

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]`` + ``REF.REF_exchange_rates.[RatePer1From_Practical rate per 1 unit of from currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums all TR-Agent receipt lines for the trip, converting each line to USD and rounding to 2 decimals.
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` is ``Z___`` and ends in two digits.

    .. code-block:: tsql
        
        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- TR-Agent] = (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE b.[LOC_AMOUNT_Receipt amount in local currency]
                            * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_exchange_rates] r
                ON r.[fcurr_from currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[tcurr_to-currency] = 'USD'
                AND b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] LIKE 'Z___'
                AND TRY_CAST(RIGHT(b.[EXP_TYPE_Travel Expense Type], 2) AS int) IS NOT NULL
            WHERE 1 = 1
        );


.. =====================================================================================================

.. colref-detail:: trips_TERM
    :title: PTRV_SREC.EXP_TYPE > TERM - Terminal

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.
    
    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- TERM - Terminal] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'TERM'
        );


.. =====================================================================================================

.. colref-detail:: trips_GR2%
    :title: PTRV_SREC.EXP_TYPE > GR2% - 2% Carbon Offsetting

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.
    
    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- GR2% - 2% Carbon Offsetting] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'GR2%'
        );     

.. =====================================================================================================

.. colref-detail:: trips_ZMSC
    :title: PTRV_SREC.EXP_TYPE > ZMSC - Miscellaneous Trav. Expenses

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.
    
    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- ZMSC - Miscellaneous Trav. Expenses] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'ZMSC'
        ); 

.. =====================================================================================================

.. colref-detail:: trips_AIRP
    :title: PTRV_SREC.EXP_TYPE > AIRP - Airfare (Paid by CLIENT NYHO)

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.
    
    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code
    
    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- AIRP - Airfare (Paid by CLIENT NYHO)] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'AIRP'
        );     

.. =====================================================================================================

.. colref-detail:: trips_ZENT
    :title: PTRV_SREC.EXP_TYPE > ZENT - Staff Entitlement Expenses

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.
    
    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- ZENT - Staff Entitlement Expenses - Staff Entitlement Expenses] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'ZENT'
        );     

.. =====================================================================================================

.. colref-detail:: trips_AIR
    :title: PTRV_SREC.EXP_TYPE > AIR - Airfare (Paid by Person/Lump)

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- AIR - Airfare (Paid by Person/Lump)] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'AIR'
        );     

.. =====================================================================================================

.. colref-detail:: trips_HOTL
    :title: PTRV_SREC.EXP_TYPE > HOTL - Hotel

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- HOTL - Hotel] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'HOTL'
        );     

.. =====================================================================================================

.. colref-detail:: trips_GR2E
    :title: PTRV_SREC.EXP_TYPE > GR2E - 2% Carbon Offset - Entl IP

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- GR2E - 2% Carbon Offset - Entl IP] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'GR2E'
        );     

.. =====================================================================================================

.. colref-detail:: trips_GR1E
    :title: PTRV_SREC.EXP_TYPE > GR1E - 1% Acces. Premise Entl IP

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- GR1E - 1% Acces. Premise Entl IP] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'GR1E'
        );     

.. =====================================================================================================

.. colref-detail:: trips_AIRT
    :title: PTRV_SREC.EXP_TYPE > AIRT - Airport Tax

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- AIRT - Airport Tax] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'AIRT'
        );     

.. =====================================================================================================

.. colref-detail:: trips_AGNV
    :title: PTRV_SREC.EXP_TYPE > AGNV - Airfare (Paid by CLIENT GVA)

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- AGNV - Airfare (Paid by CLIENT GVA)] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'AGNV'
        );     

.. =====================================================================================================

.. colref-detail:: trips_VIPA
    :title: PTRV_SREC.EXP_TYPE > VIPA - VISA/Passport

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- VIPA - VISA/Passport] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'VIPA'
        );     

.. =====================================================================================================

.. colref-detail:: trips_AUTO
    :title: PTRV_SREC.EXP_TYPE > AUTO - Local Car Hire

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- AUTO - Local Car Hire] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'AUTO'
        );     

.. =====================================================================================================

.. colref-detail:: trips_MED
    :title: PTRV_SREC.EXP_TYPE > MED - Medical Srvcs (Vaccine, Etc.)

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- MED - Medical Srvcs (Vaccine, Etc.)] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'MED'
        );     

.. =====================================================================================================

.. colref-detail:: trips_ZCAR
    :title: PTRV_SREC.EXP_TYPE > ZCAR - Personal Vehicle/Mileage

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- ZCAR - Personal Vehicle/Mileage] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'ZCAR'
        );     

.. =====================================================================================================

.. colref-detail:: trips_ACPH
    :title: PTRV_SREC.EXP_TYPE > ACPH - Airfare (Paid by CLIENT CPH)

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- ACPH - Airfare (Paid by CLIENT CPH)] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'ACPH'
        );     

.. =====================================================================================================

.. colref-detail:: trips_EXBG
    :title: PTRV_SREC.EXP_TYPE > EXBG - Excess Baggage

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- EXBG - Excess Baggage] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'EXBG'
        );     

.. =====================================================================================================

.. colref-detail:: trips_TELE
    :title: PTRV_SREC.EXP_TYPE > TELE - Telecommunication

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- TELE - Telecommunication] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'TELE'
        );     

.. =====================================================================================================

.. colref-detail:: trips_DNGR
    :title: PTRV_SREC.EXP_TYPE > DNGR - Danger Pay

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- DNGR - Danger Pay] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'DNGR'
        );

.. =====================================================================================================

.. colref-detail:: trips_GR1L
    :title: PTRV_SREC.EXP_TYPE > GR1L - 1% Acces. Premise Entl LS

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- GR1L - 1% Acces. Premise Entl LS] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'GR1L'
        );     

.. =====================================================================================================

.. colref-detail:: trips_GR2L
    :title: PTRV_SREC.EXP_TYPE > GR2L - 2% Carbon Offset - Entl LS

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- GR2L - 2% Carbon Offset - Entl LS] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'GR2L'
        );     

.. =====================================================================================================

.. colref-detail:: trips_OTRN
    :title: PTRV_SREC.EXP_TYPE > OTRN - Other Transpo. (Train, Etc.)

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- OTRN - Other Transpo. (Train, Etc.)] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'OTRN'
        );     

.. =====================================================================================================

.. colref-detail:: trips_FCUV
    :title: PTRV_SREC.EXP_TYPE > FCUV - Fuel Cost (CLIENT Vehicle)

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- FCUV - Fuel Cost (CLIENT Vehicle)] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'FCUV'
        );     

.. =====================================================================================================

.. colref-detail:: trips_SEAL
    :title: PTRV_SREC.EXP_TYPE > SEAL - Security Escort Allowance

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- SEAL - Security Escort Allowance] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'SEAL'
        );     

.. =====================================================================================================

.. colref-detail:: trips_AIRS
    :title: PTRV_SREC.EXP_TYPE > AIRS - Airfare (Self-Ticketing)

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- AIRS - Airfare (Self-Ticketing)] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'AIRS'
        );     

.. =====================================================================================================

.. colref-detail:: trips_CPCK
    :title: PTRV_SREC.EXP_TYPE > CPCK - Conference Package

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- CPCK - Conference Package] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'CPCK'
        );     

.. =====================================================================================================

.. colref-detail:: trips_MOMS
    :title: PTRV_SREC.EXP_TYPE > MOMS - Airfare Additional Tax (CPH)

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- MOMS - Airfare Additional Tax (CPH)] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'MOMS'
        );     

.. =====================================================================================================

.. colref-detail:: trips_CFEE
    :title: PTRV_SREC.EXP_TYPE > CFEE - Conference Registration Fee

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- CFEE - Conference Registration Fee] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'CFEE'
        );     

.. =====================================================================================================

.. colref-detail:: trips_SEAT
    :title: PTRV_SREC.EXP_TYPE > SEAT - Seat Selection

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- SEAT - Seat Selection] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'SEAT'
        );     

.. =====================================================================================================

.. colref-detail:: trips_CRHI
    :title: PTRV_SREC.EXP_TYPE > CRHI - Conference Room Hire

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- CRHI - Conference Room Hire] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'CRHI'
        );     

.. =====================================================================================================

.. colref-detail:: trips_YCPH
    :title: PTRV_SREC.EXP_TYPE > YCPH - CPH: SN Brussels Airlines

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``Mart_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``Mart.p_Mart_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE Mart.Mart_Trips
        SET [PTRV_SREC.EXP_TYPE -- YCPH - CPH] =
        (
            SELECT
                ROUND(
                    SUM(
                        CASE
                            WHEN b.[loc_curr_currency key] = 'USD'
                                THEN b.[LOC_AMOUNT_Receipt amount in local currency]
                            ELSE
                                b.[LOC_AMOUNT_Receipt amount in local currency]
                                * r.[RatePer1From_Practical rate per 1 unit of from currency]
                        END
                    ),
                    2
                )
            FROM [SAP_raw.PTRV_SREC] b
            JOIN [REF].[REF_Exchange_Rates] r
                ON r.[FCURR_From currency] = b.[loc_curr_currency key]
                AND b.[rec_date_receipt date]
                    BETWEEN r.[ValidFrom_Date As of Which the Exchange Rate Is Effective] AND r.[ValidTo_Derived end of validity period]
                AND r.[KURST_Exchange rate type] = 'M'
                AND r.[TCURR_To-currency] = 'USD'
            WHERE b.[REINR_Trip Number] = Mart_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'YCPH'
        );     




