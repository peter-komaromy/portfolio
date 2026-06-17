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

  .. grid-item-card::
    :columns: 6

    I designed and built a *business data dictionary* for a data warehouse client. It had two audiences: Business users needed clear definitions, sample values, and source context, while data operations needed lineage, filters, and implementation logic without turning the main table into a technical inventory.

    I used a layered documentation model. The visible table supports everyday lookup. Row toggles and the :fas:`circle-info;sd-text-info` icon open deeper technical notes only when needed.

    The sample below includes selected columns from four data marts. It shows search, filters, expandable rows, dropdown options, copy actions, popovers for truncated values, and offcanvases for technical details.

  .. grid-item-card:: Skills shown
    :columns: 6
    :class-card: case-study-facts

    :blue-bold:`Research` - Checked warehouse tables and stored procedures in SSMS with T-SQL.
    
    :blue-bold:`Content design` - Turned technical findings into definitions, examples, source context, and remarks.
    
    :blue-bold:`Information architecture` - Kept business content visible and moved lineage, filters, and SQL logic into expandable details.
    
    :blue-bold:`AI-supported review` - Used AI to identify lineage candidates, then checked the results manually.
    
    :blue-bold:`Implementation` - Built the sample with Sphinx, DataTables, Python extensions, CSS, and JavaScript.


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

    * - DM_Performance
      - Case Number
      - Unique identifier assigned to each case.
      - ``IC0068371``, ``556523-00543447-TMS02``
      - SG, TMS, SharePoint
      - N/A
      - Value format depends on source system.
      - View details: :colrefopen:`perf_Case_Number`

    * - DM_Performance
      - Platform
      - The source system where the case originated.      
      - ``RP``, ``TMS``, ``VISION``
      - N/A
      - N/A
      - Fixed value: assigned during load      
      - N/A

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
        
    * - DM_Performance
      - Description
      - The main body of the case description. 
      - ``Trip from 06.11.23 to 12.11.23 to Antananarivo ...``
      - SG, TMS, SharePoint
      - N/A
      - N/A 
      - View details: :colrefopen:`perf_Desc`

    * - DM_Performance
      - Reporting Process - Category
      - Category assigned to the case within the reporting process. 
      - ``Invoices posted by Demo via ticketing tool``
      - SG
      - N/A
      - First and highest level of granularity in the case categorization hierarchy (i.e., Category → Topic → Name → Type → Subtype) 
      - View details: :colrefopen:`perf_RP_Category`

    * - DM_Performance
      - Reporting Process - Topic
      - Code for the topic of the case within the reporting process.
      - ``ZT``, ``RE``, ``KR``, ``YO``
      - SG
      - N/A
      - Second level of granularity in the case categorization hierarchy after 'Category'. 
      - View details: :colrefopen:`perf_RP_Topic`
    
    * - DM_Performance
      - Reporting Process - Name
      - Name assigned to the case within the reporting process. 
      - ``Travel Posting``, ``Invoice receipt``
      - SG, TMS, SharePoint
      - N/A
      - Third level of granularity in the case categorization hierarchy. Typically, the most referenced in reporting; always populated for SG cases.
      - View details: :colrefopen:`perf_RP_Name`
    
    * - DM_Performance
      - Reporting Process - Type
      - Type assigned to the case within the reporting process. 
      - ``Incident``, ``Inquiry``
      - SG, TMS, SharePoint
      - N/A
      - Fourth level of granularity in the case categorization hierarchy. It helps to find more granular groups within reporting processes, e.g., 'PO Invoices' within the 'Invoice Creation' process. 
      - View details: :colrefopen:`perf_RP_Type`

    * - DM_Performance
      - Reporting Process - Subtype
      - Subtype assigned to the case within the reporting process. 
      - ``Data incorrect``, ``Login failure``
      - SG, SharePoint
      - N/A
      - The fifth and last level of granularity in the case categorization hierarchy. Blank for most rows but kept for the sake of completeness. 
      - View details: :colrefopen:`perf_RP_Subtype`
    
    * - DM_Performance
      - Assignment Group (Team Name)
      - Name of the team responsible for handling the case. 
      - ``Customer Care``, ``IAM`` 
      - SG, TMS
      - N/A
      - Typically determined by the value of the ``Reporting Process - Name`` column.
      - View details: :colrefopen:`perf_Assignment_Group`
    
    * - DM_Performance
      - Stream
      - Name of the functional area to which the reporting process belongs. 
      - ``Customer Care``, ``HR Offboarding``, ``MDM``
      - SG, TMS, SharePoint
      - N/A
      - In this table, 'Stream' is treated as the functional area of the reporting process, not the functional area of the reporting agent. 
      - View details: :colrefopen:`perf_Stream`

    * - DM_Performance
      - Section
      - The 'parent' category above Stream to which the reporting process belongs. 
      - ``HR Admin``, ``Finance``
      - SG
      - N/A
      - Each reporting process belongs to one section. Sections roughly correspond to the lowest level of the WBS hierarchy. 
      - View details: :colrefopen:`perf_Section`

    * - DM_Performance
      - Case Priority
      - Priority level of the case. 
      - ``1 - Critical``, ``2 - High``, ``4 - Low``
      - SG
      - N/A
      - N/A 
      - View details: :colrefopen:`perf_Case_Priority`
    
    * - DM_Performance
      - Complexity Factor
      - Number of invoices submitted within a single case. 
      - ``1``, ``2``
      - SG
      - N/A
      - Useful for the Invoice Processing team to monitor multi-invoice submissions. No longer used in SLA or volume calculations because the Invoice Processing team now handles multi-invoice cases by creating separate child cases. 
      - View details: :colrefopen:`perf_Complexity_Factor`
    
    * - DM_Performance
      - Case Reassignment Count
      - Number of times the case was reassigned to a different team. 
      - ``1``, ``2``
      - SG
      - N/A
      - N/A 
      - View details: :colrefopen:`perf_Case_Reassignment_Count`

    * - DM_Performance
      - Case Open DateTime
      - The UTC date and time when the case was opened. 
      - ``2023-07-07 08:47:53.000``
      - SG, TMS
      - N/A
      - Due to time-zone difference, the value may differ by 1-2 hours from the time shown in SG. 
      - View details: :colrefopen:`perf_Case_Open_DateTime`

    * - DM_Performance
      - Case Open Date
      - Calendar date when the case was opened. 
      - ``2023-07-07``
      - SG, TMS, SharePoint
      - N/A
      - Matches the value in ``Case Open DateTime``, but rounded to date. May differ from what is shown in Request Portal due to timezone differences (e.g., if a case was opened around midnight, the date may be one day earlier than what shows in SG.) 
      - View details: :colrefopen:`perf_Case_Open_Date`
    
    * - DM_Performance
      - Case Close DateTime
      - The UTC date and time when the case was closed. 
      - ``2023-07-07 08:47:53.000``
      - SG, TMS
      - N/A
      - Due to time-zone difference, the value may differ by 1-2 hours from the time shown in SG.
      - View details: :colrefopen:`perf_Case_Close_DateTime`
    
    * - DM_Performance
      - Case Close Date
      - Calendar date when the case was closed. 
      - ``2023-07-07``
      - SG, TMS, SharePoint
      - N/A
      - Matches ``Case Close DateTime`` except for minor shifts due to time zone offsets around midnight. 
      - View details: :colrefopen:`perf_Case_Close_Date`

    * - DM_Performance
      - Open Datetime - Local
      - A version of the ``Case Open DateTime`` column, adjusted for local time zone. 
      - ``2023-07-07 08:47:53.000``
      - SG
      - N/A
      - Converted from UTC to CET. Supports daily SLA and volume tracking. 
      - View details: :colrefopen:`perf_Open_Datetime_Local`

    * - DM_Performance
      - YYYY-MM
      - Calendar year and month when the case was closed. 
      - ``2023-07``
      - SG, TMS, SharePoint
      - N/A
      - N/A 
      - View details: :colrefopen:`perf_YYYY_MM`
    
    * - DM_Performance
      - Elapsed Time (Calendar Days)
      - Total time between case opening and closing, measured in calendar days. 
      - ``2.000000``, ``14.270000``
      - SG, TMS, SharePoint
      - N/A
      - The decimal portion represents, calculated by dividing total seconds by 86,400 (seconds in a day). 
      - View details: :colrefopen:`perf_Elapsed_Time_Calendar_Days`
    
    * - DM_Performance
      - Elapsed Time (Business Days)
      - Total case duration, measured in business days.  
      - ``6.900000``, ``14.270000``
      - SG, TMS, SharePoint
      - N/A
      - The decimal portion represents partial days. 'Business days' = days excluding weekends and holidays. 
      - View details: :colrefopen:`perf_Elapsed_Time_Business_Days`

    * - DM_Performance
      - Processing Time (Business Days)
      - Time spent processing the case, measured in business days based on active work time.
      - ``1.125000``, ``4.950000``
      - SG, TMS, SharePoint
      - N/A
      - Unlike ``Elapsed Time``, this includes only active working periods. 
      - View details: :colrefopen:`perf_Processing_Time_Business_Days`

    * - DM_Performance
      - Processing Time (Seconds)
      - Total active processing time measured in seconds. 
      - ``3600``, ``101637``
      - SG, TMS, SharePoint
      - N/A
      - 'Active' means it only measures periods during which the case was actively handled (i.e., working-time duration only rather than total wall-clock time).
      - View details: :colrefopen:`perf_Processing_Time_Seconds`
    
    * - DM_Performance
      - Freeze Time (Calendar Days)
      - Time a case spent on hold, measured in calendar days. 
      - ``0.170000``, ``3.660000``
      - SG, TMS, SharePoint
      - N/A
      - The decimal portion represents partial days. 
      - View details: :colrefopen:`perf_Freeze_Time_Calendar_Days`
    
    * - DM_Performance
      - Freeze Time (Business Days)
      - Time a case spent on hold, measured in business days. 
      - ``0.517847``, ``1.897430``
      - SG, TMS, SharePoint
      - N/A
      - The decimal portion represents partial days. 
      - View details: :colrefopen:`perf_Freeze_Time_Business_Days`

    * - DM_Performance
      - Freeze Time (Seconds)
      - Time the case spent on hold, measured in seconds. 
      - ``44926``, ``260777``
      - SG, TMS, SharePoint
      - N/A
      - N/A 
      - View details: :colrefopen:`perf_Freeze_Time_Seconds`

    * - DM_Performance
      - Reject Count
      - Shows whether a case was closed as 'incomplete'. 
      - ``1``, ``0``
      - SG
      - N/A
      - ``1`` = rejected; ``0`` = not rejected 
      - View details: :colrefopen:`perf_Reject_Count`
    
    * - DM_Performance
      - Reject Reason
      - Reason why a case was rejected. 
      - ``Ineligible``, ``Outside Demo scope``
      - SG
      - N/A
      - N/A 
      - View details: :colrefopen:`perf_Reject_Reason`
    
    * - DM_Performance
      - Suspended Reason
      - Reason why a case was suspended. 
      - ``3200``, ``Banking info incomplete``
      - SG
      - N/A
      - N/A 
      - View details: :colrefopen:`perf_Suspended_Reason`

    * - DM_Performance
      - Suspension Type
      - Categorisation code for the reason why a case was suspended. 
      - ``0``, ``100``, ``200``, ``300``
      - SG
      - N/A
      - ``0`` = 'Not suspended'. Other values stand for suspension reasons.
      - View details: :colrefopen:`perf_Suspension_Type`

    * - DM_Performance
      - Return Count
      - Number of times a case was returned to the requestor before resolution or closure. 
      - ``0``, ``1``, ``2``, ``3``
      - SG, SharePoint
      - N/A
      - N/A 
      - View details: :colrefopen:`perf_Return_Count`
    
    * - DM_Performance
      - Return Reason
      - Reason why a case was returned to the requestor 
      - ``Banking info incomplete``, ``Clarification requested``
      - SG, SharePoint
      - N/A
      - N/A 
      - View details: :colrefopen:`perf_Return_Reason`
    
    * - DM_Performance
      - Last Return Start Datetime
      - Timestamp when the case was last returned to the requestor. Shows the start of the latest return cycle. 
      - ``2023-07-07 08:47:53.000``
      - SG
      - N/A
      - Mapped to SLA suspension fields in SG. ``NULL`` for RAS. 
      - View details: :colrefopen:`perf_Last_Return_Start_Datetime`

    * - DM_Performance
      - Last Update Datetime
      - Timestamp of the latest update to the case record. 
      - ``2023-07-07 08:47:53.000``
      - SG
      - N/A
      - N/A 
      - View details: :colrefopen:`perf_Last_Update_Datetime`

    * - DM_Performance
      - Pending Reason
      - Reason why a case is in a pending (on-hold) state. 
      - ``Banking info incomplete``
      - SG, TMS, SharePoint
      - N/A
      - N/A 
      - View details: :colrefopen:`perf_Pending_Reason`
    
    * - DM_Performance
      - Return/Reject Check
      - Categorises the case outcome, based on the values of ``Return Count`` and ``Reject Count``. 
      - ``Rejected``, ``Returned``, ``Both``
      - SG
      - N/A
      - N/A 
      - View details: :colrefopen:`perf_Return_Reject_Check`
    
    * - DM_Performance
      - Returned not Rejected
      - Shows whether the case was returned to the requestor without being subsequently rejected. 
      - ``1``, ``0``
      - SG, SharePoint
      - N/A
      - ``1`` = Returned not Rejected; ``0`` = else 
      - View details: :colrefopen:`perf_Returned_Not_Rejected`

    * - DM_Performance
      - Returned Case
      - Shows whether the case was returned at least once to the requestor during processing. 
      - ``1``, ``0``
      - SG, SharePoint
      - N/A
      - ``1`` = returned; ``0`` = else 
      - View details: :colrefopen:`perf_Returned_Case`

    * - DM_Performance
      - Emergency Flag (Case)
      - Classifies cases as either Emergency or Standard based on a platform-specific flag or indicator field. 
      - ``Emergency``, ``Standard``
      - SG, TMS
      - N/A
      - N/A 
      - View details: :colrefopen:`perf_Emergency_Flag_Case`
    
    * - DM_Performance
      - Emergency Flag (Country)
      - Classifies cases as Emergency or Standard based on the country-related emergency indicator. 
      - ``Emergency``, ``Standard``
      - SG, TMS
      - N/A
      - Some platforms default all values to 'Standard'.
      - View details: :colrefopen:`perf_Emergency_Flag_Country`
    
    * - DM_Performance
      - Overdue
      - Shows whether the case breached its SLA. 
      - ``1``, ``0``
      - SG, SharePoint
      - N/A
      - ``1`` = overdue; ``0`` = not overdue 
      - View details: :colrefopen:`perf_Overdue`

    * - DM_Performance
      - SLA Met
      - Shows whether the case met its SLA. 
      - ``1``, ``0``
      - SG, TMS, SharePoint
      - N/A
      - ``1`` = SLA met; ``0`` = SLA breached 
      - View details: :colrefopen:`perf_SLA_Met`

    * - DM_Performance
      - SLA Target (Hours)
      - SLA target duration for completing a case, shown in hours. 
      - ``1``, ``2``, ``3``, ``4``
      - SG, TMS, SharePoint
      - N/A
      - Converted from datetime duration or calculated from business days, depending on platform. 
      - View details: :colrefopen:`perf_SLA_Target_Hours`
    
    * - DM_Performance
      - SLA Target (Business Days)
      - SLA target duration for completing a case, shown in business days.
      - ``1``, ``2``, ``3``, ``4``
      - SG, TMS, SharePoint
      - N/A
      - N/A 
      - View details: :colrefopen:`perf_SLA_Target_Business_Days`
    
    * - DM_Performance
      - SLA Description
      - Human-readable name of the SLA assigned to the case. 
      - ``CCC SLA - 1 Day``, ``FIC SLA - 2 Days``
      - SG
      - N/A
      - N/A 
      - View details: :colrefopen:`perf_SLA_Description`

    * - DM_Performance
      - SLA Schedule
      - The working calendar/schedule against which the SLA is measured (e.g., working hours, payroll calendars, or business day rules). 
      - ``Bank Reconciliation``
      - SG
      - N/A
      - N/A 
      - View details: :colrefopen:`perf_SLA_Schedule`

    * - DM_Performance
      - OLA Met
      - Shows whether the OLA was met for the case. 
      - ``1``, ``0``
      - SG
      - N/A
      - ``1`` = OLA met; ``0`` = OLA breached. Based on breach flag from task SLA. 
      - View details: :colrefopen:`perf_OLA_Met`
    
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


.. ===========================================================================================
.. ==== Description ==========================================================================
.. ===========================================================================================

.. colref-detail:: perf_Desc
    :title: Description

    .. tab-set::
        :class: dt-tabs-compact	

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[task.description]``
            - :fa:`tag` **Setting Type:** Direct
            - :fa:`cogs` **How:** Use the case’s full description text.
            - :fa:`filter` *Filter:* Includes cases with the specified HR case types; excludes cases with blank case numbers, cancelled or blank status, and ``'Demo Quality Assurance'`` service.
                
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    S.[task.description] AS [Description]
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

            - :fa:`database` *Lineage:* ``DM_Performance.[Case Number]`` → ``DM_SG_Incidents.[task.number]`` → ``DM_SG_Incidents.[task.description]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the incident’s full description from the incident record.
            - :fa:`filter` *Filter:* Includes incidents with case numbers starting ``'INC'`` and ``[Case Number]`` matching ``[task.number]``; leaves out non‑incidents.
        
            .. code-block:: tsql

                UPDATE DM_Performance
                SET [Description] = R.[task.description]
                FROM DM_SG_Incidents R
                WHERE LEFT([Case Number],3) = 'INC'
                    AND [Case Number] = R.[task.number];

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.description]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the travel case’s full description.
            - :fa:`filter` *Filter:* Includes records with ``[task.number]`` prefixed with ``'TRV%'`` , in Demo assignment groups, created on or after ``'2024-03-11'`` , tied to a Travel SLA, with SLA activity present, and with either ``[task.state.sys_choice]`` or ``[task.closed_at]`` present; leaves out records with status ``'Cancelled'`` , records where both status and close date are missing, and records already loaded with the same ``[Case Number]`` and ``[Last Update Datetime]`` .
            
            .. code-block:: tsql

                SELECT DISTINCT
                    M.[task.description] AS [Description]
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

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.description]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
                
            .. code-block:: tsql

                SELECT DISTINCT
                    M.[task.description] AS [Description]
                FROM SN.dbo.[10-task] AS M
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[task.description]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT 
                    [task.number], 
                    [task.description]
                FROM 
                    DM.dbo.DM_SG_RAS;

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
        
            .. code-block:: tsql

                -- Field not mentioned in p_DM_Performance_TMS   

        .. tab-item:: SharePoint JC

            .. card:: Data Origin & Logic
                :class-card: no-bullets
                :class-title: custom-title

                - :fa:`database` *Lineage:* N/A
                - :fa:`tag` *Setting Type:*
                - :fa:`cogs` *How:* 
                - :fa:`filter` *Filter:*
            
                .. code-block:: tsql
                
                    -- Field not mentioned in p_DM_Performance_JC


.. ===========================================================================================
.. ==== Reporting Process - Category =========================================================
.. ===========================================================================================

.. colref-detail:: perf_RP_Category
    :title: Reporting Process - Category

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[shc_case.topic_category:shc_topic_category.name]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the case’s topic category name.
            - :fa:`filter` *Filter:* Includes cases with the specified HR case types; excludes cases with blank case numbers, cancelled or blank status, and ``'Demo Quality Assurance'`` service.
                
                .. code-block:: tsql

                    SELECT DISTINCT
                        S.[task.number] AS [Case Number],
                        S.[shc_case.topic_category:shc_topic_category.name] AS [Reporting Process - Category]
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

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
        
            .. code-block:: tsql
            
                -- Field not mentioned in p_DM_Performance_INC.					

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
        
            .. code-block:: tsql
            
                -- Field commented out from p_DM_Performance_TRV.				

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
        
            .. code-block:: tsql
                                
                -- Field commented out from p_DM_Performance_CIC.

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
        
            .. code-block:: tsql
            
                -- Field commented out from p_DM_Performance_RAS.

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


.. =====================================================================================================
.. ======== Reporting Process - Topic ==================================================================
.. =====================================================================================================

.. colref-detail:: perf_RP_Topic
    :title: Reporting Process - Topic

    .. tab-set::
        :class: dt-tabs-compact 
            
        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[shc_case.topic_detail:shc_topic_detail.name]``
            - :fa:`tag` **Setting Type:** Direct
            - :fa:`cogs` **How:** Use the case’s topic detail name.
            - :fa:`filter` *Filter:* Includes cases with the specified HR case types; excludes cases with blank case numbers, cancelled or blank status, and ``'Demo Quality Assurance'`` service.
                
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    S.[shc_case.topic_detail:shc_topic_detail.name] AS [Reporting Process - Topic]
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

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*

            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC            

        .. tab-item:: SG Trv
                
            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*

            .. code-block:: tsql

                -- Field commented out in p_DM_Performance_TRV				

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*

            .. code-block:: tsql
                
                -- Field commented out in p_DM_Performance_CIC            

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*

            .. code-block:: tsql
            
                -- Field commented out in p_DM_Performance_RAS            

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*

            .. code-block:: tsql
            
                -- Field not mentioned in p_DM_Performance_TMS            

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*

            .. code-block:: tsql
            
                -- Field not mentioned in p_DM_Performance_JC


.. =====================================================================================================
.. ======== Reporting Process - Name ===================================================================
.. =====================================================================================================

.. colref-detail:: perf_RP_Name
    :title: Reporting Process - Name

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[shc_case.hr_service:shc_service.name]``; ``DM_SG_Cases.[task.number]``
            - :fa:`tag` *Setting Type:* Derived — Business-rule
            - :fa:`cogs` *How:* Use the case’s service name; when the service is ``'Separation from Service'`` and the case number starts with ``'HRL'``, label it ``'Separation from Service - HRL'``.
            - :fa:`filter` *Filter:* Includes cases with the specified HR case types; excludes cases with blank case numbers, cancelled or blank status, and ``'Demo Quality Assurance'`` service.
                
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    CASE
                        WHEN S.[shc_case.hr_service:shc_service.name] = 'Separation from Service'
                            AND LEFT(S.[task.number], 3) = 'HRL'
                        THEN 'Separation from Service - HRL'
                        ELSE S.[shc_case.hr_service:shc_service.name]
                    END AS [Reporting Process - Name]
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

            - :fa:`database` *Lineage:* ``DM_SG_Incidents.[task.business_service:cmdb_ci_service.name]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the incident’s business service name.
            - :fa:`filter` *Filter:* Includes incidents where either ``[task.state.sys_choice]`` or ``[incident.incident_state.sys_choice]`` is not ``'Cancelled'``/``'Canceled'``; leaves out incidents where both are ``'Cancelled'``/ ``'Canceled'`` .
            
            .. code-block:: tsql

                SELECT
                    [task.business_service:cmdb_ci_service.name] AS [Reporting Process - Name]
                FROM DM_SG_Incidents
                WHERE [task.state.sys_choice] NOT IN ('Cancelled','Canceled')
                    OR [incident.incident_state.sys_choice] NOT IN ('Cancelled','Canceled');

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN_raw.dbo.x_adsr_unall_travel_case.[u_service_type]`` → ``SN_raw.dbo.sys_choice.[label]`` (lists where ``[name]`` like ``'x_adsr_unall_travel_case%'`` and ``[element]`` like ``'u_serv%'``); ``'Travel Case - '``; ``'Other'``
            - :fa:`tag` *Setting Type:* Derived — Mapping
            - :fa:`cogs` *How:* Use the service type to look up a friendly label in the choices list, then prefix it with ``'Travel Case - '``; default to ``'Other'`` if no label is available.
            - :fa:`filter` *Filter:* Include records with ``[task.number]`` prefixed with ``'TRV%'``, in Demo assignment groups, created on or after ``'2024-03-11'``, tied to a Travel SLA, with SLA activity present, and with either ``[task.state.sys_choice]`` or ``[task.closed_at]`` present; leaves out records with status ``'Cancelled'``, records where both status and close date are missing, and records already loaded with the same ``[Case Number]`` and ``[Last Update Datetime]`` .
            
            .. code-block:: tsql

                SELECT DISTINCT
                    CONCAT('Travel Case - ', ISNULL(J_Serv_Lookup.[label], 'Other')) AS [Reporting Process - Name]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS J2
                    ON M.[task.sys_id] = J2.[task_sla.task.value]
                    AND J2.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS J
                    ON M.[task.sys_id] = J.sys_id
                LEFT JOIN SN_raw.dbo.sys_choice AS J_Serv_Lookup
                    ON J.u_service_type = J_Serv_Lookup.[value]
                    AND J_Serv_Lookup.[name] LIKE 'x_adsr_unall_travel_case%'
                    AND J_Serv_Lookup.element LIKE 'u_serv%'
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

                -- Code to be reviewed; data should not come from raw tables.

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``SN_raw.dbo.x_adsr_unall_invoices.u_business_service``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the process name recorded on the invoice (“business service”).
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.

            .. code-block:: tsql

                SELECT DISTINCT
                    INV.u_business_service AS [Reporting Process - Name]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_invoices AS INV
                    ON INV.sys_id = M.[task.sys_id]
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

                -- Code to be reviewed; data should not come from raw tables.

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*	
                
            .. code-block:: tsql

                SELECT 
                    [task.number], 
                    CONCAT('RAS Case ', ISNULL('', 'Other')) AS [Formatted Label]
                FROM 
                    DM_SG_RAS;

                -- 'RAS Case' text hardcoded in the field.
                -- The CONCAT function does not use any column reference,
                -- so the result will be always the same string/text: 'RAS Case'.

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Onboarding.[Reporting Process]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT 
                    [Requisition Action],
                    [Reporting Process]
                FROM 
                    DM_Onboarding;

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                -- Text hardcoded in the field.


.. =====================================================================================================
.. ======== Reporting Process - Type ===================================================================
.. =====================================================================================================

.. colref-detail:: perf_RP_Type
    :title: Reporting Process - Type

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[shc_case.u_type.sys_choice]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the case’s Type value.
            - :fa:`filter` *Filter:* Includes cases with the specified HR case types; excludes cases with blank case numbers, cancelled or blank status, and ``'Demo Quality Assurance'`` service.
                
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    S.[shc_case.u_type.sys_choice] AS [Reporting Process - Type]
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

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[shc_case.u_type.sys_choice]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the case’s Type value.
            - :fa:`filter` *Filter:* Includes cases with a non‑blank case number and the specified HR case types, and status blank or not ``'Cancelled'``/ ``'Canceled'``; leaves out the ``'Demo Quality Assurance'`` service.
            
            .. code-block:: tsql

                SELECT
                    [incident.category.sys_choice] AS [Reporting Process - Type]
                FROM DM_SG_Incidents
                WHERE [task.state.sys_choice] NOT IN ('Cancelled','Canceled')
                    OR [incident.incident_state.sys_choice] NOT IN ('Cancelled','Canceled');

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN_raw.dbo.x_adsr_unall_travel_case.[u_travel_type]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql
            
                SELECT DISTINCT
                    CASE
                        WHEN J.u_travel_type = '01' THEN 'Duty Travel'
                        WHEN J.u_travel_type = '02' THEN 'Entitlement Travel'
                        ELSE NULL
                    END AS [Reporting Process - Type]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS J
                    ON M.[task.sys_id] = J.sys_id
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

            - :fa:`database` *Lineage:* ``SN_raw.dbo.x_adsr_unall_invoices.u_service_type``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the process type recorded on the invoice.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.
            
            .. code-block:: tsql
                        
                SELECT DISTINCT
                    INV.u_service_type AS [Reporting Process - Type]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_invoices AS INV
                    ON INV.sys_id = M.[task.sys_id]
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[contract_sla.name]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
            
            .. code-block:: tsql

                SELECT 
                    [task.number], 
                    REPLACE(
                        REPLACE(
                            REPLACE(
                                REPLACE([contract_sla.name], 'RAS SLA for ', ''), 
                                'RAS Agent SLA for ', ''
                            ), 
                            'RAS SLA ', ''
                        ), 
                        'RAS HRBP-', ''
                    ) AS [Cleaned SLA Name]
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

            - :fa:`database` *Lineage:* ``[MANUAL].dbo.[2022_Monitoring_Sheet_updated].[Classification Request]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*

            .. code-block:: tsql

                SELECT 
                    CONCAT(
                        FORMAT([hief ], '0000'), '-', 
                        FORMAT([Post], '00000000')
                    ) AS [Formatted Code],
                    [Classification Request]
                FROM 
                    [MANUAL].dbo.[2022_Monitoring_Sheet_updated];


.. =====================================================================================================
.. ======== Reporting Process - Subtype ================================================================
.. =====================================================================================================

.. colref-detail:: perf_RP_Subtype
    :title: Reporting Process - Subtype

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[shc_case.u_subtype.sys_choice]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the case’s Subtype value.
            - :fa:`filter` *Filter:* Includes cases with the specified HR case types; excludes cases with blank case numbers, cancelled or blank status, and ``'Demo Quality Assurance'`` service.
            
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    S.[shc_case.u_subtype.sys_choice] AS [Reporting Process - Subtype]
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

            - :fa:`database` *Lineage:* ``DM_SG_Incidents.[incident.subcategory.sys_choice]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the incident’s subcategory value.
            - :fa:`filter` *Filter:* Includes incidents where either ``[task state]`` or ``[incident state]`` is not ``'Cancelled'``/ ``'Canceled'``; leaves out incidents where both are ``'Cancelled'``/ ``'Canceled'`` .
            
            .. code-block:: tsql

                SELECT
                    [incident.subcategory.sys_choice] AS [Reporting Process - Subtype]
                FROM DM_SG_Incidents
                WHERE [task.state.sys_choice] NOT IN ('Cancelled','Canceled')
                    OR [incident.incident_state.sys_choice] NOT IN ('Cancelled','Canceled');

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN_raw.dbo.sys_choice.[label]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*

            .. code-block:: tsql

                SELECT DISTINCT
                    J_Serv_Lookup.[label] AS [Reporting Process - Subtype]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS J
                    ON M.[task.sys_id] = J.sys_id
                LEFT JOIN SN_raw.dbo.sys_choice AS J_Serv_Lookup
                    ON J.u_service_type = J_Serv_Lookup.[value]
                    AND J_Serv_Lookup.[name] LIKE 'x_adsr_unall_travel_case%'
                    AND J_Serv_Lookup.element LIKE 'u_serv%'
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

                -- Code to be reviewed; data should not come from raw tables.

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
            
            .. code-block:: tsql

                -- Field commented out in p_DM_Performance_CIC

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
            
            .. code-block:: tsql
            
                -- Field value set to empty string ('').

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
            
            .. code-block:: tsql
            
                -- Field not mentioned in p_DM_Performance_TMS            

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* ``[MANUAL].dbo.[2022_Monitoring_Sheet_updated].[Proposed Level]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
            
            .. code-block:: tsql

                SELECT 
                    CONCAT(
                        FORMAT([hief], '0000'), '-', 
                        FORMAT([Post], '00000000')
                    ) AS [Formatted Code],
                    [Proposed Level]
                FROM 
                    Monitoring_Sheet;


.. =====================================================================================================
.. ======== Assignment Group (Team Name) ===============================================================
.. =====================================================================================================

.. colref-detail:: perf_Assignment_Group
    :title: Assignment Group (Team Name)

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases
            
            - :fa:`database` *Lineage:* ``DM_SG_Cases.[task.assignment_group:sys_user_group.name]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the case’s assignment group (team name).
            - :fa:`filter` *Filter:* Includes cases with the specified HR case types; excludes cases with blank case numbers, cancelled or blank status, and ``'Demo Quality Assurance'`` service.
            
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    S.[task.assignment_group:sys_user_group.name] AS [Assignment Group (Team Name)]
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

            - :fa:`database` *Lineage:* ``DM_SG_Incidents.[task.assignment_group:sys_user_group.name]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Use the incident’s assignment group (team name).
            - :fa:`filter` *Filter:* Includes incidents where either ``[task state]`` or ``[incident state]`` is not ``'Cancelled'``/ ``'Canceled'``; leaves out incidents where both are ``'Cancelled'``/ ``'Canceled'`` .
                        
            .. code-block:: tsql

                SELECT
                    [task.assignment_group:sys_user_group.name] AS [Assignment Group (Team Name)]
                FROM DM_SG_Incidents
                WHERE [task.state.sys_choice] NOT IN ('Cancelled','Canceled')
                    OR [incident.incident_state.sys_choice] NOT IN ('Cancelled','Canceled');

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.assignment_group:sys_user_group.name]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    M.[task.assignment_group:sys_user_group.name] AS [Assignment Group (Team Name)]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND S.[task_sla.has_breached] IS NOT NULL
                    AND ISNULL(M.[task.state.sys_choice], '') <> 'Cancelled'
                    AND NOT (M.[task.state.sys_choice] IS NULL AND NULLIF(M.[task.closed_at], '1900-01-01') IS NULL)
                    AND NOT EXISTS (
                        SELECT 1
                        FROM DM.dbo.DM_Performance AS P
                        WHERE P.[Case Number] = M.[task.number]
                            AND P.[Last Update Datetime] = M.[task.sys_updated_on]
                    );

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.assignment_group:sys_user_group.name]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Show the team that the case is assigned to.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.
                
            .. code-block:: tsql

                SELECT DISTINCT
                    M.[task.assignment_group:sys_user_group.name] AS [Assignment Group (Team Name)]
                FROM SN.dbo.[10-task] AS M
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[task.assignment_group:sys_user_group.name]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT 
                    task.number,
                    task.[assignment_group:sys_user_group.name]
                FROM 
                    DM_SG_RAS;

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql	
            
                -- 'HR Onboarding' text hardcoded in the field.            

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                -- Field not mentioned in p_DM_Performance_JC



.. =====================================================================================================
.. ======== Stream =====================================================================================
.. =====================================================================================================

.. colref-detail:: perf_Stream
    :title: Stream

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[task.assignment_group:sys_user_group.name]``; ``DM_SG_Cases.[shc_case.hr_service:shc_service.name]``
            - :fa:`tag` *Setting Type:* Derived — Business-rule
            - :fa:`cogs` *How:* Per service, use the most common assignment group and map names to standard labels; as an exception, use the case's HR assignement group for ``'Special Leave'`` in ``'HR Maintenance'`` or ``'HR Offboarding'``.
            - :fa:`filter` *Filter:* Includes cases with the specified HR case types; excludes cases with blank case numbers, cancelled or blank status, and ``'Demo Quality Assurance'`` service.
                            
            .. code-block:: tsql

                /* 
                Table variable @Stream_Designator is created in SP.
                To insert data into @Stream_Designator, DM_SG_Cases is used as source.
                [Stream] is updated based on [task.assignment_group:sys_user_group.name] (aliased as StreamName) from @Stream_Designator.
                For Special Leave, the stream is forced to the case’s assignment group when it is HR Maintenance or HR Offboarding.
                The query below reproduces the SP’s business logic but omits
                    - the @Stream_Designator staging,
                    - duplicate cleanup and cancelled‑row deletes,
                    - and the intermediate post‑INSERT UPDATE/override steps.
                */

                WITH Designator AS (
                    SELECT
                      ProcessName = S.[shc_case.hr_service:shc_service.name],
                      RawStream   = S.[task.assignment_group:sys_user_group.name],
                      Volume      = COUNT(*)
                    FROM DM.dbo.DM_SG_Cases AS S
                    WHERE S.[task.assignment_group:sys_user_group.name] IS NOT NULL
                    GROUP BY
                        S.[shc_case.hr_service:shc_service.name],
                        S.[task.assignment_group:sys_user_group.name]
                ),
                TopPerProcess AS (
                    SELECT
                        d.ProcessName,
                        d.RawStream,
                        ROW_NUMBER() OVER (
                            PARTITION BY d.ProcessName
                            ORDER BY d.Volume DESC
                        ) AS rn
                    FROM Designator d
                ),
                Norm AS (
                 SELECT
                   ProcessName,
                   StreamName =
                     CASE
                       WHEN ProcessName = 'Intrateam request'            THEN 'Workflow'
                       WHEN RawStream LIKE 'Finance General Accounting%' THEN 'General Accounting'
                       WHEN RawStream = 'HR Offboarding Documents'       THEN 'HR Offboarding'
                       WHEN RawStream LIKE 'HR Maintenance%'             THEN 'HR Maintenance'
                       WHEN RawStream = 'HR Offboarding'                 THEN 'HR Offboarding'
                       WHEN RawStream LIKE 'HR%'                         THEN 'HR Maintenance'
                       WHEN RawStream LIKE 'Finance Invoice%'            THEN 'Invoicing'
                       WHEN RawStream LIKE 'MDM%'                        THEN 'MDM'
                       WHEN RawStream LIKE 'Solutions-Finance'           THEN 'MDM'
                       WHEN RawStream LIKE 'Finance Payments%'           THEN 'Payments'
                       WHEN RawStream LIKE 'Payroll%'                    THEN 'Payroll'
                       WHEN RawStream LIKE '%ICT Services%'              THEN 'Customer Care'
                     ELSE RawStream
                    END
                  FROM TopPerProcess
                  WHERE rn = 1
                )
                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    CASE
                      WHEN S.[shc_case.hr_service:shc_service.name] = 'Special Leave'
                        AND S.[task.assignment_group:sys_user_group.name] IN ('HR Maintenance','HR Offboarding')
                      THEN S.[task.assignment_group:sys_user_group.name]
                      ELSE N.StreamName
                      END AS [Stream]
                FROM DM.dbo.DM_SG_Cases AS S
                LEFT JOIN Norm AS N
                    ON N.ProcessName = S.[shc_case.hr_service:shc_service.name]
                WHERE
                  S.[task.number] IS NOT NULL
                  AND LEN(S.[task.number]) > 0
                  AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A 
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A 

            .. code-block:: tsql
            
                -- 'Customer Care' hardcoded in the field.

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A 
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A
        
            .. code-block:: tsql
            
                -- 'Travel' hardcoded in the field.

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A 
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A
        
            .. code-block:: tsql
            
                -- 'Invoicing' hardcoded in the field.

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A 
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql
        
                -- 'RAS' hardcoded in the field.

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A 
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql
        
                -- 'HR Onboarding' hardcoded in the field.

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A 
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql

                -- 'HR Job Classification' hardcoded in the field.


.. =====================================================================================================
.. ======== Section ====================================================================================
.. =====================================================================================================

.. colref-detail:: perf_Section
    :title: Section

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[task.assignment_group:sys_user_group.name]``; ``DM_SG_Cases.[shc_case.hr_service:shc_service.name]``
            - :fa:`tag` *Setting Type:* Derived — Business‑rule
            - :fa:`cogs` *How:* Per service, use the most common assignment group and map it to a broader section label (Internal, HR Admin, Finance, Payroll, Customer Care).
            - :fa:`filter` *Filter:* Includes cases with a non‑blank case number and the specified HR case types, and status blank or not ``'Cancelled'``/ ``'Canceled'``; leaves out the ``'Demo Quality Assurance'`` service.
                
            .. code-block:: tsql

                /*
                SP declares temporary table to group SG cases by reporting process & assignment group;
                inserts each combination as both Stream & Section.
                Next, joins result to DM_Performance on [Reporting Process – Name].
                */ 

                WITH Designator AS (
                    SELECT
                        ProcessName = S.[shc_case.hr_service:shc_service.name],
                        RawSection  = S.[task.assignment_group:sys_user_group.name],
                        Volume      = COUNT(*)
                    FROM DM.dbo.DM_SG_Cases AS S
                    WHERE S.[task.assignment_group:sys_user_group.name] IS NOT NULL
                    GROUP BY
                        S.[shc_case.hr_service:shc_service.name],
                        S.[task.assignment_group:sys_user_group.name]
                ),
                TopPerProcess AS (
                    SELECT
                        d.ProcessName,
                        d.RawSection,
                        ROW_NUMBER() OVER (
                            PARTITION BY d.ProcessName
                            ORDER BY d.Volume DESC
                        ) AS rn
                    FROM Designator d
                ),
                NormSec AS (
                    SELECT
                        ProcessName,
                        SectionName =
                            CASE
                                WHEN ProcessName = 'Intrateam request'      THEN 'Internal'
                                WHEN RawSection LIKE '%HR%'                  THEN 'HR Admin'
                                WHEN RawSection LIKE 'Finance%'              THEN 'Finance'
                                WHEN RawSection LIKE 'MDM%'                  THEN 'Finance'
                                WHEN RawSection LIKE 'Solutions-Finance'     THEN 'Finance'
                                WHEN RawSection LIKE 'Payroll%'              THEN 'Payroll'
                                WHEN RawSection LIKE '%ICT Services%'        THEN 'Customer Care'
                                ELSE RawSection
                            END
                    FROM TopPerProcess
                    WHERE rn = 1
                )
                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    N.SectionName   AS [Section]
                FROM DM.dbo.DM_SG_Cases AS S
                LEFT JOIN NormSec AS N
                    ON N.ProcessName = S.[shc_case.hr_service:shc_service.name]
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A 
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A 

            .. code-block:: tsql
                    
                -- Text 'Customer Care' hardcoded in the field.

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A 
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A
            
            .. code-block:: tsql	
                
                -- Text ``'Operations'`` hardcoded in the field.

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A 
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A
            
            .. code-block:: tsql
            
                -- Text 'Finance' hardcoded in the field.

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A 
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql
                
                -- Text 'HR Admin' hardcoded in the field.

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A 
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql
                
                -- Text 'HR Admin' hardcoded in the field.

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A 
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql
                
                -- Text 'HR Admin' hardcoded in the field.


.. =====================================================================================================
.. ======== Case Priority ==============================================================================
.. =====================================================================================================

.. colref-detail:: perf_Case_Priority
    :title: Case Priority

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[task.priority.sys_choice]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    S.[task.priority.sys_choice] AS [Case Priority]
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

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Incidents.[task.priority.sys_choice]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
            
            .. code-block:: tsql

                SELECT
                    [task.priority.sys_choice] AS [Case Priority]
                FROM DM_SG_Incidents
                WHERE [task.state.sys_choice] NOT IN ('Cancelled','Canceled')
                    OR [incident.incident_state.sys_choice] NOT IN ('Cancelled','Canceled');

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.priority.sys_choice]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql
                
                SELECT DISTINCT
                    M.[task.priority.sys_choice] AS [Case Priority]
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

            - :fa:`database` **Lineage:** ``SN.dbo.[10-task].[task.priority.sys_choice]``
            - :fa:`tag` **Setting Type:** Direct
            - :fa:`cogs` **How:** Use the priority shown on the case.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.
            
            .. code-block:: tsql

                SELECT DISTINCT
                    M.[task.priority.sys_choice] AS [Case Priority]
                FROM SN.dbo.[10-task] AS M
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[task.priority.sys_choice]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT
                    [task.number],
                    [task.priority.sys_choice]
                FROM
                    DM.dbo.DM_SG_RAS;

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
            
            .. code-block:: tsql

                -- Field not mentioned in p_DM_Performance_TMS

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:*  N/A
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql
        
                -- Field not mentioned in p_DM_Performance_JC


.. =====================================================================================================
.. ======== Complexity Factor ==========================================================================
.. =====================================================================================================

.. colref-detail:: perf_Complexity_Factor
    :title: Complexity Factor

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``SN_raw.dbo.sn_hr_core_case_relations.[u_complexity_factor]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
            
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number]        AS [Case Number],
                    R.[u_complexity_factor] AS [Complexity Factor]
                FROM DM.dbo.DM_SG_Cases AS S
                LEFT JOIN SN_raw.dbo.task AS T
                ON T.[number] = S.[task.number]
                LEFT JOIN SN_raw.dbo.sn_hr_core_case_relations AS R
                ON R.[sys_id] = T.[sys_id]
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

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql
            
                -- Field not mentioned in p_DM_Performance_INC.

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql
        
                -- Field not mentioned in p_DM_Performance_TRV.

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_CIC.

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_RAS.

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


.. =====================================================================================================
.. ======== Case Reassignment Count ====================================================================
.. =====================================================================================================

.. colref-detail:: perf_Case_Reassignment_Count
    :title: Case Reassignment Count

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[shc_case.case_reassignment_count]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    S.[shc_case.case_reassignment_count] AS [Case Reassignment Count]
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

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql
            
                -- Field not mentioned in p_DM_Performance_INC

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql
            
                -- Field commented out in p_DM_Performance_INC

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql
            
                -- Field commented out in p_DM_Performance_CIC

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql
            
                -- Field commented out in p_DM_Performance_RAS

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql
            
                -- Field not mentioned in p_DM_Performance_TMS

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A 
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_JC


.. =====================================================================================================
.. ======== Case Open DateTime =========================================================================
.. =====================================================================================================

.. colref-detail:: perf_Case_Open_DateTime
    :title: Case Open DateTime

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.opened_at]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    T.[task.opened_at] AS [Case Open DateTime]
                FROM DM.dbo.DM_SG_Cases AS S
                JOIN SN.dbo.[10-task] AS T
                ON T.[task.number] = S.[task.number]
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` **Lineage:** ``SN.dbo.[10-task].[task.opened_at]``
            - :fa:`tag` **Setting Type:** Direct
            - :fa:`cogs` **How:** Use the date and time when the case was opened.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.
            
            .. code-block:: tsql

                SELECT
                    [task.opened_at] AS [Case Open DateTime]
                FROM DM_SG_Incidents
                WHERE [task.state.sys_choice] NOT IN ('Cancelled','Canceled')
                    OR [incident.incident_state.sys_choice] NOT IN ('Cancelled','Canceled');

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.opened_at]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT DISTINCT
                    M.[task.opened_at] AS [Case Open Datetime]
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

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.opened_at]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*

            .. code-block:: tsql

                SELECT DISTINCT
                    M.[task.opened_at] AS [Case Open DateTime]
                FROM SN.dbo.[10-task] AS M
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[task_sla.start_time]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT
                    [task.number],
                    [task_sla.start_time]
                FROM
                    DM.dbo.DM_SG_RAS;

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Onboarding.[TMS_action_start_date]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT
                    [Requisition Action],
                    CONVERT(datetime, TMS_action_start_date)
                FROM
                    DM.dbo.DM_Onboarding;             

        .. tab-item:: SharePoint JC

                - :fa:`database` *Lineage:* N/A
                - :fa:`tag` *Setting Type:* N/A
                - :fa:`cogs` *How:* N/A
                - :fa:`filter` *Filter:* N/A

                .. code-block:: tsql
            
                    -- Field not mentioned in p_DM_Performance_JC


.. =====================================================================================================
.. ======== Case Open Date =============================================================================
.. =====================================================================================================

.. colref-detail:: perf_Case_Open_Date
    :title: Case Open Date

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.opened_at]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SN.dbo.[10-task].[task.opened_at]
                SELECT DISTINCT
                    S.[task.number]                 AS [Case Number],
                    CAST(T.[task.opened_at] AS date) AS [Case Open Date]
                FROM DM.dbo.DM_SG_Cases AS S
                JOIN SN.dbo.[10-task] AS T
                ON T.[task.number] = S.[task.number]
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Incidents.[task.opened_at]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                UPDATE DM_Performance
                SET [Case Open Date] = CAST ( [Case Open Datetime] AS DATE )
                WHERE LEFT ( [Case Number] , 3 ) = 'INC';

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.opened_at]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT DISTINCT
                    CAST(M.[task.opened_at] AS date) AS [Case Open Date]
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

            - :fa:`database` **Lineage:** ``Derived — CAST(SN.dbo.[10-task].[task.opened_at] AS date)``
            - :fa:`tag` **Setting Type:** Derived — Conversion
            - :fa:`cogs` **How:** Show only the date from when the case was opened.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.
            
            .. code-block:: tsql

                SELECT DISTINCT
                    CAST(M.[task.opened_at] AS date) AS [Case Open Date]
                FROM SN.dbo.[10-task] AS M
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[task_sla.start_time]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT
                    [task.number],
                    CAST([task_sla.start_time] AS date)
                FROM
                    DM.dbo.DM_SG_RAS;

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Onboarding.[TMS_action_start_date]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT
                    [Requisition Action],
                    [TMS_action_start_date]
                FROM
                    DM.dbo.DM_Onboarding;

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* ``[MANUAL].dbo.[2022_Monitoring_Sheet_updated].[Case Creation Date]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT
                    CONCAT(
                        FORMAT([hief ], '0000'),
                        '-',
                        FORMAT([Post], '00000000')
                    ),
                    [Case Creation Date]
                FROM
                    [MANUAL].dbo.[2022_Monitoring_Sheet_updated];


.. =====================================================================================================
.. ======== Case Close DateTime ========================================================================
.. =====================================================================================================

.. colref-detail:: perf_Case_Close_DateTime
    :title: Case Close DateTime

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.closed_at]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number]                 AS [Case Number],
                    T.[task.closed_at]              AS [Case Close DateTime]
                FROM DM.dbo.DM_SG_Cases AS S
                JOIN SN.dbo.[10-task] AS T
                ON T.[task.number] = S.[task.number]
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* ``DM_SG_Incidents.[task.closed_at]``, ``SN_raw.dbo.task.[closed_at]`` 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                UPDATE DM_Performance
                SET [Case Close DateTime] = closed_at
                FROM SN_raw.dbo.task
                WHERE [Case Number] = number
                    AND LEFT ( [Case Number] , 3 ) = 'INC';

                UPDATE DM_Performance
                SET [Case Close DateTime] = NULL
                WHERE [Case Close DateTime] = '1900-01-01 00:00:00.000'
                    OR [Case Close DateTime] = '1900-01-01 01:00:00.000';

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.closed_at]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT DISTINCT
                    M.[task.closed_at] AS [Case Close Datetime]
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

            - :fa:`database` **Lineage:** ``SN.dbo.[10-task].[task.closed_at]``
            - :fa:`tag` **Setting Type:** Direct
            - :fa:`cogs` **How:** Show the date and time when the case was closed.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.
                
            .. code-block:: tsql

                SELECT DISTINCT
                    M.[task.closed_at] AS [Case Close DateTime]
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
                    ISNULL([task.closed_at], [task_sla.end_time])
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
                    CONVERT(datetime, TMS_action_end_date)
                FROM
                    DM.dbo.DM_Onboarding;     

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql
            
                -- Field not mentioned in p_DM_Performance_JC


.. =====================================================================================================
.. ======== Case Close Date ============================================================================
.. =====================================================================================================

.. colref-detail:: perf_Case_Close_Date
    :title: Case Close Date

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.closed_at]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number]                  AS [Case Number],
                    CAST(T.[task.closed_at] AS date) AS [Case Close Date]
                FROM DM.dbo.DM_SG_Cases AS S
                JOIN SN.dbo.[10-task] AS T
                ON T.[task.number] = S.[task.number]
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* ``SN_raw.dbo.task.[closed_at]; DM_SG_Incidents.[task.closed_at]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                UPDATE DM_Performance
                SET [Case Close DateTime] = closed_at
                FROM SN_raw.dbo.task
                WHERE [Case Number] = number
                    AND LEFT([Case Number],3) = 'INC';

                UPDATE DM_Performance
                SET [Case Close DateTime] = NULL
                WHERE [Case Close DateTime] IN ('1900-01-01 00:00:00.000','1900-01-01 01:00:00.000');

                UPDATE DM_Performance
                SET [Case Close Date] = CAST([Case Close DateTime] AS DATE)
                WHERE LEFT([Case Number],3) = 'INC';

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.closed_at]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT DISTINCT
                    CAST(M.[task.closed_at] AS date) AS [Case Close Date]
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

            - :fa:`database` *Lineage:* ``Derived — CAST(SN.dbo.[10-task].[task.closed_at] AS date)``
            - :fa:`tag` *Setting Type:* Derived — Conversion
            - :fa:`cogs` *How:* Show only the date from when the case was closed.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.
            
            .. code-block:: tsql

                SELECT DISTINCT
                    CAST(M.[task.closed_at] AS date) AS [Case Close Date]
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
                    CAST(ISNULL([task.closed_at], [task_sla.end_time]) AS date)
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
                    TMS_action_end_date
                FROM
                    DM.dbo.DM_Onboarding;

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* ``[MANUAL].dbo.[2022_Monitoring_Sheet_updated].[Date JD Classified]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT
                    CONCAT(
                        FORMAT([hief ], '0000'),
                        '-',
                        FORMAT([Post], '00000000')
                    ),
                    [Date JD Classified]
                FROM
                    [MANUAL].dbo.[2022_Monitoring_Sheet_updated];


.. =====================================================================================================
.. ======== Open Datetime - Local ======================================================================
.. =====================================================================================================

.. colref-detail:: perf_Open_Datetime_Local
    :title: Open Datetime - Local

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``SN_raw.dbo.task.opened_at`` ; ``DM_Calendar.Master Date``
            - :fa:`tag` *Setting Type:* Derived — Conversion
            - :fa:`cogs` *How:* Convert the case’s opening time to local time by adding +2h between last Sunday of March and last Sunday of October (Demo); otherwise +1h.
            - :fa:`filter` *Filter:* Include Request Portal cases that have a case number, belong to the specified HR case classes, and have an opening time, even if the case status is blank; exclude cancelled cases and the Demo Quality Assurance service.
                            
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    CASE 
                        WHEN T.[opened_at] BETWEEN J_Start.MaxMD AND J_End.MaxMD
                            THEN DATEADD(HOUR, 2, T.[opened_at])
                        ELSE DATEADD(HOUR, 1, T.[opened_at])
                    END AS [Open Datetime - Local]
                FROM DM.dbo.DM_SG_Cases AS S
                JOIN SN_raw.dbo.task AS T
                ON T.[number] = S.[task.number]
                LEFT JOIN (
                    SELECT YEAR([Master Date]) AS MY, MAX([Master Date]) AS MaxMD
                    FROM DM.dbo.DM_Calendar
                    WHERE [Service Area - Full] = '1950 - Global Shared Services Centre'
                        AND [Day of Week] = 7
                        AND DATEPART(MONTH, [Master Date]) = 3
                    GROUP BY YEAR([Master Date])
                ) AS J_Start
                ON YEAR(CAST(T.[opened_at] AS date)) = J_Start.MY
                LEFT JOIN (
                    SELECT YEAR([Master Date]) AS MY, MAX([Master Date]) AS MaxMD
                    FROM DM.dbo.DM_Calendar
                    WHERE [Service Area - Full] = '1950 - Global Shared Services Centre'
                        AND [Day of Week] = 7
                        AND DATEPART(MONTH, [Master Date]) = 10
                    GROUP BY YEAR([Master Date])
                ) AS J_End
                ON YEAR(CAST(T.[opened_at] AS date)) = J_End.MY
                WHERE
                    T.[opened_at] IS NOT NULL
                        AND S.[task.number] IS NOT NULL
                        AND LEN(S.[task.number]) > 0
                        AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*

            .. code-block:: tsql
            
                -- Field not mentioned in p_DM_Performance_INC

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.opened_at]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*

            .. code-block:: tsql
            
                SELECT DISTINCT
                    CAST(M.[task.opened_at] AT TIME ZONE 'UTC' AT TIME ZONE 'Central European Standard Time' AS datetime)
                        AS [Open Datetime - Local]
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

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:* Derived — Conversion
            - :fa:`cogs` *How:* Show the local date and time when the case was opened, converted from UTC to Central European time. Daylight saving is handled.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.

            .. code-block:: tsql

                SELECT DISTINCT
                  CAST(M.[task.opened_at] AT TIME ZONE 'UTC' AT TIME ZONE 'Central European Standard Time' AS datetime) AS [Open Datetime - Local]
                FROM SN.dbo.[10-task] AS M
                WHERE M.[task.number] LIKE 'CIC%'
                  AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                  AND M.[task.state.sys_choice] NOT LIKE '%Read%';            

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ...

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


.. =====================================================================================================
.. ======== YYYY-MM ====================================================================================
.. =====================================================================================================

.. colref-detail:: perf_YYYY_MM
    :title: YYYY-MM

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[task.closed_at]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    LEFT(CONVERT(VARCHAR, S.[task.closed_at], 23), 7) AS [YYYY-MM]
                FROM DM.dbo.DM_SG_Cases AS S
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* ``DM_Performance.[Case Close Date]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*

            .. code-block:: tsql

                UPDATE DM_Performance
                SET [YYYY-MM] = LEFT ( CONVERT ( VARCHAR , [Case Close Date] , 23 ) , 7 )
                WHERE LEFT ( [Case Number] , 3 ) = 'INC';

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.closed_at]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT DISTINCT
                    LEFT(CONVERT(VARCHAR, M.[task.closed_at], 23), 7) AS [YYYY-MM]
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

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:* Derived — Conversion
            - :fa:`cogs` *How:* Show the year and month when the case was closed, in the format YYYY‑MM (for example, 2024‑06).
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.
            
            .. code-block:: tsql

                SELECT DISTINCT
                    LEFT(CONVERT(VARCHAR, M.[task.closed_at], 23), 7) AS [YYYY-MM]
                FROM SN.dbo.[10-task] AS M
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[task.closed_at]``; ``[task_sla.end_time]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT
                    [task.number],
                    LEFT(CONVERT(VARCHAR, ISNULL([task.closed_at], [task_sla.end_time]), 23), 7)
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
                    LEFT(CONVERT(VARCHAR, TMS_action_end_date, 23), 7)
                FROM
                    DM.dbo.DM_Onboarding;

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Performance.[case close date]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*

            .. code-block:: tsql

                -- Value updated in temporary table #temp before merge.

                SELECT
                    [Case Number],
                    [YYYY-MM],
                    LEFT([case close date], 7)
                FROM
                    DM.dbo.DM_Performance
                WHERE
                    [Platform] = 'Sharepoint';


.. =====================================================================================================
.. ======== Elapsed Time (Calendar Days) ===============================================================
.. =====================================================================================================

.. colref-detail:: perf_Elapsed_Time_Calendar_Days
    :title: Elapsed Time (Calendar Days)

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_SG_Cases.task.calendar_duration`` 
            - :fa:`tag` *Setting Type:* Derived — Conversion
            - :fa:`cogs` *How:* Convert the case’s calendar duration from seconds to calendar days, rounded to two decimal places.
            - :fa:`filter` *Filter:* Include Request Portal cases that have a case number and belong to the specified HR case classes, even if the case status is blank; exclude cancelled cases and the Demo Quality Assurance service.
            
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    CAST(
                        CAST(
                            DATEDIFF_BIG(SECOND, '1970-01-01 00:00:00.000', S.[task.calendar_duration]) AS decimal(16,2)
                        ) / 86400 AS DECIMAL(10,2)
                    ) AS [Elapsed Time (Calendar Days)]
                FROM DM.dbo.DM_SG_Cases AS S
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* ``DM_SG_Incidents.[task.calendar_duration]``, ``DM_SG_Incidents.[task.closed_at]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                UPDATE DM_Performance
                SET	[Elapsed Time (Calendar Days)] = 
                    CASE
                        WHEN [task.closed_at] IS NOT NULL
                            THEN CAST (CAST (DATEDIFF_BIG(SECOND,'1970-01-01 00:00:00.000',[task.calendar_duration]) AS decimal(16,2))/ 86400 AS decimal (10,2))
                        ELSE NULL
                    END
                FROM DM_SG_Incidents 
                WITH (TABLOCK) 
                INNER JOIN DM_Performance 
                    ON DM_Performance.[Case Number] = DM_SG_Incidents.[task.number]
                WHERE LEFT ([Case Number], 3)	= 'INC';

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.calendar_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT DISTINCT
                    CAST(
                        CAST(
                            DATEDIFF_BIG(SECOND, '1900-01-01 00:00:00.000', M.[task.calendar_duration]) AS decimal(16,2)
                        ) / 86400 AS DECIMAL(10,2)
                    ) AS [Elapsed Time (Calendar Days)]
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

            - :fa:`database` *Lineage:* ``Derived — DATEDIFF_BIG(SECOND,'1900-01-01 00:00:00.000',SN.dbo.[10-task].[task.calendar_duration]) / 86400``
            - :fa:`tag` *Setting Type:* Derived — Calculation
            - :fa:`cogs` *How:* Total calendar days the case was open, based on the system’s recorded duration; shown as a decimal number.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.
            
            .. code-block:: tsql

                SELECT DISTINCT
                    CAST(
                        CAST(
                            DATEDIFF_BIG(
                                SECOND,
                                '1900-01-01 00:00:00.000',
                                M.[task.calendar_duration]
                            ) AS decimal(16,2)
                        ) / 86400 AS decimal(10,2)
                    ) AS [Elapsed Time (Calendar Days)]
                FROM SN.dbo.[10-task] AS M
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[task.calendar_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT 
                    [task.number], 
                    CAST(
                        CAST(
                            DATEDIFF_BIG(SECOND, '1970-01-01 00:00:00.000', [task.calendar_duration]) 
                            AS decimal(16, 2)
                        ) / 86400 
                        AS decimal(10, 2)
                    ) AS [Duration (Days)]
                FROM 
                    DM.dbo.DM_SG_RAS;

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Onboarding.[Elapsed Time (Calendar Days)]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT 
                    [Requisition Action], 
                    [Elapsed Time (Calendar Days)]
                FROM 
                    DM.dbo.DM_Onboarding;

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* ``[MANUAL].dbo.[2022_Monitoring_Sheet_updated].[Case Creation Date]``, ``[Vision Update DATE]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT 
                    CONCAT(
                        FORMAT([hief], '0000'), '-', FORMAT([Post], '00000000')
                    ) AS [Post Code],
                    DATEDIFF(DAY, [Case Creation Date], [Vision Update DATE]) AS [Days Elapsed]
                FROM 
                    [MANUAL].dbo.[2022_Monitoring_Sheet_updated];


.. =====================================================================================================
.. ======== Elapsed Time (Business Days) ===============================================================
.. =====================================================================================================

.. colref-detail:: perf_Elapsed_Time_Business_Days
    :title: Elapsed Time (Business Days)

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[task.opened_at]``, ``DM.dbo.DM_SG_Cases.[task.closed_at]``, ``DM.dbo.DM_Calendar.[Master Date]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT
                    S.[task.number] AS [Case Number],					
                    CAST(
                        CAST(DATEDIFF_BIG(SECOND, S.[task.opened_at], S.[task.closed_at]) AS decimal(16,2)) / 86400
                        - (
                            SELECT COUNT(DISTINCT C.[Master Date])
                            FROM DM.dbo.DM_Calendar AS C WITH (TABLOCK)
                            WHERE C.[Master Date] BETWEEN CAST(S.[task.opened_at] AS date) AND CAST(S.[task.closed_at] AS date)
                            AND C.[Service Area - Name] = REPLACE(S.[shc_case.u_Service_Area:shc_Service_Area.u_name], 'Ã¼','ü')
                            AND C.[Workday] = 0
                        )
                        AS decimal(10,2)
                    ) AS [Elapsed Time (Business Days)]
                FROM DM.dbo.DM_SG_Cases AS S WITH (TABLOCK)
                WHERE 1=1
                AND S.[task.number] IS NOT NULL
                AND LEN(S.[task.number]) > 0
                AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* ``DM_SG_Incidents.[task.closed_at]``, ``DM_SG_Incidents.[task.opened_at]``, ``DM.dbo.DM_Calendar.[Master Date]``, ``[Workday]``, ``[Service Area - Code]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 

            .. code-block:: tsql            

                UPDATE	DM_Performance
                SET	[Elapsed Time (Business Days)] = 
                    CAST ([task.closed_at] AS DECIMAL (7,2)) 
                        - CAST ([task.opened_at] AS DECIMAL (7,2)) - (SELECT COUNT ( * ) 
                            FROM DM.dbo.DM_Calendar
                            WITH (TABLOCK)
                            WHERE [Master Date] BETWEEN [task.opened_at] AND [task.closed_at] 
                                AND [Service Area - Code] = '1950'
                                AND Workday = 0 )
                FROM DM_SG_Incidents 
                WITH (TABLOCK) 
                INNER JOIN DM_Performance 
                    ON DM_Performance.[Case Number] = DM_SG_Incidents.[task.number]
                WHERE LEFT ([Case Number], 3)	= 'INC';

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.closed_at]``, ``[task.opened_at]``, ``DM.dbo.DM_Calendar.[Master Date]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    CAST(M.[task.closed_at] AS DECIMAL(7,2))
                        - CAST(M.[task.opened_at] AS DECIMAL(7,2))
                        - (
                            SELECT COUNT(DISTINCT IC.[Master Date])
                            FROM DM.dbo.DM_Calendar AS IC
                            WHERE IC.[Master Date] BETWEEN M.[task.opened_at] AND M.[task.closed_at]
                                AND IC.[Service Area - Name] = REPLACE(CBA.[Service Area - Name], 'Ã¼', 'ü')
                                AND IC.[Workday] = 0
                            ) AS [Elapsed Time (Business Days)]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS J
                    ON M.[task.sys_id] = J.sys_id
                LEFT JOIN DM.dbo.DM_Calendar AS CBA
                    ON J.[u_Service_Area_code] = CBA.[Service Area - Code]
                    AND CBA.[Master Date] = (SELECT TOP 1 [Master Date] FROM DM.dbo.DM_Calendar ORDER BY 1 DESC)
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

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].task.opened_at`` ; ``SN.dbo.[10-task].task.closed_at`` ; ``SN_raw.dbo.sn_hr_core_Service_Area.u_name`` ; ``DM_Calendar.Master Date`` ; ``DM_Calendar.Workday`` ; ``DM_Calendar.Service Area - Name`` 
            - :fa:`tag` *Setting Type:* Derived — Calculation
            - :fa:`cogs` *How:* Compute from the case’s opening time and closing time, subtracting non‑workdays in the business‑area calendar; present the result in business days to two decimal places.
            - :fa:`filter` *Filter:* Include CIC cases, except those that are cancelled, in read status, or with missing status and close date.
        
            .. code-block:: tsql

                SELECT DISTINCT
                    CAST(M.[task.closed_at] AS DECIMAL(7,2))
                    - CAST(M.[task.opened_at] AS DECIMAL(7,2))
                    - (
                        SELECT COUNT(DISTINCT IC.[Master Date])
                        FROM DM.dbo.DM_Calendar AS IC
                        WHERE IC.[Master Date] BETWEEN M.[task.opened_at] AND M.[task.closed_at]
                            AND REPLACE(BA.u_name, 'Ã¼', 'ü') = IC.[Service Area - Name]
                            AND IC.[Workday] = 0
                    ) AS [Elapsed Time (Business Days)]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_invoices AS INV
                    ON INV.sys_id = M.[task.sys_id]
                LEFT JOIN SN_raw.dbo.sn_hr_core_Service_Area AS BA
                    ON INV.[Service_Area.value] = BA.sys_id
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';       

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM_SG_RAS.[task.closed_at]; [task.opened_at]``, ``DM_Calendar.[Master Date]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT
                    [task.number],
                    CAST([task.closed_at] AS decimal(7, 2)) 
                    - CAST([task.opened_at] AS decimal(7, 2))
                    - (
                        SELECT COUNT(DISTINCT [Master Date])
                        FROM DM.dbo.DM_Calendar
                        WHERE [Master Date] BETWEEN [task.opened_at] AND [task.closed_at]
                        AND Workday = 0
                    ) AS [Adjusted Duration]
                FROM 
                    DM.dbo.DM_SG_RAS;

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Onboarding.[Elapsed Time (Business Days)]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT 
                    [Requisition Action], 
                    [Elapsed Time (Business Days)]
                FROM 
                    DM.dbo.DM_Onboarding; 

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* ``DM_Performance.[Elapsed Time (Calendar Days)]``, ``DM_Calendar.[Holiday]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT 
                    i.[Case Number], 
                    i.[Elapsed Time (Business Days)], 
                    i.[Elapsed Time (Calendar Days)] - ISNULL(J.Holiday_count, 0) AS [Adjusted Calendar Days]
                FROM (
                    SELECT 
                        [Case Number] AS CN,
                        SUM(J2.Holiday) AS Holiday_count
                    FROM 
                        DM.dbo.DM_Performance AS M
                    LEFT JOIN 
                        [MANUAL].dbo.[2022_Monitoring_Sheet_updated] AS J1
                        ON M.[Case Number] = J1.ID
                    LEFT JOIN 
                        DM.dbo.DM_Calendar AS J2
                        ON J2.[Service Area - Code] = '1950'
                        AND J2.[Master Date] BETWEEN J1.[Case Creation Date] AND J1.[Vision Update DATE]
                    GROUP BY 
                        [Case Number]
                ) AS J
                INNER JOIN 
                    DM.dbo.DM_Performance AS i 
                    ON i.[Case Number] = J.CN
                WHERE 
                    i.Platform = 'Sharepoint';


.. =====================================================================================================
.. ======== Processing Time (Business Days) ============================================================
.. =====================================================================================================

.. colref-detail:: perf_Processing_Time_Business_Days
    :title: Processing Time (Business Days)

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[task_sla.business_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* Converted from epoch (1970-01-01) seconds and divided by 28,800 (8 hours)  
            - :fa:`filter` *Filter:*
                
            .. code-block:: tsql

                SELECT
                    S.[task.number] AS [Case Number],
                    CAST(
                        DATEDIFF_BIG(SECOND, '1970-01-01 00:00:00.000', S.[task_sla.business_duration])
                        AS decimal(18,2)
                    ) / 28800 AS [Processing Time (Business Days)]
                FROM DM.dbo.DM_SG_Cases AS S WITH (TABLOCK)
                WHERE 1=1
                AND S.[task.number] IS NOT NULL
                AND LEN(S.[task.number]) > 0
                AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Incidents.[task_sla.business_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                UPDATE DM_Performance
                SET	[Processing Time (Business Days)] = 
                    CAST(
                        DATEDIFF(SECOND, '1970-01-01 00:00:00.000', [task_sla.business_duration])
                        AS DECIMAL
                    ) / 28800
                FROM
                    DM_SG_Incidents 
                WITH (TABLOCK) 
                WHERE [Case Number] = [task.number]
                    AND	LEFT ([Case Number], 3)	= 'INC'
                    AND	[task_sla.business_duration] IS NOT NULL;

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task_sla].[task_sla.business_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT DISTINCT
                    CAST(
                        DATEDIFF_BIG(SECOND, '1970-01-01 00:00:00.000', S.[task_sla.business_duration])
                        AS DECIMAL
                    ) / 28800 AS [Processing Time (Business Days)]
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

            - :fa:`database` *Lineage:* ``Derived — DATEDIFF_BIG(SECOND, '1970-01-01 00:00:00.000', SN.dbo.[10-task_sla].[task_sla.business_duration]) / 28800``
            - :fa:`tag` *Setting Type:* Derived — Calculation
            - :fa:`cogs` *How:* Turn the SLA’s working-time duration into business days (8 hours = 1 day).
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read; use the SLA named “UNI Finance Invoice CIC OLA - 3 Days”.

            .. code-block:: tsql

                SELECT DISTINCT
                    CAST(
                        DATEDIFF_BIG(
                            SECOND,
                            '1970-01-01 00:00:00.000',
                            S.[task_sla.business_duration]
                        ) AS decimal
                    ) / 28800 AS [Processing Time (Business Days)]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] = 'UNI Finance Invoice CIC OLA - 3 Days'
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[task_sla.business_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT
                    [task.number],
                    CAST(
                        DATEDIFF_BIG(SECOND, '1970-01-01 00:00:00.000', [task_sla.business_duration]) 
                        AS decimal
                    ) / 28800 AS [Duration (Business Days)]
                FROM 
                    DM.dbo.DM_SG_RAS;

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Onboarding.[Processing Time (Business Days)]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT 
                    [Requisition Action], 
                    [Processing Time (Business Days)]
                FROM 
                    DM.dbo.DM_Onboarding;

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Performance.[Processing Time (Business Days)]``, ``[Case Open Date]``, ``[Case Close Date]``, ``[Freeze Time (Business Days)]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*

            .. code-block:: tsql

                SELECT
                    i.[Case Number],
                    i.[Processing Time (Business Days)],
                    DATEDIFF(DAY, i.[Case Open Date], i.[Case Close Date]) 
                        - ISNULL([Freeze Time (Business Days)], 0) 
                        - ISNULL(J.Holiday_count, 0) AS [Adjusted Calendar Days]
                FROM (
                    SELECT 
                        [Case Number] AS CN,
                        SUM(J2.Holiday) AS Holiday_count
                    FROM 
                        DM.dbo.DM_Performance AS M
                    LEFT JOIN 
                        [MANUAL].dbo.[2022_Monitoring_Sheet_updated] AS J1
                        ON M.[Case Number] = J1.ID
                    LEFT JOIN 
                        DM.dbo.DM_Calendar AS J2
                        ON J2.[Service Area - Code] = '1950'
                        AND J2.[Master Date] BETWEEN J1.[Case Creation Date] AND J1.[Date JD Classified]
                    GROUP BY 
                        [Case Number]
                ) AS J
                INNER JOIN 
                    DM.dbo.DM_Performance AS i 
                    ON i.[Case Number] = J.CN
                WHERE 
                    Platform = 'Sharepoint';


.. =====================================================================================================
.. ======== Processing Time (Seconds) ==================================================================
.. =====================================================================================================

.. colref-detail:: perf_Processing_Time_Seconds
    :title: Processing Time (Seconds)

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[task_sla.business_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT
                    S.[task.number] AS [Case Number],
                    DATEDIFF_BIG(SECOND, '1970-01-01 00:00:00.000', S.[task_sla.business_duration]) AS [Processing Time (Seconds)]
                FROM DM.dbo.DM_SG_Cases AS S WITH (TABLOCK)
                WHERE 1=1
                AND S.[task.number] IS NOT NULL
                AND LEN(S.[task.number]) > 0
                AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Incidents.[task_sla.business_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                UPDATE DM_Performance 
                SET	[Processing Time (Seconds)] = 
                    CAST (
                        DATEDIFF (SECOND, '1970-01-01 00:00:00.000', [task_sla.business_duration])
                        AS DECIMAL
                    )
                FROM DM_SG_Incidents 
                WITH (TABLOCK)
                WHERE [Case Number] = [task.number]
                    AND	LEFT ([Case Number], 3)	= 'INC'
                    AND	[task_sla.business_duration] IS NOT NULL;

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task_sla].[task_sla.business_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT DISTINCT
                    DATEDIFF_BIG(SECOND, '1970-01-01 00:00:00.000', S.[task_sla.business_duration])
                        AS [Processing Time (Seconds)]
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

            - :fa:`database` *Lineage:* ``Derived — DATEDIFF_BIG(SECOND, '1970-01-01 00:00:00.000', SN.dbo.[10-task_sla].[task_sla.business_duration])``
            - :fa:`tag` *Setting Type:* Derived — Calculation
            - :fa:`cogs` *How:* Turn the SLA’s working-time duration into seconds.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read; use the SLA named “UNI Finance Invoice CIC OLA - 3 Days”.
                
            .. code-block:: tsql

                SELECT DISTINCT
                    DATEDIFF_BIG(
                        SECOND,
                        '1970-01-01 00:00:00.000',
                        S.[task_sla.business_duration]
                    ) AS [Processing Time (Seconds)]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] = 'UNI Finance Invoice CIC OLA - 3 Days'
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[task_sla.business_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT
                    [task.number],
                    CAST(
                        DATEDIFF_BIG(SECOND, '1970-01-01 00:00:00.000', [task_sla.business_duration]) 
                        AS decimal
                    ) / 28800 AS [Duration (Business Days)]
                FROM 
                    DM.dbo.DM_SG_RAS;

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Onboarding.[Processing Time (Business Days)]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT 
                    [Requisition Action], 
                    [Processing Time (Business Days)]
                FROM 
                    DM.dbo.DM_Onboarding;

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Performance.[Processing Time (Business Days)]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT
                    i.[Case Number],
                    i.[Processing Time (Business Days)], 
                    DATEDIFF(DAY, i.[Case Open Date], i.[Case Close Date]) 
                        - ISNULL(i.[Freeze Time (Business Days)], 0) 
                        - ISNULL(J.Holiday_count, 0) AS [Adjusted Calendar Days]
                FROM (
                    SELECT 
                        [Case Number] AS CN,
                        SUM(J2.Holiday) AS Holiday_count
                    FROM 
                        DM.dbo.DM_Performance AS M
                    LEFT JOIN 
                        [MANUAL].dbo.[2022_Monitoring_Sheet_updated] AS J1
                        ON M.[Case Number] = J1.ID
                    LEFT JOIN 
                        DM.dbo.DM_Calendar AS J2
                        ON J2.[Service Area - Code] = '1950'
                        AND J2.[Master Date] BETWEEN J1.[Case Creation Date] AND J1.[Date JD Classified]
                    GROUP BY 
                        [Case Number]
                ) AS J
                INNER JOIN 
                    DM.dbo.DM_Performance AS i 
                    ON i.[Case Number] = J.CN;


.. =====================================================================================================
.. ======== Freeze Time (Calendar Days) ================================================================
.. =====================================================================================================

.. colref-detail:: perf_Freeze_Time_Calendar_Days
    :title: Freeze Time (Calendar Days)

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[task_sla.pause_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    CAST(
                        DATEDIFF_BIG(
                            SECOND,
                            '1970-01-01 00:00:00.000',
                            NULLIF(S.[task_sla.pause_duration], '1900-01-01 00:00:00.000')
                        ) AS decimal(18,2)
                    ) / 86400 AS [Freeze Time (Calendar Days)]
                FROM DM.dbo.DM_SG_Cases AS S
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC. 

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task_sla].[task_sla.pause_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    CAST(
                        DATEDIFF_BIG(
                            SECOND,
                            '1970-01-01 00:00:00.000',
                            NULLIF(S.[task_sla.pause_duration], '1900-01-01 00:00:00.000')
                        ) AS DECIMAL
                    ) / 86400 AS [Freeze Time (Calendar Days)]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND S.[task_sla.has_breached] IS NOT NULL
                    AND ISNULL(M.[task.state.sys_choice], '') <> 'Cancelled'
                    AND NOT (M.[task.state.sys_choice] IS NULL AND NULLIF(M.[task.closed_at], '1900-01-01') IS NULL)
                    AND NOT EXISTS (
                        SELECT 1
                        FROM DM.dbo.DM_Performance AS P
                        WHERE P.[Case Number] = M.[task.number]
                            AND P.[Last Update Datetime] = M.[task.sys_updated_on]
                    );

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``Derived — DATEDIFF_BIG(SECOND, '1970-01-01 00:00:00.000', NULLIF(SN.dbo.[10-task_sla].[task_sla.pause_duration], '1900-01-01 00:00:00.000')) / 86400``
            - :fa:`tag` *Setting Type:* Derived — Calculation
            - :fa:`cogs` *How:* Measure how long the case’s SLA was paused and show it in calendar days.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read; use the SLA named “UNI Finance Invoice CIC OLA - 3 Days”.
            
            .. code-block:: tsql

                SELECT DISTINCT
                    CAST(
                        DATEDIFF_BIG(
                            SECOND,
                            '1970-01-01 00:00:00.000',
                            NULLIF(S.[task_sla.pause_duration], '1900-01-01 00:00:00.000')
                        ) AS decimal
                    ) / 86400 AS [Freeze Time (Calendar Days)]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] = 'UNI Finance Invoice CIC OLA - 3 Days'
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[task_sla.pause_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT
                    [task.number],
                    CAST(
                        DATEDIFF_BIG(
                            SECOND,
                            '1970-01-01 00:00:00.000',
                            NULLIF([task_sla.pause_duration], '1900-01-01 00:00:00.000')
                        ) AS DECIMAL
                    ) / 86400
                FROM DM.dbo.DM_SG_RAS;    

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Onboarding.[Freeze Time (Calendar Days)]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT
                    [Requisition Action],
                    [Freeze Time (Calendar Days)]
                FROM DM.dbo.DM_Onboarding;

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* ``[MANUAL].dbo.[2022_Monitoring_Sheet_updated].[Returned for clarification]``, ``[MANUAL].dbo.[2022_Monitoring_Sheet_updated].[Case Resubmitted]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT
                    CONCAT(
                        FORMAT([hief ], '0000'),
                        '-',
                        FORMAT([Post], '00000000')
                    ),
                    DATEDIFF(DAY, [Returned for clarification], [Case Resubmitted])
                FROM [MANUAL].dbo.[2022_Monitoring_Sheet_updated];


.. =====================================================================================================
.. ======== Freeze Time (Business Days) ================================================================
.. =====================================================================================================

.. colref-detail:: perf_Freeze_Time_Business_Days
    :title: Freeze Time (Business Days)

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[task_sla.business_pause_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql
        
                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    CAST(
                        DATEDIFF_BIG(
                            SECOND,
                            '1970-01-01 00:00:00.000',
                            S.[task_sla.business_pause_duration]
                        ) AS decimal(18,2)
                    ) / 28800 AS [Freeze Time (Business Days)]
                FROM DM.dbo.DM_SG_Cases AS S
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC.   

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task_sla].[task_sla.business_pause_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    CAST(
                        DATEDIFF_BIG(
                            SECOND,
                            '1970-01-01 00:00:00.000',
                            S.[task_sla.business_pause_duration]
                        ) AS decimal
                    ) / 28800 AS [Freeze Time (Business Days)]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND S.[task_sla.has_breached] IS NOT NULL
                    AND ISNULL(M.[task.state.sys_choice], '') <> 'Cancelled'
                    AND NOT (M.[task.state.sys_choice] IS NULL AND NULLIF(M.[task.closed_at], '1900-01-01') IS NULL)
                    AND NOT EXISTS (
                        SELECT 1
                        FROM DM.dbo.DM_Performance AS P
                        WHERE P.[Case Number] = M.[task.number]
                            AND P.[Last Update Datetime] = M.[task.sys_updated_on]
                    );

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``Derived — CAST(DATEDIFF_BIG(SECOND, '1970-01-01 00:00:00.000', SN.dbo.[10-task_sla].[task_sla.business_pause_duration]) AS decimal) / 28800``
            - :fa:`tag` *Setting Type:* Derived — Calculation
            - :fa:`cogs` *How:* Measure how long the case’s SLA was paused in working time and show it in business days (8 hours = 1 day).
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read; use the CIC OLA SLA row.
            
            .. code-block:: tsql

                SELECT DISTINCT
                    CAST(
                        DATEDIFF_BIG(
                            SECOND,
                            '1970-01-01 00:00:00.000',
                            S.[task_sla.business_pause_duration]
                        ) AS decimal
                    ) / 28800 AS [Freeze Time (Business Days)]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] = 'UNI Finance Invoice CIC OLA - 3 Days'
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[task_sla.business_pause_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT
                    [task.number],
                    CAST(
                        DATEDIFF_BIG(
                            SECOND,
                            '1970-01-01 00:00:00.000',
                            [task_sla.business_pause_duration]
                        ) AS DECIMAL
                    ) / 28800
                FROM DM.dbo.DM_SG_RAS;

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Onboarding.[Freeze Time (Business Days)]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT
                    [Requisition Action],
                    [Freeze Time (Business Days)]
                FROM DM.dbo.DM_Onboarding;

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Performance.[Freeze Time (Business Days)]``, ``DM.dbo.DM_Performance.[Freeze Time (Calendar Days)]``, ``DM.dbo.DM_Calendar.[Holiday]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT
                    CaseNumber,
                    [Freeze Time (Calendar Days)] - ISNULL(Holiday_count, 0)
                FROM (
                    SELECT
                        CaseNumber,
                        SUM(Holiday) AS Holiday_count
                    FROM DM_Performance
                    JOIN Monitoring_Sheet ON /* ... */
                    JOIN DM_Calendar ON /* ... */
                    GROUP BY CaseNumber
                ) AS J
                JOIN DM_Performance AS i
                    ON i.CaseNumber = J.CaseNumber
                WHERE Platform = 'Sharepoint';


.. =====================================================================================================
.. ======== Freeze Time (Seconds) ======================================================================
.. =====================================================================================================

.. colref-detail:: perf_Freeze_Time_Seconds
    :title: Freeze Time (Seconds)

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[task_sla.business_pause_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    DATEDIFF_BIG(
                        SECOND,
                        '1970-01-01 00:00:00.000',
                        S.[task_sla.business_pause_duration]
                    ) AS [Freeze Time (Seconds)]
                FROM DM.dbo.DM_SG_Cases AS S
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC.

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task_sla].[task_sla.business_pause_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    DATEDIFF_BIG(
                        SECOND,
                        '1970-01-01 00:00:00.000',
                        S.[task_sla.business_pause_duration]
                    ) AS [Freeze Time (Seconds)]
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

            - :fa:`database` *Lineage:* ``Derived — DATEDIFF_BIG(SECOND, '1970-01-01 00:00:00.000', SN.dbo.[10-task_sla].[task_sla.business_pause_duration])``
            - :fa:`tag` *Setting Type:* Derived — Calculation
            - :fa:`cogs` *How:* Measure how long the case’s SLA was paused in working time and show it in seconds.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read; use the CIC OLA SLA row.
            
            .. code-block:: tsql

                SELECT DISTINCT
                    DATEDIFF_BIG(
                        SECOND,
                        '1970-01-01 00:00:00.000',
                        S.[task_sla.business_pause_duration]
                    ) AS [Freeze Time (Seconds)]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN.dbo.[10-task_sla] AS S
                ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] = 'UNI Finance Invoice CIC OLA - 3 Days'
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_RAS.[task_sla.business_pause_duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT
                    [task.number],
                    DATEDIFF_BIG(
                        SECOND,
                        '1970-01-01 00:00:00.000',
                        [task_sla.business_pause_duration]
                    )
                FROM DM.dbo.DM_SG_RAS;

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_TMS.

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* ``[MANUAL].dbo.[2022_Monitoring_Sheet_updated].[Returned for clarification]``, ``[MANUAL].dbo.[2022_Monitoring_Sheet_updated].[Case Resubmitted]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT
                    CONCAT(
                        FORMAT([hief ], '0000'),
                        '-',
                        FORMAT([Post], '00000000')
                    ),
                    DATEDIFF(SECOND, [Returned for clarification], [Case Resubmitted])
                FROM [MANUAL].dbo.[2022_Monitoring_Sheet_updated];


.. =====================================================================================================
.. ======== Reject Count ===============================================================================
.. =====================================================================================================

.. colref-detail:: perf_Reject_Count
    :title: Reject Count

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[task.state.sys_choice]``, ``DM.dbo.DM_SG_Cases.[shc_case.u_rejectreason.sys_choice]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    CASE
                        WHEN S.[task.state.sys_choice] = 'Closed Incomplete'
                            OR LEN(ISNULL(S.[shc_case.u_rejectreason.sys_choice], '')) > 0
                        THEN 1 ELSE 0
                    END AS [Reject Count]
                FROM DM.dbo.DM_SG_Cases AS S WITH (TABLOCK)
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC.

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.state.sys_choice]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    CASE
                        WHEN M.[task.state.sys_choice] = 'Closed Incomplete' THEN 1
                        ELSE 0
                    END AS [Reject Count]
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

            - :fa:`database` ***Lineage:*** ``Derived — CASE WHEN SN.dbo.[10-task].[task.state.sys_choice] = 'Closed Incomplete' THEN 1 ELSE 0 END``
            - :fa:`tag` **Setting Type:** Derived — Business‑rule
            - :fa:`cogs` **How:** Set to 1 when the case is closed as “Closed Incomplete”; otherwise 0.
            - :fa:`filter` **Filter:** Include CIC cases; leave out cases marked Cancelled or Read.

            .. code-block:: tsql

                SELECT DISTINCT
                    CASE 
                        WHEN M.[task.state.sys_choice] = 'Closed Incomplete' THEN 1 
                        ELSE 0 
                    END AS [Reject Count]
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
                        WHEN [task.state.sys_choice] = 'Closed Incomplete' THEN 1
                        ELSE 0
                    END
                FROM DM.dbo.DM_SG_RAS;

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


.. =====================================================================================================
.. ======== Reject Reason ==============================================================================
.. =====================================================================================================

.. colref-detail:: perf_Reject_Reason
    :title: Reject Reason

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_Cases.[shc_case.u_rejectreason.sys_choice]

                -- Query
                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    S.[shc_case.u_rejectreason.sys_choice] AS [Reject Reason]
                FROM DM.dbo.DM_SG_Cases AS S WITH (TABLOCK)
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
        
            .. code-block:: 
                
                -- Field not mentioned in p_DM_Performance_INC.

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block::
                
                -- Column commented out from SP p_DM_Performance_TRV.

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
        
            .. code-block::
                
                -- Column commented out from SP p_DM_Performance_CIC.

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A

            .. code-block:: tsql
        
                -- Column commented out from SP p_DM_Performance_RAS.

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


.. =====================================================================================================
.. ======== Suspended Reason ===========================================================================
.. =====================================================================================================

.. colref-detail:: perf_Suspended_Reason
    :title: Suspended Reason

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[shc_case.sla_suspended_reason.sys_choice]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                WITH DM_Performance_RTC AS (
                    SELECT
                        J1.number AS [Parent No],
                        COUNT(*)  AS [RTC]
                    FROM SN_raw.dbo.sn_hr_core_task AS M
                    LEFT JOIN SN_raw.dbo.task AS J_task
                        ON M.sys_id = J_task.sys_id
                    LEFT JOIN SN_raw.dbo.task AS J1
                        ON J_task.[parent.value] = J1.[sys_id]
                    WHERE M.[u_task_type] = 'return'
                    GROUP BY J1.number
                )
                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    COALESCE(
                        S.[shc_case.sla_suspended_reason.sys_choice],
                        CASE WHEN ISNULL(R.[RTC], 0) > 0 THEN 'No reason code available' ELSE NULL END
                    ) AS [Suspended Reason]
                FROM DM.dbo.DM_SG_Cases AS S WITH (TABLOCK)
                LEFT JOIN DM_Performance_RTC AS R
                    ON R.[Parent No] = S.[task.number]
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Incidents.[incident.hold_reason.sys_choice]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT
                    [incident.hold_reason.sys_choice] AS [Suspended Reason]
                FROM
                    DM_SG_Incidents
                WHERE [task.state.sys_choice] NOT IN ('Cancelled','Canceled')
                    OR [incident.incident_state.sys_choice] NOT IN ('Cancelled','Canceled');            

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN_raw.dbo.sys_choice.[label]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql

                SELECT DISTINCT
                    J_SLA_Susp_Lookup.[label] AS [Suspended Reason]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS J
                    ON M.[task.sys_id] = J.sys_id
                LEFT JOIN SN_raw.dbo.sys_choice AS J_SLA_Susp_Lookup
                    ON J.u_sla_suspended_reason = J_SLA_Susp_Lookup.[value]
                    AND J_SLA_Susp_Lookup.[name] LIKE 'x_adsr_unall_travel_case%'
                    AND J_SLA_Susp_Lookup.element LIKE 'u_sla_suspended_reason'
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

                -- Code to be reviewed; data should not come from raw tables.

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task_sla].[sla_suspended_reason]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Show the reason recorded for pausing the SLA timer.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read; use the SLA named "UNI Finance Invoice CIC OLA - 3 Days".
            
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[sla_suspended_reason] AS [Suspended Reason]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] = 'UNI Finance Invoice CIC OLA - 3 Days'
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
        
            .. code-block:: tsql
                
                -- Field value is an empty string.

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* N/A
            - :fa:`cogs` *How:* N/A
            - :fa:`filter` *Filter:* N/A
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_TMS.

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_JC.


.. =====================================================================================================
.. ======== Suspension Type ============================================================================
.. =====================================================================================================

.. colref-detail:: perf_Suspension_Type
    :title: Suspension Type

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``SN_raw.dbo.sys_choice``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
            
            .. code-block:: tsql

                UPDATE DM_Performance
                SET [Suspension Type] = sc.dependent_value
                FROM SN_raw.dbo.sys_choice AS sc
                WHERE sc.element = 'sla_suspended_reason'
                    AND sc.[label] = [Suspended Reason]
                    AND sc.dependent_value NOT LIKE 'itu%'
                    AND sc.dependent_value NOT LIKE 'freight_invoice%'
                    AND Platform = 'Request Portal'
                    AND LEFT([Case Number], 3) <> 'INC';
                
                -- Code to be reviewed; data shouldn't come from raw tables. 

        .. tab-item:: SG Inc

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC            

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_TRV.            

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql
                
                -- Column commented out from p_DM_Performance_CIC

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ? 

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?


.. =====================================================================================================
.. ======== Return Count ===============================================================================
.. =====================================================================================================

.. colref-detail:: perf_Return_Count
    :title: Return Count

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``SN_raw.dbo.sn_hr_core_task``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
            
            .. code-block:: tsql
        
                DROP TABLE IF EXISTS #DM_Performance_RTC;
                CREATE TABLE #DM_Performance_RTC
                ([Parent No] nvarchar(12), [RTC] int);

                INSERT INTO #DM_Performance_RTC ([Parent No], [RTC])
                SELECT J1.number AS [Parent No],
                    COUNT(*) AS [RTC]
                FROM SN_raw.dbo.sn_hr_core_task AS M
                LEFT JOIN SN_raw.dbo.task AS J_task
                    ON M.sys_id = J_task.sys_id
                LEFT JOIN SN_raw.dbo.task AS J1
                    ON J_task.[parent.value] = J1.[sys_id]
                WHERE M.[u_task_type] = 'return'
                GROUP BY J1.number;
                
                UPDATE DM_Performance
                SET [Return Count] =
                    CASE
                        WHEN R.[RTC] > 0 THEN R.[RTC]
                        WHEN R.[RTC] = 0
                            AND LEN(DM_Performance.[Return Reason]) > 0
                            AND [Suspension Type] = '100' THEN 1
                        ELSE 0
                    END
                FROM #DM_Performance_RTC AS R
                WHERE R.[Parent No] = [Case Number]
                    AND Platform = 'Request Portal'
                    AND LEFT([Case Number], 3) <> 'INC';
                
                UPDATE DM_Performance
                SET [Return Count] = 0
                WHERE [Return Count] IS NULL
                    AND Platform = 'Request Portal'
                    AND LEFT([Case Number], 3) <> 'INC';

        .. tab-item:: SG Inc

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_TRV.            

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``Derived — CASE WHEN SN_raw.dbo.x_adsr_unall_invoices.u_return_count = 1 OR NULLIF(SN.dbo.[10-task_sla].sla_suspended_reason,'') IS NOT NULL THEN 1 ELSE 0 END``
            - :fa:`tag` *Setting Type:* Derived — Business‑rule
            - :fa:`cogs` *How:* Mark 1 when the case was returned (either a return count is provided on the invoice or the SLA shows a suspension reason); otherwise 0.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read; use the SLA named "UNI Finance Invoice CIC OLA - 3 Days".
            
            .. code-block:: tsql            
            
                SELECT DISTINCT
                    CASE
                        WHEN INV.u_return_count = 1
                        OR NULLIF(S.[sla_suspended_reason], '') IS NOT NULL
                        THEN 1
                        ELSE 0
                    END AS [Return Count]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                AND S.[task_sla.sla:contract_sla.name] = 'UNI Finance Invoice CIC OLA - 3 Days'
                LEFT JOIN SN_raw.dbo.x_adsr_unall_invoices AS INV
                    ON INV.sys_id = M.[task.sys_id]
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?
            

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?

.. =====================================================================================================
.. ======== Return Reason ==============================================================================
.. =====================================================================================================

.. colref-detail:: perf_Return_Reason
    :title: Return Reason

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Performance.[Suspended Reason]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                UPDATE DM_Performance
                SET [Return Reason] =
                    CASE WHEN [Return Count] > 0
                        THEN [Suspended Reason]
                        ELSE NULL
                    END
                WHERE  Platform = 'Request Portal'
                    AND  LEFT([Case Number], 3) <> 'INC';            

        .. tab-item:: SG Inc

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN_raw.dbo.sys_choice.[label]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    J_SLA_Susp_Lookup.[label] AS [Return Reason]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS J
                    ON M.[task.sys_id] = J.sys_id
                LEFT JOIN SN_raw.dbo.sys_choice AS J_SLA_Susp_Lookup
                    ON J.u_sla_suspended_reason = J_SLA_Susp_Lookup.[value]
                    AND J_SLA_Susp_Lookup.[name] LIKE 'x_adsr_unall_travel_case%'
                    AND J_SLA_Susp_Lookup.element LIKE 'u_sla_suspended_reason'
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

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block::
                
                -- Field not mentioned in p_DM_Performance_CIC.                

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?


.. =====================================================================================================
.. ======== Last Return Start Datetime =================================================================
.. =====================================================================================================

.. colref-detail:: perf_Last_Return_Start_Datetime
    :title: Last Return Start Datetime

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[shc_case.sla_suspended_on]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number]  AS [Case Number],
                    S.[shc_case.sla_suspended_on] AS [Last Return Start Datetime]
                FROM DM.dbo.DM_SG_Cases AS S WITH (TABLOCK)
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC            

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN_raw.dbo.x_adsr_unall_travel_case.[u_sla_suspended_on]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    J.[u_sla_suspended_on] AS [Last Return Start Datetime]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS J
                    ON M.[task.sys_id] = J.sys_id
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

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task_sla].[sla_suspended_on]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Show when the latest return (pause) started, as recorded on the SLA.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read; use the SLA named "UNI Finance Invoice CIC OLA - 3 Days".

            .. code-block:: tsql

                SELECT DISTINCT
                    S.[sla_suspended_on] AS [Last Return Start Datetime]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] = 'UNI Finance Invoice CIC OLA - 3 Days'
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?

.. =====================================================================================================
.. ======== Last Update Datetime =======================================================================
.. =====================================================================================================

.. colref-detail:: perf_Last_Update_Datetime
    :title: Last Update Datetime

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[task.sys_updated_on]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    S.[task.sys_updated_on] AS [Last Update Datetime]
                FROM DM.dbo.DM_SG_Cases AS S WITH (TABLOCK)
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC            

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.sys_updated_on]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    M.[task.sys_updated_on] AS [Last Update Datetime]
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

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task].[task.sys_updated_on]``
            - :fa:`tag` *Setting Type:* Direct
            - :fa:`cogs` *How:* Show the most recent date and time the case was changed.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.

            .. code-block:: tsql               
            
                SELECT DISTINCT
                    M.[task.sys_updated_on] AS [Last Update Datetime]
                FROM SN.dbo.[10-task] AS M
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?       

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?            

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?


.. =====================================================================================================
.. ======== Pending Reason =============================================================================
.. =====================================================================================================

.. colref-detail:: perf_Pending_Reason
    :title: Pending Reason

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Performance.[Suspended Reason]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                UPDATE DM.dbo.DM_Performance
                SET [Pending Reason] =
                    CASE
                        WHEN [Return Count] = 0 AND [Suspended Reason] IS NOT NULL
                        THEN [Suspended Reason]
                        ELSE NULL
                    END
                WHERE Platform = 'Request Portal'
                AND LEFT([Case Number], 3) <> 'INC';            

        .. tab-item:: SG Inc

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC            

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_TRV.            

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql
                
                -- Field not mentioned in DM_Performance_CIC            

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?            

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?


.. =====================================================================================================
.. ======== Return/Reject Check ========================================================================
.. =====================================================================================================

.. colref-detail:: perf_Return_Reject_Check
    :title: Return/Reject Check

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Performance.[Return Count]``, ``DM.dbo.DM_Performance.[Reject Count]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql
        
                UPDATE DM_Performance
                SET [Return/Reject Check] =
                    CASE
                        WHEN [Return Count] > '0' AND [Reject Count] = '0' THEN 'Returned'
                        WHEN [Return Count] = '0' AND [Reject Count] = '1' THEN 'Rejected'
                        WHEN [Return Count] > '0' AND [Reject Count] = '1' THEN 'Both'
                        ELSE 'N/A'
                    END
                WHERE Platform = 'Request Portal'
                AND LEFT([Case Number], 3) <> 'INC';

        .. tab-item:: SG Inc

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC            

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN_raw.dbo.x_adsr_unall_travel_case.[u_return_count]``, ``SN_raw.dbo.x_adsr_unall_travel_case.[u_sla_suspended_reason]``, ``SN.dbo.[10-task].[task.state.sys_choice]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT DISTINCT
                    CASE
                        WHEN (
                            CASE
                                WHEN NULLIF(J.u_return_count, 0) = 1 THEN 1
                                WHEN NULLIF(J.u_return_count, 0) IS NULL AND NULLIF(J.u_sla_suspended_reason, '') IS NOT NULL THEN 1
                                ELSE 0
                            END
                            ) = 1
                                AND (CASE WHEN M.[task.state.sys_choice] = 'Closed Incomplete' THEN 1 ELSE 0 END) = 0
                            THEN 'Returned'
                        WHEN (
                            CASE
                                WHEN NULLIF(J.u_return_count, 0) = 1 THEN 1
                                WHEN NULLIF(J.u_return_count, 0) IS NULL AND NULLIF(J.u_sla_suspended_reason, '') IS NOT NULL THEN 1
                                ELSE 0
                            END
                            ) = 0
                                AND (CASE WHEN M.[task.state.sys_choice] = 'Closed Incomplete' THEN 1 ELSE 0 END) = 1
                            THEN 'Rejected'
                        WHEN (
                            CASE
                                WHEN NULLIF(J.u_return_count, 0) = 1 THEN 1
                                WHEN NULLIF(J.u_return_count, 0) IS NULL AND NULLIF(J.u_sla_suspended_reason, '') IS NOT NULL THEN 1
                                ELSE 0
                            END
                            ) = 1
                                AND (CASE WHEN M.[task.state.sys_choice] = 'Closed Incomplete' THEN 1 ELSE 0 END) = 1
                            THEN 'Both'
                        ELSE 'N/A'
                    END AS [Return/Reject Check]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS J
                    ON M.[task.sys_id] = J.sys_id
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

            - :fa:`database` *Lineage:* ``Derived — 'Returned' / 'Rejected' / 'Both' / 'N/A' from [Return Count] and [Reject Count]``
            - :fa:`tag` *Setting Type:* Derived — Business-rule
            - :fa:`cogs` *How:* Decide the label from the two counts; if Return > 0 and Reject = 0 → Returned; if Return = 0 and Reject = 1 → Rejected; if both apply → Both; otherwise → N/A.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.

            .. code-block:: tsql

                SELECT DISTINCT
                    CASE
                        WHEN I.[Return Count] > '0' AND I.[Reject Count] = '0' THEN 'Returned'
                        WHEN I.[Return Count] = '0' AND I.[Reject Count] = '1' THEN 'Rejected'
                        WHEN I.[Return Count] > '0' AND I.[Reject Count] = '1' THEN 'Both'
                        ELSE 'N/A'
                    END AS [Return/Reject Check]
                FROM DM.dbo.DM_Performance AS I
                WHERE I.[Case Number] LIKE 'CIC%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?


.. =====================================================================================================
.. ======== Returned not Rejected ======================================================================
.. =====================================================================================================

.. colref-detail:: perf_Returned_Not_Rejected
    :title: Returned not Rejected

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Performance.[Return Count]``, ``[Reject Count]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                UPDATE DM_Performance
                SET [Returned not Rejected] =
                    CASE
                        WHEN [Return Count] = '1' AND [Reject Count] = '0' THEN '1'
                        ELSE '0'
                    END
                WHERE Platform = 'Request Portal'
                AND LEFT([Case Number], 3) <> 'INC';

        .. tab-item:: SG Inc

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC            

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN_raw.dbo.x_adsr_unall_travel_case.[u_return_count]``, ``SN_raw.dbo.x_adsr_unall_travel_case.[u_sla_suspended_reason]``, ``SN.dbo.[10-task].[task.state.sys_choice]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    CASE
                        WHEN (
                                CASE
                                    WHEN NULLIF(J.u_return_count, 0) = 1 THEN 1
                                    WHEN NULLIF(J.u_return_count, 0) IS NULL AND NULLIF(J.u_sla_suspended_reason, '') IS NOT NULL THEN 1
                                    ELSE 0
                                END
                            ) = 1
                                AND (CASE WHEN M.[task.state.sys_choice] = 'Closed Incomplete' THEN 1 ELSE 0 END) = 0
                            THEN '1'
                        ELSE '0'
                    END AS [Returned not Rejected]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS J
                    ON M.[task.sys_id] = J.sys_id
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

            - :fa:`database` *Lineage:* ``Derived — 1 when [Return Count] = 1 and [Reject Count] = 0; else 0``
            - :fa:`tag` *Setting Type:* Derived — Business-rule
            - :fa:`cogs` *How:* Mark 1 when the case was returned but not rejected; otherwise 0.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.

            .. code-block:: tsql

                SELECT DISTINCT
                    CASE 
                        WHEN I.[Return Count] = '1' AND I.[Reject Count] = '0' THEN '1'
                        ELSE '0'
                    END AS [Returned not Rejected]
                FROM DM.dbo.DM_Performance AS I
                WHERE I.[Case Number] LIKE 'CIC%';               

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_TMS

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?


.. =====================================================================================================
.. ======== Returned Case ==============================================================================
.. =====================================================================================================

.. colref-detail:: perf_Returned_Case
    :title: Returned Case

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Performance.[Return Count]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
            
            .. code-block:: tsql
        
                UPDATE DM_Performance
                SET [Returned Case] =
                    CASE
                        WHEN [Return Count] > 0 THEN 1
                        ELSE 0
                    END
                WHERE Platform = 'Request Portal'
                AND LEFT([Case Number], 3) <> 'INC';

        .. tab-item:: SG Inc

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*        
            
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC
            
        .. tab-item:: SG Trv 

            - :fa:`database` *Lineage:* ``SN_raw.dbo.x_adsr_unall_travel_case.[u_return_count]``, ``SN_raw.dbo.x_adsr_unall_travel_case.[u_sla_suspended_reason]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    CASE
                            WHEN (
                                CASE
                                    WHEN NULLIF(J.u_return_count, 0) = 1 THEN 1
                                    WHEN NULLIF(J.u_return_count, 0) IS NULL AND NULLIF(J.u_sla_suspended_reason, '') IS NOT NULL THEN 1
                                    ELSE 0
                                END
                                ) = 1
                            THEN 1
                        ELSE 0
                    END AS [Returned Case]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS J
                    ON M.[task.sys_id] = J.sys_id
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

            - :fa:`database` *Lineage:* ``Derived — CASE WHEN [Return Count] = 1 THEN 1 END``
            - :fa:`tag` *Setting Type:* Derived — Business‑rule
            - :fa:`cogs` *How:* Set to 1 when the case was returned at least once; otherwise leave it blank.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.

            .. code-block:: tsql

                SELECT DISTINCT
                    CASE 
                        WHEN I.[Return Count] = 1 THEN 1
                    END AS [Returned Case]
                FROM DM.dbo.DM_Performance AS I
                WHERE I.[Case Number] LIKE 'CIC%';                

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?            

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?


.. =====================================================================================================
.. ======== Emergency Flag (Case) ======================================================================
.. =====================================================================================================

.. colref-detail:: perf_Emergency_Flag_Case
    :title: Emergency Flag (Case)

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[shc_case.u_emergency]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    CASE WHEN S.[shc_case.u_emergency] = 'true' THEN 'Emergency' ELSE 'Standard' END AS [Emergency Flag (Case)]
                FROM DM.dbo.DM_SG_Cases AS S WITH (TABLOCK)
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Calendar.[Emergency]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT DISTINCT
                    CASE WHEN C.[Emergency] = '1' THEN 'Emergency' ELSE 'Standard' END AS [Emergency Flag (Case)]
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

            - :fa:`database` *Lineage:* ``Derived — CASE WHEN SN_raw.dbo.sn_hr_core_Service_Area.u_emergency = 'true' THEN 'Emergency' ELSE 'Standard' END``
            - :fa:`tag` *Setting Type:* Derived — Business‑rule
            - :fa:`cogs` *How:* If the Service Area is marked as emergency, show “Emergency”; otherwise show “Standard.”
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.

            .. code-block:: tsql

                SELECT DISTINCT
                    CASE 
                        WHEN BA.u_emergency = 'true' THEN 'Emergency' 
                        ELSE 'Standard' 
                    END AS [Emergency Flag (Case)]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_invoices AS INV
                    ON INV.sys_id = M.[task.sys_id]
                LEFT JOIN SN_raw.dbo.sn_hr_core_Service_Area AS BA
                    ON INV.[Service_Area.value] = BA.sys_id
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?               

        .. tab-item:: TMS

            - :fa:`database` *Lineage:*
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?


.. =====================================================================================================
.. ======== Emergency Flag (Country) ===================================================================
.. =====================================================================================================

.. colref-detail:: perf_Emergency_Flag_Country
    :title: Emergency Flag (Country)

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Calendar.[Emergency]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
            
            .. code-block:: tsql
    
                UPDATE DM.dbo.DM_Performance
                SET    [Emergency Flag (Country)] = CASE WHEN M.[Emergency] = 1 THEN 'Emergency' ELSE 'Standard' END
                FROM   DM.dbo.DM_Calendar AS M
                WHERE  M.[Master Date] = [Case Open Date]
                    AND  M.[Service Area - Code] = DM_Performance.[Service Area - Code]
                    AND  Platform = 'Request Portal'
                    AND  LEFT([Case Number], 3) <> 'INC';

        .. tab-item:: SG Inc 

            - :fa:`database` *Lineage:* ``DM.dbo.DM_Calendar.[Emergency]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql            
        
                UPDATE DM_Performance
                SET [Emergency Flag (Country)] =
                    CASE WHEN M.[Emergency] = 1 THEN 'Emergency' ELSE 'Standard' END
                FROM DM.dbo.DM_Calendar M WITH (TABLOCK)
                WHERE M.[Master Date] = CAST([Case Open Date] AS DATE)
                    AND M.[Service Area - Name] = DM_Performance.[Service Area - Name]
                    AND LEFT([Case Number],3) = 'INC';

                UPDATE DM_Performance
                SET [Emergency Flag (Country)] = 'Standard'
                WHERE [Emergency Flag (Country)] IS NULL
                    AND LEFT([Case Number],3) = 'INC';

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql
                
                -- Hardcoded to 'Standard'.            

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``Derived — CASE WHEN DM.dbo.DM_Calendar.Emergency = 1 THEN 'Emergency' ELSE 'Standard' END``
            - :fa:`tag` *Setting Type:* Derived — Business‑rule
            - :fa:`cogs` *How:* Use the organization’s calendar for the case’s open date and Service Area; if that day is flagged as emergency, show “Emergency”; otherwise show “Standard.”
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read.
            - :fa:`history` **Freshness & cardinality:** One label per case; updated each time the data is refreshed.

            .. code-block:: tsql

                -- ?

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?
            
        .. tab-item:: TMS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ? 

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?


.. =====================================================================================================
.. ======== Overdue ====================================================================================
.. =====================================================================================================

.. colref-detail:: perf_Overdue
    :title: Overdue

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[task_sla.has_breached]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    CASE WHEN S.[task_sla.has_breached] = 'true' THEN 1 ELSE 0 END AS [Overdue]
                FROM DM.dbo.DM_SG_Cases AS S WITH (TABLOCK)
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* ``DM_SG_Incidents.[task_sla.has_breached]``, ``DM_SG_Incidents.[task.state.sys_choice]``, ``DM_SG_Incidents.[incident.incident_state.sys_choice]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql            

                SELECT
                    CASE
                        WHEN [task_sla.has_breached] = 'true'
                            AND ( [task.state.sys_choice] IN ('Closed','Closed Complete','Resolved')
                                OR [incident.incident_state.sys_choice] IN ('Closed','Resolved') )
                            THEN '1'
                        WHEN [task_sla.has_breached] = 'false'
                            AND ( [task.state.sys_choice] IN ('Closed','Closed Complete','Resolved')
                                OR [incident.incident_state.sys_choice] IN ('Closed','Resolved') )
                            THEN '0'
                        ELSE NULL
                    END AS [Overdue]
                FROM DM_SG_Incidents
                WHERE [task.state.sys_choice] NOT IN ('Cancelled','Canceled')
                    OR [incident.incident_state.sys_choice] NOT IN ('Cancelled','Canceled');

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task_sla].[task_sla.has_breached]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT DISTINCT
                    CASE WHEN S.[task_sla.has_breached] = 'true' THEN 1 ELSE 0 END AS [Overdue]
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

            - :fa:`database` *Lineage:* ``Derived — CASE WHEN SN.dbo.[10-task_sla].[task_sla.has_breached] = 'true' THEN 1 ELSE 0 END``
            - :fa:`tag` *Setting Type:* Derived — Business‑rule
            - :fa:`cogs` *How:* Mark 1 if the case missed its SLA; otherwise 0.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read; use the SLA named "UNI Finance Invoice CIC OLA - 3 Days".

            .. code-block:: tsql

                SELECT DISTINCT
                    CASE 
                        WHEN S.[task_sla.has_breached] = 'true' THEN 1 
                        ELSE 0 
                    END AS [Overdue]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] = 'UNI Finance Invoice CIC OLA - 3 Days'
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?  

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?        

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?


.. =====================================================================================================
.. ======== SLA Met ====================================================================================
.. =====================================================================================================

.. colref-detail:: perf_SLA_Met
    :title: SLA Met

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[task_sla.has_breached]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql
        
                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    CASE WHEN S.[task_sla.has_breached] = 'false' THEN 1 ELSE 0 END AS [SLA Met]
                FROM DM.dbo.DM_SG_Cases AS S
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* ``DM_SG_Incidents.task_sla.has_breached`` ; ``DM_SG_Incidents.task.state.sys_choice`` ; ``DM_SG_Incidents.incident.incident_state.sys_choice``
            - :fa:`tag` *Setting Type:* Derived — Business‑rule
            - :fa:`cogs` *How:* Set to 1 when the case’s SLA breach flag is false and the case is closed or resolved (from either the task status or the incident status). Set to 0 when the breach flag is true and the case is closed or resolved; otherwise leave blank.
            - :fa:`filter` *Filter:* Include Incident cases, except those with both the task status and the incident status set to 'cancelled'.
        
            .. code-block:: tsql            

                SELECT
                    CASE
                        WHEN [task_sla.has_breached] = 'false'
                            AND ( [task.state.sys_choice] IN ('Closed','Closed Complete','Resolved')
                                OR [incident.incident_state.sys_choice] IN ('Closed','Resolved') )
                            THEN '1'
                        WHEN [task_sla.has_breached] = 'true'
                            AND ( [task.state.sys_choice] IN ('Closed','Closed Complete','Resolved')
                                OR [incident.incident_state.sys_choice] IN ('Closed','Resolved') )
                            THEN '0'
                        ELSE NULL
                    END AS [SLA Met]
                FROM DM_SG_Incidents
                WHERE [task.state.sys_choice] NOT IN ('Cancelled','Canceled')
                    OR [incident.incident_state.sys_choice] NOT IN ('Cancelled','Canceled');
            
        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task_sla].[task_sla.has_breached]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT DISTINCT
                    CASE WHEN S.[task_sla.has_breached] = 'false' THEN 1 ELSE 0 END AS [SLA Met]
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

            - :fa:`database` *Lineage:* ``Derived — CASE WHEN SN.dbo.[10-task_sla].[task_sla.has_breached] = 'false' THEN 1 ELSE 0 END``
            - :fa:`tag` *Setting Type:* Derived — Business‑rule
            - :fa:`cogs` *How:* Mark 1 if the case met its SLA; otherwise 0.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read; use the SLA named "UNI Finance Invoice CIC OLA - 3 Days".

            .. code-block:: tsql

                SELECT DISTINCT
                    CASE 
                        WHEN S.[task_sla.has_breached] = 'false' THEN 1 
                        ELSE 0 
                    END AS [SLA Met]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] = 'UNI Finance Invoice CIC OLA - 3 Days'
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';
            
        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?


.. =====================================================================================================
.. ======== SLA Target (Hours) =========================================================================
.. =====================================================================================================

.. colref-detail:: perf_SLA_Target_Hours
    :title: SLA Target (Hours)

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[contract_sla.duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql
        
                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    DATEDIFF_BIG(HOUR, '1970-01-01 00:00:00.000', S.[contract_sla.duration]) AS [SLA Target (Hours)]
                FROM DM.dbo.DM_SG_Cases AS S
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*

            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-contract_sla].[contract_sla.duration]``
            - :fa:`tag` *Setting Type:* 
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT DISTINCT
                    DATEDIFF_BIG(
                        HOUR,
                        '1970-01-01 00:00:00.000',
                        J4.[contract_sla.duration]
                    ) AS [SLA Target (Hours)]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                LEFT JOIN SN.dbo.[10-contract_sla] AS J4
                    ON J4.[contract_sla.sys_id] = S.[task_sla.sys_id]
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

            - :fa:`database` *Lineage:* ``Derived — DATEDIFF_BIG(HOUR, '1970-01-01 00:00:00.000', SN.dbo.[10-contract_sla].[contract_sla.duration])``
            - :fa:`tag` *Setting Type:* Derived — Calculation
            - :fa:`cogs` *How:* Use the SLA’s configured duration and show it in hours.
            - :fa:`filter` *Filter:* Include CIC cases; leave out cases marked Cancelled or Read; use the SLA named "UNI Finance Invoice CIC OLA - 3 Days".

            .. code-block:: tsql

                SELECT DISTINCT
                    DATEDIFF_BIG(
                        HOUR,
                        '1970-01-01 00:00:00.000',
                        C.[contract_sla.duration]
                    ) AS [SLA Target (Hours)]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] = 'UNI Finance Invoice CIC OLA - 3 Days'
                LEFT JOIN SN.dbo.[10-contract_sla] AS C
                    ON C.[contract_sla.sys_id] = S.[task_sla.sys_id]
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?       

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?


.. =====================================================================================================
.. ======== SLA Target (Business Days) =================================================================
.. =====================================================================================================

.. colref-detail:: perf_SLA_Target_Business_Days
    :title: SLA Target (Business Days)

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[contract_sla.duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql
    
                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    DATEDIFF_BIG(HOUR, '1970-01-01 00:00:00.000', S.[contract_sla.duration]) / 8 AS [SLA Target (Business Days)]
                FROM DM.dbo.DM_SG_Cases AS S
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* ``DM_SG_Incidents.[contract_sla.duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql            

                SELECT
                    CAST(
                        DATEDIFF(
                            HOUR,
                            '1970-01-01 00:00:00.000',
                            [contract_sla.duration]
                        ) AS int
                    ) / 8 AS [SLA Target (Business Days)]
                FROM DM_SG_Incidents
                WHERE [task.state.sys_choice] NOT IN ('Cancelled','Canceled')
                    OR [incident.incident_state.sys_choice] NOT IN ('Cancelled','Canceled');

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-contract_sla].[contract_sla.duration]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                SELECT DISTINCT
                    DATEDIFF_BIG(
                        HOUR,
                        '1970-01-01 00:00:00.000',
                        C.[contract_sla.duration]
                    ) / 8 AS [SLA Target (Business Days)]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                LEFT JOIN SN.dbo.[10-contract_sla] AS C
                    ON C.[contract_sla.sys_id] = S.[task_sla.sys_id]
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND S.[task_sla.has_breached] IS NOT NULL
                    AND ISNULL(M.[task.state.sys_choice], '') <> 'Cancelled'
                    AND NOT (M.[task.state.sys_choice] IS NULL AND NULLIF(M.[task.closed_at], '1900-01-01') IS NULL)
                    AND NOT EXISTS (
                        SELECT 1
                        FROM DM.dbo.DM_Performance AS P
                        WHERE P.[Case Number] = M.[task.number]
                            AND P.[Last Update Datetime] = M.[task.sys_updated_on]
                    );

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``SN.dbo.[10-contract_sla].[contract_sla.duration]``
            - :fa:`tag` *Setting Type:* Derived
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*

            .. code-block:: tsql

                SELECT DISTINCT
                    DATEDIFF_BIG(
                        HOUR,
                        '1970-01-01 00:00:00.000',
                        C.[contract_sla.duration]
                    ) / 8 AS [SLA Target (Business Days)]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] = 'UNI Finance Invoice CIC OLA - 3 Days'
                LEFT JOIN SN.dbo.[10-contract_sla] AS C
                    ON C.[contract_sla.sys_id] = S.[task_sla.sys_id]
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?


.. =====================================================================================================
.. ======== SLA Description ============================================================================
.. =====================================================================================================

.. colref-detail:: perf_SLA_Description
    :title: SLA Description

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[task_sla.sla:contract_sla.name]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                IF EXISTS (SELECT 1 FROM work.sys.tables WHERE [name] = 'DM_Performance_SLA')
                    TRUNCATE TABLE work.dbo.DM_Performance_SLA;
                IF NOT EXISTS (SELECT 1 FROM work.sys.tables WHERE [name] = 'DM_Performance_SLA')
                    CREATE TABLE work.dbo.DM_Performance_SLA
                    (
                        [task.number]                       nvarchar(12)
                        , [task_sla.sla:contract_sla.name]  nvarchar(255)
                        , [task_sla.sys_updated_on]         datetime
                        , [Active SLA count]                int
                    );

                INSERT INTO work.dbo.DM_Performance_SLA
                ([task.number], [task_sla.sla:contract_sla.name], [task_sla.sys_updated_on], [Active SLA count])
                SELECT
                    [task.number]
                    , [task_sla.sla:contract_sla.name]
                    , [task_sla.sys_updated_on]
                    , COUNT(*) AS [Active SLA count]
                FROM DM.dbo.DM_SG_Cases WITH (TABLOCK)
                WHERE [contract_sla.type.sys_choice] = 'SLA'
                GROUP BY [task.number], [task_sla.sla:contract_sla.name], [task_sla.sys_updated_on];

                WITH cte AS
                (
                    SELECT ROW_NUMBER() OVER (PARTITION BY [task.number] ORDER BY [task.number], [task_sla.sys_updated_on]) AS row_num
                    FROM work.dbo.DM_Performance_SLA
                )
                DELETE FROM cte WHERE row_num > 1;

                UPDATE DM_Performance
                SET [SLA Description] = work.dbo.DM_Performance_SLA.[task_sla.sla:contract_sla.name]
                FROM work.dbo.DM_Performance_SLA
                WHERE work.dbo.DM_Performance_SLA.[task.number] = [Case Number]
                AND Platform = 'Request Portal'
                AND LEFT([Case Number], 3) <> 'INC';

        .. tab-item:: SG Inc

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task_sla].[task_sla.sla:contract_sla.name]``
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task_sla.sla:contract_sla.name] AS [SLA Description]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND S.[task_sla.has_breached] IS NOT NULL
                    AND ISNULL(M.[task.state.sys_choice], '') <> 'Cancelled'
                    AND NOT (M.[task.state.sys_choice] IS NULL AND NULLIF(M.[task.closed_at], '1900-01-01') IS NULL)
                    AND NOT EXISTS (
                        SELECT 1
                        FROM DM.dbo.DM_Performance AS P
                        WHERE P.[Case Number] = M.[task.number]
                            AND P.[Last Update Datetime] = M.[task.sys_updated_on]
                    );

        .. tab-item:: SG CIC

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task_sla].[task_sla.sla:contract_sla.name]``
            - :fa:`tag` *Setting Type:* 
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*

            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task_sla.sla:contract_sla.name] AS [SLA Description]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] = 'UNI Finance Invoice CIC OLA - 3 Days'
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';           

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:*
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?


.. =====================================================================================================
.. ======== SLA Schedule ===============================================================================
.. =====================================================================================================

.. colref-detail:: perf_SLA_Schedule
    :title: SLA Schedule

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM_SG_Cases.[contract_sla.schedule:cmn_schedule.name]``
            - :fa:`tag` *Setting Type:* 
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT DISTINCT
                    S.[task.number] AS [Case Number],
                    TRY_CAST(S.[contract_sla.schedule:cmn_schedule.name] AS nvarchar(255)) AS [SLA Schedule]
                FROM DM.dbo.DM_SG_Cases AS S
                WHERE
                    S.[task.number] IS NOT NULL
                    AND LEN(S.[task.number]) > 0
                    AND (S.[task.state.sys_choice] NOT IN ('Cancelled','Canceled') OR S.[task.state.sys_choice] IS NULL)
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

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* 
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-contract_sla].[contract_sla.schedule:cmn_schedule.name]``
            - :fa:`tag` *Setting Type:* 
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT DISTINCT
                    TRY_CAST(C.[contract_sla.schedule:cmn_schedule.name] AS nvarchar(255)) AS [SLA Schedule]
                FROM SN.dbo.[10-task] AS M
                INNER JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                LEFT JOIN SN.dbo.[10-contract_sla] AS C
                    ON C.[contract_sla.sys_id] = S.[task_sla.sys_id]
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

            - :fa:`database` *Lineage:* ``SN.dbo.[10-contract_sla].[contract_sla.schedule:cmn_schedule.name]``
            - :fa:`tag` *Setting Type:* Derived 
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 

            .. code-block:: tsql

                SELECT DISTINCT
                    TRY_CAST(C.[contract_sla.schedule:cmn_schedule.name] AS nvarchar(255)) AS [SLA Schedule]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] = 'UNI Finance Invoice CIC OLA - 3 Days'
                LEFT JOIN SN.dbo.[10-contract_sla] AS C
                    ON C.[contract_sla.sys_id] = S.[task_sla.sys_id]
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:* 
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?            

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:* 
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                -- ?            

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:* 
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?


.. =====================================================================================================
.. ======== OLA Met ====================================================================================
.. =====================================================================================================

.. colref-detail:: perf_OLA_Met
    :title: OLA Met

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG Cases

            - :fa:`database` *Lineage:* ``DM.dbo.DM_SG_Cases.[task_sla.has_breached]``
            - :fa:`tag` *Setting Type:* 
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:*
        
            .. code-block:: tsql

                DROP TABLE IF EXISTS #DM_Performance_OLA;
                CREATE TABLE #DM_Performance_OLA
                (
                    [task.number]                         nvarchar(12)
                    , [task_sla.sla:contract_sla.name]    nvarchar(255)
                    , [task_sla.has_breached]             nvarchar(12)
                    , [task_sla.sys_updated_on]           datetime
                    , [contract_sla.duration]             datetime
                );

                INSERT INTO #DM_Performance_OLA
                (   [task.number], [task_sla.sla:contract_sla.name], [task_sla.has_breached], [task_sla.sys_updated_on], [contract_sla.duration] )
                SELECT
                    [task.number]
                    , [task_sla.sla:contract_sla.name]
                    , [task_sla.has_breached]
                    , [task_sla.sys_updated_on]
                    , [contract_sla.duration]
                FROM DM.dbo.DM_SG_Cases WITH (TABLOCK)
                WHERE [contract_sla.type.sys_choice] = 'OLA';

                WITH cte AS
                (
                    SELECT ROW_NUMBER() OVER (PARTITION BY [task.number] ORDER BY [task.number], [task_sla.sys_updated_on]) AS row_num
                    FROM #DM_Performance_OLA
                )
                DELETE FROM cte WHERE row_num > 1;

                UPDATE DM_Performance
                SET [OLA Met] =
                    CASE WHEN #DM_Performance_OLA.[task_sla.has_breached] = 'false' THEN '1' ELSE '0' END
                FROM #DM_Performance_OLA
                WHERE #DM_Performance_OLA.[task.number] = [Case Number]
                AND Platform = 'Request Portal'
                AND LEFT([Case Number], 3) <> 'INC';

        .. tab-item:: SG Inc

            - :fa:`database` *Lineage:* N/A
            - :fa:`tag` *Setting Type:* 
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql
                
                -- Field not mentioned in p_DM_Performance_INC

        .. tab-item:: SG Trv

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task_sla].[task_sla.has_breached]``
            - :fa:`tag` *Setting Type:* 
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                SELECT DISTINCT
                    CASE WHEN S.[task_sla.has_breached] = 'false' THEN 1 ELSE 0 END AS [OLA Met]
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

            - :fa:`database` *Lineage:* ``SN.dbo.[10-task_sla].[task_sla.has_breached]``
            - :fa:`tag` *Setting Type:* Derived
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 

            .. code-block:: tsql
            
                SELECT DISTINCT
                    CASE 
                        WHEN S.[task_sla.has_breached] = 'false' THEN 1 
                        ELSE 0 
                    END AS [OLA Met]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN.dbo.[10-task_sla] AS S
                    ON M.[task.sys_id] = S.[task_sla.task.value]
                    AND S.[task_sla.sla:contract_sla.name] = 'UNI Finance Invoice CIC OLA - 3 Days'
                WHERE M.[task.number] LIKE 'CIC%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Cancel%'
                    AND M.[task.state.sys_choice] NOT LIKE '%Read%';

        .. tab-item:: SG RAS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:* 
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?            

        .. tab-item:: TMS

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:* 
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?            

        .. tab-item:: SharePoint JC

            - :fa:`database` *Lineage:* 
            - :fa:`tag` *Setting Type:* 
            - :fa:`cogs` *How:* 
            - :fa:`filter` *Filter:* 
        
            .. code-block:: tsql

                -- ?
