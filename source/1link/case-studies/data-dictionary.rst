:html_theme.sidebar_secondary.remove: true

.. raw:: html

    <div id="colref-scope" hidden></div>
    <style>
        .bd-main .bd-content .bd-article-container { max-width: 100%; }
        .bd-page-width { max-width: 100%; }
        .table thead tr { background-color: #fff; border-bottom: 2px solid #000; }
        :root{ --colref-colname-max: 30rem; --colref-samples-max: 34rem; }
        html[data-theme="light"] { --card-title-color: #004080; } html[data-theme="dark"] {--card-title-color: #6195c9; }
        .sd-card-title { color: var(--card-title-color); }
        .sd-card-body { padding: 1.5rem 2rem; }
        p { margin-bottom: 4px; }         
    </style>

.. ================================================================================================================

.. rst-class:: pst-primary-sidebar-narrow 

Data Dictionary
===============

|br|

.. grid:: 1 1 2 2
  :gutter: 4
  :class-container: case-study-intro-grid

  .. grid-item-card:: Design approach
    :columns: 6

    :blue-bold:`Purpose`
    - Help data warehouse users look up and understand columns.
    
    :blue-bold:`Audience split`
    - Business users needed quick answers. Operations users needed enough detail to verify data logic.

    :blue-bold:`UX constraint`  
    - Adding every technical field to the main table would make the dictionary harder to use.

    :blue-bold:`Solution`  
    - A layered design: lookup fields stay visible while technical details open through row toggles and info popovers.
    
  .. grid-item-card:: Skills shown
    :columns: 6
    :class-card: case-study-facts

    :blue-bold:`Research` - Checked warehouse tables and stored procedures in SSMS with T-SQL.
    
    :blue-bold:`Content design` - Turned technical findings into definitions, examples, source context, and remarks.
    
    :blue-bold:`Information architecture` - Kept business content visible and moved lineage, filters, and SQL logic into expandable details.
    
    :blue-bold:`AI review` - Used AI to identify lineage candidates, then checked the results manually.
    
    :blue-bold:`Implementation` - Built the sample with Sphinx, DataTables, Python extensions, CSS, and JavaScript.


.. =================================================================================================================
.. --- Sample 1 ---------------------------------------------------------------------------------------
.. =================================================================================================================

.. rubric:: *Sample 1*

.. list-table::
    :header-rows: 1
    :widths: auto
    :class: sphinx-datatable display hover nowrap dt-profile-colref8

    * - Data Mart
      - Column Name
      - Definition
      - Sample Values
      - Source System
      - Source Table
      - Remark
      - Technical Notes

    * - DM_Performance
      - Case Number
      - Unique identifier assigned to each case.
      - ``IC0068371``, ``556523-00543447-TMS02``
      - SG, TMS, SharePoint
      - N/A
      - Value format depends on source system.
      - View details: :colrefopen:`perf_Case_Number`

    * - DM_Performance
      - Service Area - Code
      - Numeric ID of the CLIENT Service Area for the case.
      - ``1950``, ``4500``
      - SG, TMS, SharePoint
      - N/A
      - N/A      
      - View details: :colrefopen:`perf_BA_Code`

    * - DM_Performance
      - Service Area - Name
      - Human-readable name of the Service Area for the case.
      - ``Demo``, ``Egypt``
      - SG, TMS, SharePoint
      - N/A
      - Although often a country name, B.A. includes regional offices, divisions, and HO.
      - View details: :colrefopen:`perf_BA_Name`

    * - DM_Performance
      - Service Area - Full
      - Concatenation of Service Area Name and Code for the case.
      - ``Demo-1950``, ``Egypt-4500``
      - SG, TMS, SharePoint
      - N/A
      - N/A      
      - View details: :colrefopen:`perf_BA_Full`

    * - DM_Performance
      - Region
      - The CLIENT region to which the Service Area belongs.
      - ``Reg1``, ``Reg2R``, ``HO``
      - SG, TMS, SharePoint
      - N/A
      - N/A
      - View details: :colrefopen:`perf_Region`

    * - DM_Performance
      - Status
      - Lifecycle stage of the case.
      - ``Open``, ``Closed Complete``
      - SG, TMS, SharePoint
      - N/A
      - N/A      
      - View details: :colrefopen:`perf_Status`

    * - DM_Performance
      - Parent Case Number
      - Identifier of the original case to which the current case is linked as a child.
      - ``FIC0902162``, ``556527``
      - SG, TMS, SharePoint
      - N/A
      - For tracing case relationships; empty for standalone cases.
      - View details: :colrefopen:`perf_Parent_Case_Number` 

    * - DM_Performance
      - Cancelled
      - Shows whether a case was cancelled before completion.
      - ``1``, ``0``
      - SG, TMS, SharePoint
      - N/A
      - ``1`` = Cancelled; ``0`` = Not cancelled. Column is no longer used because all cancelled cases are now excluded.
      - View details: :colrefopen:`perf_Cancelled`

    * - DM_Performance
      - Case Closed
      - Shows whether the case has been closed.
      - ``1``, ``0``
      - SG, TMS, SharePoint
      - N/A 
      - ``1`` = Closed; ``0`` = Not closed.
      - View details: :colrefopen:`perf_Case_Closed`  

    * - DM_Performance
      - Short Description
      - Summary of the case description.
      - ``DCT: DPR``, ``MFA Reset for Moussa Diop``
      - SG, TMS, SharePoint
      - N/A
      - Taken from SG, this is the "Subject" line of the case description.
      - View details: :colrefopen:`perf_Short_Desc`
    
    * - DM_Trips
      - TR-Agent: Count
      - Number of travel angencies used during the trip
      - ``1``, ``2``, ``3``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Count`

    * - DM_Trips
      - TR-Agent: (First)
      - Transaction code for the first travel agency used on the trip
      - ``ZV28``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_First`

    * - DM_Trips
      - TR-Agent: (Second)
      - Transaction code for the second travel agency used on the trip
      - ``ZV28``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Second`    

    * - DM_Trips
      - TR-Agent: (First) USD
      - Service-fee charged by the first travel agency used on the trip
      - ``500.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_First_USD`

    * - DM_Trips
      - TR-Agent: (Second) USD
      - Service-fee charged by the second travel agency used on the trip
      - ``500.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Second_USD`

    * - DM_Trips
      - TR-Agent: (First) Name
      - Name of the first travel agency used on the trip
      - ``TR-Agent:TVTR04 Delta Turistik``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_First_Name`

    * - DM_Trips
      - TR-Agent: (Second) Name
      - Name of the second travel agency used on the trip
      - ``TR-Agent:TVTR04 Delta Turistik``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Second_Name`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > TR-Agent
      - Total amount of travel agent service‑fee expenses.
      - ``2800.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > TERM - Terminal
      - Total amount of expenses at airport/train/bus terminals, e.g., porterage or terminal service fees.
      - ``2800.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_TERM`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > GR2% - 2% Carbon Offsetting
      - Total amount of the 2% levy to fund carbon offsetting.
      - ``4.09``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - Related columns: Same levy is later split by staff category (``Entl IP`` = International Professional; ``Entl LS`` = Local Staff).
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_GR2%`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > ZMSC - Miscellaneous Trav. Expenses
      - Total amount of miscellaneous travel expenses.
      - ``280``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_ZMSC`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > AIRP - Airfare (Paid by CLIENT NYHO)
      - Total amount of airfare expenses paid by CLIENT New York HO.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_AIRP`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > ZENT - Staff Entitlement Expenses
      - Total amount of staff entitlement expenses (payments made directly to staff under organizational travel/HR entitlements, e.g., per‑diem‑type allowances).
      - ``2800.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_ZENT`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > AIR - Airfare (Paid by Person/Lump)
      - Total amount of airfare expenses paid by the traveler or via a lump sum.
      - ``2800.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_AIR`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > HOTL - Hotel
      - Total amount of hotel expenses for the trip.
      - ``2800.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_HOTL`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > GR2E - 2% Carbon Offset - Entl IP
      - Total amount of 2% carbon‑offsetting expenses for International Professional staff.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_GR2E`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > AIRT - Airport Tax
      - Total amount of airport tax expenses.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_AIRT`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > AGNV - Airfare (Paid by CLIENT GVA)
      - Total amount of airfare expenses paid by CLIENT Geneva for the trip.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_AGNV`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > VIPA - VISA/Passport
      - Total amount of visa and passport expenses for the trip.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_VIPA`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > AUTO - Local Car Hire
      - Total amount of local car hire expenses for the trip.
      - ``2800.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_AUTO`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > MED - Medical Srvcs (Vaccine, Etc.)
      - Total amount of medical services expenses for the trip.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_MED`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > ZCAR - Personal Vehicle/Mileage
      - Total amount of personal‑vehicle mileage expenses for the trip.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_ZCAR`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > ACPH - Airfare (Paid by CLIENT CPH)
      - Total amount of airfare expenses paid by CLIENT Copenhagen.
      - ``2800.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_ACPH`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > EXBG - Excess Baggage
      - Total amount of excess baggage expenses for the trip.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_EXBG`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > TELE - Telecommunication
      - Total amount of telecommunication expenses for the trip.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_TELE`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > DNGR - Danger Pay
      - Total amount of allowance for visiting hazardous duty stations.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_DNGR`
    
    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > GR1L - 1% Acces. Premise Entl LS
      - Total amount of 1% CLIENT-premise accessibility expenses for Local Staff.
      - ``28.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_GR1L`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > GR2L - 2% Carbon Offset - Entl LS
      - Total amount of 2% carbon‑offsetting expenses for Local Staff.
      - ``28.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_GR2L`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > OTRN - Other Transpo. (Train, Etc.)
      - Total amount of non‑air transportation expenses.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_OTRN`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > FCUV - Fuel Cost (CLIENT Vehicle)
      - Total amount of fuel expenses for CLIENT vehicles.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_FCUV`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > SEAL - Security Escort Allowance
      - Total amount of security escort allowance expenses.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_SEAL`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > AIRS - Airfare (Self-Ticketing)
      - Total amount of airfare expenses for self‑ticketed travel.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_AIRS`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > CPCK - Conference Package
      - Total amount of conference package expenses.
      - ``2800.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_CPCK`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > MOMS - Airfare Additional Tax (CPH)
      - Total amount of airfare additional‑tax expenses (CPH).
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_MOMS`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > CFEE - Conference Registration Fee
      - Total amount of conference registration fee expenses.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_CFEE`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > SEAT - Seat Selection
      - Total amount of seat selection expenses.
      - ``28.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_SEAT`

    * - DM_Trips
      - PTRV_SREC.EXP_TYPE > CRHI - Conference Room Hire
      - Total amount of conference room hire expenses.
      - ``280.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - Pivoted from ``PTRV_SREC`` receipts. :colrefopen:`trips_CRHI`    

    * - DM_Person
      - PERNR_Personnel number
      - The person's personnel number in SAP
      - ``00236266``
      - SAP
      - N/A
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``; used as key in joins and updates

    * - DM_Person
      - PA0000.AEDTM_Date of Last Change
      - Date the Actions record was last changed
      - ``2025-09-10``
      - SAP      
      - PA0000 - HR Master Record: Infotype 0000 (Actions)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``

    * - DM_Person
      - PA0000.MASSN_Action Type
      - Code for the personnel action executed, e.g., hire, transfer, separation
      - ``01``, ``04``, ``10``, ``PF``
      - SAP
      - PA0000 - HR Master Record: Infotype 0000 (Actions)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``

    * - DM_Person
      - PA0000.STAT2_Employment Status
      - Shows whether the person is actively employed
      - ``3``, ``0``,
      - SAP
      - PA0000 - HR Master Record: Infotype 0000 (Actions)
      - ``3`` = active, ``0`` = withdrawn/inactivated
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``

    * - DM_Person
      - PA0000.STAT3_Special Payment Status
      - Shows whether the person has special payment status
      - ``1``, ``0``
      - SAP
      - PA0000 - HR Master Record: Infotype 0000 (Actions)
      - ``1`` = yes, ``0`` = no
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``

    * - DM_Person
      - PA0000.MASSG_Reason for Action:T530T.MGTXT_Name of reason for action
      - Text name of the reason for the personnel action
      - ``Hire Person``, ``Promotion``
      - SAP
      - PA0000 - HR Master Record: Infotype 0000 (Actions)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``

    * - DM_Person 
      - PA0001.ABKRS_Payroll Area
      - Payroll area code used to group personnel for payroll processing cycles
      - ``CD``, ``GE``, ``DZ``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``

    * - DM_Person
      - PA0001.AEDTM_Date of Last Change
      - Date the Organizational Assignment record was last changed.
      - ``2025-09-10``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``

    * - DM_Person
      - PA0001.BTRTL_Personnel Subarea
      - Code for the person's personnel subarea
      - ``054D``, ``060D``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``

    * - DM_Person
      - PA0001.ENAME_Formatted Name of Employee or Applicant
      - Full name of the employee/applicant.
      - ``Jane Smith``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``

    * - DM_Person
      - PA0001.FKBER_Functional Area
      - Code that records the person's functional area
      - ``FA5``, ``D02``, ``M03``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``

    * - DM_Person
      - PA0001.OTYPE_Object Type
      - Code that specifies the object type
      - ``P``, ``S``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - ``P`` = person, ``S`` = position
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``

    * - DM_Person
      - PA0001.PERSG_Employee Group
      - Code that represents the person's Employee Group
      - ``1``, ``3``, ``C``, ``D``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``

    * - DM_Person
      - PA0001.PERSK_Employee Subgroup
      - Code that represents the person's Employee Subgroup
      - ``AM``, ``GN``, ``NO``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0001.SBMOD_Administrator Group
      - Code that represents the person's Administrator Group
      - ``456``, ``Demo``, ``LFP``, ``PAYR``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0001.SNAME_Employee’s Name (Sortable by LAST NAME FIRST NAME)
      - The person's sortable full name (LAST NAME FIRST NAME)
      - ``SMITH JANE``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0001.UNAME_Name of Person Who Changed Object
      - SAP user name of the person who changed the record
      - ``JSMITH``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0001.WERKS_Personnel Area
      - Code for the person's Personnel Area
      - ``006``, ``053``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0001.Extract_Timestamp
      - Date and time the Org. Assignment record was extracted
      - ``2025-06-10 15:37:50.000``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0001.ABKRS_Payroll Area:T549T.ATEXT_Payroll Area Text
      - Human-readable name for the person's payroll area
      - ``Belarus``, ``IP - Budapest``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0001.ANSVH_Work Contract:T542T.ATX_Work Contract Text
      - Human-readable name for the person's work contract
      - ``Cost Attribution``, ``SLWOP``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0001.BTRTL_Personnel Subarea:T001P.BTEXT_Personnel Subarea Text
      - Human-reasable name for the person's Personnel Subarea
      - ``Budapest``, ``Cairo``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0001.GSBER_Service Area:TGSBT.GTEXT_Service Area description
      - Human-readable name of the person's Service Area
      - ``Central Support Services Team``, ``Egypt``,
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0001.KOKRS_Controlling Area:TKA01.BEZEI_Name of the controlling area
      - Name of the person's controlling area
      - ``CLIENT``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0001.KOSTL_Cost Center:CSKT.KTEXT_General Name
      - General name of the person's cost center
      - ``Administrative Serv``, ``Alexandria, Egypt``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0001.KOSTL_Cost Center:CSKT.LTEXT_Description
      - Long description of the person's cost center
      - ``Administrative Serv``, ``Alexandria, Egypt``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0001.ORGEH_Organizational Unit:T527X.ORGTX_Short Text of Organizational Unit
      - Short name of the person's Organizational Unit
      - ``Finance Unit, Demo``, ``Operations Section, Egypt``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0001.PERSG_Employee Group:T501T.PTEXT_Name of Employee Group
      - Name of the person's employee group
      - ``Local Staff``, ``Intl. Professionals``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0001.PERSK_Employee Subgroup:T503T.PTEXT_Name of Employee Subgroup
      - Name of the person's employee subgroup
      - ``Indiv.Consultants``, ``Field Service``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.AEDTM_Date of Last Change
      - Date the Personal Data record was last changed.
      - ``2025-09-10``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.BEGDA_Start Date
      - Start date of the Personal Data record's validity period.
      - ``2025-09-10``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.ENDDA_End Date
      - End date of the Personal Data record's validity period.
      - ``2025-09-10``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.FAMDT_Valid From Date of Current Marital Status
      - Effective date from which the current marital status applies in SAP.
      - ``2025-09-10``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.GBDAT_Date of Birth
      - The person's date of birth as recorded in SAP
      - ``2025-09-10``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.GBDEP_State
      - State/region code for the person's place of birth.
      - ``08``, ``DF``, ``SZ``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.GBJHR_Year of Birth
      - The person's year of birth
      - ``1981``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.GBLND_Country of Birth
      - Code for the person's country of birth
      - ``012``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.GBMON_Month of Birth
      - The person's month of birth
      - ``02``, ``12``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.GBORT_Birthplace
      - City or locality of the person's birth
      - ``Abdine``, ``Tobelo``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.GBPAS_Date of Birth According to Passport
      - The person's date of birth as recorded in their passport
      - ``1981``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.GBTAG_Birth Date (to Month/Year)
      - Day or month component of the person's birth date.
      - ``08``, ``31``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.GESCH_Gender
      - The person's gender
      - ``1``, ``2``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.INITS_Initials
      - The person's initials
      - ``MD``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.ITXEX_Text Exists for Infotype
      - Shows whether text is stored for this SAP infotype
      - ``X``, ``NULL``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.NACH2_Second Name
      - The person's second given name
      - ``Jane``, ``John``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.NACHN_Last Name
      - The person's last name
      - ``Smith``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.NAME2_Name at Birth
      - The person's birth name
      - ``Jane Smith``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.NATI2_Second Nationality
      - Code for the person's second nationality
      - ``012``, ``060``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.NATI3_Third Nationality
      - Code for the person's third nationality
      - ``012``, ``060``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.NATIO_Nationality
      - Code for the person's nationality
      - ``012``, ``060``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.NCHMC_Last Name (Field for Search Help)
      - Uppercase version of the person's last name for search purposes.
      - ``SMITH``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.UNAME_Name of Person Who Changed Object
      - User name of the person who changed the Personal Data record.
      - ``JSMITH``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.VNAMC_First Name (Field for Search Help)
      - Uppercase version of the person's first name for search purposes.
      - ``JANE``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.Extract_Timestamp
      - Date and time the Personal Data record was extracted.
      - ``2025-06-10 15:37:50.000``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.AEDTM_Date of Last Change
      - Date the Basic Pay record was last changed.
      - ``2025-06-10``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.BEGDA_Start Date
      - Start date of the Basic Pay record's validity period
      - ``2025-06-10``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.BSGRD_Capacity Utilization Level
      - The person's capacity utilization level, expressed as a percentage.
      - ``70``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.DIVGV_Working Hours per Payroll Period
      - Shows how many hours the person works per Payroll Period
      - ``81.56``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.EIN03_Time/Measurement Unit
      - Unit of time or measurement for the person's payroll data (field 03)
      - ``030``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.ITXEX_Text Exists for Infotype
      - Shows whether text is stored for this SAP Infotype
      - ``X``, ``NULL``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.LGA01_Wage Type
      - Wage type applied to the person in payroll (field 01).
      - ``0010``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.LGA02_Wage Type
      - Wage type applied to the person in payroll (field 02).
      - ``0032``, ``0080``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.LGA03_Wage Type
      - Wage type applied to the person in payroll (field 03).
      - ``0032``, ``0050``, ``0080``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.LGA04_Wage Type
      - Wage type applied to the person in payroll (field 04).
      - ``0050``, ``0270``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.LGA05_Wage Type
      - Wage type applied to the person in payroll (field 05).
      - ``0050``, ``0350``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.PREAS_Reason for Changing Master Data
      - Code for the reason why the HR Master Data was changed
      - ``01``, ``02``, ``03``, ``04``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.SPRPS_Lock Indicator for HR Master Data Record
      - Shows whether the person's HR master data record is locked.
      - ``X``, ``NULL``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.STVOR_Date of Next Increase
      - Date of the person's next scheduled pay increase.
      - ``2025-06-10``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.TRFAR_Pay scale type
      - Type of the person's post
      - ``G``, ``FS``, ``NO``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.TRFGB_Pay Scale Area
      - Area of the person's post
      - ``AZ``, ``BW``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.TRFGR_Pay Scale Group
      - Code that shows the person's post
      - ``P-2``, ``G-7``, ``NO-2``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.TRFST_Pay Scale Level
      - Step of where the person is in their post
      - ``06``, ``18``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.UNAME_Name of Person Who Changed Object
      - User name of the SAP user who last changed the person's Basic Pay record.
      - ``JSMITH``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.VGLST_Comparison pay scale level
      - The person's pay scale level used for comparison purposes in pay scale classification.
      - ``04``, ``13``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.VGLTA_Comparison pay scale type
      - Pay scale type used for comparison purposes in pay scale classification.
      - ``P``, ``G``, ``NO``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.WAERS_Currency Key
      - Code for the currency of the person's Basic Pay amounts
      - ``USD``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.PREAS_Reason for Changing Master Data\:T530F.RTEXT_Text on Reason for Change (Basic Pay Infotype)
      - Text description of why the person's Basic Pay record was changed.
      - ``Special Post Allowance``, ``Grant next SPA increment``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0016.CTTYP_Contract Type:T547S.CTTXT_Text for contract type (Contract Elements infotype)
      - Text description of the person's contract type
      - ``Permanent``, ``Fixed-term``
      - SAP
      - PA0016 - HR Master Record: Infotype 0016 (Contract Elements)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - DM_Person.current_record_flag
      - Show whether the row has current record for the person.
      - ``1``, ``0``
      - SAP
      - N/A
      - ``1`` = current record; ``0`` = historical or future record
      - Computed per row: set to ``1`` when ``GETDATE()`` falls between ``BEGDA_Master`` and ``ENDDA_Master``; otherwise ``0``.

    * - DM_Person
      - LFA1.LIFNR_Account Number of Vendor or Creditor
      - The person's vendor account number in their vendor master record
      - ``S72008889``
      - SAP
      - LFA1 - Vendor Master (General Section)
      - N/A
      - Copied from ``DM.dbo.DM_Vendors`` where ``[LFB1.PERNR_Personnel Number] = [PERNR_Personnel number]``.

    * - DM_Person
      - AD.sAMAccountName
      - The person's logon name in Active Directory.
      - ``jsmith``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - (Manager) PA0001.ENAME_Formatted Name of Employee or Applicant
      - Formatted name of the person's manager
      - ``Jane Smith``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Set via self-join to the manager's ``DM_Person`` row using manager ``PERNR`` from ``mholder.HRP1001.SOBID_ID of Related Object`` with date overlap on ``BEGDA_Master..ENDDA_Master``, then copied from ``Manager-PA0001.ENAME_…`` into this column.


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
        FROM DM.DM_Trips AS t;

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
        FROM DM.DM_Trips t
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
        FROM DM.DM_Trips t
        JOIN [temp].SREC_TR_Agent b
            ON t.[PTRV_HEAD.REINR_Trip Number] = b.[REINR_Trip Number]
            AND b.RowNum = 2;

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
        FROM DM.DM_Trips t;

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
        FROM DM.DM_Trips t;

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
        FROM DM.DM_Trips t
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
        FROM DM.DM_Trips t
        JOIN [temp].SREC_TR_Agent b
            ON t.[PTRV_HEAD.REINR_Trip Number] = b.[REINR_Trip Number]
            AND b.RowNum = 2;

.. =====================================================================================================

.. colref-detail:: trips_TR-Agent
    :title: PTRV_SREC.EXP_TYPE > TR-Agent

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]`` + ``REF.REF_exchange_rates.[RatePer1From_Practical rate per 1 unit of from currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums all TR-Agent receipt lines for the trip, converting each line to USD and rounding to 2 decimals.
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` is ``Z___`` and ends in two digits.

    .. code-block:: tsql
        
        UPDATE DM.DM_Trips
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
                AND b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] LIKE 'Z___'
                AND TRY_CAST(RIGHT(b.[EXP_TYPE_Travel Expense Type], 2) AS int) IS NOT NULL
            WHERE 1 = 1
        );


.. =====================================================================================================

.. colref-detail:: trips_TERM
    :title: PTRV_SREC.EXP_TYPE > TERM - Terminal

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.
    
    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'TERM'
        );


.. =====================================================================================================

.. colref-detail:: trips_GR2%
    :title: PTRV_SREC.EXP_TYPE > GR2% - 2% Carbon Offsetting

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.
    
    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'GR2%'
        );     

.. =====================================================================================================

.. colref-detail:: trips_ZMSC
    :title: PTRV_SREC.EXP_TYPE > ZMSC - Miscellaneous Trav. Expenses

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.
    
    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'ZMSC'
        ); 

.. =====================================================================================================

.. colref-detail:: trips_AIRP
    :title: PTRV_SREC.EXP_TYPE > AIRP - Airfare (Paid by CLIENT NYHO)

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.
    
    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code
    
    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'AIRP'
        );     

.. =====================================================================================================

.. colref-detail:: trips_ZENT
    :title: PTRV_SREC.EXP_TYPE > ZENT - Staff Entitlement Expenses

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.
    
    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'ZENT'
        );     

.. =====================================================================================================

.. colref-detail:: trips_AIR
    :title: PTRV_SREC.EXP_TYPE > AIR - Airfare (Paid by Person/Lump)

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'AIR'
        );     

.. =====================================================================================================

.. colref-detail:: trips_HOTL
    :title: PTRV_SREC.EXP_TYPE > HOTL - Hotel

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'HOTL'
        );     

.. =====================================================================================================

.. colref-detail:: trips_GR2E
    :title: PTRV_SREC.EXP_TYPE > GR2E - 2% Carbon Offset - Entl IP

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'GR2E'
        );     

.. =====================================================================================================

.. colref-detail:: trips_GR1E
    :title: PTRV_SREC.EXP_TYPE > GR1E - 1% Acces. Premise Entl IP

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'GR1E'
        );     

.. =====================================================================================================

.. colref-detail:: trips_AIRT
    :title: PTRV_SREC.EXP_TYPE > AIRT - Airport Tax

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'AIRT'
        );     

.. =====================================================================================================

.. colref-detail:: trips_AGNV
    :title: PTRV_SREC.EXP_TYPE > AGNV - Airfare (Paid by CLIENT GVA)

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'AGNV'
        );     

.. =====================================================================================================

.. colref-detail:: trips_VIPA
    :title: PTRV_SREC.EXP_TYPE > VIPA - VISA/Passport

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'VIPA'
        );     

.. =====================================================================================================

.. colref-detail:: trips_AUTO
    :title: PTRV_SREC.EXP_TYPE > AUTO - Local Car Hire

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'AUTO'
        );     

.. =====================================================================================================

.. colref-detail:: trips_MED
    :title: PTRV_SREC.EXP_TYPE > MED - Medical Srvcs (Vaccine, Etc.)

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'MED'
        );     

.. =====================================================================================================

.. colref-detail:: trips_ZCAR
    :title: PTRV_SREC.EXP_TYPE > ZCAR - Personal Vehicle/Mileage

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'ZCAR'
        );     

.. =====================================================================================================

.. colref-detail:: trips_ACPH
    :title: PTRV_SREC.EXP_TYPE > ACPH - Airfare (Paid by CLIENT CPH)

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'ACPH'
        );     

.. =====================================================================================================

.. colref-detail:: trips_EXBG
    :title: PTRV_SREC.EXP_TYPE > EXBG - Excess Baggage

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'EXBG'
        );     

.. =====================================================================================================

.. colref-detail:: trips_TELE
    :title: PTRV_SREC.EXP_TYPE > TELE - Telecommunication

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'TELE'
        );     

.. =====================================================================================================

.. colref-detail:: trips_DNGR
    :title: PTRV_SREC.EXP_TYPE > DNGR - Danger Pay

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'DNGR'
        );

.. =====================================================================================================

.. colref-detail:: trips_GR1L
    :title: PTRV_SREC.EXP_TYPE > GR1L - 1% Acces. Premise Entl LS

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'GR1L'
        );     

.. =====================================================================================================

.. colref-detail:: trips_GR2L
    :title: PTRV_SREC.EXP_TYPE > GR2L - 2% Carbon Offset - Entl LS

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'GR2L'
        );     

.. =====================================================================================================

.. colref-detail:: trips_OTRN
    :title: PTRV_SREC.EXP_TYPE > OTRN - Other Transpo. (Train, Etc.)

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'OTRN'
        );     

.. =====================================================================================================

.. colref-detail:: trips_FCUV
    :title: PTRV_SREC.EXP_TYPE > FCUV - Fuel Cost (CLIENT Vehicle)

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'FCUV'
        );     

.. =====================================================================================================

.. colref-detail:: trips_SEAL
    :title: PTRV_SREC.EXP_TYPE > SEAL - Security Escort Allowance

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'SEAL'
        );     

.. =====================================================================================================

.. colref-detail:: trips_AIRS
    :title: PTRV_SREC.EXP_TYPE > AIRS - Airfare (Self-Ticketing)

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'AIRS'
        );     

.. =====================================================================================================

.. colref-detail:: trips_CPCK
    :title: PTRV_SREC.EXP_TYPE > CPCK - Conference Package

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'CPCK'
        );     

.. =====================================================================================================

.. colref-detail:: trips_MOMS
    :title: PTRV_SREC.EXP_TYPE > MOMS - Airfare Additional Tax (CPH)

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'MOMS'
        );     

.. =====================================================================================================

.. colref-detail:: trips_CFEE
    :title: PTRV_SREC.EXP_TYPE > CFEE - Conference Registration Fee

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'CFEE'
        );     

.. =====================================================================================================

.. colref-detail:: trips_SEAT
    :title: PTRV_SREC.EXP_TYPE > SEAT - Seat Selection

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'SEAT'
        );     

.. =====================================================================================================

.. colref-detail:: trips_CRHI
    :title: PTRV_SREC.EXP_TYPE > CRHI - Conference Room Hire

    Each receipt/expense row in SAP's ``PTRV_SREC`` table has a Travel Expense Type column. In ``DM_Trips``, this column is spread (pivoted) into multiple columns, such as this one.

    - :fa:`database` *Lineage:* ``SAP_raw.PTRV_SREC.[LOC_AMOUNT_Receipt amount in local currency]``
    - :fa:`tag` *Setting Type:* Derived - Calculation/Conversion
    - :fa:`cogs` *How:* Sums receipt amounts for the trip where the receipt EXP_TYPE equals the column’s code and converts the result to USD (done via ``DM.p_DM_Trips_FX``).
    - :fa:`filter` *Filter:* Receipt lines for the trip where ``EXP_TYPE`` equals the column’s specific code

    .. code-block:: tsql

        UPDATE DM.DM_Trips
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
            WHERE b.[REINR_Trip Number] = DM_Trips.[PTRV_HEAD.REINR_Trip Number]
                AND b.[EXP_TYPE_Travel Expense Type] = 'CRHI'
        );     

.. ================================================================================================================================
.. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.. -------- OFFCANVAS DETAILS -----------------------------------------------------------------------------------------------------
.. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.. ================================================================================================================================


.. =====================================================================================================
.. ======== Case Number ================================================================================
.. =====================================================================================================

.. colref-detail:: perf_Case_Number
    :title: Case Number

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases            

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[task.number]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the case’s number.
            - :fa:`filter` *Filter:* Include cases with the specified HR case types; exclude cases with blank case numbers, cancelled or blank status, and 'Demo Quality Assurance' service.
            
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number]
                FROM DM.dbo.DM_SG_Cases AS S
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (
                        S.[task.state.sys_choice] NOT IN ('Cancelled', 'Canceled')
                        OR S.[task.state.sys_choice] IS NULL
                    )
                    AND S.[task.sys_class_name] IN (
                        'sn_hr_core_case_operations',
                        'sn_hr_core_case_payroll',
                        'sn_hr_core_case_relations',
                        'sn_hr_core_case_total_rewards',
                        'sn_hr_core_case_workforce_admin',
                        'sn_hr_le_case'
                    )
                    AND S.[shc_case.hr_service:shc_service.name] <> 'Demo Quality Assurance';
                
        .. tab-item:: SG Inc 

            - :fa:`database` *Lineage:* ``DM_SG_Incidents.[task.number]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the incident’s number from the incident record.
            - :fa:`filter` *Filter:* Excludes incidents where both ``[task.state.sys_choice]`` and ``[incident.incident_state.sys_choice]`` are cancelled.
            
            .. code-block:: tsql
                    
                SELECT
                    [task.number] AS [Case Number]
                FROM DM_SG_Incidents
                WHERE [task.state.sys_choice] NOT IN ('Cancelled','Canceled')
                    OR [incident.incident_state.sys_choice] NOT IN ('Cancelled','Canceled');

        .. tab-item:: SG Trv 
                
            - :fa:`database` *Source field\:* ``SN.dbo.[10-task].[task.number]``
            - :fa:`tag` *Setting type\:* Direct
            - :fa:`cogs` *How\:* Use the record’s number from the task table.
            - :fa:`filter` *Filter\:* Include records with TRV prefix, Demo assignment group, created ≥ 2024-03-11, and with linked Travel SLA; exclude ones with cancelled or blank status and no close date.

            .. code-block:: tsql
            
                SELECT DISTINCT
                    M.[task.number] AS [Case Number]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND S.[task_sla.has_breached] IS NOT NULL
                    AND ISNULL(M.[task.state.sys_choice], '') <> 'Cancelled'
                    AND NOT (M.[task.state.sys_choice] IS NULL AND M.[task.closed_at] IS NULL)
                    AND NOT EXISTS (
                        SELECT 1
                        FROM DM.dbo.DM_Performance AS P
                        WHERE P.[Case Number] = M.[task.number]
                            AND P.[Last Update Datetime] = M.[task.sys_updated_on]
                    );

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.number]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the ServiceNow task number as the case identifier.
            - :fa:`filter` *Filter:* Include CIC cases; exclude cases with 'cancelled' or 'read' status.

            .. code-block:: tsql
                
                SELECT DISTINCT
                    M.[task.number] AS [Case Number]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.task AS RT
                    ON RT.[number] = M.[task.number]
                LEFT JOIN (
                    SELECT DISTINCT [label], [value]
                    FROM SN_raw.dbo.sys_choice
                    WHERE [element] = 'state' AND [name] = 'sn_hr_core_task'
                ) AS SC
                    ON RT.[state] = SC.[value]
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%'
                    AND NOT (
                            SC.[label] = 'Cancelled'
                        OR (SC.[label] IS NULL AND NULLIF(CAST(M.[task.closed_at] AS date), '1900-01-01') IS NULL)
                    );

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[task.number];[contract_sla.name]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:*
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT
                    [task.number], 
                    [task.number] + '-' + 
                        REPLACE(
                            REPLACE(
                                REPLACE(
                                    REPLACE(
                                        [contract_sla.name], 
                                        'RAS SLA for ', ''
                                    ), 
                                    'RAS Agent SLA for ', ''
                                ), 
                                'RAS SLA ', ''
                            ), 
                            'RAS HRBP-', ''
                        ) AS Modified_SLA_Name
                FROM 
                    DM.dbo.DM_SG_RAS;  

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Onboarding.[Requisition Action]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:*
            - :fa:`filter` *Filter:*            
            
            .. code-block:: tsql

                SELECT
                    [Requisition Action] 
                FROM
                    DM.dbo.DM_Onboarding;

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* ``[MANUAL].dbo.[2022_Monitoring_Sheet_updated].[hief];[Post]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:*
            - :fa:`filter` *Filter:*            
            
            .. code-block:: tsql

                SELECT 
                    CONCAT(
                        FORMAT([hief], '0000'), 
                        '-', 
                        FORMAT([Post], '00000000')
                    ) AS Formatted_Code
                FROM 
                    [MANUAL].dbo.[2022_Monitoring_Sheet_updated];


.. ===========================================================================================
.. ==== Service Area - Code =================================================================
.. ===========================================================================================

.. colref-detail:: perf_BA_Code
    :title: Service Area - Code

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[shc_case.u_Service_Area:shc_Service_Area.u_name]`` → ``SAP_raw.dbo.TGSBT.[GSBER_Service Area]``
            - :fa:`tag` *Setting Type:* Derived — Mapping
            - :fa:`cogs` *How:* Use the case’s Service Area name to look up the business-area code in the TGSBT list.
            - :fa:`filter` *Filter:* Includes cases with the specified HR case types; excludes cases with blank case numbers, cancelled or blank status, and ``'Demo Quality Assurance'`` service.
        
            .. code-block:: tsql
                
                SELECT DISTINCT
                    T.[GSBER_Service Area] AS [Service Area - Code]
                FROM DM.dbo.DM_SG_Cases AS S
                JOIN SAP_raw.dbo.TGSBT AS T
                    ON T.[GTEXT_Service Area description]
                    = REPLACE(S.[shc_case.u_Service_Area:shc_Service_Area.u_name], 'Ã¼', 'ü')
                WHERE S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (
                        S.[task.state.sys_choice] NOT IN ('Cancelled', 'Canceled')
                        OR S.[task.state.sys_choice] IS NULL
                        )
                    AND S.[task.sys_class_name] IN (
                        'sn_hr_core_case_operations',
                        'sn_hr_core_case_payroll',
                        'sn_hr_core_case_relations',
                        'sn_hr_core_case_total_rewards',
                        'sn_hr_core_case_workforce_admin',
                        'sn_hr_le_case'
                        )
                    AND S.[shc_case.hr_service:shc_service.name] <> 'Demo Quality Assurance';

        .. tab-item:: SG Inc

            - :fa:`database` *Lineage:* ``DM_Performance.[Subject Person - PERNR]; DM_Performance.[Case Open Date]`` → ``SAP_raw.dbo.PA0001.[GSBER_Service Area]``; ``DM_Performance.[Service Area - Name]`` → ``SAP_raw.dbo.TGSBT.[GSBER_Service Area]``
            - :fa:`tag` *Setting Type:* Derived — Mapping
            - :fa:`cogs` *How:* Use the subject person and the case open date to pick the date‑effective GSBER code from PA0001; if still empty, use the business‑area name to look up the GSBER code in TGSBT.
            - :fa:`filter` *Filter:* Includes incidents with case numbers starting ``'INC'``; leaves out non‑incidents.

            .. code-block:: tsql

                UPDATE DM_Performance
                SET [Service Area - Code] = J.[GSBER_Service Area]
                FROM (
                    SELECT [PERNR_Personnel number], [GSBER_Service Area], [BEGDA_Start Date], [ENDDA_End Date]
                    FROM SAP_raw.dbo.PA0001 WITH (TABLOCK)
                ) J
                WHERE LEFT([Case Number],3) = 'INC'
                    AND [Subject Person - PERNR] = J.[PERNR_Personnel number]
                    AND [Case Open Date] BETWEEN J.[BEGDA_Start Date] AND J.[ENDDA_End Date];

                UPDATE DM_Performance
                SET [Service Area - Code] = [GSBER_Service Area]
                FROM SAP_raw.dbo.TGSBT WITH (TABLOCK)
                WHERE [Service Area - Name] = [GTEXT_Service Area description]
                    AND LEFT([Case Number],3) = 'INC'
                    AND [Service Area - Code] IS NULL;
                
        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.sys_id]`` → ``SN_raw.dbo.x_adsr_unall_travel_case.[u_Service_Area_code]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the travel case’s business‑area code from the travel case extract.
            - :fa:`filter` *Filter:* Include records with TRV prefix, Demo assignment group, created ≥ 2024-03-11, and with linked Travel SLA; leave out 'Cancelled' or blank and no close date.
            
            .. code-block:: tsql

                SELECT DISTINCT
                    J.u_Service_Area_code AS [Service Area - Code]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS J2
                    ON M.[task.sys_id] = J2.[task_sla.task.value]
                    AND J2.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS J
                    ON M.[task.sys_id] = J.sys_id
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND J2.[task_sla.has_breached] IS NOT NULL
                    AND ISNULL(M.[task.state.sys_choice], '') <> 'Cancelled'
                    AND NOT (M.[task.state.sys_choice] IS NULL AND M.[task.closed_at] IS NULL)
                    AND NOT EXISTS (
                        SELECT 1
                        FROM DM.dbo.DM_Performance AS P
                        WHERE P.[Case Number] = M.[task.number]
                            AND P.[Last Update Datetime] = M.[task.sys_updated_on]
                    );

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``SN_raw.dbo.sn_hr_core_Service_Area.[u_name]`` → ``SAP_raw.dbo.TGSBT.[GSBER_Service Area]`` .
            - :fa:`tag` *Setting Type:* Derived — Mapping
            - :fa:`cogs` *How:* Look up the SAP Service Area code in the TGSBT table.
            - :fa:`filter` *Filter:* Includes records where number starts with 'CIC'; leaves out records where status contains 'Cancel'/'Read'.
                
            .. code-block:: tsql

                SELECT DISTINCT
                    T.[GSBER_Service Area] AS [Service Area - Code]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_invoices AS I
                    ON M.[task.sys_id] = I.sys_id
                LEFT JOIN SN_raw.dbo.sn_hr_core_Service_Area AS BA
                    ON I.[Service_Area.value] = BA.sys_id
                LEFT JOIN SAP_raw.dbo.TGSBT AS T
                    ON T.[GTEXT_Service Area description] = REPLACE(BA.u_name, 'Ã¼', 'ü')
                LEFT JOIN SN_raw.dbo.task AS RT
                    ON RT.[number] = M.[task.number]
                LEFT JOIN (
                    SELECT DISTINCT [label], [value]
                    FROM SN_raw.dbo.sys_choice
                    WHERE [element] = 'state' AND [name] = 'sn_hr_core_task'
                ) AS SC
                    ON RT.[state] = SC.[value]
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%'
                    AND NOT (
                      SC.[label] = 'Cancelled'
                      OR (SC.[label] IS NULL AND NULLIF(CAST(M.[task.closed_at] AS date), '1900-01-01') IS NULL)
                    );

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:*
            - :fa:`filter` *Filter:*

            .. code-block:: tsql

                -- Value is set to NULL

        .. tab-item:: TMS

            - :fa:`database` **Lineage:** ``[SAP_raw].[dbo].[TGSBT].[GSBER_Service Area]``
            - :fa:`tag` **Setting Type:**
            - :fa:`cogs` **How:**
            - :fa:`filter` *Filter:*
                
            .. code-block:: tsql

                SELECT 
                    i.[Case Number], 
                    i.[Service Area - Code], 
                    A.[GSBER_Service Area]
                FROM (
                    SELECT DISTINCT
                        [GSBER_Service Area],
                        [GTEXT_Service Area description]
                    FROM 
                        SAP_raw.dbo.TGSBT
                    WHERE 
                        [SPRAS_Language Key] = 'E'
                ) AS A
                INNER JOIN 
                    DM_Performance AS i 
                    ON A.[GTEXT_Service Area description] = i.[Subject Person - Duty Station]
                WHERE 
                    i.Platform = 'TMS';

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Person.[PA0001.GSBER_Service Area]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:*
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT 
                    i.[Case Number], 
                    i.[Service Area - Code], 
                    J.[PA0001.GSBER_Service Area]
                FROM 
                    [MANUAL].dbo.[2022_Monitoring_Sheet_updated] AS M
                LEFT JOIN 
                    DM.dbo.DM_Person AS J 
                    ON FORMAT(M.[Post], '00000000') = J.[PA0001.PLANS_Position]
                    AND M.[Case Creation Date] BETWEEN J.BEGDA_Master AND J.ENDDA_Master
                LEFT JOIN 
                    DM.dbo.DM_Performance AS i 
                    ON i.[Case Number] = M.[ID]
                WHERE 
                    i.[Platform] = 'Sharepoint';


.. ===========================================================================================
.. ==== Service Area - Name =================================================================
.. ===========================================================================================

.. colref-detail:: perf_BA_Name
    :title: Service Area - Name

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[shc_case.u_Service_Area:shc_Service_Area.u_name]``
            - :fa:`tag` *Setting Type:* Derived — Conversion
            - :fa:`cogs` *How:* Use the case’s business‑area name with a character correction.
            - :fa:`filter` *Filter:* Includes cases with the specified HR case types; excludes cases with blank case numbers, cancelled or blank status, and ``'Demo Quality Assurance'`` service.
                
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    REPLACE(
                        S.[shc_case.u_Service_Area:shc_Service_Area.u_name], 'Ã¼', 'ü'
                    ) AS [Service Area - Name]
                FROM DM.dbo.DM_SG_Cases AS S
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (
                        S.[task.state.sys_choice] NOT IN ('Cancelled', 'Canceled')
                        OR S.[task.state.sys_choice] IS NULL
                    )
                    AND S.[task.sys_class_name] IN (
                        'sn_hr_core_case_operations',
                        'sn_hr_core_case_payroll',
                        'sn_hr_core_case_relations',
                        'sn_hr_core_case_total_rewards',
                        'sn_hr_core_case_workforce_admin',
                        'sn_hr_le_case'
                    )
                    AND S.[shc_case.hr_service:shc_service.name] <> 'Demo Quality Assurance';

        .. tab-item:: SG Inc

            - :fa:`database` *Lineage:* ``DM_Performance.[Service Area - Code]`` → ``SAP_raw.dbo.TGSBT.[GTEXT_Service Area description]``; ``DM_SG_Incidents.[task.location:cmn_location.name]`` → ``SN.dbo.[10-cmn_location].[cmn_location.full_name]`` → ``SN.dbo.[10-cmn_location].[cmn_location.country]``
            - :fa:`tag` *Setting Type:* Derived — Mapping
            - :fa:`cogs` *How:* Use the GSBER code to retrieve the business‑area description from TGSBT; if the name is missing, use the incident location to fetch the country from the locations list as a fallback.
            - :fa:`filter` *Filter:* Includes incidents with case numbers starting ``'INC'``; leaves out non‑incidents.

            .. code-block:: tsql

                UPDATE DM_Performance
                SET [Service Area - Name] = [GTEXT_Service Area description]
                FROM SAP_raw.dbo.TGSBT WITH (TABLOCK)
                WHERE LEFT([Case Number],3) = 'INC'
                    AND [Service Area - Code] = [GSBER_Service Area];

                UPDATE DM_Performance
                SET [Service Area - Name] = SN.dbo.[10-cmn_location].[cmn_location.country]
                FROM SN.dbo.[10-cmn_location] WITH (TABLOCK)
                INNER JOIN DM.dbo.DM_SG_Incidents WITH (TABLOCK)
                    ON DM.dbo.DM_SG_Incidents.[task.location:cmn_location.name] = SN.dbo.[10-cmn_location].[cmn_location.full_name]
                WHERE LEFT([Case Number],3) = 'INC'
                    AND DM.dbo.DM_SG_Incidents.[task.number] = DM_Performance.[Case Number]
                    AND DM_Performance.[Service Area - Name] IS NULL;
                
        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN_raw.dbo.x_adsr_unall_travel_case.[u_Service_Area_code]`` → ``DM_Calendar.[Service Area - Name]`` (keyed by ``DM_Calendar.[Service Area - Code]`` at latest ``DM_Calendar.[Master Date]``)
            - :fa:`tag` *Setting Type:* Derived — Mapping
            - :fa:`cogs` *How:* Use the business‑area code to look up the business‑area name in ``DM_Calendar`` for the latest calendar date.
            - :fa:`filter` *Filter:* Includes records with TRV prefix, in Demo assignment groups, created on or after 2024-03-11, and with linked Travel SLA; leave out 'Cancelled' or blank and no close date.
            
            .. code-block:: tsql
            
                SELECT DISTINCT
                    C.[Service Area - Name] AS [Service Area - Name]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS J
                    ON M.[task.sys_id] = J.sys_id
                LEFT JOIN DM.dbo.DM_Calendar AS C
                    ON J.[u_Service_Area_code] = C.[Service Area - Code]
                    AND C.[Master Date] = (SELECT TOP 1 [Master Date] FROM DM.dbo.DM_Calendar ORDER BY 1 DESC)
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND S.[task_sla.has_breached] IS NOT NULL
                    AND ISNULL(M.[task.state.sys_choice], '') <> 'Cancelled'
                    AND NOT (M.[task.state.sys_choice] IS NULL AND M.[task.closed_at] IS NULL)
                    AND NOT EXISTS (
                        SELECT 1
                        FROM DM.dbo.DM_Performance AS P
                        WHERE P.[Case Number] = M.[task.number]
                            AND P.[Last Update Datetime] = M.[task.sys_updated_on]
                    );

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``SN_raw.dbo.sn_hr_core_Service_Area.[u_name]`` .
            - :fa:`tag` *Setting Type:* Derived — Conversion
            - :fa:`cogs` *How:* Fix the Service Area name by replacing 'Ã¼' with 'ü'.
            - :fa:`filter` *Filter:* Includes records where number starts with 'CIC'; leaves out records where status contains 'Cancel'/ 'Read'.
            
            .. code-block:: tsql

                SELECT DISTINCT
                    REPLACE(BA.u_name, 'Ã¼', 'ü') AS [Service Area - Name]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_invoices AS INV
                    ON M.[task.sys_id] = INV.sys_id
                LEFT JOIN SN_raw.dbo.sn_hr_core_Service_Area AS BA
                    ON INV.[Service_Area.value] = BA.sys_id
                LEFT JOIN SN_raw.dbo.task AS RT
                    ON RT.[number] = M.[task.number]
                LEFT JOIN (
                    SELECT DISTINCT [label], [value]
                    FROM SN_raw.dbo.sys_choice
                    WHERE [element] = 'state' AND [name] = 'sn_hr_core_task'
                ) AS SC
                    ON RT.[state] = SC.[value]
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%'
                    AND NOT (
                            SC.[label] = 'Cancelled'
                        OR (SC.[label] IS NULL AND NULLIF(CAST(M.[task.closed_at] AS date), '1900-01-01') IS NULL)
                    );

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* 
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*

            .. code-block:: tsql

                -- Value is set to NULL

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Onboarding.[Country]``
            - :fa:`tag` *Setting Type:* 
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
            
            .. code-block:: tsql

                SELECT 
                    [Requisition Action], 
                    Country
                FROM 
                    DM.dbo.DM_Onboarding;

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Person.[PA0001.GSBER_Service Area:TGSBT.GTEXT_Service Area description]``
            - :fa:`tag` *Setting Type:* 
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
                
            .. code-block:: tsql

                SELECT 
                    i.[Case Number], 
                    i.[Service Area - Name], 
                    J.[PA0001.GSBER_Service Area:TGSBT.GTEXT_Service Area description]
                FROM 
                    [MANUAL].dbo.[2022_Monitoring_Sheet_updated] AS M
                LEFT JOIN 
                    DM.dbo.DM_Person AS J 
                    ON FORMAT(M.[Post], '00000000') = J.[PA0001.PLANS_Position]
                    AND M.[Case Creation Date] BETWEEN J.BEGDA_Master AND J.ENDDA_Master
                LEFT JOIN 
                    DM.dbo.DM_Performance AS i 
                    ON i.[Case Number] = M.[ID]
                WHERE 
                    i.[Platform] = 'Sharepoint';


.. ===========================================================================================
.. ==== Service Area - Full =================================================================
.. ===========================================================================================

.. colref-detail:: perf_BA_Full
    :title: Service Area - Full

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_Performance.Service Area - Name`` ; ``DM_Performance.Service Area - Code``
            - :fa:`tag` *Setting Type:* Derived — Concatenation
            - :fa:`cogs` *How:* Combine the business-area name and the business-area code with a hyphen.
            - :fa:`filter` *Filter:* Include Request Portal cases; exclude rows with case numbers starting with 'INC'.
                    
            .. code-block:: tsql

                UPDATE DM.dbo.DM_Performance
                SET [Service Area - Full] = CONCAT([Service Area - Name], '-', [Service Area - Code])
                WHERE Platform = 'Request Portal'
                    AND LEFT([Case Number], 3) <> 'INC';

        .. tab-item:: SG Inc

            - :fa:`database` *Lineage:* ``DM_Performance.[Service Area - Name]; DM_Performance.[Service Area - Code]``
            - :fa:`tag` *Setting Type:* Derived — Concatenation
            - :fa:`cogs` *How:* Combine the business‑area name and the GSBER code with a hyphen.
            - :fa:`filter` *Filter:* Include incidents with case numbers starting ``'INC'``; exclude non‑incidents.
            
            .. code-block:: tsql 

                UPDATE DM_Performance
                SET [Service Area - Full] = CONCAT([Service Area - Name], '-', [Service Area - Code])
                WHERE LEFT([Case Number],3) = 'INC';

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``DM_Performance.[Service Area - Name]``; ``DM_Performance.[Service Area - Code]``
            - :fa:`tag` *Setting Type:* Derived — Concatenation
            - :fa:`cogs` *How:* Combine business‑area name and business‑area code with a hyphen.
            - :fa:`filter` *Filter:* Includes records with ``[task.number]`` that are ``'TRV%'``-prefixed, in Demo assignment groups, created on or after ``'2024-03-11'`` , tied to a Travel SLA and with an SLA-breach flag present; leaves out cancelled records, records where both status and close date are blank, and records already loaded with the same ``[Case Number]`` and ``[Last Update Datetime]`` .
        
            .. code-block:: tsql
                
                SELECT DISTINCT
                    C.[Service Area - Full] AS [Service Area - Full]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS J
                    ON M.[task.sys_id] = J.sys_id
                LEFT JOIN DM.dbo.DM_Calendar AS C
                    ON J.[u_Service_Area_code] = C.[Service Area - Code]
                    AND C.[Master Date] = (SELECT TOP 1 [Master Date] FROM DM.dbo.DM_Calendar ORDER BY 1 DESC)
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND S.[task_sla.has_breached] IS NOT NULL
                    AND ISNULL(M.[task.state.sys_choice], '') <> 'Cancelled'
                    AND NOT (M.[task.state.sys_choice] IS NULL AND M.[task.closed_at] IS NULL)
                    AND NULLIF(J.u_Service_Area_code, '') IS NOT NULL
                    AND NOT EXISTS (
                        SELECT 1
                        FROM DM.dbo.DM_Performance AS P
                        WHERE P.[Case Number] = M.[task.number]
                            AND P.[Last Update Datetime] = M.[task.sys_updated_on]
                    );

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``SN_raw.dbo.sn_hr_core_Service_Area.[u_name]``; ``SAP_raw.dbo.TGSBT.[GSBER_Service Area]`` .
            - :fa:`tag` *Setting Type:* Derived — Concatenation
            - :fa:`cogs` *How:* Fix the Service Area name by replacing 'Ã¼' with 'ü'; look up the SAP Service Area code; combine name and code with '-'.
            - :fa:`filter` *Filter:* Includes records where number starts with 'CIC'; leaves out records where status contains 'cancelled'/'read'.
                
            .. code-block:: tsql

                SELECT DISTINCT
                    CONCAT(REPLACE(BA.u_name, 'Ã¼', 'ü'), '-', T.[GSBER_Service Area]) AS [Service Area - Full]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_invoices AS I
                    ON M.[task.sys_id] = I.sys_id
                LEFT JOIN SN_raw.dbo.sn_hr_core_Service_Area AS BA
                    ON I.[Service_Area.value] = BA.sys_id
                LEFT JOIN SAP_raw.dbo.TGSBT AS T
                    ON T.[GTEXT_Service Area description] = REPLACE(BA.u_name, 'Ã¼', 'ü')
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%'
                    AND LEFT(M.[task.number], 3) <> 'INC';
        
        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM_Performance.[Service Area - Name]; [Service Area - Code]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql
                
                -- Complex query, see details in SP p_DM_Performance_RAS.					

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* ``DM_Performance.[Service Area - Name]; [Service Area - Code]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:*
            - :fa:`filter` *Filter:*
                
            .. code-block:: tsql
            
                SELECT 
                    [Case Number], 
                    [Service Area - Full], 
                    CONCAT([Service Area - Name], '-', [Service Area - Code]) AS [Service Area Combined]
                FROM 
                    DM.dbo.DM_Performance
                WHERE 
                    [Platform] = 'TMS';

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* ``DM_Person.[PA0001.GSBER_Service Area]; [PA0001.GSBER_Service Area:TGSBT.GTEXT_Service Area description]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql
            
                SELECT 
                    i.[Case Number], 
                    i.[Service Area - Full], 
                    NULLIF(
                    CONCAT(
                    J.[PA0001.GSBER_Service Area], '-', 
                    J.[PA0001.GSBER_Service Area:TGSBT.GTEXT_Service Area description]
                    ), 
                    '-'
                    ) AS [Service Area Combined]
                FROM 
                    [MANUAL].dbo.[2022_Monitoring_Sheet_updated] M
                LEFT JOIN 
                    DM.dbo.DM_Person J 
                    ON FORMAT(M.[Post], '00000000') = J.[PA0001.PLANS_Position]
                    AND M.[Case Creation Date] BETWEEN J.BEGDA_Master AND J.ENDDA_Master
                LEFT JOIN 
                    DM.dbo.DM_Performance i 
                    ON i.[Case Number] = M.[ID]
                WHERE 
                    i.[Platform] = 'Sharepoint';


.. ===========================================================================================
.. ==== Region ===============================================================================
.. ===========================================================================================

.. colref-detail:: perf_Region
    :title: Region

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[shc_case.u_Service_Area:shc_Service_Area.u_name]`` → ``SAP_raw.dbo.TGSBT.[GSBER_Service Area]`` → ``SAP_Raw.dbo.ZDEPT_UNIT.[REGION_Region]``
            - :fa:`tag` *Setting Type:* Derived — Mapping
            - :fa:`cogs` *How:* Use the business-area name to look up the business-area code, then use that code to look up the Region in ZDEPT_UNIT.
            - :fa:`filter` *Filter:* Includes cases with the specified HR case types; excludes cases with blank case numbers, cancelled or blank status, and ``'Demo Quality Assurance'`` service.
                
            .. code-block:: tsql
                
                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    Z.[REGION_Region] AS [Region]
                FROM DM.dbo.DM_SG_Cases AS S
                JOIN SAP_raw.dbo.TGSBT AS T
                    ON T.[GTEXT_Service Area description]
                      = REPLACE(S.[shc_case.u_Service_Area:shc_Service_Area.u_name], 'Ã¼', 'ü')
                JOIN SAP_Raw.dbo.ZDEPT_UNIT AS Z
                    ON Z.[GSBER_Service Area] = T.[GSBER_Service Area]
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (
                        S.[task.state.sys_choice] NOT IN ('Cancelled', 'Canceled')
                        OR S.[task.state.sys_choice] IS NULL
                    )
                    AND S.[task.sys_class_name] IN (
                        'sn_hr_core_case_operations',
                        'sn_hr_core_case_payroll',
                        'sn_hr_core_case_relations',
                        'sn_hr_core_case_total_rewards',
                        'sn_hr_core_case_workforce_admin',
                        'sn_hr_le_case'
                    )
                    AND S.[shc_case.hr_service:shc_service.name] <> 'Demo Quality Assurance'; 

        .. tab-item:: SG Inc

            - :fa:`database` *Lineage:* ``DM_SG_Incidents.[task.location:cmn_location.name]`` → ``SN.dbo.[10-cmn_location].[cmn_location.full_name]`` → ``SN.dbo.[10-cmn_location].[cmn_location.u_region:u_region.u_sap_code]``
            - :fa:`tag` *Setting Type:* Derived — Mapping
            - :fa:`cogs` *How:* Use the incident’s location to look up the SAP region code in the locations list, then normalize the code from ``'Reg2R'`` to ``'Reg2'``.
            - :fa:`filter` *Filter:* Includes incidents with case numbers starting ``'INC'`` and a matching location; leaves out incidents without a matching location or non‑incidents.
                
            .. code-block:: tsql 

                UPDATE DM_Performance 
                SET Region = SN.dbo.[10-cmn_location].[cmn_location.u_region:u_region.u_sap_code]
                FROM SN.dbo.[10-cmn_location] 
                WITH ( TABLOCK )
                INNER JOIN DM.dbo.DM_SG_Incidents 
                    WITH ( TABLOCK )
                    ON	DM.dbo.DM_SG_Incidents.[task.location:cmn_location.name] = SN.dbo.[10-cmn_location].[cmn_location.full_name]
                WHERE	LEFT([Case Number],3) = 'INC'
                    AND DM.dbo.DM_SG_Incidents.[task.number] = DM_Performance.[Case Number]

                UPDATE DM_Performance
                SET Region = 'Reg2'
                WHERE Region = 'Reg2R'
                    AND LEFT ( [Case Number] , 3 ) = 'INC'

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN_raw.dbo.x_adsr_unall_travel_case.[u_Service_Area_code]`` → ``DM_Calendar.[Region]`` (keyed by ``DM_Calendar.[Service Area - Code]`` at latest ``DM_Calendar.[Master Date]``)
            - :fa:`tag` *Setting Type:* Derived — Mapping
            - :fa:`cogs` *How:* Use the travel case’s business‑area code to look up the Region in the latest calendar.
            - :fa:`filter` *Filter:* Includes records with ``[task.number]`` prefixed with ``'TRV%'`` , in Demo assignment groups, created on or after ``'2024-03-11'`` , tied to a Travel SLA, with SLA activity present, with either ``[task.state.sys_choice]`` or ``[task.closed_at]`` present, and with a non‑blank business‑area code; leaves out records with status ``'Cancelled'`` , records where both status and close date are missing, and records already loaded with the same ``[Case Number]`` and ``[Last Update Datetime]`` .
            
            .. code-block:: tsql

                SELECT DISTINCT
                    C.[Region] AS [Region]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS J
                    ON M.[task.sys_id] = J.sys_id
                LEFT JOIN DM.dbo.DM_Calendar AS C
                    ON J.[u_Service_Area_code] = C.[Service Area - Code]
                    AND C.[Master Date] = (SELECT TOP 1 [Master Date] FROM DM.dbo.DM_Calendar ORDER BY 1 DESC)
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND S.[task_sla.has_breached] IS NOT NULL
                    AND ISNULL(M.[task.state.sys_choice], '') <> 'Cancelled'
                    AND NOT (M.[task.state.sys_choice] IS NULL AND M.[task.closed_at] IS NULL)
                    AND NULLIF(J.u_Service_Area_code, '') IS NOT NULL
                    AND NOT EXISTS (
                        SELECT 1
                        FROM DM.dbo.DM_Performance AS P
                        WHERE P.[Case Number] = M.[task.number]
                            AND P.[Last Update Datetime] = M.[task.sys_updated_on]
                    );

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``SAP_Raw.dbo.ZDEPT_UNIT.REGION_Region``
            - :fa:`tag` *Setting Type:* Derived — Mapping
            - :fa:`cogs` *How:* Look up the case’s Service Area code in the SAP list and use the matching region name.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.
            
            .. code-block:: tsql
                
                SELECT DISTINCT
                    R.REGION_Region AS [Region]
                FROM DM.dbo.DM_Performance AS I
                INNER JOIN SAP_Raw.dbo.ZDEPT_UNIT AS R
                    ON I.[Service Area - Code] = R.[GSBER_Service Area]
                WHERE I.[Case Number] LIKE 'CIC%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql
                
                -- Complex query; see details in SP p_DM_Performance_RAS.

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Onboarding.[Region]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT 
                    [Requisition Action], 
                    [Region]
                FROM 
                    DM.dbo.DM_Onboarding;

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Calendar.[Region]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT 
                    i.[Case Number], 
                    i.[Region], 
                    J.[Region]
                FROM 
                    DM.dbo.DM_Calendar J
                INNER JOIN 
                    DM.dbo.DM_Performance i 
                    ON i.[Service Area - Code] = J.[Service Area - Code]
                WHERE 
                    i.[Platform] = 'Sharepoint';


.. ===========================================================================================
.. ==== Status ===============================================================================
.. ===========================================================================================

.. colref-detail:: perf_Status
    :title: Status

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``SN_raw.dbo.task.[state]`` → ``SN_raw.dbo.sys_choice.[label]``; ``DM_SG_Cases.[task.state.sys_choice]``
            - :fa:`tag` *Setting Type:* Derived — Mapping
            - :fa:`cogs` *How:* Look up the status label from the choices list; if that is unavailable, use the case’s status text.
            - :fa:`filter` *Filter:* Include cases with the specified HR case types; exclude cases with blank case numbers, cancelled or blank status, and 'Demo Quality Assurance' service.            

            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    COALESCE(Sc.[label], S.[task.state.sys_choice]) AS [Status]
                FROM DM.dbo.DM_SG_Cases AS S
                LEFT JOIN SN_raw.dbo.task AS T
                ON T.[number] = S.[task.number]
                LEFT JOIN (
                    SELECT DISTINCT [label], [value]
                    FROM SN_raw.dbo.sys_choice
                    WHERE [element] = 'state'
                    AND [name] IN ('sn_hr_core_case', 'sn_hr_core_task')
                ) AS Sc
                ON T.[state] = Sc.[value]
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (
                        COALESCE(Sc.[label], S.[task.state.sys_choice]) NOT IN ('Cancelled', 'Canceled')
                        OR COALESCE(Sc.[label], S.[task.state.sys_choice]) IS NULL
                    )
                    AND S.[task.sys_class_name] IN (
                        'sn_hr_core_case_operations',
                        'sn_hr_core_case_payroll',
                        'sn_hr_core_case_relations',
                        'sn_hr_core_case_total_rewards',
                        'sn_hr_core_case_workforce_admin',
                        'sn_hr_le_case'
                    )
                    AND S.[shc_case.hr_service:shc_service.name] <> 'Demo Quality Assurance';

        .. tab-item:: SG Inc

            - :fa:`database` *Lineage:* ``DM_SG_Incidents.[incident.incident_state.sys_choice]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the incident’s incident‑state text.
            - :fa:`filter` *Filter:* Exclude incidents where both ``[task.state.sys_choice]`` and ``[incident.incident_state.sys_choice]`` are cancelled.
            
            .. code-block:: tsql

                SELECT
                    [incident.incident_state.sys_choice] AS [Status]
                FROM DM_SG_Incidents
                WHERE [task.state.sys_choice] NOT IN ('Cancelled','Canceled')
                    OR [incident.incident_state.sys_choice] NOT IN ('Cancelled','Canceled');

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.state.sys_choice]``; ``SN_raw.dbo.task.[state]`` → ``SN_raw.dbo.sys_choice.[label]`` (lists ``'sn_hr_core_task'`` and ``'task'``)
            - :fa:`tag` *Setting Type:* Derived — Mapping
            - :fa:`cogs` *How:* Prefer the user‑friendly status label from the choices list; if no label is available, use the task’s status text.
            - :fa:`filter` *Filter:* Includes records with ``[task.number]`` prefixed with ``'TRV%'`` , in Demo assignment groups, created on or after ``'2024-03-11'`` , tied to a Travel SLA, with SLA activity present, and with either ``[task.state.sys_choice]`` or ``[task.closed_at]`` present; leaves out records with status ``'Cancelled'`` , records where both status and close date are missing, and records already loaded with the same ``[Case Number]`` and ``[Last Update Datetime]`` .
            
            .. code-block:: tsql

                SELECT DISTINCT
                    COALESCE(M.[task.state.sys_choice], C1.[label], C2.[label]) AS [Status]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                LEFT JOIN SN_raw.dbo.task AS R
                    ON R.number = M.[task.number]
                LEFT JOIN (
                    SELECT DISTINCT [value], [label]
                    FROM SN_raw.dbo.sys_choice
                    WHERE [element] = 'state' AND [name] = 'sn_hr_core_task'
                    ) AS C1
                    ON R.[state] = C1.[value]
                LEFT JOIN (
                    SELECT DISTINCT [value], [label]
                    FROM SN_raw.dbo.sys_choice
                    WHERE [element] = 'state' AND [name] = 'task'
                    ) AS C2
                    ON R.[state] = C2.[value]
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND S.[task_sla.has_breached] IS NOT NULL
                    AND COALESCE(M.[task.state.sys_choice], C1.[label], C2.[label]) <> 'Cancelled'
                    AND NOT (COALESCE(M.[task.state.sys_choice], C1.[label], C2.[label]) IS NULL AND M.[task.closed_at] IS NULL)
                    AND NOT EXISTS (
                        SELECT 1
                        FROM DM.dbo.DM_Performance AS P
                        WHERE P.[Case Number] = M.[task.number]
                            AND P.[Last Update Datetime] = M.[task.sys_updated_on]
                    );

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``SN_raw.dbo.sys_choice.[label]``
            - :fa:`tag` *Setting Type:* Derived — Mapping
            - :fa:`cogs` *How:* Translate the system’s status code into a readable label using ServiceNow’s standard list.
            - :fa:`filter` *Filter:* Include CIC cases; exclude cases with 'Cancelled' or 'Read' status.
                
            .. code-block:: tsql
                
                SELECT DISTINCT
                    SC.[label] AS [Status]
                FROM DM.dbo.DM_Performance AS I
                INNER JOIN SN_raw.dbo.task AS RT
                    ON RT.[number] = I.[Case Number]
                LEFT JOIN (
                    SELECT DISTINCT [label], [value]
                    FROM SN_raw.dbo.sys_choice
                    WHERE [element] = 'state' AND [name] = 'sn_hr_core_task'
                ) AS SC
                    ON RT.[state] = SC.[value]
                WHERE I.[Case Number] LIKE 'CIC%';
                
        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[task.state.sys_choice]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:*
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT 
                    [task.number], 
                    [task.state.sys_choice]
                FROM 
                    DM.dbo.DM_SG_RAS;

        .. tab-item:: TMS

            - :fa:`database` *Lineage:*
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:**
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                -- Complex query, see details in procedure p_DM_Performance_TMS.

        .. tab-item:: SharePoint JC                  

            - :fa:`database` *Lineage:* ``[MANUAL].dbo.[2022_Monitoring_Sheet_updated]`` ``[Returned for clarification]`` ``[Date JD Classified]`` ``[Case Resubmitted]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:*
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT
                    CONCAT(
                        FORMAT([hief ], '0000'), '-', 
                        FORMAT([Post], '00000000')
                    ) AS [Formatted Code],
                    CASE
                        WHEN ISNULL([Returned for clarification], '1900-01-01') <= [Date JD Classified] 
                            AND [Date JD Classified] IS NOT NULL THEN 'Closed'
                        WHEN [Returned for clarification] IS NOT NULL 
                            AND [Case Resubmitted] IS NULL THEN 'Returned'
                        ELSE 'Open'
                    END AS [Case Status]
                FROM 
                    [MANUAL].dbo.[2022_Monitoring_Sheet_updated];


.. ===========================================================================================
.. ==== Parent Case Number ===================================================================
.. ===========================================================================================

.. colref-detail:: perf_Parent_Case_Number
    :title: Parent Case Number

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[task.parent:task.number]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the case’s parent number.
            - :fa:`filter` *Filter:* Includes cases with the specified HR case types; excludes cases with blank case numbers, cancelled or blank status, and ``'Demo Quality Assurance'`` service.
                
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number]             AS [Case Number],
                    S.[task.parent:task.number] AS [Parent Case Number]
                FROM DM.dbo.DM_SG_Cases AS S
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (
                        S.[task.state.sys_choice] NOT IN ('Cancelled', 'Canceled')
                        OR S.[task.state.sys_choice] IS NULL
                    )
                    AND S.[task.sys_class_name] IN (
                        'sn_hr_core_case_operations',
                        'sn_hr_core_case_payroll',
                        'sn_hr_core_case_relations',
                        'sn_hr_core_case_total_rewards',
                        'sn_hr_core_case_workforce_admin',
                        'sn_hr_le_case'
                    )
                    AND S.[shc_case.hr_service:shc_service.name] <> 'Demo Quality Assurance';

        .. tab-item:: SG Inc

            - :fa:`database` *Lineage:* ``DM_SG_Incidents.[task.parent:task.number]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the incident’s parent number from the incident record.
            - :fa:`filter` *Filter:* Includes incidents where either ``[task.state.sys_choice]`` or ``[incident.incident_state.sys_choice]`` is not ``'Cancelled'``/ ``'Canceled'``; leaves out incidents where both are ``'Cancelled'``/ ``'Canceled'`` .
        
            .. code-block:: tsql

                SELECT
                    [task.parent:task.number] AS [Parent Case Number]
                FROM DM_SG_Incidents
                WHERE [task.state.sys_choice] NOT IN ('Cancelled','Canceled')
                    OR [incident.incident_state.sys_choice] NOT IN ('Cancelled','Canceled');  

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.parent:task.number]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the travel case’s parent number.
            - :fa:`filter` *Filter:* Includes records with ``[task.number]`` prefixed with ``'TRV%'``, in Demo assignment groups, created on or after ``'2024-03-11'``, tied to a Travel SLA, with SLA activity present, and with either ``[task.state.sys_choice]`` or ``[task.closed_at]`` present; leaves out records with status ``'Cancelled'`` , records where both status and close date are missing, and records already loaded with the same ``[Case Number]`` and ``[Last Update Datetime]`` .
            
            .. code-block:: tsql

                SELECT DISTINCT
                    M.[task.parent:task.number] AS [Parent Case Number]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND S.[task_sla.has_breached] IS NOT NULL
                    AND ISNULL(M.[task.state.sys_choice], '') <> 'Cancelled'
                    AND NOT (M.[task.state.sys_choice] IS NULL AND M.[task.closed_at] IS NULL)
                    AND NOT EXISTS (
                        SELECT 1
                        FROM DM.dbo.DM_Performance AS P
                        WHERE P.[Case Number] = M.[task.number]
                            AND P.[Last Update Datetime] = M.[task.sys_updated_on]
                    );

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.parent:task.number]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Show the parent ticket’s number if the case has one; otherwise leave it blank.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.
                
            .. code-block:: tsql

                SELECT DISTINCT
                    M.[task.parent:task.number] AS [Parent Case Number]
                FROM SN.dbo.[10-task] AS M
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[task.number]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT 
                    [task.number]
                FROM 
                    DM.dbo.DM_SG_RAS;
                
        .. tab-item:: TMS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Onboarding.[Requisition Number]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT 
                    [Requisition Action],
                    [Requisition Number]
                FROM 
                    DM.dbo.DM_Onboarding;

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
            
            .. code-block:: tsql
            
            -- Field not mentioned in p_DM_Performance_JC.


.. ===========================================================================================
.. ==== Cancelled ============================================================================
.. ===========================================================================================

.. colref-detail:: perf_Cancelled
    :title: Cancelled

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[task.state.sys_choice]``
            - :fa:`tag` *Setting Type:* Derived — Calculation
            - :fa:`cogs` *How:* Set to ``1`` when the case status is cancelled; otherwise ``0``.
            - :fa:`filter` *Filter:* Includes cases with the specified HR case types; excludes cases with blank case numbers, cancelled or blank status, and ``'Demo Quality Assurance'`` service.

                .. code-block:: tsql

                    SELECT DISTINCT
                        S.[task.number] AS [Case Number],
                        CASE
                            WHEN S.[task.state.sys_choice] = 'Cancelled' THEN 1
                            ELSE 0
                        END AS [Cancelled]
                    FROM DM.dbo.DM_SG_Cases AS S
                    WHERE
                        S.[task.number] IS NOT NULL
                        AND LEN(S.[task.number]) > 0
                        AND (
                            S.[task.state.sys_choice] NOT IN ('Cancelled', 'Canceled')
                            OR S.[task.state.sys_choice] IS NULL
                        )
                        AND S.[task.sys_class_name] IN (
                            'sn_hr_core_case_operations',
                            'sn_hr_core_case_payroll',
                            'sn_hr_core_case_relations',
                            'sn_hr_core_case_total_rewards',
                            'sn_hr_core_case_workforce_admin',
                            'sn_hr_le_case'
                        )
                        AND S.[shc_case.hr_service:shc_service.name] <> 'Demo Quality Assurance'; 

        .. tab-item:: SG Inc

            - :fa:`database` *Lineage:* ``DM_Performance.[Status]``
            - :fa:`tag` *Setting Type:* Derived — Calculation
            - :fa:`cogs` *How:* Set to ``1`` when ``[Status]`` is ``'Cancelled'`` or ``'Canceled'``; otherwise ``0``.
            - :fa:`filter` *Filter:* Includes incidents with case numbers starting ``'INC'``; leaves out non‑incidents.
                
            .. code-block:: tsql

                UPDATE DM_Performance
                SET [Cancelled] =
                    CASE 
                        WHEN [Status] = 'Cancelled' OR [Status] = 'Canceled' THEN '1'
                        ELSE '0'
                    END
                WHERE LEFT([Case Number],3) = 'INC';

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.state.sys_choice]``
            - :fa:`tag` *Setting Type:* Derived — Calculation
            - :fa:`cogs` *How:* Set to 1 when the case has Cancelled status; otherwise 0.
            - :fa:`filter` *Filter:* Includes Travel cases in Demo assignment groups, created on or after ``'2024-03-11'`` , tied to a Travel SLA, with SLA activity present, and with either ``[task.state.sys_choice]`` or ``[task.closed_at]`` present; leaves out cancelled records, records with missing status and close date, and records already loaded with the same ``Case Number`` and ``Last Update Datetime`` .
            
            .. code-block:: tsql

                SELECT DISTINCT
                    CASE WHEN M.[task.state.sys_choice] = 'Cancelled' THEN 1 ELSE 0 END AS [Cancelled]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND S.[task_sla.has_breached] IS NOT NULL
                    AND ISNULL(M.[task.state.sys_choice], '') <> 'Cancelled'
                    AND NOT (M.[task.state.sys_choice] IS NULL AND M.[task.closed_at] IS NULL)
                    AND NOT EXISTS (
                        SELECT 1
                        FROM DM.dbo.DM_Performance AS P
                        WHERE P.[Case Number] = M.[task.number]
                            AND P.[Last Update Datetime] = M.[task.sys_updated_on]
                    );

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``Derived — CASE WHEN SN.dbo.[10-task].[task.state.sys_choice] = 'Cancelled' THEN 1 ELSE 0 END``
            - :fa:`tag` *Setting Type:* Derived — Business‑rule
            - :fa:`cogs` *How:* Set to 1 when the case has Cancelled status; otherwise 0.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.
                
            .. code-block:: tsql

                SELECT DISTINCT
                    CASE WHEN M.[task.state.sys_choice] = 'Cancelled' THEN 1 ELSE 0 END AS [Cancelled]
                FROM SN.dbo.[10-task] AS M
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[task.state.sys_choice]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
            
            .. code-block:: tsql

                SELECT 
                    [task.number], 
                    CASE 
                        WHEN [task.state.sys_choice] = 'Cancelled' THEN 1 
                        ELSE 0 
                    END AS [Cancelled Flag]
                FROM 
                    DM.dbo.DM_SG_RAS;

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Onboarding.[Cancelled]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT 
                    [Requisition Action], 
                    [Cancelled]
                FROM 
                    DM.dbo.DM_Onboarding;

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
            
            .. code-block:: tsql

                -- Field not mentioned in p_DM_Performance_JC.


.. ===========================================================================================
.. ==== Case Closed ==========================================================================
.. ===========================================================================================

.. colref-detail:: perf_Case_Closed
    :title: Case Closed

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[task.closed_at]``
            - :fa:`tag` *Setting Type:* Derived — Calculation
            - :fa:`cogs` *How:* Set to ``1`` when the case has a close timestamp; otherwise ``0``.
            - :fa:`filter` *Filter:* Includes cases with the specified HR case types; excludes cases with blank case numbers, cancelled or blank status, and ``'Demo Quality Assurance'`` service.
                
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    CASE WHEN S.[task.closed_at] IS NOT NULL THEN 1 ELSE 0 END AS [Case Closed]
                FROM DM.dbo.DM_SG_Cases AS S
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (
                        S.[task.state.sys_choice] NOT IN ('Cancelled', 'Canceled')
                        OR S.[task.state.sys_choice] IS NULL
                    )
                    AND S.[task.sys_class_name] IN (
                        'sn_hr_core_case_operations',
                        'sn_hr_core_case_payroll',
                        'sn_hr_core_case_relations',
                        'sn_hr_core_case_total_rewards',
                        'sn_hr_core_case_workforce_admin',
                        'sn_hr_le_case'
                    )
                    AND S.[shc_case.hr_service:shc_service.name] <> 'Demo Quality Assurance';

        .. tab-item:: SG Inc

            - :fa:`database` *Lineage:* ``DM_SG_Incidents.[incident.incident_state.sys_choice]``
            - :fa:`tag` *Setting Type:* Derived — Calculation
            - :fa:`cogs` *How:* Set to ``1`` when the incident state is ``'Closed'`` or ``'Resolved'``; otherwise ``0``.
            - :fa:`filter` *Filter:* Includes incidents where either ``[task.state.sys_choice]`` or ``[incident.incident_state.sys_choice]`` is not ``'Cancelled'``/ ``'Canceled'``; leaves out incidents where both are ``'Cancelled'``/ ``'Canceled'`` .
            
            .. code-block:: tsql

                SELECT
                    CASE 
                        WHEN [incident.incident_state.sys_choice] IN ('Closed','Resolved') THEN '1'
                        ELSE '0'
                    END AS [Case Closed]
                FROM DM_SG_Incidents
                WHERE [task.state.sys_choice] NOT IN ('Cancelled','Canceled')
                    OR [incident.incident_state.sys_choice] NOT IN ('Cancelled','Canceled'); 

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.closed_at]``
            - :fa:`tag` *Setting Type:* Derived — Calculation
            - :fa:`cogs` *How:* Set to ``1`` when a close time is present (ignoring ``'1900-01-01'`` ); otherwise ``0`` .
            - :fa:`filter` *Filter:* Includes records with ``[task.number]`` prefixed with ``'TRV%'`` , in Demo assignment groups, created on or after ``'2024-03-11'`` , tied to a Travel SLA, with SLA activity present, and with either ``[task.state.sys_choice]`` or ``[task.closed_at]`` present; leaves out records with status ``'Cancelled'`` , records where both status and close date are missing, and records already loaded with the same ``[Case Number]`` and ``[Last Update Datetime]`` .
            
            .. code-block:: tsql

                SELECT DISTINCT
                    CASE WHEN NULLIF(M.[task.closed_at], '1900-01-01') IS NOT NULL THEN 1 ELSE 0 END AS [Case Closed]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND S.[task_sla.has_breached] IS NOT NULL
                    AND ISNULL(M.[task.state.sys_choice], '') <> 'Cancelled'
                    AND NOT (M.[task.state.sys_choice] IS NULL AND M.[task.closed_at] IS NULL)
                    AND NOT EXISTS (
                        SELECT 1
                        FROM DM.dbo.DM_Performance AS P
                        WHERE P.[Case Number] = M.[task.number]
                            AND P.[Last Update Datetime] = M.[task.sys_updated_on]
                    );

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``Derived — CASE WHEN NULLIF(SN.dbo.[10-task].[task.closed_at], '1900-01-01') IS NOT NULL THEN 1 ELSE 0 END``
            - :fa:`tag` *Setting Type:* Derived — Business‑rule
            - :fa:`cogs` *How:* Set to 1 (yes) when the case has a close date; otherwise 0 (no).
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.
                
            .. code-block:: tsql

                SELECT DISTINCT
                    CASE 
                        WHEN NULLIF(M.[task.closed_at], '1900-01-01') IS NOT NULL THEN 1 
                        ELSE 0 
                    END AS [Case Closed]
                FROM SN.dbo.[10-task] AS M
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[task.closed_at];[task_sla.end_time]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT 
                    [task.number], 
                    CASE 
                        WHEN NULLIF(ISNULL([task.closed_at], [task_sla.end_time]), '1900-01-01') IS NOT NULL THEN 1 
                        ELSE 0 
                    END AS [Case Closed Flag]
                FROM 
                    DM.dbo.DM_SG_RAS;

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Onboarding.[TMS_action_end_date]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT 
                    [Requisition Action], 
                    CASE 
                        WHEN TMS_action_end_date IS NULL THEN 0 
                        ELSE 1 
                    END AS [Case Closed Flag]
                FROM 
                    DM.dbo.DM_Onboarding;

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* ``[MANUAL].dbo.[2022_Monitoring_Sheet_updated].[Returned for clarification]`` ``[Date JD Classified]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
            
            .. code-block:: tsql

                SELECT
                    CONCAT(
                        FORMAT([hief ], '0000'), '-', 
                        FORMAT([Post], '00000000')
                    ) AS [Formatted Code],
                    CASE
                        WHEN ISNULL([Returned for clarification], '1900-01-01') <= [Date JD Classified] 
                            AND [Date JD Classified] IS NOT NULL THEN 1
                        ELSE 0
                    END AS [Case Closed Flag]
                FROM 
                    [MANUAL].dbo.[2022_Monitoring_Sheet_updated];


.. ===========================================================================================
.. ==== Short Description ====================================================================
.. ===========================================================================================

.. colref-detail:: perf_Short_Desc
    :title: Short Description

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[task.short_description.sys_choice]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the case’s short description text.
            - :fa:`filter` *Filter:* Includes cases with the specified HR case types; excludes cases with blank case numbers, cancelled or blank status, and ``'Demo Quality Assurance'`` service.
                
            .. code-block:: tsql
                
                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    S.[task.short_description.sys_choice] AS [Short Description]
                FROM DM.dbo.DM_SG_Cases AS S
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (
                        S.[task.state.sys_choice] NOT IN ('Cancelled', 'Canceled')
                        OR S.[task.state.sys_choice] IS NULL
                    )
                    AND S.[task.sys_class_name] IN (
                        'sn_hr_core_case_operations',
                        'sn_hr_core_case_payroll',
                        'sn_hr_core_case_relations',
                        'sn_hr_core_case_total_rewards',
                        'sn_hr_core_case_workforce_admin',
                        'sn_hr_le_case'
                    )
                    AND S.[shc_case.hr_service:shc_service.name] <> 'Demo Quality Assurance';
                        
        .. tab-item:: SG Inc

            - :fa:`database` *Lineage:* ``DM_Performance.[Case Number]`` → ``DM_SG_Incidents.[task.number]`` → ``DM_SG_Incidents.[task.short_description.sys_choice]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the incident’s short description from the incident record.
            - :fa:`filter` *Filter:* Includes incidents with case numbers starting ``'INC'`` and ``[Case Number]`` matching ``[task.number]``; leaves out non‑incidents.
            
            .. code-block:: tsql

                UPDATE DM_Performance
                SET [Short Description] = R.[task.short_description.sys_choice]
                FROM DM_SG_Incidents R
                WHERE LEFT([Case Number],3) = 'INC'
                    AND [Case Number] = R.[task.number];

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.short_description.sys_choice]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the travel case’s short description.
            - :fa:`filter` *Filter:* Includes records with ``[task.number]`` prefixed with ``'TRV%'`` , in Demo assignment groups, created on or after ``'2024-03-11'`` , tied to a Travel SLA, with SLA activity present, and with either ``[task.state.sys_choice]`` or ``[task.closed_at]`` present; leaves out records with status ``'Cancelled'`` , records where both status and close date are missing, and records already loaded with the same ``[Case Number]`` and ``[Last Update Datetime]`` .
            
            .. code-block:: tsql

                SELECT DISTINCT
                    M.[task.short_description.sys_choice] AS [Short Description]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND S.[task_sla.has_breached] IS NOT NULL
                    AND ISNULL(M.[task.state.sys_choice], '') <> 'Cancelled'
                    AND NOT (M.[task.state.sys_choice] IS NULL AND M.[task.closed_at] IS NULL)
                    AND NOT EXISTS (
                        SELECT 1
                        FROM DM.dbo.DM_Performance AS P
                        WHERE P.[Case Number] = M.[task.number]
                            AND P.[Last Update Datetime] = M.[task.sys_updated_on]
                    );

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.short_description.sys_choice]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the short description text from the case.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.
                
            .. code-block:: tsql

                SELECT DISTINCT
                    M.[task.short_description.sys_choice] AS [Short Description]
                FROM SN.dbo.[10-task] AS M
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[task.short_description.sys_choice]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT 
                    [task.number],
                    [task.short_description.sys_choice]
                FROM 
                    DM.dbo.DM_SG_RAS;

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
        
            .. code-block:: tsql
            
                -- Field not mentioned in p_DM_Performance_TMS.

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_JC.





