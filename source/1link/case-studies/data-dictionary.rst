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

Data Dictionary
===============

|br|

Filter with header icons > Expand row toggles for hidden fields > Click truncated text or  :fas:`circle-info;sd-text-info` for full details.


.. =================================================================================================================
.. --- DM_Changes Col. Ref. ---------------------------------------------------------------------------------------
.. =================================================================================================================

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
      - TR-Agent: (Third)
      - Transaction code for the third travel agency used on the trip
      - ``ZV28``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Third`

    * - DM_Trips
      - TR-Agent: (Fourth)
      - Transaction code for the fourth travel agency used on the trip
      - ``ZV28``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Fourth`

    * - DM_Trips
      - TR-Agent: (Fifth)
      - Transaction code for the fifth travel agency used on the trip
      - ``ZV28``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Fifth`

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
      - TR-Agent: (Third) USD
      - Service-fee charged by the third travel agency used on the trip
      - ``500.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Third_USD`

    * - DM_Trips
      - TR-Agent: (Fourth) USD
      - Service-fee charged by the fourth travel agency used on the trip
      - ``500.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Fourth_USD`

    * - DM_Trips
      - TR-Agent: (Fifth) USD
      - Service-fee charged by the fifth travel agency used on the trip
      - ``500.00``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Fifth_USD`

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
      - TR-Agent: (Third) Name
      - Name of the third travel agency used on the trip
      - ``TR-Agent:TVTR04 Delta Turistik``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Third_Name`

    * - DM_Trips
      - TR-Agent: (Fourth) Name
      - Name of the fourth travel agency used on the trip
      - ``TR-Agent:TVTR04 Delta Turistik``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Fourth_Name`

    * - DM_Trips
      - TR-Agent: (Fifth) Name
      - Name of the fifth travel agency used on the trip
      - ``TR-Agent:TVTR04 Delta Turistik``
      - SAP
      - PTRV_SREC (Trip Statistics – Receipts)
      - N/A
      - :colrefopen:`trips_TR-Agent_Fifth_Name`

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
      - First_Day_of_Month
      - Start date of the validity window for the person
      - ``NULL``
      - SAP
      - N/A
      - Unused column. To be reviewed.      
      - Set from ``BEGDA_Master`` within ``DM_Person``
    
    * - DM_Person
      - Last_Day_of_Month
      - End date of the validity window for the person
      - ``NULL``
      - SAP      
      - N/A
      - Unused column. To be reviewed
      - Set from ``ENDDA_Master`` within ``DM_Person``

    * - DM_Person
      - PA0000.AEDTM_Date of Last Change
      - Date the Actions record was last changed
      - ``2025-09-10``
      - SAP      
      - PA0000 - HR Master Record: Infotype 0000 (Actions)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``

    * - DM_Person
      - PA0000.BEGDA_Start Date
      - Start date of the Actions record's validity period
      - ``2025-09-10``
      - SAP
      - PA0000 - HR Master Record: Infotype 0000 (Actions)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``
    
    * - DM_Person
      - PA0000.ENDDA_End Date
      - End date of the Actions record's validity period
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
      - PA0000.SEQNR_Number of Infotype Record with Same Key
      - Sequence number for an Actions record when multiple records share the same key
      - ``000``
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
      - PA0000.MASSN_Action Type:T529T.MNTXT_Name of Action Type
      - Text name of the personnel action type
      - ``Hire Person``, ``Promotion``
      - SAP
      - PA0000 - HR Master Record: Infotype 0000 (Actions)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``

    * - DM_Person
      - PA0000.Extract_Timestamp
      - Date and time the PA0000 record was extracted
      - ``2025-06-10 15:37:50.000``
      - N/A
      - N/A
      - N/A
      - N/A

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
      - PA0001.ANSVH_Work Contract
      - Code that classifies that person's work contract
      - ``01``, ``15``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``

    * - DM_Person
      - PA0001.BEGDA_Start Date
      - Start date of the Organizational Assignment record’s validity period.
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
      - PA0001.BUKRS_Company Code
      - Code that records the person's 'company' (The United Nations)
      - ``1000``
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
      - PA0001.ENDDA_End Date
      - End date of the Organizational Assignment record’s validity period.
      - ``2025-09-10``
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
      - PA0001.GSBER_Service Area
      - Code for the person's CLIENT Service Area
      - ``1950``, ``4500``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``

    * - DM_Person
      - PA0001.ORGEH_Organizational Unit
      - Code for the person's Organizational Unit
      - ``00000303``
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
      - PA0001.PLANS_Position
      - Code for the person's post
      - ``00000179``
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
      - PA0001.SEQNR_Number of Infotype Record with Same Key
      - Sequence number for Org. Assignment record when multiple records share the same key.
      - ``000``
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
      - PA0001.STELL_Job
      - Code that represents the person's job
      - ``00000052``
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
      - PA0001.PLANS_Position:T528B.ORGEH_Organizational Unit
      - Code for the person's organizational unit
      - ``00000000``
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
      - PA0002.ANZKD_Number of Children
      - Shows how many children the person has.
      - ``NULL``
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
      - PA0002.FAMST_Marital Status Key
      - Code for the person’s marital status
      - ``1``, ``5``, ``Z``
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
      - PA0002.KNZNM_Name Format Indicator for Employee in a List
      - Format indicator for showing the employee’s name in lists.
      - ``00``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.MIDNM_Middle Name
      - The person's middle name
      - ``Jane``, ``John``
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
      - PA0002.PERMO_Modifier for Personnel Identifier
      - Modifier for generating the person's personnel number.
      - ``UN``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.RUFNM_Nickname
      - The person's nickname
      - ``NULL``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.SEQNR_Number of Infotype Record with Same Key
      - Sequence number for an Personal Data record when multiple records share the same key.
      - ``000``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.SPRSL_Communication Language
      - Code for language the person uses for communication
      - ``NULL``
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
      - PA0002.VORNA_First Name
      - The person's first name
      - ``Jane``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.ANRED_Form-of-Address Key:T522T.ATEXT_Form of Address Text
      - Form of address used for the person
      - ``Dr``, ``Ms``
      - SAP
      - PA0002 - HR Master Record: Infotype 0002 (Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0002.SPRSL_Communication Language:T002T.SPTXT_Name of Language
      - Name of the language the person uses for communication
      - ``NULL``
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
      - PA0008.ANSAL_Annual salary
      - The person's annual salary amount
      - ``0.00``
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
      - PA0008.EIN04_Time/Measurement Unit
      - Unit of time or measurement for the person's payroll data (field 04)
      - ``NULL``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.EIN05_Time/Measurement Unit
      - Unit of time or measurement for the person's payroll data (field 05)
      - ``NULL``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.ENDDA_End Date
      - End date of the Basic Pay record’s validity period.
      - ``2025-06-10``
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
      - PA0008.LGA06_Wage Type
      - Wage type applied to the person in payroll (field 06).
      - ``NULL``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.LGA07_Wage Type
      - Wage type applied to the person in payroll (field 07)
      - ``NULL``
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
      - PA0008.SEQNR_Number of Infotype Record with Same Key
      - Sequence number for Basic Pay record when multiple records share the same key.
      - ``000``
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
      - PA0008.SUBTY_Subtype
      - Code for the subtype pf the person's Basic Pay record.
      - ``NULL``
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
      - PA0008.VGLGB_Comparison pay scale area
      - The person's pay scale area used for comparison purposes in pay scale classification.
      - ``BJ``, ``CG``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.VGLGR_Comparison pay scale group
      - The person's post level group
      - ``P-2``, ``G-7``
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
      - PA0008.WAERS_Currency Key:TCURT.KTEXT_Short text
      - Short text description of the currency of the person's Basic Pay amounts
      - ``Austr. Dollar``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.WAERS_Currency Key:TCURT.LTEXT_Long Text
      - Long text description of the currency of the person's Basic Pay amounts
      - ``Australian Dollar``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0008.Extract_Timestamp
      - Timestamp of when the Basic Pay record was extracted.
      - ``2025-06-10 15:37:50.000``
      - SAP
      - PA0008 - HR Master Record: Infotype 0008 (Basic Pay)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0016.BEGDA_Start Date
      - Start date of the Contract Elements record’s validity period
      - ``2025-06-10``
      - SAP
      - PA0016 - HR Master Record: Infotype 0016 (Contract Elements)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0016.CTEDT_Contract End Date
      - End date of the person's contract
      - ``2025-06-10``
      - SAP
      - PA0016 - HR Master Record: Infotype 0016 (Contract Elements)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0016.CTTYP_Contract Type
      - Code for the person's contract type
      - ``Z3``, ``Z5``
      - SAP
      - PA0016 - HR Master Record: Infotype 0016 (Contract Elements)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0016.ENDDA_End Date
      - End date of the Contract Elements record's validity period.
      - ``2025-06-10``
      - SAP
      - PA0016 - HR Master Record: Infotype 0016 (Contract Elements)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0016.ITXEX_Text Exists for Infotype
      - Shows whether text is stored for this SAP Infotype
      - ``X``, ``NULL``
      - SAP
      - PA0016 - HR Master Record: Infotype 0016 (Contract Elements)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0016.KGZFR_Sick Pay Supplement Period (Number)
      - Duration of the person's sick pay supplement measured in weeks
      - ``6``
      - SAP
      - PA0016 - HR Master Record: Infotype 0016 (Contract Elements)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0016.LFZFR_Period of Continued Pay (Number)
      - Duration of the person's continued pay entitlement measured in weeks
      - ``42``
      - SAP
      - PA0016 - HR Master Record: Infotype 0016 (Contract Elements)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0016.PRBZT_Probationary Period (Number)
      - The person's probationary period measured in months
      - ``3``
      - SAP
      - PA0016 - HR Master Record: Infotype 0016 (Contract Elements)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0016.SEQNR_Number of Infotype Record with Same Key
      - Sequence number for the Contract Elements record when multiple records share the same key.
      - ``000``
      - SAP
      - PA0016 - HR Master Record: Infotype 0016 (Contract Elements)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0016.SPRPS_Lock Indicator for HR Master Data Record
      - Shows whether the person's HR Master Data record is locked
      - ``X``, ``NULL``
      - SAP
      - PA0016 - HR Master Record: Infotype 0016 (Contract Elements)
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
      - PA0016.Extract_Timestamp
      - Date and time when the person's Contract Elements record was last extracted.
      - ``2025-06-10 15:37:50.000``
      - SAP
      - PA0016 - HR Master Record: Infotype 0016 (Contract Elements)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0077.AEDTM_Date of Last Change
      - Date when the person's Additional Personal Data record was last changed.
      - ``2025-06-10``
      - SAP
      - PA0077 - HR Master Record: Infotype 0077 (Additional Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0077.BEGDA_Start Date
      - Start date of the Additional Personal Data record's validity period.
      - ``2025-06-10``
      - SAP
      - PA0077 - HR Master Record: Infotype 0077 (Additional Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0077.ENDDA_End Date
      - Start date of the Additional Personal Data record's validity period.
      - ``2025-06-10``
      - SAP
      - PA0077 - HR Master Record: Infotype 0077 (Additional Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0077.FUNC_TITLE_Comment
      - Free-text comment field to describe the person's function or title.
      - ``2018 Annual Results Report Writer``
      - SAP
      - PA0077 - HR Master Record: Infotype 0077 (Additional Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0077.MILSA_Military status
      - Code for the person's military status
      - ``00``
      - SAP
      - PA0077 - HR Master Record: Infotype 0077 (Additional Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0077.ON_PERM_Checkbox
      - Shows whether the person is on a permanent contract.
      - ``X``, ``NULL``
      - SAP
      - PA0077 - HR Master Record: Infotype 0077 (Additional Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0077.PAID_PERSONAL_Checkbox
      - Shows whether the person has a paid personal agreement
      - ``X``, ``NULL``
      - SAP
      - PA0077 - HR Master Record: Infotype 0077 (Additional Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0077.PART_TIME_Checkbox
      - Shows whether the person works part-time
      - ``X``, ``NULL``
      - SAP
      - PA0077 - HR Master Record: Infotype 0077 (Additional Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0077.PO_MOU_Comment
      - Free-text comment for memorandum of understanding or partner agreement information.
      - ``Stand-By Partner Agreement deployed by DRC``
      - SAP
      - PA0077 - HR Master Record: Infotype 0077 (Additional Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0077.SEQNR_Number of Infotype Record With Same Key
      - Sequence number for the Additional Personal Data record when multiple records share the same key.
      - ``000``
      - SAP
      - PA0077 - HR Master Record: Infotype 0077 (Additional Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0077.SYSTEM_ACCESS_Checkbox
      - Shows whether the person has system access
      - ``X``, ``NULL``
      - SAP
      - PA0077 - HR Master Record: Infotype 0077 (Additional Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0077.Extract_Timestamp
      - Date and time when the Additional Personal Data record was last extracted.
      - ``2025-06-10 15:37:50.000``
      - SAP
      - PA0077 - HR Master Record: Infotype 0077 (Additional Personal Data)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0105-0001.AEDTM_Date of Last Change
      - Date when the Communications record was last changed.
      - ``2025-06-10``
      - SAP
      - PA0105 - HR Master Record\: Infotype 0105 (Communications) - Subtype: SAP User Name
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0105-0001.BEGDA_Start Date
      - Start date of the Communications record's validity pediod for Subtype 0001.
      - ``2025-06-10``
      - SAP
      - PA0105 - HR Master Record\: Infotype 0105 (Communications) - Subtype: SAP User Name
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0105-0001.ENDDA_End Date
      - End date of the Communications record's validity pediod for Subtype 0001.
      - ``2025-06-10``
      - SAP
      - PA0105 - HR Master Record\: Infotype 0105 (Communications) - Subtype: SAP User Name
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0105-0001.SEQNR_Number of Infotype Record with Same Key
      - Sequence number for Subtype 0001 of the Communications record when multiple records share the same key.
      - ``000``
      - SAP
      - PA0105 - HR Master Record\: Infotype 0105 (Communications) - Subtype: SAP User Name
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0105-0001.SUBTY_Subtype
      - Subtype identifier of the person's Communications record.
      - ``0001``
      - SAP
      - PA0105 - HR Master Record\: Infotype 0105 (Communications) - Subtype: SAP User Name
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0105-0001.UNAME_Name of Person Who Changed Object
      - SAP user name of the person who last changed Subtype 0001 of the Communications record.
      - ``JSMITH``
      - SAP
      - PA0105 - HR Master Record\: Infotype 0105 (Communications) - Subtype: SAP User Name
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0105-0001.USRID_Communication Identification/Number
      - The person's SAP user name
      - ``JSMITH``
      - SAP
      - PA0105 - HR Master Record\: Infotype 0105 (Communications) - Subtype: SAP User Name
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0105-0001.Extract_Timestamp
      - Date and time when the Communications Subtype 0001 record was last extracted.
      - ``2025-06-10 15:37:50.000``
      - SAP
      - PA0105 - HR Master Record\: Infotype 0105 (Communications) - Subtype: SAP User Name
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0105-0010.AEDTM_Date of Last Change
      - Date when Subtype 0010 of the Communications record was last changed.
      - ``2025-06-10``
      - SAP
      - PA0105 - HR Master Record\: Infotype 0105 (Communications) - Subtype: CLIENT Email Address
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0105-0010.BEGDA_Start Date
      - Start date of validity period for Subtype 0010 of the Communications record.
      - ``2025-06-10``
      - SAP
      - PA0105 - HR Master Record\: Infotype 0105 (Communications) - Subtype: CLIENT Email Address
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0105-0010.ENDDA_End Date
      - Start date of validity period for Subtype 0010 of the Communications record.
      - ``2025-06-10``
      - SAP
      - PA0105 - HR Master Record\: Infotype 0105 (Communications) - Subtype: CLIENT Email Address
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0105-0010.SEQNR_Number of Infotype Record with Same Key
      - Sequence number for Subtype 0010 of the Communications record when multiple records share the same key.
      - ``000``
      - SAP
      - PA0105 - HR Master Record\: Infotype 0105 (Communications) - Subtype: CLIENT Email Address
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0105-0010.SUBTY_Subtype
      - Subtype identifier of the person's Communications record.
      - ``0010``
      - SAP
      - PA0105 - HR Master Record\: Infotype 0105 (Communications) - Subtype: CLIENT Email Address
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0105-0010.UNAME_Name of Person Who Changed Object
      - SAP user name of the person who last changed Subtype 0010 of the Communications record.
      - ``JSMITH``
      - SAP
      - PA0105 - HR Master Record\: Infotype 0105 (Communications) - Subtype: CLIENT Email Address
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0105-0010.USRID_LONG_Communication: Long Identification/Number
      - The person's CLIENT email address.
      - ``jsmith@example.org``
      - SAP
      - PA0105 - HR Master Record\: Infotype 0105 (Communications) - Subtype: CLIENT Email Address
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0105-0010.Extract_Timestamp
      - Date and time when the Communications Subtype 0010 record was last extracted
      - ``2025-06-10 15:37:50.000``
      - SAP
      - PA0105 - HR Master Record\: Infotype 0105 (Communications) - Subtype: CLIENT Email Address
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0964.BEGDA_Start Date
      - Start date of the PA0964-Infotype record's validity period.
      - ``2025-06-10``
      - SAP
      - PA0964 - HR Master Record: Infotype 0964
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0964.ENDDA_End Date
      - Start date of the PA0964-Infotype record's validity period.
      - ``2025-06-10``
      - SAP
      - PA0964 - HR Master Record: Infotype 0964
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0964.ICTYP_Type of Identification Number
      - Type of the person's identification number
      - ``IN``
      - SAP
      - PA0964 - HR Master Record: Infotype 0964
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0964.IDNUM_Identification Number
      - The person's SAP Identification Number
      - ``100040``, ``0907684``
      - SAP
      - PA0964 - HR Master Record: Infotype 0964
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0964.ITXEX_Text Exists for Infotype
      - Shows whether text is stored for this SAP Infotype
      - ``X``, ``NULL``
      - SAP
      - PA0964 - HR Master Record: Infotype 0964
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0964.SEQNR_Number of Infotype Record with Same Key 
      - Sequence number for the person's 0964-Infotype record when multiple records share the same key.
      - ``000``
      - SAP
      - PA0964 - HR Master Record: Infotype 0964
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0964.SPRPS_Lock Indicator for HR Master Data Record
      - Shows whether the person's HR Master Data record is locked.
      - ``X``, ``NULL``
      - SAP
      - PA0964 - HR Master Record: Infotype 0964
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0964.SUBTY_Subtype
      - Subtype indicator for the person's PA0964 record
      - ``IN``
      - SAP
      - PA0964 - HR Master Record: Infotype 0964
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0964.UNAME_Name of Person Who Changed Object
      - User name of the person who last changed the PA0964 record.
      - ``JSMITH``
      - SAP
      - PA0964 - HR Master Record: Infotype 0964
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.
    
    * - DM_Person
      - PA0964.Extract_Timestamp
      - Date and time when the person's PA0964 record was last extracted.
      - ``2025-06-10 15:37:50.000``
      - SAP
      - PA0964 - HR Master Record: Infotype 0964
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - HRP1001.OBJID_Object ID
      - ID of the source OM object in person-object relationship.
      - ``NULL``
      - SAP
      - HRP1001 - Infotype 1001 DB Table (Organizational Management relationships)
      - OM Object = SAP Organizational Management object such as person (P), position (S), organizational unit (O), or job (C)
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - HRP1001.OTJID_Concatenation of Object Type and Object ID
      - Combined code 'OTYPE+OBJID' for the source OM object in the person-object relationship
      - ``NULL``
      - SAP
      - HRP1001 - Infotype 1001 DB Table (Organizational Management relationships)
      - OM Object = SAP Organizational Management object such as person (P), position (S), organizational unit (O), or job (C)
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - HRP1001.PROZT_Weighting Percentage
      - Weighting percentage of the person-object relationship.
      - ``NULL``
      - SAP
      - HRP1001 - Infotype 1001 DB Table (Organizational Management relationships)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - HRP1001.SOBID_ID of Related Object
      - ID of the target OM object in the person-object relationship.
      - ``NULL``
      - SAP
      - HRP1001 - Infotype 1001 DB Table (Organizational Management relationships)
      - OM Object = SAP Organizational Management object such as person (P), position (S), organizational unit (O), or job (C)
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - HRP1001.ISTAT_Planning Status:T777S.STEXT_Planning Status Name
      - Name for the planning status of the Organizational Management relationship record.
      - ``NULL``
      - SAP
      - HRP1001 - Infotype 1001 DB Table (Organizational Management relationships)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - HRP1001.OTYPE_Object Type:T777O.OTEXT_Object Type Text
      - Name for the object type of the source OM object in the person-object relationship.
      - ``NULL``
      - SAP
      - HRP1001 - Infotype 1001 DB Table (Organizational Management relationships)
      - Object = SAP Organizational Management object such as person (P), position (S), organizational unit (O), or job (C)
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - HRP1001.PLVAR_Plan Version:T777P.PTEXT_Plan Version Text
      - Name for the plan version as used in the Organizational Management relationship record.
      - ``NULL``
      - SAP
      - HRP1001 - Infotype 1001 DB Table (Organizational Management relationships)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - HRP1001.RELAT_Relationship Between Objects:T777V.RTEXT_Relationship Name (Bottom Up)
      - Name of the relationship type, using bottom-up wording, between the source and related OM objects.
      - ``NULL``
      - SAP
      - HRP1001 - Infotype 1001 DB Table (Organizational Management relationships)
      - Object = SAP Organizational Management object such as person (P), position (S), organizational unit (O), or job (C)
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - HRP1001.SUBTY_Subtype:T777U.SUTXT_Subtype Text
      - Subtype indicator of the Organizational Management relationship record.
      - ``NULL``
      - SAP
      - HRP1001 - Infotype 1001 DB Table (Organizational Management relationships)
      - N/A
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - HRP1001.Extract_Timestamp
      - Date and time when the Organizational Management relationships record was last extracted.
      - ``2025-06-10 15:37:50.000``
      - SAP
      - HRP1001 - Infotype 1001 DB Table (Organizational Management relationships)
      - Object = SAP Organizational Management object such as person (P), position (S), organizational unit (O), or job (C)
      - Inserted unchanged from ``SAP.dbo.[20-PA_HRP]`` into ``DM.dbo.DM_Person``.

    * - DM_Person
      - PA0001.WERKS_Personnel Area:T500P.NAME1_Personnel Area Text
      - Name for the person's Personnel Area.
      - ``Hungary``, ``Egypt``
      - SAP
      - PA0001 - HR Master Record: Infotype 0001 (Organizational Assignment)
      - N/A
      - Looked up after insert from ``SAP_raw.dbo.T500P`` by matching ``[PA0001.WERKS_Personnel Area] = [PERSA_Personnel Area]``.

    * - DM_Person
      - Master_List_of_FT_Posts.Stream
      - Functional stream of the person's full-time post, as recorded in the Master List of FT Posts.
      - ``BIS - Customer Care``, ``Finance - GA``
      - SAP
      - N/A
      - N/A
      - Copied from ``MANUAL.dbo.Master_List_of_FT_Posts.[Stream]`` where ``[Position] = [PA0001.PLANS_Position]``.

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
      - LFA1.NAME1_Name 1
      - The person's vendor name in their vendor master record
      - ``Jane Smith``
      - SAP
      - LFA1 - Vendor Master (General Section)
      - N/A
      - Updated from ``DM.dbo.DM_Vendors`` by joining ``[LFB1.PERNR_Personnel Number]`` to ``[PERNR_Personnel number]``; copied 1:1.

    * - DM_Person
      - AD.sAMAccountName
      - The person's logon name in Active Directory.
      - ``jsmith``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.AccountExpirationDate
      - Date when the person's AD account is set to expire.
      - ``2025-06-10``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.AD_OU
      - Code for the organizational Unit under which the person's AD account resides.
      - ``AFG``, ``BSR``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.AD_OU_Region
      - Region derived from the person's AD Organizational Unit.
      - ``Reg1``, ``HO``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.EmailAddress
      - The person's primary email address as recorded in AD.
      - ``jsmith@example.org``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.Created
      - Date and time when the person's AD account was created.
      - ``2025-06-10 15:37:50.000``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.Modified
      - Date and time when the person's AD account was last changed.
      - ``2025-06-10 15:37:50.000``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.clientINdexNumber
      - CLIENT Index Number stored on the person's AD account.
      - ``674797``, ``01126343``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.examplePERNR
      - SAP personnel number stored on the person's AD account.
      - ``00099626``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.clientUserType
      - User type classification for the person in AD.
      - ``Staff``, ``Internship``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.AD_LSA
      - Local Security Administrator of the person's AD account.
      - ``NULL``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).
  
    * - DM_Person
      - AD.Manager
      - Distinguished Name of the person's manager in AD.
      - ``CN=Jane Smith,OU=Users,OU=GUI,OU=Reg3,DC=CLIENT,DC=org``
      - AD
      - N/A
      - ``CN`` = common name; ``OU`` = organizational unit
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.MemberOf
      - The person's AD memberships listed as group distinguished names.
      - ``CN=AFG-A-Nutrition,OU=Users,OU=AFG,OU=Reg4,DC=CLIENT,DC=org``
      - AD
      - N/A
      - ``CN`` = common name; ``OU`` = organizational unit
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.givenName
      - The person's first name in AD.
      - ``Jane``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.surname
      - The person's last name in AD.
      - ``Smith``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.DisplayName
      - The person's full name as displayed in AD
      - ``Jane Smith``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.PasswordNeverExpires
      - Shows whether the person's AD password is set never to expire
      - ``1900-01-01 00:00:00.000``, ``NULL``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.PasswordNotRequired
      - Shows whether a password is not required for the person's AD account.
      - ``1``, ``0``
      - AD
      - N/A
      - ``1`` = not required; ``0`` = required
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.PasswordExpired
      - Date and time when the person's AD password was marked as expired.
      - ``2025-06-10 15:37:50.000``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.PasswordLastSet
      - Date and time when the person's AD password was last set
      - ``2025-06-10 15:37:50.000``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.CannotChangePassword
      - Shows whether the person is prevented from changing their AD password.
      - ``1``, ``0``
      - AD
      - N/A
      - ``1`` = cannot change password, ``0`` = can change passworrd
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.ScriptPath
      - Logon script path assigned to the person's AD account.
      - ``BHG-Script.bat``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.CanonicalName
      - Canonical path of the person's AD object.
      - ``client.org/CEECIS/ALB/Users/JaneSmith``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.Enabled
      - Shows whether the person's AD account is enabled
      - ``1``, ``0``
      - AD
      - N/A
      - ``1`` = enabled, ``0`` = not enabled
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.Description
      - Text description for the person in their AD account.
      - ``/AFG/Reg4/CLIENT - Education Officer``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.Lockedout
      - Shows whether the person's AD account is locked out.
      - ``1``, ``0``
      - AD
      - N/A
      - ``1`` = locked out, ``0`` = not locked out
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.MemberOf_String with DN
      - The person's AD memberships listed as comma-separated group names.
      - ``HUN-Demo-Endorsers_SM,HUN-Users``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.Name
      - Common name (CN) of the person's AD object.
      - ``Jane Smith``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.msRTCSIP-DeploymentLocator
      - Hosting locator for the person's Microsoft communications account (e.g., MS Teams).
      - ``sipfed.online.lync.com``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.msRTCSIP-FederationEnabled
      - Shows whether the person's Microsoft communications account (e.g., MS Teams) is allowed to communicate with with external domains
      - ``1``, ``NULL``
      - AD
      - N/A
      - ``1`` = allowed
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.msRTCSIP-InternetAccessEnabled
      - Shows whether the person's Microsoft communications account has external internet connectivity enabled
      - ``1``, ``NULL``
      - AD
      - N/A
      - ``1`` = enabled
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.msRTCSIP-Line
      - Telephone URI for the person's enterprise voice line.
      - ``tel:+96265502414;ext=414``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.msRTCSIP-UserEnabled
      - Shows whether the person has Microsoft unified communications features enabled (e.g., MS Teams)
      - ``1``, ``NULL``
      - AD
      - N/A
      - ``1`` = enabled
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - AD.msRTCSIP-PrimaryUserAddress
      - Primary SIP address for the person's Microsoft communications account.
      - ``jsmith@example.org``
      - AD
      - N/A
      - N/A
      - Updated from ``AD.dbo.AD_Long`` into ``DM.dbo.DM_Person`` by matching either ``EmailAddress = latest [PA0105-0010.USRID_LONG_Communication: Long Identification/Number]`` ending with ``example.org``, or ``examplePERNR = [PERNR_Personnel number]`` (fallback if email not matched).

    * - DM_Person
      - USR02.ACCNT_Account ID
      - Account ID of the person's SAP user account.
      - ``00003088``
      - SAP
      - USR02 (SAP User data)
      - N/A
      - Updated from ``SAP.dbo.[10-USR02]`` by joining ``BNAME = [PA0105-0001.USRID_Communication Identification/Number]``

    * - DM_Person
      - USR02.CLASS_User group in user master maintenance
      - User group assigned to the person's SAP user master record.
      - ``AZE``, ``Reg1``
      - SAP
      - USR02 (SAP User data)
      - N/A
      - Updated from ``SAP.dbo.[10-USR02]`` by joining ``BNAME = [PA0105-0001.USRID_Communication Identification/Number]``

    * - DM_Person
      - USR02.ERDAT_Creation Date of the User Master Record
      - Date when the person's SAP user master record was created.
      - ``2025-06-10``
      - SAP
      - USR02 (SAP User data)
      - N/A
      - Updated from ``SAP.dbo.[10-USR02]`` by joining ``BNAME = [PA0105-0001.USRID_Communication Identification/Number]``

    * - DM_Person
      - USR02.GLTGB_User valid to
      - Validity end date of the person's SAP user account
      - ``2025-06-10``
      - SAP
      - USR02 (SAP User data)
      - N/A
      - Updated from ``SAP.dbo.[10-USR02]`` by joining ``BNAME = [PA0105-0001.USRID_Communication Identification/Number]``

    * - DM_Person
      - USR02.GLTGV_User valid from
      - Validity start date of the person's SAP user account
      - ``2025-06-10``
      - SAP
      - USR02 (SAP User data)
      - N/A
      - Updated from ``SAP.dbo.[10-USR02]`` by joining ``BNAME = [PA0105-0001.USRID_Communication Identification/Number]``

    * - DM_Person
      - USR02.TRDAT_Last Logon Date
      - Date and time of the person's last successful logon to SAP.
      - ``2025-06-10 15:37:50.000``
      - SAP
      - USR02 (SAP User data)
      - N/A
      - Updated from ``SAP.dbo.[10-USR02]`` by joining ``BNAME = [PA0105-0001.USRID_Communication Identification/Number]``

    * - DM_Person
      - USR02.USTYP_User Type
      - User type of the person's SAP account
      - ``A``, ``B``, ``C``
      - SAP
      - USR02 (SAP User data)
      - N/A
      - Updated from ``SAP.dbo.[10-USR02]`` by joining ``BNAME = [PA0105-0001.USRID_Communication Identification/Number]``

    * - DM_Person
      - USR02.BNAME_User Name in User Master Record
      - The person's SAP username (BNAME)
      - ``JSMITH``
      - SAP
      - USR02 (SAP User data)
      - N/A
      - Updated from ``SAP.dbo.[10-USR02]`` by joining ``BNAME = [PA0105-0001.USRID_Communication Identification/Number]``

    * - DM_Person
      - USR02.UFLAG_User Lock Status
      - Lock-status flag of the person's SAP user account.
      - ``64``, ``128``
      - SAP
      - USR02 (SAP User data)
      - N/A
      - Updated from ``SAP.dbo.[10-USR02]`` by joining ``BNAME = [PA0105-0001.USRID_Communication Identification/Number]``

    * - DM_Person
      - DM_Person.AD_OU_for_Org_Unit
      - The person's organizational unit code from Active Directory
      - ``AZE``, ``CAR``
      - AD
      - N/A
      - N/A
      - N/A

    * - DM_Person
      - DM_Person.SAP_User_Group_for_Service_Area 
      - SAP user group code for the person's Service Area
      - ``ETH``
      - SAP
      - N/A
      - N/A
      - Derived inside DM_Person by picking a representative USR02.CLASS value per GSBER.

    * - DM_Person
      - PA0001.PLANS_Position:HRP1000.STEXT_Object Name
      - The person's post title
      - ``Accounting Officer``
      - SAP
      - N/A
      - N/A
      - N/A

    * - DM_Person
      - DM_Person.AD_OU_Region_for_Org_Unit
      - Region derived from the person's AD OU column for the organizational unit.
      - ``Reg1``, ``Reg2``, ``HO``
      - AD
      - N/A
      - N/A
      - N/A

    * - DM_Person
      - Future-PA0016.BEGDA_Start Date
      - Start date of the person's future-dated Contract Elements record
      - ``2025-06-10``
      - SAP
      - PA0016 - HR Master Record (Contract Elements)
      - N/A
      - N/A

    * - DM_Person
      - Future-PA0016.CTEDT_Contract End Date
      - Start date of the person's future-dated Contract Elements record
      - ``2025-06-10``
      - SAP
      - PA0016 - HR Master Record (Contract Elements)
      - N/A
      - N/A

    * - DM_Person
      - ZDEPT_UNIT.EMERGENCY_Emergency Indicator
      - Shows whether the person's Service Area has emergency status.
      - ``X``, ``NULL``
      - SAP
      - N/A
      - N/A
      - N/A

    * - DM_Person
      - DM_Person.PERNR_Active
      - Shows whether the person's personnel number is currently active
      - ``NULL``
      - SAP
      - N/A
      - Not populated
      - N/A

    * - DM_Person
      - DM_Person.PERNR_Correct
      - Shows whether the person's personnel number is confirmed as correct
      - ``NULL``
      - SAP
      - N/A
      - Not populated
      - N/A

    * - DM_Person
      - PA0001.WERKS_Personnel Area:T005.ZZOLDUNCTY_Old CLIENT alphanumeric country code
      - Legacy CLIENT alphanumeric country code mapped from the person's personnel area.
      - ``NULL``
      - SAP
      - N/A
      - Not populated
      - N/A

    * - DM_Person
      - Region Desc Short
      - Short text for the person's region.
      - ``Reg1``, ``HO``
      - SAP
      - N/A
      - N/A
      - N/A

    * - DM_Person
      - Region Desc Long
      - Short text for the person's region.
      - ``Region and Field Area``, ``Head Office``
      - SAP
      - N/A
      - N/A
      - N/A

    * - DM_Person
      - Sequence_0016
      - Sequence index of the person's Contract Elements records by begin date
      - ``-1``, ``0``, ``1``, ``2``
      - N/A
      - N/A
      - ``0`` = current record; negative values = earlier records; positive values = future-dated records
      - N/A

    * - DM_Person
      - Sequence_0000
      - Sequence index of the person's Actions records by begin date
      - ``-1``, ``0``, ``1``, ``2``
      - N/A
      - N/A
      - ``0`` = current record; negative values = earlier records; positive values = future-dated records
      - N/A

    * - DM_Person
      - Sequence_0001
      - Sequence index of the person's Organizational Assignment records by begin date
      - ``-1``, ``0``, ``1``, ``2``
      - N/A
      - N/A
      - ``0`` = current record; negative values = earlier records; positive values = future-dated records
      - N/A

    * - DM_Person
      - Sequence_0002
      - Sequence index of the person's Personal Data records by begin date
      - ``-1``, ``0``, ``1``, ``2``
      - N/A
      - N/A
      - ``0`` = current record; negative values = earlier records; positive values = future-dated records
      - N/A

    * - DM_Person
      - Sequence_0077
      - Sequence index of the person's Additional Personal Data records by begin date
      - ``-1``, ``0``, ``1``, ``2``
      - N/A
      - N/A
      - ``0`` = current record; negative values = earlier records; positive values = future-dated records
      - N/A

    * - DM_Person
      - Sequence_0105-0001
      - Sequence index of the person's Communications/SAP User Name records by begin date
      - ``-1``, ``0``, ``1``, ``2``
      - N/A
      - N/A
      - ``0`` = current record; negative values = earlier records; positive values = future-dated records
      - N/A

    * - DM_Person
      - Sequence_0105-0010
      - Sequence index of the person's Communications/CLIENT Email Address records by begin date
      - ``-1``, ``0``, ``1``, ``2``
      - N/A
      - N/A
      - ``0`` = current record; negative values = earlier records; positive values = future-dated records
      - N/A

    * - DM_Person
      - DM_Person.latest_record_flag
      - Shows whether the row has the latest record for the DM_Person, regardless of validity dates
      - ``1``, ``0``
      - N/A
      - N/A
      - ``1`` = latest, ``0`` = not latest
      - Computed per ``PERNR``: set to ``1`` for the row whose ``BEGDA_Master`` equals the max ``BEGDA_Master`` for that ``PERNR``; otherwise ``0``.

    * - DM_Person
      - (Position) HRP1001.OBJID_Object ID
      - The person's position ID in SAP Organizational Management.
      - ``00000852``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Copied within DM_Person from ``position.HRP1001.OBJID_Object ID``

    * - DM_Person
      - (Position) HRP1001.SOBID_ID of Related Object
      - Person ID of the holder of the position in Organizational Management.
      - ``00000852``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Copied within DM_Person from ``position.HRP1001.SOBID_ID of Related Object``

    * - DM_Person
      - (Position) HRP1001.BEGDA_Start Date
      - Start date of the person's assignment to the position.
      - ``2025-06-10``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Copied within DM_Person from ``position.HRP1001.BEGDA_Start Date``

    * - DM_Person
      - (Position) HRP1001.ENDDA_End Date
      - End date of the person's assignment to the position.
      - ``2025-06-10``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Copied within DM_Person from ``position.HRP1001.ENDDA_End Date``

    * - DM_Person
      - (Org Unit) HRP1001.OBJID_Object ID
      - The person's organizational unit ID in SAP Organizational Management.
      - ``00000852``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Copied within DM_Person from ``org.HRP1001.OBJID_Object ID``
    
    * - DM_Person
      - (Org Unit) HRP1001.SOBID_ID of Related Object
      - Position ID that belongs to the person's organizational unit.
      - ``00000852``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Copied within DM_Person from ``org.HRP1001.SOBID_ID of Related Object``

    * - DM_Person
      - (Org Unit) HRP1001.BEGDA_Start Date
      - Start date of the position's assignment to the organizational unit.
      - ``2025-06-10``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Copied within DM_Person from ``org.HRP1001.BEGDA_Start Date``

    * - DM_Person
      - (Org Unit) HRP1001.ENDDA_End Date
      - End date of the position's assignment to the organizational unit.
      - ``2025-06-10``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Copied within DM_Person from ``org.HRP1001.ENDDA_End Date``

    * - DM_Person
      - (Manager Position) HRP1001.OBJID_Object ID
      - Position ID that belongs to the person's manager
      - ``00000852``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Copied within DM_Person from ``mposition.HRP1001.OBJID_Object ID``

    * - DM_Person
      - (Manager Position) HRP1001.SOBID_ID of Related Object
      - The person's position ID that reports to the manager's position.
      - ``00000852``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Copied within DM_Person from ``mposition.HRP1001.SOBID_ID of Related Object``

    * - DM_Person
      - (Manager Position) HRP1001.BEGDA_Start Date
      - Start date of the reporting line from the person's position to their manager's position.
      - ``2025-06-10``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Copied within DM_Person from ``mholder.HRP1001.BEGDA_Start Date``

    * - DM_Person
      - (Manager Position) HRP1001.ENDDA_End Date
      - End date of the reporting line from the person's position to their manager's position.
      - ``2025-06-10``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Copied within DM_Person from ``mposition.HRP1001.ENDDA_End Date``

    * - DM_Person
      - (Manager) HRP1001.OBJID_Object ID
      - Person ID of the person's manager
      - ``00000852``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Copied within DM_Person from ``mholder.HRP1001.OBJID_Object ID``

    * - DM_Person
      - (Manager) HRP1001.SOBID_ID of Related Object
      - Person ID of the person who reports to the manager.
      - ``00000852``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Copied within DM_Person from ``mholder.HRP1001.SOBID_ID of Related Object``

    * - DM_Person
      - (Manager) HRP1001.BEGDA_Start Date
      - Start date of the person's reporting relationship to their manager.
      - ``2025-06-10``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Copied within DM_Person from ``[mholder.HRP1001.BEGDA_Start Date]``

    * - DM_Person
      - (Manager) HRP1001.ENDDA_End Date
      - End date of the person's reporting relationship to their manager.
      - ``2025-06-10``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Copied within DM_Person from ``mholder.HRP1001.ENDDA_End Date``

    * - DM_Person
      - (Manager) PA0001.ENAME_Formatted Name of Employee or Applicant
      - Formatted name of the person's manager
      - ``Jane Smith``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Set via self-join to the manager's ``DM_Person`` row using manager ``PERNR`` from ``mholder.HRP1001.SOBID_ID of Related Object`` with date overlap on ``BEGDA_Master..ENDDA_Master``, then copied from ``Manager-PA0001.ENAME_…`` into this column.

    * - DM_Person
      - (Manager) PA0002.GESCH_Gender
      - Gender code for the person's manager
      - ``1``, ``0``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - ``1`` = male, ``0`` = female
      - Set via self-join to the manager's ``DM_Person`` row using ``mholder.HRP1001.SOBID_ID of Related Object`` (the manager's ``PERNR``) with a date-overlap on ``BEGDA_Master..ENDDA_Master``; value taken from the manager's ``PA0002.GESCH_Gender``, then copied from ``Manager-PA0002.GESCH_Gender`` into this column.

    * - DM_Person
      - (Manager) PA0001.PLANS_Position:HRP1000.STEXT_Object Name
      - Post title of the person's manager
      - ``Accounts officer``
      - SAP
      - HRP1001 - Infotype 1001 (Organizational Management relationships)
      - N/A
      - Set via self-join to the manager's ``DM_Person`` row using ``mholder.HRP1001.SOBID_ID of Related Object`` (the manager's ``PERNR`` with a date-overlap on ``BEGDA_Master..ENDDA_Master``; value taken from the manager's ``PA0001.PLANS_Position:HRP1000.STEXT_Object Name``, then copied from ``Manager-PA0001.PLANS_Position:HRP1000.STEXT_Object Name`` into this column
 
    * - DM_Changes
      - CDPOS_Parse.GJAHR_Fiscal Year
      - Fiscal year of the accounting document referenced by the change
      - ``2023``
      - SAP
      - CDPOS
      - Values parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - DM_Changes
      - CDPOS_Parse.BELNR_Accounting Document Number
      - Number of the accounting document affected by the change
      - ``0100000095``
      - SAP
      - CDPOS
      - Parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - DM_Changes
      - CDPOS_Parse.BUZEI_Number of Line Item Within Accounting Document
      - Line item number in the accounting document affected by the change
      - ``186``
      - SAP
      - CDPOS
      - Parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - DM_Changes
      - CDPOS_Parse.LIFNR_Account Number of Vendor or Creditor
      - Account number of vendor or creditor
      - ``1900001445``
      - SAP
      - CDPOS
      - Parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - DM_Changes
      - CDPOS_Parse.BANKS_Bank country key
      - Country key of the bank that holds the vendor’s account
      - ``051``, ``2RO``
      - SAP
      - CDPOS
      - Parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - DM_Changes
      - CDPOS_Parse.BANKL_Bank Keys
      - Bank identifier within the country (bank code)
      - ``00100012``
      - SAP
      - CDPOS
      - Parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - DM_Changes
      - CDPOS_Parse.BANKN_Bank account number
      - Bank account number of the vendor or creditor
      - ``00000000-76535631``
      - SAP
      - CDPOS
      - Parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - DM_Changes
      - CDPOS_Parse.IBAN_IBAN (International Bank Account Number)
      - IBAN of the vendor's bank account, if present in the key
      - ``00000000-78607804``
      - SAP
      - CDPOS
      - Parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - DM_Changes
      - CDPOS_Parse.BKONT_Bank Control Key
      - Bank control key, used for payment control and bank communication
      - ``33``, ``05``, ``Q``, ``F``
      - SAP
      - CDPOS
      - Parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - DM_Changes
      - CDPOS_Parse.ADDRNUMBER_Address Number
      - SAP internal address number linked to the vendor
      - ``0000262599``
      - SAP
      - CDPOS
      - Parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - DM_Changes
      - CDPOS_Parse.USERNAME_User name of the person responsible in change document
      - SAP user name (used when not available in CDHDR)
      - ``JSMITH``
      - SAP
      - CDPOS
      - N/A
      - 

    * - DM_Changes
      - BKPF.Document Number
      - Document number from SAP BKPF
      - ``NULL``
      - SAP
      - BKPF (Accounting Document Header); Field: BELNER 
      - N/A
      - 

    * - DM_Changes
      - BSEG.Document Number Line Item
      - Line item number from SAP BSEG 
      - ``NULL``
      - SAP
      - BSEG (Accounting Document Segment) Field: BUZEI
      - N/A
      - 

    * - DM_Changes
      - DD02T.DDTEXT_Short Description of Repository Objects
      - Short description of the changed SAP table
      - ``Accounting Document Header``, ``Vendor Master (Company Code)``
      - SAP
      - DD02T
      - Lookup for human-readable context from SAP Data Dictionary; explains ``CDPOS.TABNAME_Table Name``
      - 

    * - DM_Changes
      - DD03M.DDTEXT_Short Description of Repository Objects
      - Short description of the changed field
      - ``City postal code``, ``Document Header Text``
      - SAP
      - DD03M
      - Lookup for human-readable context from SAP Data Dictionary; explains ``CDPOS.FNAME_Field Name``
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
        FROM DM.DM_Trips t
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
        FROM DM.DM_Trips t
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
        FROM DM.DM_Trips t
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
        FROM DM.DM_Trips t;

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
        FROM DM.DM_Trips t;

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
        FROM DM.DM_Trips t
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
        FROM DM.DM_Trips t
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
        FROM DM.DM_Trips t
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

