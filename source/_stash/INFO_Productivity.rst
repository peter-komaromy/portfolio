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

.. to understand what this meta directive is for, see colref-offcanvas.js

.. meta::
   :colref-switcher-label: Action type

.. ================================================================================================================

.. rst-class:: pst-primary-sidebar-narrow

DM_Productivity
=================

**Column Reference**

|br|

Filter with header icons > Expand row toggles for hidden fields > Click truncated text or  :fas:`circle-info;sd-text-info` for full details. \| For table introductions, see :doc:`User Guides <../../1_User_Guides/User_Guides>`. \| To contribute, use the |ColRef_Excel_Link_DM_Productivity|.


.. =================================================================================================================
.. --- Header ------------------------------------------------------------------------------------------------------
.. =================================================================================================================


.. list-table::
    :header-rows: 1
    :widths: auto
    :class: sphinx-datatable display hover nowrap dt-profile-perf   

    * - Column Name
      - Definition
      - Sample Value(s)
      - Source System(s)
      - Remark
      - Data Origin & Logic

        .. only:: comment

            ========================================================================================================================
            ====== Values ==========================================================================================================
            ========================================================================================================================

    * - Action DateTime
      - Timestamp of the recorded action
      - ``2024-12-03 22:43:59.000``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Action_DateTime`

    * - Action Date
      - Date part of the action timestamp
      - ``2024-12-03``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Action_Date` 

    * - Action Agent - PERNR
      - Personnel number of the Action Agent (the case processor who performed the action).
      - ``00236266``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Action_Agent_PERNR` 

    * - Action Agent - Name
      - Full name of the Action Agent
      - ``Jane Smith``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Action_Agent_Name` 

    * - Action Agent - Email
      - Email address of the Action Agent.
      - ``jsmith@example.org``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Action_Agent_Email` 

    * - Action Agent - Detailed info
      - Combined string showing the name, grade level, and personnel number of the Action Agent.
      - ``Jane Smith - G-5 - 00236267``
      - SG, TMS, IRC
      - Since it is based on the source-system name, values may vary within the same personnel number group.
      - :colrefopen:`prod_Action_Agent_Detailed_info` 

    * - Action Agent - Org. Unit - Code
      - Code of the organizational unit to which the Action Agent belongs.
      - ``00002850``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Action_Agent_Org_Unit_Code` 

    * - Action Agent - Org. Unit
      - Name of the organizational unit to which the action agent belongs.
      - ``00002850``
      - SG, TMS, IRC
      - To be revised. This field is intended to be ``Action Agent - Org. Unit - Code``'s text label pair.
      - N/A  Right now, the column is identical with ``Action Agent - Org. Unit Code``

    * - Action Agent - Title by HR Ops
      - Job title of the action agent as maintained by HR Operations.
      - ``Finance Assistant``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Action_Agent_Title_by_HR_Ops` 

    * - Action Agent - Title by SAP
      - Job title of the action agent as recorded in SAP.
      - ``NULL``
      - SG, TMS, IRC
      - NULL for all rows. To be revised. (Referenced field may be missing in DM_Person.)
      - :colrefopen:`prod_Action_Agent_Title_by_SAP` 

    * - Action Agent - Level by HR OPS
      - Post level of the Action Agent as classified by HR Operations.
      - ``G-5``, ``P-3``, ``NO-2``
      - SG, TMS, IRC  (Lookups: SAP, Manual)
      - N/A
      - :colrefopen:`prod_Action_Agent_Level_by_HR_OPS` 

    * - Action Agent - Level by SAP
      - Post level of the Action Agent as recorded in SAP.
      - ``G-5``, ``P-3``, ``NO-2``
      - SG, TMS, IRC (Lookup: SAP)
      - N/A
      - :colrefopen:`prod_Action_Agent_Level_SAP` 

    * - Action Agent - Section by HR Ops
      - Section to which the Action Agent belongs as classified by HR Operations.
      - ``BIS``, ``Finance``
      - SG, TMS, IRC (Lookup: SAP)
      - N/A
      - :colrefopen:`prod_Action_Agent_Section_by_HR_Ops` 

    * - Action Agent - Stream by HR Ops
      - Business Stream to which the Action Agent belongs as classified by HR Operations.
      - ``Finance - GA``, ``BIS - Customer Care``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Action_Agent_Stream_by_HR_Ops` 

    * - Action Description
      - Description of the type of action performed
      - ``Case parking``, ``Closing incident``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Action_Description` 

    * - Assignment Group
      - Group or team responsible for handling the case or action.
      - ``Agora Support``, ``Customer Care QA``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Assignment_Group` 

    * - Assigned to - Name
      - Full name of the person the case is assigned to
      - ``Jane Smith``
      - SG, TMS, IRC
      - N/A
      - Constant labels used for all actions except IRC. Days without action are later tagged as 'No activity'. :colrefopen:`prod_Assigned_to_Name` 

    * - Assigned to - Email
      - Email address of the person the case was assigned to.
      - ``jsmith@example.org``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Assigned_to_Email` 

    * - Closed by - Name
      - Full name of the person who closed the case.
      - ``Jane Smith``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Closed_by_Name` 

    * - Closed by - Email
      - Email address of the person who closed the case.
      - ``jsmith@example.org``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Closed_by_Email` 

    * - Opened by - Name
      - Full name of the person who opened the case.
      - ``Jane Smith``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Opened_by_Name` 

    * - Opened by - Email
      - Email address of the person who opened the case.
      - ``jsmith@example.org``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Opened_by_Email` 

    * - Parked by - Name
      - Name of the person who parked the case.
      - ``Jane Smith``
      - SG, TMS, IRC
      - Park = Save an invoice in SAP (for review, validation, or approval) before posting it for payment
      - :colrefopen:`prod_Parked_by_Name` 

    * - Parked by - Email
      - Email address of the person who parked the case
      - ``jsmith@example.org``
      - SG, TMS, IRC
      - Park = Save an invoice in SAP (for review, validation, or approval) before posting it for payment
      - :colrefopen:`prod_Parked_by_Email` 

    * - Case Open DateTime
      - Timestamp when the case was opened.
      - ``2024-12-03 22:43:59.000``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Case_Open_DateTime` 

    * - Case Open Date
      - Date when the case was opened.
      - ``2024-12-03``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Case_Open_Date` 

    * - Case Close DateTime
      - Timestamp when the case was closed.
      - ``2024-12-03 22:43:59.000``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Case_Closed_DateTime` 

    * - Case Close Date
      - Date when the case was closed.
      - ``2024-12-03``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Case_Close_Date` 

    * - Case Parked DateTime
      - Timestamp when the case was parked.
      - ``2024-12-03 22:43:59.000``
      - SG, TMS, IRC
      - Park = Save an invoice in SAP (for review, validation, or approval) before posting it for payment
      - :colrefopen:`prod_Case_Parked_DateTime` 

    * - Case Parked Date
      - Date when the case was parked.
      - ``2024-12-03``
      - SG, TMS, IRC
      - Park = Save an invoice in SAP (for review, validation, or approval) before posting it for payment
      - :colrefopen:`prod_Case_Parked_Date` 

    * - Case Number
      - Unique identifier assigned to the case.
      - ``FIC1678816``, ``MDC0255547``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Case_Number` 

    * - Performance counter
      - A derived field where each Action counts as one unit.
      - ``1``, ``0``
      - SG, TMS, IRC
      - ``1`` = one action, ``0`` = no activity; summing this field gives the daily action totals in the Productivity Dashboard.
      - ``1`` is hard-coded on action rows; ``0`` is introduced later for 'No activity' rows the SP fabricates (one row per staff per day). :colrefopen:`prod_Performance_Counter` 

    * - Service
      - Name of the service category to which the case belongs (also referred to, colloquially, as 'Reporting Process Name').
      - ``Change in Marital Status``, ``Create Institutional Vendor``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Service` 

    * - Service type
      - Subcategory of service provided in the case.
      - ``Education Grant Advance``, ``Completion of Loan Assignment``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Service_type` 

    * - SLA Status
      - Shows whether the SLA for the case was met
      - ``1``, ``0``
      - SG, TMS, IRC
      - ``1`` = SLA met, ``0`` = SLA breached
      - :colrefopen:`prod_SLA_Status` 

    * - Status
      - Status of the case at the time when the data was last extracted.
      - ``Closed - Successful``, ``Closed - Incomplete``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Status` 

    * - FWA Type
      - Type of Flexible Work Arrangement assigned to the Action Agent on the day the action was performed.
      - ``Telework outs.d/s (TODS1)``, ``Flexible Working Hours``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_FWA_Type` 

    * - Type of leave
      - Type of leave assigned to the Action Agent on the day the action was performed.
      - ``Annual Leave``, ``Other``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Type of_leave` 

    * - Workday
      - Shows whether the date of the action was a workday.
      - ``1``, ``0``
      - SG, TMS, IRC
      - ``1`` = business day, ``0`` = weekend/holiday
      - :colrefopen:`prod_Workday` 

    * - Day of week
      - Code for the weekday on which the action was performed
      - ``1``, ``2``
      - SG, TMS, IRC
      - ``1`` = Monday, ``2`` = Tuesday, etc.
      - :colrefopen:`prod_Day_of_Week` 

    * - Master Date - Dayname
      - Name of the weekday on which the action was performed
      - ``Monday``, ``Tuesday``
      - SG, TMS, IRC
      - Unlike values in the ``Day of week`` field, these values are calculated using an SQL function rather than looked up from a reference table.
      - Computed column. :colrefopen:`prod_Master_Date_Dayname` 

    * - ISO Week
      - Number of the ISO 8601 calendar week when the action was performed
      - ``1``, ``23``, ``52``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_ISO_Week` 

    * - Scenario
      - The type of productivity scenario under which the Action Agent performed the action
      - ``Approved leave``, ``Teleworking with productivity``
      - SG, TMS, IRC
      - N/A
      - Derived from ``Workday``, leave existence (``PA2001``), and FWA telework (``PA2002``). 'No-activity' scenarios come from padded zero-rows in the final DM. :colrefopen:`prod_Scenario` 

    * - Coloring
      - Numerical representation of the Scenario field.
      - ``2``, ``6``
      - SG, TMS, IRC
      - Used internally for visual formatting in the Productivity Dashboard; not intended for interpretation by business users
      - :colrefopen:`prod_Coloring` 

    * - Refresh date
      - Latest date available in the source table's ``Case Close Date`` column.
      - ``2024-12-03``
      - SG, TMS, IRC
      - N/A
      - ``SELECT CAST(GETDATE() AS date) AS [Refresh date];`` 

    * - Last available date
      - Latest date available in the source table's ``Case Close Date`` column, specifically maintained for TMS-sourced cases through a separate query.
      - ``2024-12-03``
      - SG, TMS, IRC
      - Functionally similar to ``Refresh date``, but updated independently
      - :colrefopen:`prod_Last_available_date` 

    * - Service Area Name
      - Name of the Service Area for the case.
      - ``Egypt``, ``Demo``
      - SG, TMS, IRC
      - Not the Action Agent's Service Area but the case's.
      - :colrefopen:`prod_Service_Area_Name` 

    * - Agent_Flag
      - Shows whether the Action Agent performed an action to be included in dashboard calculations (filter indicator for in-scope personnel)
      - ``1``, ``0``
      - SG, TMS, IRC
      - ``1`` = in-scope personnel, ``0`` = out-of-scope personnel
      - ``SELECT CAST(1 AS int) AS [Agent_Flag];`` 

    * - Stream of Case
      - Business stream under which the case is categorized.
      - ``Customer Care``, ``General Accounting``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Stream_of_Case` 

    * - Stream by Reporting Line
      - Business stream derived from the Action Agent’s reporting line, based on post hierarchy data from SAP.
      - ``Finance - Payments``, ``BIS - Customer Care``
      - SG, TMS, IRC
      - N/A
      - :colrefopen:`prod_Stream_by_Reporting_Line` 

    * - Stream of Case - Calculated
      - Stream attribute of the case.
      - ``Finance - Payments``, ``BIS - Customer Care``
      - SG, TMS, IRC
      - Similar to ``Stream of Case``, but calculated through multiple lookups and updates using data from sources such as ``DM_Performance`` and ``DM_Productivity``
      - :colrefopen:`prod_Stream_of_Case_Calculated` 


.. ================================================================================================================================
.. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.. -------- OFFCANVAS DETAILS -----------------------------------------------------------------------------------------------------
.. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
.. ================================================================================================================================


.. =====================================================================================================
.. ======== Action DateTime ============================================================================
.. =====================================================================================================    

.. colref-detail:: prod_Action_DateTime
    :title: Action DateTime 

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.closed_at]                       

                -- Query
                SELECT DISTINCT
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled', 'Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]                        

                -- Query
                WITH LastPark AS (
                    SELECT
                        M.[task.number],
                        MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (
                                M.[shc_case.u_type.sys_choice] NOT IN (
                                    'Letter of Appointment',
                                    'Certificate of Employment without Salary Information',
                                    'Certificate of Employment with Salary Information'
                                )
                                OR M.[shc_case.u_type.sys_choice] IS NULL
                            )
                        AND M.[task.active] = 'false'
                        AND NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                        AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    M.[shc_case.u_parked_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt = M.[shc_case.u_parked_at];    

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.closed_at]                        

                -- Query                        
                SELECT DISTINCT
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    M.[task.opened_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SCT by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SCT on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf of Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN.dbo.[10-task].[task.closed_at]

                -- Query
                SELECT DISTINCT
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                        OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END            AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS X
                    ON M.[task.sys_id] = X.[sys_id]
                LEFT JOIN SN.dbo.[10-task_sla] AS TS
                    ON M.[task.sys_id] = TS.[task_sla.task.value]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[task.number] LIKE 'TRV%'
                    AND TS.[task_sla.has_breached] IS NOT NULL
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Chats.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries' AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1; 

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Onboarding.[TMS_action_end_date]

                -- Query
                SELECT DISTINCT
                    M.[TMS_action_end_date] AS [Action DateTime],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                IRC.dbo.IRC_Operation_Audit.[Datetime Created On Demo]

                -- Query
                SELECT DISTINCT
                    M.[Datetime Created On Demo] AS [Action DateTime],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                    ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[BA_code] = '1950' 

.. =====================================================================================================
.. ======== Action Date ================================================================================
.. =====================================================================================================

.. colref-detail:: prod_Action_Date
    :title: Action Date

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    CONVERT(date, M.[task.closed_at]) AS [Action Date],
                    M.[task.number]                   AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing'                    AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled', 'Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]

                -- Query
                WITH LastParking AS (
                    SELECT
                        M.[task.number],
                        M.[shc_case.u_parked_at] AS [Last Parking DateTime],
                        CONCAT(M.[shc_case.u_parked_by:sys_user.user_name], 'example.org') AS [Last Parking Agent - Email],
                        ROW_NUMBER() OVER (PARTITION BY M.[task.number] ORDER BY M.[shc_case.u_parked_at] DESC) AS rn
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                        AND NULLIF(M.[shc_case.u_parked_by:sys_user.user_name], '') IS NOT NULL
                )
                SELECT DISTINCT
                    CONVERT(date, M.[shc_case.u_parked_at]) AS [Action Date],
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking'  AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastParking AS L
                    ON L.[task.number] = M.[task.number]
                    AND L.[Last Parking DateTime] = M.[shc_case.u_parked_at]
                    AND L.[Last Parking Agent - Email] = M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org'
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    CONVERT(date, M.[task.closed_at]) AS [Action Date],
                    M.[task.number]                   AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident'                AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    CONVERT(date, M.[task.opened_at]) AS [Action Date],
                    M.[task.number]                   AS [Case Number],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident'               AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master  -- as implemented in the procedure
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    CONVERT(date, M.[task-SCTASK.closed_at]) AS [Action Date],
                    M.[task-SCTASK.number]                   AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent'                   AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query  
                SELECT DISTINCT
                    CONVERT(date, M.[task-SCTASK.closed_at]) AS [Action Date],
                    M.[task-SCTASK.number]                   AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf of Agent'        AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;
    
        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Chats.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    CONVERT(date, M.[task.closed_at]) AS [Action Date],
                    M.[task.number]                   AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries'                    AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                    = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;
        
        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN.dbo.[10-task].[task.closed_at]

                -- Query
                SELECT DISTINCT
                    CONVERT(date, M.[task.closed_at]) AS [Action Date],
                    M.[task.number]                   AS [Case Number],
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                        OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS X
                    ON M.[task.sys_id] = X.[sys_id]
                LEFT JOIN SN.dbo.[10-task_sla] AS TS
                    ON M.[task.sys_id] = TS.[task_sla.task.value]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[task.number] LIKE 'TRV%'
                    AND TS.[task_sla.has_breached] IS NOT NULL
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Onboarding.[TMS_action_end_date]

                -- Query
                SELECT DISTINCT
                    CONVERT(date, M.[TMS_action_end_date]) AS [Action Date],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    IRC.dbo.IRC_Operation_Audit.[Date Created On Demo]

                -- Query
                SELECT DISTINCT
                    CONVERT(date, M.[Date Created On Demo]) AS [Action Date],
                    CAST(M.[ID] AS nvarchar(64))           AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                    ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Action Agent - PERNR =======================================================================
.. =====================================================================================================

.. colref-detail:: prod_Action_Agent_PERNR
    :title: Action Agent - PERNR

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.closed_at] 

                -- Query 
                SELECT DISTINCT
                    J.[PERNR_Personnel number] AS [Action Agent - PERNR],
                    M.[task.number]            AS [Case Number],
                    M.[task.closed_at]         AS [Action DateTime]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN DM.dbo.DM_Person AS J
                    ON J.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN J.BEGDA_Master AND J.ENDDA_Master
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled', 'Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at] 
                
                -- Query 
                SELECT DISTINCT
                    J.[PERNR_Personnel number] AS [Action Agent - PERNR],
                    M.[task.number]            AS [Case Number],
                    M.[shc_case.u_parked_at]   AS [Action DateTime]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN DM.dbo.DM_Person AS J
                    ON J.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org'
                    AND M.[shc_case.u_parked_at] BETWEEN J.BEGDA_Master AND J.ENDDA_Master
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.active] = 'false'
                    AND NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    J.[PERNR_Personnel number] AS [Action Agent - PERNR],
                    M.[task.number]            AS [Case Number],
                    M.[task.closed_at]         AS [Action DateTime]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS J
                    ON J.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN J.BEGDA_Master AND J.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN
                        ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                        OR J.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND J.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                A   ND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    J.[PERNR_Personnel number] AS [Action Agent - PERNR],
                    M.[task.number]            AS [Case Number],
                    M.[task.opened_at]         AS [Action DateTime]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS J
                    ON J.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN J.BEGDA_Master AND J.ENDDA_Master -- validity per procedure
                WHERE J.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND J.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at] 

                -- Query 
                SELECT DISTINCT
                    J.[PERNR_Personnel number] AS [Action Agent - PERNR],
                    M.[task-SCTASK.number]     AS [Case Number],
                    M.[task-SCTASK.closed_at]  AS [Action DateTime]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS J
                    ON J.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN J.BEGDA_Master AND J.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                        ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                        OR J.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]  

                -- Query 
                SELECT DISTINCT
                    J.[PERNR_Personnel number] AS [Action Agent - PERNR],
                    M.[task-SCTASK.number]     AS [Case Number],
                    M.[task-SCTASK.closed_at]  AS [Action DateTime]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS J
                    ON J.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN J.BEGDA_Master AND J.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                        ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                        OR J.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]  
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Only the <> distinguishes it from the previous query
    
        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_Person.[PERNR_Personnel number] 

                -- Query 
                WITH DerivedAgent AS (
                    SELECT
                        M.*,
                        CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                            OR M.[task.closed_by:sys_user.name] IS NULL
                            THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                        END AS AgentEmail
                    FROM SN.dbo.[10-task] AS M
                )
                SELECT DISTINCT
                    J.[PERNR_Personnel number] AS [Action Agent - PERNR],
                    D.[task.number]            AS [Case Number],
                    D.[task.closed_at]         AS [Action DateTime]
                FROM DerivedAgent AS D
                JOIN DM.dbo.DM_Person AS J
                    ON J.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number] = D.AgentEmail
                    AND D.[task.closed_at] BETWEEN J.BEGDA_Master AND J.ENDDA_Master
                LEFT JOIN SN.dbo.[10-task_sla] AS TS
                    ON D.[task.sys_id] = TS.[task_sla.task.value]
                WHERE D.[task.number] LIKE 'TRV%'
                    AND TS.[task_sla.has_breached] IS NOT NULL
                    AND D.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND D.[task.sys_created_on] >= '2024-03-11';
                
        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Chats.[task.closed_at] 

                -- Query 
                SELECT DISTINCT
                    J.[PERNR_Personnel number] AS [Action Agent - PERNR],
                    M.[task.number]            AS [Case Number],
                    M.[task.closed_at]         AS [Action DateTime]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS J
                    ON J.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN J.BEGDA_Master AND J.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN
                        ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                        OR J.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND J.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Person.[PERNR_Personnel number]

                -- Query
                SELECT DISTINCT
                    J.[PERNR_Personnel number] AS [Action Agent - PERNR],
                    M.[Requisition Action]     AS [Case Number],
                    M.[TMS_action_end_date]    AS [Action DateTime]
                FROM DM.dbo.DM_Onboarding AS M
                JOIN DM.dbo.DM_Person AS J
                    ON RTRIM(J.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN J.BEGDA_Master AND J.ENDDA_Master
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND J.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Person.[PERNR_Personnel number]

                -- Query 
                SELECT DISTINCT
                    J.[PERNR_Personnel number]   AS [Action Agent - PERNR],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    M.[Datetime Created On Demo] AS [Action DateTime]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                JOIN DM.dbo.DM_Person AS J
                    ON SUBSTRING(
                        J.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', J.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                        ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN J.BEGDA_Master AND J.ENDDA_Master
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1; 

.. =====================================================================================================
.. ======== Action Agent - Name ========================================================================
.. =====================================================================================================

.. colref-detail:: prod_Action_Agent_Name
    :title: Action Agent - Name

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM_SG_Cases.[task.closed_by:sys_user.name]
                
                -- Query
                SELECT DISTINCT
                    C.[task.closed_by:sys_user.name] AS [Action Agent - Name],
                    C.[task.number]                  AS [Case Number],
                    C.[task.closed_at]               AS [Action DateTime]
                FROM DM.dbo.DM_SG_Cases AS C
                WHERE (C.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information'
                    ) OR C.[shc_case.u_type.sys_choice] IS NULL)
                    AND C.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND C.[task.active] = 'false'
                    AND YEAR(C.[task.closed_at]) >= YEAR(GETDATE()) - 1; 

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM_SG_Cases.[shc_case.u_parked_by:sys_user.name]
                
                -- Query
                WITH Last_Park AS (
                SELECT t.[task.number],
                        t.[shc_case.u_parked_at] AS LastParkingAt,
                        CONCAT(t.[shc_case.u_parked_by:sys_user.user_name],'example.org') AS LastParkingAgentEmail,
                        ROW_NUMBER() OVER (PARTITION BY t.[task.number] ORDER BY t.[shc_case.u_parked_at] DESC) rn
                FROM DM.dbo.DM_SG_Cases AS t
                WHERE NULLIF(t.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND NULLIF(t.[shc_case.u_parked_by:sys_user.user_name], '') IS NOT NULL
                )
                SELECT DISTINCT
                    C.[shc_case.u_parked_by:sys_user.name]  AS [Action Agent - Name],
                    C.[task.number]                         AS [Case Number],
                    C.[shc_case.u_parked_at]                AS [Action DateTime]
                FROM DM.dbo.DM_SG_Cases AS C
                JOIN Last_Park AS L
                    ON L.rn = 1
                    AND L.[task.number] = C.[task.number]
                    AND L.LastParkingAt = C.[shc_case.u_parked_at]
                    AND L.LastParkingAgentEmail = CONCAT(C.[shc_case.u_parked_by:sys_user.user_name],'example.org')
                WHERE (C.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information'
                    ) OR C.[shc_case.u_type.sys_choice] IS NULL)
                    AND C.[task.active] = 'false'
                    AND YEAR(C.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM_Person.[PA0001.ENAME_Formatted Name of Employee or Applicant]                    
                
                -- Query
                SELECT DISTINCT
                    P.[PA0001.ENAME_Formatted Name of Employee or Applicant] AS [Action Agent - Name],
                    I.[task.number]                                          AS [Case Number],
                    I.[task.closed_at]                                       AS [Action DateTime]
                FROM DM.dbo.DM_SG_Incidents AS I
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = I.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND I.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE YEAR(I.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM_Person.[PA0001.ENAME_Formatted Name of Employee or Applicant]                   

                -- Query                        
                SELECT DISTINCT
                    P.[PA0001.ENAME_Formatted Name of Employee or Applicant] AS [Action Agent - Name],
                    I.[task.number]                                          AS [Case Number],
                    I.[task.opened_at]                                       AS [Action DateTime]
                FROM DM.dbo.DM_SG_Incidents AS I
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = I.[task.opened_by:sys_user.user_name] + 'example.org'                        
                    AND I.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE YEAR(I.[task.opened_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes: The join to HR dates is on closed_at in the p_DM_Productivity procedure.
                -- Unintended? If yes, should be switched to opened_at.

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM_Person.[PA0001.ENAME_Formatted Name of Employee or Applicant]                    
                
                -- Query
                SELECT DISTINCT
                    P.[PA0001.ENAME_Formatted Name of Employee or Applicant] AS [Action Agent - Name],
                    S.[task-SCTASK.number]                                   AS [Case Number],
                    S.[task-SCTASK.closed_at]                                AS [Action DateTime]
                FROM DM.dbo.DM_SG_SC_Tasks AS S
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = S.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND S.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE S.[task-SCTASK.assigned_to:sys_user.user_name] = S.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(S.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM_Person.[PA0001.ENAME_Formatted Name of Employee or Applicant]                                
                
                -- Query
                SELECT DISTINCT
                    P.[PA0001.ENAME_Formatted Name of Employee or Applicant] AS [Action Agent - Name],
                    S.[task-SCTASK.number]                                   AS [Case Number],
                    S.[task-SCTASK.closed_at]                                AS [Action DateTime]
                FROM DM.dbo.DM_SG_SC_Tasks AS S
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = S.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND S.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE S.[task-SCTASK.assigned_to:sys_user.user_name] <> S.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(S.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN.[10-task].[task.closed_by:sys_user.name]

                -- Query
                SELECT DISTINCT
                    CASE
                        WHEN T.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                        OR T.[task.closed_by:sys_user.name] IS NULL
                        THEN T.[task.assigned_to:sys_user.name]
                        ELSE T.[task.closed_by:sys_user.name]
                    END AS [Action Agent - Name],
                    T.[task.number]     AS [Case Number],
                    T.[task.closed_at]  AS [Action DateTime]
                FROM SN.dbo.[10-task] AS T
                WHERE T.[task.number] LIKE 'TRV%'
                    AND T.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND YEAR(T.[task.closed_at]) >= YEAR(GETDATE()) - 1; 

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM_Person.[PA0001.ENAME_Formatted Name of Employee or Applicant]

                -- Query
                SELECT DISTINCT
                    P.[PA0001.ENAME_Formatted Name of Employee or Applicant] AS [Action Agent - Name],
                    C.[task.number]                                          AS [Case Number],
                    C.[task.closed_at]                                       AS [Action DateTime]
                FROM DM.dbo.DM_Chats AS C
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = C.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND C.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE YEAR(C.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM_Person.[PA0001.ENAME_Formatted Name of Employee or Applicant]

                -- Query
                SELECT DISTINCT
                    P.[PA0001.ENAME_Formatted Name of Employee or Applicant] AS [Action Agent - Name],
                    O.[Requisition Action]                                   AS [Case Number],
                    O.[TMS_action_end_date]                                  AS [Action DateTime]
                FROM DM.dbo.DM_Onboarding AS O
                JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant]) = RTRIM(O.[ONBOARDING_TASK_PROVIDER])
                    AND O.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE O.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(O.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM_Person.[PA0001.ENAME_Formatted Name of Employee or Applicant]

                -- Query
                SELECT DISTINCT
                    P.[PA0001.ENAME_Formatted Name of Employee or Applicant] AS [Action Agent - Name],
                    CAST(A.[ID] AS nvarchar(40))                             AS [Case Number],
                    A.[Datetime Created On Demo]                             AS [Action DateTime]
                FROM IRC.dbo.IRC_Operation_Audit AS A
                JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                                0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]))
                        = RTRIM(A.[User])
                    AND A.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE A.[BA_code] = '1950'
                    AND YEAR(A.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Action Agent - Email =======================================================================
.. =====================================================================================================

.. colref-detail:: prod_Action_Agent_Email
    :title: Action Agent - Email

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)                    
                    DM.dbo.DM_SG_Cases.[task.closed_by:sys_user.user_name]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Email] = [task.closed_by:sys_user.user_name] + 'example.org'
                FROM DM.dbo.DM_SG_Cases
                WHERE [task.active] = 'false'
                    AND [task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND (
                        [shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR [shc_case.u_type.sys_choice] IS NULL
                    )
                    AND YEAR([task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Final insert populates DM_Productivity.[Action Agent - Email] from #TEMP_Hybrid.[Agent Mail],
                -- which is DM_Person.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number] (lowercased).

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_Cases.[shc_case.u_parked_by:sys_user.user_name]

                -- Query
                WITH last_park AS (
                    SELECT
                        [task.number]                                  AS CaseNumber,
                        [shc_case.u_parked_at]                         AS LastParkedAt,
                        CONCAT([shc_case.u_parked_by:sys_user.user_name], 'example.org') AS ParkEmail,
                        ROW_NUMBER() OVER (
                            PARTITION BY [task.number]
                            ORDER BY [shc_case.u_parked_at] DESC
                        ) AS rn
                    FROM DM.dbo.DM_SG_Cases
                    WHERE NULLIF([shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                        AND YEAR([shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                        AND (
                            [shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR [shc_case.u_type.sys_choice] IS NULL
                        )
                )
                SELECT [Action Agent - Email] = ParkEmail
                FROM last_park
                WHERE rn = 1;

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_Incidents.[task.closed_by:sys_user.user_name]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Email] = [task.closed_by:sys_user.user_name] + 'example.org'
                FROM DM.dbo.DM_SG_Incidents
                WHERE YEAR([task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_Incidents.[task.opened_by:sys_user.user_name]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Email] = [task.opened_by:sys_user.user_name] + 'example.org'
                FROM DM.dbo.DM_SG_Incidents
                WHERE YEAR([task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by agent

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_by:sys_user.user_name]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Email] = [task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                FROM DM.dbo.DM_SG_SC_Tasks
                WHERE [task-SCTASK.assigned_to:sys_user.user_name] = [task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR([task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf of agent
                                
            .. code-block:: tsql

                -- Source Field(s) 
                DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_by:sys_user.user_name]

                -- Query (closed by someone other than assigned_to)
                SELECT DISTINCT
                    [Action Agent - Email] = [task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                FROM DM.dbo.DM_SG_SC_Tasks
                WHERE [task-SCTASK.assigned_to:sys_user.user_name] <> [task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR([task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;                

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN.dbo.[10-task].[task.closed_by:sys_user.user_name]
                    SN.dbo.[10-task].[task.assigned_to:sys_user.user_name]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Email] =
                        CASE
                            WHEN [task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                                    THEN [task.assigned_to:sys_user.user_name] + 'example.org'
                            WHEN [task.closed_by:sys_user.name] IS NULL
                                    THEN [task.assigned_to:sys_user.user_name] + 'example.org'
                            ELSE [task.closed_by:sys_user.user_name] + 'example.org'
                        END
                FROM SN.dbo.[10-task]
                WHERE [task.number] LIKE 'TRV%'
                    AND [task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND [task.closed_at] IS NOT NULL;
                    

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_Chats.[task.closed_by:sys_user.user_name]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Email] = [task.closed_by:sys_user.user_name] + 'example.org'
                FROM DM.dbo.DM_Chats
                WHERE YEAR([task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_Person.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]

                -- Query                
                SELECT DISTINCT
                    [Action Agent - Email] = LOWER([PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                FROM DM.dbo.DM_Onboarding O
                JOIN DM.dbo.DM_Person P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant]) = RTRIM(O.ONBOARDING_TASK_PROVIDER)
                    AND O.TMS_action_end_date BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE O.TMS_Action_Code IN ('TMS01')
                    AND YEAR(O.TMS_action_end_date) >= YEAR(GETDATE()) - 1;

                -- Email comes directly from DM_Person.
            
        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                IRC.dbo.IRC_Operation_Audit.[User]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Email] = LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                FROM IRC.dbo.IRC_Operation_Audit A
                JOIN DM.dbo.DM_Person P
                    ON SUBSTRING(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                       0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]))
                            = RTRIM(A.[User])
                    AND A.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE YEAR(A.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

                -- Email comes directly from DM_Person;
                -- IRC User is matched to the email local-part.

.. =====================================================================================================
.. ======== Action Agent - Detailed info ==============================================================
.. =====================================================================================================

.. colref-detail:: prod_Action_Agent_Detailed_info
    :title: Action Agent - Detailed info

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                DM_SG_Cases.[task.closed_by:sys_user.user_name]

                SELECT DISTINCT
                CONCAT(
                    C.[task.closed_by:sys_user.name], ' - ',
                    P.[PA0008.TRFGR_Pay Scale Group], ' - ',
                    P.[PERNR_Personnel number]
                )                           AS [Action Agent - Detailed info],
                C.[task.number]             AS [Case Number],
                C.[task.closed_at]          AS [Action DateTime]
                FROM DM.dbo.DM_SG_Cases AS C
                JOIN DM.dbo.DM_Person AS P
                ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = C.[task.closed_by:sys_user.user_name] + 'example.org'
                AND C.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (C.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information'
                    ) OR C.[shc_case.u_type.sys_choice] IS NULL)
                    AND C.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND C.[task.active] = 'false'
                    AND YEAR(C.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Name comes from ServiceNow (closed_by), grade & PERNR from HR (DM_Person).

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                DM_SG_Cases.[shc_case.u_parked_by:sys_user.user_name]

                WITH Last_Park AS (
                SELECT
                    t.[task.number],
                    t.[shc_case.u_parked_at] AS LastParkingAt,
                    CONCAT(t.[shc_case.u_parked_by:sys_user.user_name],'example.org') AS LastParkingAgentEmail,
                    ROW_NUMBER() OVER (PARTITION BY t.[task.number] ORDER BY t.[shc_case.u_parked_at] DESC) rn
                FROM DM.dbo.DM_SG_Cases AS t
                WHERE NULLIF(t.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND NULLIF(t.[shc_case.u_parked_by:sys_user.user_name], '') IS NOT NULL
                )
                SELECT DISTINCT
                CONCAT(
                    C.[shc_case.u_parked_by:sys_user.name], ' - ',
                    P.[PA0008.TRFGR_Pay Scale Group], ' - ',
                    P.[PERNR_Personnel number]
                )                           AS [Action Agent - Detailed info],
                C.[task.number]             AS [Case Number],
                C.[shc_case.u_parked_at]    AS [Action DateTime]
                FROM DM.dbo.DM_SG_Cases AS C
                JOIN Last_Park AS L
                    ON L.rn = 1
                    AND L.[task.number] = C.[task.number]
                    AND L.LastParkingAt = C.[shc_case.u_parked_at]
                    AND L.LastParkingAgentEmail = CONCAT(C.[shc_case.u_parked_by:sys_user.user_name],'example.org')
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = C.[shc_case.u_parked_by:sys_user.user_name] + 'example.org'
                    AND C.[shc_case.u_parked_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (C.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information'
                    ) OR C.[shc_case.u_type.sys_choice] IS NULL)
                    AND C.[task.active] = 'false'
                    AND YEAR(C.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1;

                -- Name comes from ServiceNow (closed_by), grade & PERNR from HR (DM_Person).

        .. tab-item:: SG- Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                DM_SG_Incidents.[task.closed_by:sys_user.user_name] 

                SELECT DISTINCT
                CONCAT(
                    P.[PA0001.ENAME_Formatted Name of Employee or Applicant], ' - ',
                    P.[PA0008.TRFGR_Pay Scale Group], ' - ',
                    P.[PERNR_Personnel number]
                )                           AS [Action Agent - Detailed info],
                I.[task.number]             AS [Case Number],
                I.[task.closed_at]          AS [Action DateTime]
                FROM DM.dbo.DM_SG_Incidents AS I
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = I.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND I.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE YEAR(I.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Name/grade/PERNR are HR-normalized.

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                DM_SG_Incidents.[task.opened_by:sys_user.user_name] 

                SELECT DISTINCT
                CONCAT(
                    P.[PA0001.ENAME_Formatted Name of Employee or Applicant], ' - ',
                    P.[PA0008.TRFGR_Pay Scale Group], ' - ',
                    P.[PERNR_Personnel number]
                )                           AS [Action Agent - Detailed info],
                I.[task.number]             AS [Case Number],
                I.[task.opened_at]          AS [Action DateTime]
                FROM DM.dbo.DM_SG_Incidents AS I
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = I.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND I.[task.opened_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE YEAR(I.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                DM_SG_SC_Tasks.[task-SCTASK.closed_by:sys_user.user_name] 

                SELECT DISTINCT
                CONCAT(
                    P.[PA0001.ENAME_Formatted Name of Employee or Applicant], ' - ',
                    P.[PA0008.TRFGR_Pay Scale Group], ' - ',
                    P.[PERNR_Personnel number]
                )                              AS [Action Agent - Detailed info],
                S.[task-SCTASK.number]         AS [Case Number],
                S.[task-SCTASK.closed_at]      AS [Action DateTime]
                FROM DM.dbo.DM_SG_SC_Tasks AS S
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = S.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND S.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE S.[task-SCTASK.assigned_to:sys_user.user_name] = S.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(S.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s)
                DM_SG_SC_Tasks.[task-SCTASK.closed_by:sys_user.user_name] 

                SELECT DISTINCT
                CONCAT(
                    P.[PA0001.ENAME_Formatted Name of Employee or Applicant], ' - ',
                    P.[PA0008.TRFGR_Pay Scale Group], ' - ',
                    P.[PERNR_Personnel number]
                )                              AS [Action Agent - Detailed info],
                S.[task-SCTASK.number]         AS [Case Number],
                S.[task-SCTASK.closed_at]      AS [Action DateTime]
                FROM DM.dbo.DM_SG_SC_Tasks AS S
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = S.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND S.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE S.[task-SCTASK.assigned_to:sys_user.user_name] <> S.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(S.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN.[10-task].[task.closed_by:sys_user.user_name],
                    SN.[10-task].[task.assigned_to:sys_user.user_name]

                SELECT DISTINCT
                CONCAT(
                    CASE
                    WHEN T.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                        OR T.[task.closed_by:sys_user.name] IS NULL
                    THEN T.[task.assigned_to:sys_user.name]
                    ELSE T.[task.closed_by:sys_user.name]
                    END, ' - ',
                    P.[PA0008.TRFGR_Pay Scale Group], ' - ',
                    P.[PERNR_Personnel number]
                )                         AS [Action Agent - Detailed info],
                T.[task.number]           AS [Case Number],
                T.[task.closed_at]        AS [Action DateTime]
                FROM SN.dbo.[10-task] AS T
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = (CASE
                                WHEN T.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                                OR T.[task.closed_by:sys_user.name] IS NULL
                                THEN T.[task.assigned_to:sys_user.user_name]
                                ELSE T.[task.closed_by:sys_user.user_name]
                            END) + 'example.org'
                    AND T.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE T.[task.number] LIKE 'TRV%'
                    AND T.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND YEAR(T.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Name logic for Travel, then appends HR grade & PERNR.

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                DM_Chats.[task.closed_by:sys_user.user_name] 

                SELECT DISTINCT
                CONCAT(
                    P.[PA0001.ENAME_Formatted Name of Employee or Applicant], ' - ',
                    P.[PA0008.TRFGR_Pay Scale Group], ' - ',
                    P.[PERNR_Personnel number]
                )                         AS [Action Agent - Detailed info],
                C.[task.number]           AS [Case Number],
                C.[task.closed_at]        AS [Action DateTime]
                FROM DM.dbo.DM_Chats AS C
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = C.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND C.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE YEAR(C.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                DM_Onboarding.[ONBOARDING_TASK_PROVIDER] 

                SELECT DISTINCT
                CONCAT(
                    P.[PA0001.ENAME_Formatted Name of Employee or Applicant], ' - ',
                    P.[PA0008.TRFGR_Pay Scale Group], ' - ',
                    P.[PERNR_Personnel number]
                )                        AS [Action Agent - Detailed info],
                O.[Requisition Action]   AS [Case Number],
                O.[TMS_action_end_date]  AS [Action DateTime]
                FROM DM.dbo.DM_Onboarding AS O
                JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant]) = RTRIM(O.[ONBOARDING_TASK_PROVIDER])
                    AND O.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE O.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(O.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                IRC_Operation_Audit.[User] 

                SELECT DISTINCT
                CONCAT(
                    P.[PA0001.ENAME_Formatted Name of Employee or Applicant], ' - ',
                    P.[PA0008.TRFGR_Pay Scale Group], ' - ',
                    P.[PERNR_Personnel number]
                )                                 AS [Action Agent - Detailed info],
                CAST(A.[ID] AS nvarchar(40))       AS [Case Number],
                A.[Datetime Created On Demo]       AS [Action DateTime]
                FROM IRC.dbo.IRC_Operation_Audit AS A
                JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                                0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]))
                        = RTRIM(A.[User])
                    AND A.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE A.[BA_code] = '1950'
                    AND YEAR(A.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Action Agent - Org. Unit - Code ============================================================
.. =====================================================================================================

.. colref-detail:: prod_Action_Agent_Org_Unit_Code
    :title: Action Agent - Org. Unit - Code

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_Cases.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Org. Unit - Code] = P.[PA0001.ORGEH_Organizational Unit]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN DM.dbo.DM_Person AS P
                ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                    = M.[task.closed_by:sys_user.user_name] + 'example.org'
                AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[task.active] = 'false'
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Uses the effective-dated record in DM_Person on the action date.

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]

                -- Query
                WITH last_park AS (
                    SELECT
                        M.[task.number] AS CaseNumber,
                        M.[shc_case.u_parked_at] AS ParkedAt,
                        M.[shc_case.u_parked_by:sys_user.user_name] AS ParkedByUserName,
                        ROW_NUMBER() OVER (
                            PARTITION BY M.[task.number]
                            ORDER BY M.[shc_case.u_parked_at] DESC
                        ) AS rn
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    AND (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                )
                SELECT
                    [Action Agent - Org. Unit - Code] = P.[PA0001.ORGEH_Organizational Unit]
                FROM last_park AS L
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = L.ParkedByUserName + 'example.org'
                    AND L.ParkedAt BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE L.rn = 1;

                -- Uses the last parking event per case, then effective-dated join to DM_Person.

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Org. Unit - Code] = P.[PA0001.ORGEH_Organizational Unit]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                        )
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Org. Unit - Code] = P.[PA0001.ORGEH_Organizational Unit]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.opened_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1; 

        .. tab-item:: SG - Closing SC Task by agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Org. Unit - Code] = P.[PA0001.ORGEH_Organizational Unit]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                        )
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;        

        .. tab-item:: SG - Closing SC Task on behalf of agent
 
            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]
                
                -- Query
                SELECT DISTINCT
                    [Action Agent - Org. Unit - Code] = P.[PA0001.ORGEH_Organizational Unit]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                        )
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;  

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN.dbo.[10-task].[task.closed_at]

                -- Query
                WITH T AS (
                SELECT M.*,
                        CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                                OR M.[task.closed_by:sys_user.name] IS NULL
                            THEN M.[task.assigned_to:sys_user.user_name]
                        ELSE M.[task.closed_by:sys_user.user_name]
                        END AS AgentUserName
                FROM SN.dbo.[10-task] AS M
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.closed_at] IS NOT NULL
                )
                SELECT DISTINCT
                    [Action Agent - Org. Unit - Code] = P.[PA0001.ORGEH_Organizational Unit]
                FROM T
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = T.AgentUserName + 'example.org'
                    AND T.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master;

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Chats.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Org. Unit - Code] = P.[PA0001.ORGEH_Organizational Unit]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Effective-dated join on chat close time.

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Onboarding.[ONBOARDING_TASK_PROVIDER]
                    DM.dbo.DM_Onboarding.[TMS_action_end_date]
                    DM.dbo.DM_Onboarding.[TMS_Action_Code]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Org. Unit - Code] = P.[PA0001.ORGEH_Organizational Unit]
                FROM DM.dbo.DM_Onboarding AS O
                JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(O.ONBOARDING_TASK_PROVIDER)
                    AND O.TMS_action_end_date BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE O.TMS_Action_Code IN ('TMS01')
                    AND YEAR(O.TMS_action_end_date) >= YEAR(GETDATE()) - 1;

                -- Maps provider name to DM_Person, then uses action end date for effective dating.

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    IRC.dbo.IRC_Operation_Audit.[User]
                    IRC.dbo.IRC_Operation_Audit.[Date Created On Demo]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Org. Unit - Code] = LOWER(P.[PA0001.ORGEH_Organizational Unit])
                FROM IRC.dbo.IRC_Operation_Audit AS A
                JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                                    0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]))
                        = RTRIM(A.[User])
                    AND A.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE A.[BA_code] = '1950'
                    AND YEAR(A.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

                -- Matches IRC User to the local-part of the DM_Person email; uses effective dates.

.. =====================================================================================================
.. ======== Action Agent - Org. Unit ===================================================================
.. =====================================================================================================



.. =====================================================================================================
.. ======== Action Agent - Title by HR Ops =============================================================
.. =====================================================================================================

.. colref-detail:: prod_Action_Agent_Title_by_HR_Ops
    :title: Action Agent - Title by HR Ops

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.closed_at] 

                -- Query
                SELECT DISTINCT
                        [Action Agent - Title by HR Ops] = COALESCE(ML.title, 'N/A')
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.Position = P.[PA0001.PLANS_Position]
                WHERE M.[task.active] = 'false'
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled', 'Closed Skipped')
                    AND (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s) 
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]

                -- Query
                WITH last_park AS (
                    SELECT
                        M.[task.number] AS CaseNumber,
                        M.[shc_case.u_parked_at] AS ParkedAt,
                        M.[shc_case.u_parked_by:sys_user.user_name] AS ParkedByUserName,
                        ROW_NUMBER() OVER (
                            PARTITION BY M.[task.number]
                            ORDER BY M.[shc_case.u_parked_at] DESC
                        ) AS rn
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                        AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                        AND (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                )
                SELECT
                        [Action Agent - Title by HR Ops] = COALESCE(ML.title, 'N/A')
                FROM last_park AS L
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = L.ParkedByUserName + 'example.org'
                    AND L.ParkedAt BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.Position = P.[PA0001.PLANS_Position]
                WHERE L.rn = 1;

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.closed_at]
                
                -- Query
                SELECT DISTINCT
                    [Action Agent - Title by HR Ops] = COALESCE(ML.title, 'N/A')
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.Position = P.[PA0001.PLANS_Position]
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                        )
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.opened_at] 

                -- Query
                SELECT DISTINCT
                    [Action Agent - Title by HR Ops] = COALESCE(ML.title, 'N/A')
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.opened_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.Position = P.[PA0001.PLANS_Position]
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by agent

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Title by HR Ops] = COALESCE(ML.title, 'N/A')
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.Position = P.[PA0001.PLANS_Position]
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                        )
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf of agent
                                    
            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Title by HR Ops] = COALESCE(ML.title, 'N/A')
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.Position = P.[PA0001.PLANS_Position]
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                        )
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN.dbo.[10-task].[task.closed_at]

                -- Query
                WITH T AS (
                    SELECT M.*,
                        CASE
                            WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                                OR M.[task.closed_by:sys_user.name] IS NULL
                            THEN M.[task.assigned_to:sys_user.user_name]
                            ELSE M.[task.closed_by:sys_user.user_name]
                        END AS AgentUserName
                    FROM SN.dbo.[10-task] AS M
                    WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.closed_at] IS NOT NULL
                )
                SELECT DISTINCT
                        [Action Agent - Title by HR Ops] = COALESCE(ML.title, 'N/A')
                FROM T
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = T.AgentUserName + 'example.org'
                AND T.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.Position = P.[PA0001.PLANS_Position];

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Chats.[task.closed_at]

                -- Query
                SELECT DISTINCT
                        [Action Agent - Title by HR Ops] = COALESCE(ML.title, 'N/A')
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.Position = P.[PA0001.PLANS_Position]
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care',
                            'Demo Identity and Access Management',
                            'Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                        )
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Onboarding.[ONBOARDING_TASK_PROVIDER], [TMS_action_end_date], [TMS_Action_Code]

                -- Query
                SELECT DISTINCT
                        [Action Agent - Title by HR Ops] = COALESCE(ML.title, 'N/A')
                FROM DM.dbo.DM_Onboarding AS O
                JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(O.ONBOARDING_TASK_PROVIDER)
                AND O.TMS_action_end_date BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.Position = P.[PA0001.PLANS_Position]
                WHERE O.TMS_Action_Code IN ('TMS01')
                    AND YEAR(O.TMS_action_end_date) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                IRC.dbo.IRC_Operation_Audit.[User], [Date Created On Demo]

                -- Query
                SELECT DISTINCT
                        [Action Agent - Title by HR Ops] = COALESCE(ML.title, 'N/A')
                FROM IRC.dbo.IRC_Operation_Audit AS A
                JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                                0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]))
                        = RTRIM(A.[User])
                AND A.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.Position = P.[PA0001.PLANS_Position]
                WHERE A.[BA_code] = '1950'
                    AND YEAR(A.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Action Agent - Title by SAP ================================================================
.. =====================================================================================================

.. colref-detail:: prod_Action_Agent_Title_by_SAP
    :title: Action Agent - Title by SAP

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Title by SAP] =
                        COALESCE(P.[HRP1001.SOBID_ID of Related Object], 'N/A')
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[task.active] = 'false'
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1
                    AND P.[HRP1001.SUBTY_Subtype:T777U.SUTXT_Subtype Text] = 'Holder';

                -- Stores SAP position SOBID_ID for Holder; title text not available in DM_Person.

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]

                -- Query
                WITH last_park AS (
                    SELECT
                        M.[task.number] AS CaseNumber,
                        M.[shc_case.u_parked_at] AS ParkedAt,
                        M.[shc_case.u_parked_by:sys_user.user_name] AS ParkedByUserName,
                        ROW_NUMBER() OVER (
                            PARTITION BY M.[task.number]
                            ORDER BY M.[shc_case.u_parked_at] DESC
                        ) AS rn
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                        AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                        AND (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    )
                SELECT
                    [Action Agent - Title by SAP] =
                        COALESCE(P.[HRP1001.SOBID_ID of Related Object], 'N/A')
                FROM last_park AS L
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = L.ParkedByUserName + 'example.org'
                    AND L.ParkedAt BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE L.rn = 1
                    AND P.[HRP1001.SUBTY_Subtype:T777U.SUTXT_Subtype Text] = 'Holder';

                -- Stores SAP position SOBID_ID for Holder; title text not available in DM_Person.

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Title by SAP] =
                        COALESCE(P.[HRP1001.SOBID_ID of Related Object], 'N/A')
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                        )
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1
                    AND P.[HRP1001.SUBTY_Subtype:T777U.SUTXT_Subtype Text] = 'Holder';

                -- Stores SAP position SOBID_ID for Holder.

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_Incidents.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Title by SAP] =
                        COALESCE(P.[HRP1001.SOBID_ID of Related Object], 'N/A')
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                    = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.opened_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1
                    AND P.[HRP1001.SUBTY_Subtype:T777U.SUTXT_Subtype Text] = 'Holder';

                -- Stores SAP position SOBID_ID for Holder.

        .. tab-item:: SG- Closing SC Task by agent

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]                                     

                -- Query
                SELECT DISTINCT
                    [Action Agent - Title by SAP] =
                        COALESCE(P.[HRP1001.SOBID_ID of Related Object], 'N/A')
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                        )
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1
                    AND P.[HRP1001.SUBTY_Subtype:T777U.SUTXT_Subtype Text] = 'Holder';

                -- Stores SAP position SOBID_ID for Holder.

        .. tab-item:: SG - Closing SC Task on behalf of agent
                                
            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]      

                -- Query
                SELECT DISTINCT
                    [Action Agent - Title by SAP] =
                        COALESCE(P.[HRP1001.SOBID_ID of Related Object], 'N/A')
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                        )
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1
                    AND P.[HRP1001.SUBTY_Subtype:T777U.SUTXT_Subtype Text] = 'Holder';

                -- Stores SAP position SOBID_ID for Holder.            

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                SN.dbo.[10-task].[task.closed_at]

                -- Query
                WITH T AS (
                SELECT M.*,
                        CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                                OR M.[task.closed_by:sys_user.name] IS NULL
                            THEN M.[task.assigned_to:sys_user.user_name]
                        ELSE M.[task.closed_by:sys_user.user_name]
                        END AS AgentUserName
                FROM SN.dbo.[10-task] AS M
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.closed_at] IS NOT NULL
                )
                SELECT DISTINCT
                    [Action Agent - Title by SAP] =
                        COALESCE(P.[HRP1001.SOBID_ID of Related Object], 'N/A')
                FROM T
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = T.AgentUserName + 'example.org'
                    AND T.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[HRP1001.SUBTY_Subtype:T777U.SUTXT_Subtype Text] = 'Holder';

                -- Stores SAP position SOBID_ID for Holder.

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Chats.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Title by SAP] =
                        COALESCE(P.[HRP1001.SOBID_ID of Related Object], 'N/A')
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                        )
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1
                AND P.[HRP1001.SUBTY_Subtype:T777U.SUTXT_Subtype Text] = 'Holder';

                -- Stores SAP position SOBID_ID for Holder.

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Onboarding.[ONBOARDING_TASK_PROVIDER], [TMS_action_end_date], [TMS_Action_Code]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Title by SAP] =
                        COALESCE(P.[HRP1001.SOBID_ID of Related Object], 'N/A')
                FROM DM.dbo.DM_Onboarding AS O
                JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(O.ONBOARDING_TASK_PROVIDER)
                    AND O.TMS_action_end_date BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE O.TMS_Action_Code IN ('TMS01')
                    AND YEAR(O.TMS_action_end_date) >= YEAR(GETDATE()) - 1
                    AND P.[HRP1001.SUBTY_Subtype:T777U.SUTXT_Subtype Text] = 'Holder';

                -- Stores SAP position SOBID_ID for Holder.

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    IRC.dbo.IRC_Operation_Audit.[User], [Date Created On Demo], [BA_code]
                
                -- Query
                SELECT DISTINCT
                    [Action Agent - Title by SAP] =
                        COALESCE(P.[HRP1001.SOBID_ID of Related Object], 'N/A')
                FROM IRC.dbo.IRC_Operation_Audit AS A
                JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                                    0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]))
                        = RTRIM(A.[User])
                    AND A.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE A.[BA_code] = '1950'
                    AND YEAR(A.[Date Created On Demo]) >= YEAR(GETDATE()) - 1
                    AND P.[HRP1001.SUBTY_Subtype:T777U.SUTXT_Subtype Text] = 'Holder';

                -- Stores SAP position SOBID_ID for Holder.

.. =====================================================================================================
.. ======== Action Agent - Level by HR OPS =============================================================
.. =====================================================================================================

.. colref-detail:: prod_Action_Agent_Level_by_HR_OPS
    :title: Action Agent - Level by HR OPS

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Level by HR Ops] = ML.[Level]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE M.[task.active] = 'false'
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND (M.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information'
                    )
                    OR M.[shc_case.u_type.sys_choice] IS NULL)
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Populated from MANUAL.Master_List_of_FT_Posts.[Level] via DM_Person position.
                -- Effective-dated on the action timestamp.

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]

                -- Query
                WITH last_park AS (
                    SELECT
                        M.[task.number] AS CaseNumber,
                        M.[shc_case.u_parked_at] AS ParkedAt,
                        M.[shc_case.u_parked_by:sys_user.user_name] AS ParkedByUserName,
                        ROW_NUMBER() OVER (PARTITION BY M.[task.number]
                                            ORDER BY M.[shc_case.u_parked_at] DESC) AS rn
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                        AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                        AND (M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL)
                )
                SELECT
                    [Action Agent - Level by HR Ops] = ML.[Level]
                FROM last_park AS L
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = L.ParkedByUserName + 'example.org'
                    AND L.ParkedAt BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE L.rn = 1;

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Level by HR Ops] = ML.[Level]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE (M.[task.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                    )
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Level by HR Ops] = ML.[Level]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.opened_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;    

        .. tab-item:: SG - Closing SC Task by agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Level by HR Ops] = ML.[Level]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                    )
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf of agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Level by HR Ops] = ML.[Level]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                    )
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN.dbo.[10-task].[task.closed_at]

                -- Query
                WITH T AS (
                    SELECT M.*,
                            CASE
                            WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                                    OR M.[task.closed_by:sys_user.name] IS NULL
                                    THEN M.[task.assigned_to:sys_user.user_name]
                            ELSE M.[task.closed_by:sys_user.user_name]
                            END AS AgentUserName
                    FROM SN.dbo.[10-task] AS M
                    WHERE M.[task.number] LIKE 'TRV%'
                        AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                        AND M.[task.closed_at] IS NOT NULL
                )
                SELECT DISTINCT
                    [Action Agent - Level by HR Ops] = ML.[Level]
                FROM T
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = T.AgentUserName + 'example.org'
                    AND T.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position];

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Chats.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Level by HR Ops] = ML.[Level]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE (M.[task.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                    )
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Onboarding.[ONBOARDING_TASK_PROVIDER], [TMS_action_end_date], [TMS_Action_Code]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Level by HR Ops] = ML.[Level]
                FROM DM.dbo.DM_Onboarding AS O
                JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(O.ONBOARDING_TASK_PROVIDER)
                    AND O.TMS_action_end_date BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE O.TMS_Action_Code IN ('TMS01')
                    AND YEAR(O.TMS_action_end_date) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    IRC.dbo.IRC_Operation_Audit.[User], [Date Created On Demo], [BA_code]

                -- Query
                SELECT DISTINCT
                    [Action Agent - Level by HR Ops] = ML.[Level]
                FROM IRC.dbo.IRC_Operation_Audit AS A
                JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]))
                            = RTRIM(A.[User])
                    AND A.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.Master_List_of_FT_Posts AS ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE A.[BA_code] = '1950'
                    AND YEAR(A.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Action Agent - Level by SAP ================================================================
.. =====================================================================================================

.. colref-detail:: prod_Action_Agent_Level_SAP
    :title: Action Agent - Level by SAP

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    C.[task.number]                  AS [Case Number],
                    C.[task.closed_at]               AS [Action DateTime],
                    P.[PA0008.TRFGR_Pay Scale Group] AS [Action Agent - Level by SAP]
                FROM DM.dbo.DM_SG_Cases C
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = C.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND C.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (C.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information'
                    ) OR C.[shc_case.u_type.sys_choice] IS NULL)
                    AND C.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND C.[task.active] = 'false'
                    AND YEAR(C.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- DM_Productivity reads this value from #TEMP_Hybrid.[Level - SAP - PA0008.TRFG],
                -- which is sourced from DM_Person.[PA0008.TRFGR_Pay Scale Group] on the action date.

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]

                -- Query
                WITH LastPark AS (
                    SELECT  C.[task.number],
                            C.[shc_case.u_parked_at],
                            C.[shc_case.u_parked_by:sys_user.user_name],
                            ROW_NUMBER() OVER (
                            PARTITION BY C.[task.number]
                            ORDER BY C.[shc_case.u_parked_at] DESC
                            ) rn
                    FROM DM.dbo.DM_SG_Cases C
                    WHERE C.[task.active] = 'false'
                    AND NULLIF(C.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(C.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                )
                SELECT L.[task.number]                  AS [Case Number],
                       L.[shc_case.u_parked_at]         AS [Action DateTime],
                       P.[PA0008.TRFGR_Pay Scale Group] AS [Action Agent - Level by SAP]
                FROM LastPark L
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = L.[shc_case.u_parked_by:sys_user.user_name] + 'example.org'
                    AND L.[shc_case.u_parked_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE L.rn = 1;

                -- SP keeps only the latest parking per case;
                -- the level is looked up for that parked_by and parked_at.
    
        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    M.[task.number]                  AS [Case Number],
                    M.[task.closed_at]               AS [Action DateTime],
                    P.[PA0008.TRFGR_Pay Scale Group] AS [Action Agent - Level by SAP]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Same effective-dated lookup to DM_Person;
                -- assignment group or org unit filters align with the stored procedure’s dataset.

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    M.[task.number]                  AS [Case Number],
                    M.[task.opened_at]               AS [Action DateTime],
                    P.[PA0008.TRFGR_Pay Scale Group] AS [Action Agent - Level by SAP]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.opened_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

                -- Although #Temp_IP in the SP uses closed_at for person scoping on creates,
                -- the level ultimately comes from DM_Person on the action date in #TEMP_Hybrid.    

        .. tab-item:: SG - Closing SC Task by agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]           AS [Case Number],
                    M.[task-SCTASK.closed_at]        AS [Action DateTime],
                    P.[PA0008.TRFGR_Pay Scale Group] AS [Action Agent - Level by SAP]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE  (M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Enforced by equality of assigned_to and closed_by;
                -- level is read from DM_Person at the closure date.

        .. tab-item:: SG - Closing SC Task on behalf of agent
                                
            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]           AS [Case Number],
                    M.[task-SCTASK.closed_at]        AS [Action DateTime],
                    P.[PA0008.TRFGR_Pay Scale Group] AS [Action Agent - Level by SAP]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                        ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes Enforced by inequality of assigned_to and closed_by;
                   
        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN.dbo.[10-task].[task.closed_at]            

                -- Query
                SELECT DISTINCT
                    M.[task.number]                        AS [Case Number],
                    M.[task.closed_at]                     AS [Action DateTime],
                    P.[PA0008.TRFGR_Pay Scale Group]       AS [Action Agent - Level by SAP]
                FROM SN.dbo.[10-task] M
                CROSS APPLY (VALUES (
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                        OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name]
                        ELSE M.[task.closed_by:sys_user.user_name]
                    END
                )) AS A(AgentLogin)
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = A.AgentLogin + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND EXISTS (
                        SELECT 1
                        FROM   SN.dbo.[10-task_sla] S
                        WHERE  S.[task_sla.task.value] = M.[task.sys_id]
                        AND  S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                    )
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1
                    AND M.[task.sys_created_on] >= '2024-03-11';

                -- Technical Notes When the integration user closes the case,
                -- the procedure treats the assigned_to user as the action agent before the level lookup.

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Chats.[task.closed_at]            

                -- Query
                SELECT DISTINCT
                    M.[task.number]                  AS [Case Number],
                    M.[task.closed_at]               AS [Action DateTime],
                    P.[PA0008.TRFGR_Pay Scale Group] AS [Action Agent - Level by SAP]
                FROM DM.dbo.DM_Chats M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes Chats are treated as closures;
                -- the level is taken from DM_Person for the closer on the closure date.

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Onboarding.[TMS_action_end_date]
                    DM.dbo.DM_Onboarding.[ONBOARDING_TASK_PROVIDER]           

                -- Query
                SELECT DISTINCT
                    O.[Requisition Action]           AS [Case Number],
                    O.[TMS_action_end_date]          AS [Action DateTime],
                    P.[PA0008.TRFGR_Pay Scale Group] AS [Action Agent - Level by SAP]
                FROM DM.dbo.DM_Onboarding O
                JOIN DM.dbo.DM_Person P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(O.[ONBOARDING_TASK_PROVIDER])
                    AND O.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE O.[TMS_Action_Code] IN ('TMS01')
                    AND O.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND YEAR(O.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes For TMS, the agent is resolved via provider name to DM_Person;
                -- level is P.[PA0008.TRFGR_Pay Scale Group] on the task end date.

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    IRC.dbo.IRC_Operation_Audit.[User]
                    IRC.dbo.IRC_Operation_Audit.[Date Created On Demo]            

                -- Query
                SELECT DISTINCT
                    CAST(I.[ID] AS NVARCHAR)         AS [Case Number],
                    I.[Datetime Created On Demo]     AS [Action DateTime],
                    P.[PA0008.TRFGR_Pay Scale Group] AS [Action Agent - Level by SAP]
                FROM IRC.dbo.IRC_Operation_Audit I
                JOIN DM.dbo.DM_Person P
                        ON SUBSTRING(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                            1, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) - 1)
                            = RTRIM(I.[User])
                    AND I.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE I.[BA_code] = '1950'
                    AND YEAR(I.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;


.. =====================================================================================================
.. ======== Action Agent - Section by HR Ops ===========================================================
.. =====================================================================================================

.. colref-detail:: prod_Action_Agent_Section_by_HR_Ops
    :title: Action Agent - Section by HR Ops

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    C.[task.number]     AS [Case Number],
                    C.[task.closed_at]  AS [Action DateTime],
                    ML.[Section ]       AS [Action Agent - Section by HR Ops]
                FROM DM.dbo.DM_SG_Cases C
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = C.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND C.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE (C.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information'
                    ) OR C.[shc_case.u_type.sys_choice] IS NULL)
                    AND C.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND C.[task.active] = 'false'
                    AND YEAR(C.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Section comes from Master_List_of_FT_Posts
                -- via the agent's Position in DM_Person as of the action date;
                -- the procedure updates #TEMP_Hybrid.[Section - HR Ops] from this mapping
                -- and inserts it into DM_Productivity.[Action Agent - Section by HR Ops].

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]                    

                -- Query
                WITH LastPark AS (
                    SELECT C.[task.number],
                           C.[shc_case.u_parked_at],
                           C.[shc_case.u_parked_by:sys_user.user_name],
                           ROW_NUMBER() OVER (
                            PARTITION BY C.[task.number]
                            ORDER BY C.[shc_case.u_parked_at] DESC
                            ) rn
                    FROM DM.dbo.DM_SG_Cases C
                    WHERE C.[task.active] = 'false'
                        AND NULLIF(C.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                        AND YEAR(C.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                )
                SELECT  L.[task.number]          AS [Case Number],
                        L.[shc_case.u_parked_at] AS [Action DateTime],
                        ML.[Section ]            AS [Action Agent - Section by HR Ops]
                FROM LastPark L
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = L.[shc_case.u_parked_by:sys_user.user_name] + 'example.org'
                    AND L.[shc_case.u_parked_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE L.rn = 1;

                -- The procedure retains the last park per case;
                -- Section is resolved for that parked_by and parked_at via Position to Master_List_of_FT_Posts.

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.closed_at]                    

                -- Query
                SELECT DISTINCT
                    M.[task.number]    AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    ML.[Section ]      AS [Action Agent - Section by HR Ops]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Section is derived through Position on the action date;
                -- the same filters as the stored procedure scope the incident dataset.

        .. tab-item:: SG- Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.opened_at]                    

                -- Query
                SELECT DISTINCT
                    M.[task.number]    AS [Case Number],
                    M.[task.opened_at] AS [Action DateTime],
                    ML.[Section ]      AS [Action Agent - Section by HR Ops]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.opened_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

                -- The action date is opened_at;
                -- Section is read via Position at that date, then inserted into DM_Productivity.

        .. tab-item:: SG - Closing SC Task by agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]                    

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]    AS [Case Number],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    ML.[Section ]             AS [Action Agent - Section by HR Ops]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Requires assigned_to = closed_by;
                -- Section follows Position mapping at closed_at.

        .. tab-item:: SG - Closing SC Task on behalf of agent
                                
            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]                    

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]    AS [Case Number],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    ML.[Section ]             AS [Action Agent - Section by HR Ops]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Requires assigned_to <> closed_by;
                -- Section is mapped by Position at the action date.    

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN.dbo.[10-task].[task.closed_at]            

                -- Query
                SELECT DISTINCT
                    M.[task.number]    AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    ML.[Section ]      AS [Action Agent - Section by HR Ops]
                FROM SN.dbo.[10-task] M
                CROSS APPLY (VALUES (
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                            OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name]
                        ELSE M.[task.closed_by:sys_user.user_name]
                    END
                )) AS A(AgentLogin)
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = A.AgentLogin + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND EXISTS (
                        SELECT 1
                        FROM SN.dbo.[10-task_sla] S
                        WHERE S.[task_sla.task.value] = M.[task.sys_id]
                        AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                        )
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1
                    AND M.[task.sys_created_on] >= '2024-03-11';

                -- If the integration user closed the travel case,
                -- the agent is taken as assigned_to;
                -- Section then follows Position→Master_List_of_FT_Posts at closed_at.

        .. tab-item:: SG - Chats Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Chats.[task.closed_at]            

                -- Query
                SELECT DISTINCT
                    M.[task.number]    AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    ML.[Section ]      AS [Action Agent - Section by HR Ops]
                FROM DM.dbo.DM_Chats M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Chats are treated as closures;
                -- Section derives from Position mapping at closed_at and is inserted into DM_Productivity.

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Onboarding.[TMS_action_end_date]
                    DM.dbo.DM_Onboarding.[ONBOARDING_TASK_PROVIDER]            

                -- Query
                SELECT DISTINCT
                    O.[Requisition Action]  AS [Case Number],
                    O.[TMS_action_end_date] AS [Action DateTime],
                    ML.[Section ]           AS [Action Agent - Section by HR Ops]
                FROM DM.dbo.DM_Onboarding O
                JOIN DM.dbo.DM_Person P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(O.[ONBOARDING_TASK_PROVIDER])
                    AND O.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE O.[TMS_Action_Code] IN ('TMS01')
                    AND O.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND YEAR(O.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

                -- Onboarding resolves the agent by provider name to DM_Person;
                -- Section then comes from Position→Master_List_of_FT_Posts on TMS_action_end_date.

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    IRC.dbo.IRC_Operation_Audit.[User]
                    IRC.dbo.IRC_Operation_Audit.[Date Created On Demo]
                
                -- Query
                SELECT DISTINCT
                    CAST(I.[ID] AS NVARCHAR)     AS [Case Number],
                    I.[Datetime Created On Demo] AS [Action DateTime],
                    ML.[Section ]                AS [Action Agent - Section by HR Ops]
                FROM IRC.dbo.IRC_Operation_Audit I
                JOIN DM.dbo.DM_Person P
                    ON SUBSTRING(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        1, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) - 1)
                            = RTRIM(I.[User])
                    AND I.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE I.[BA_code] = '1950'
                    AND YEAR(I.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

                -- IRC matches USRID prefix to [User];
                -- Section then derives from the Position mapping on the action date,
                -- as per #TEMP_Hybrid update, and is inserted into DM_Productivity.

.. =====================================================================================================
.. ======== Action Agent - Stream by HR Ops ============================================================
.. =====================================================================================================

.. colref-detail:: prod_Action_Agent_Stream_by_HR_Ops
    :title: Action Agent - Stream by HR Ops

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    C.[task.number]    AS [Case Number],
                    C.[task.closed_at] AS [Action DateTime],
                    ML.[Stream]        AS [Action Agent - Stream by HR Ops]
                FROM DM.dbo.DM_SG_Cases C
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = C.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND C.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE (C.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information'
                    ) OR C.[shc_case.u_type.sys_choice] IS NULL)
                    AND C.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND C.[task.active] = 'false'
                    AND YEAR(C.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- The procedure populates #TEMP_Hybrid.[Stream - HR Ops]
                -- from Master_List_of_FT_Posts via the agent's Position effective on the action date,
                -- then inserts it into DM_Productivity.[Action Agent - Stream by HR Ops].

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]

                -- Query
                WITH LastPark AS (
                    SELECT  C.[task.number],
                            C.[shc_case.u_parked_at],
                            C.[shc_case.u_parked_by:sys_user.user_name],
                            ROW_NUMBER() OVER (
                            PARTITION BY C.[task.number]
                            ORDER BY C.[shc_case.u_parked_at] DESC
                            ) rn
                    FROM DM.dbo.DM_SG_Cases C
                    WHERE C.[task.active] = 'false'
                    AND NULLIF(C.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(C.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                )
                SELECT L.[task.number]          AS [Case Number],
                       L.[shc_case.u_parked_at] AS [Action DateTime],
                       ML.[Stream]              AS [Action Agent - Stream by HR Ops]
                FROM LastPark L
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = L.[shc_case.u_parked_by:sys_user.user_name] + 'example.org'
                    AND L.[shc_case.u_parked_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE L.rn = 1;

                -- For parking, the SP keeps only the last park per case;
                -- stream is resolved for the parking agent at that timestamp.

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.closed_at]
                
                -- Query
                SELECT DISTINCT
                    M.[task.number]    AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    ML.[Stream]        AS [Action Agent - Stream by HR Ops]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Stream is taken from Master_List_of_FT_Posts,
                -- keyed by Position for the closer on the closure date.

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source_Field
                    DM.dbo.DM_SG_Incidents.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    M.[task.number]    AS [Case Number],
                    M.[task.opened_at] AS [Action DateTime],
                    ML.[Stream]        AS [Action Agent - Stream by HR Ops]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.opened_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

                -- Although the SP scopes a helper table on closed_at elsewhere,
                -- the stream finally comes from Position→Master_List_of_FT_Posts at the action date.

        .. tab-item:: SG - Closing SC Task by agent

            .. code-block:: tsql

                -- Source Field(s)    
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]                    

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]    AS [Case Number],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    ML.[Stream]               AS [Action Agent - Stream by HR Ops]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Requires assigned_to = closed_by;
                -- stream follows Position→Master_List_of_FT_Posts at closed_at.

        .. tab-item:: SG - Closing SC Task on behalf of agent
                                
            .. code-block:: tsql

                -- Source Field(s)       
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]    AS [Case Number],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    ML.[Stream]               AS [Action Agent - Stream by HR Ops]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source_Field
                    SN.dbo.[10-task].[task.closed_at]            

                -- Query
                SELECT DISTINCT
                    M.[task.number]    AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    ML.[Stream]        AS [Action Agent - Stream by HR Ops]
                FROM SN.dbo.[10-task] M
                CROSS APPLY (VALUES (
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                            OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name]
                        ELSE     M.[task.closed_by:sys_user.user_name]
                    END
                )) AS A(AgentLogin)
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = A.AgentLogin + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND EXISTS (
                            SELECT 1
                            FROM   SN.dbo.[10-task_sla] S
                            WHERE  S.[task_sla.task.value] = M.[task.sys_id]
                            AND  S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                        )
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1
                    AND M.[task.sys_created_on] >= '2024-03-11';

                -- SP substitutes the integration user with assigned_to
                -- before resolving stream from Position→Master_List_of_FT_Posts at closed_at.

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source_Field
                    DM.dbo.DM_Chats.[task.closed_at]            

                -- Query
                SELECT DISTINCT
                    M.[task.number]    AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    ML.[Stream]        AS [Action Agent - Stream by HR Ops]
                FROM DM.dbo.DM_Chats M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Stream is taken from the Position of the closer,
                -- mapping at closed_at and written to DM_Productivity.

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source_Field
                    DM.dbo.DM_Onboarding.[TMS_action_end_date]
                    DM.dbo.DM_Onboarding.[ONBOARDING_TASK_PROVIDER]            

                -- Query
                SELECT DISTINCT
                    O.[Requisition Action]  AS [Case Number],
                    O.[TMS_action_end_date] AS [Action DateTime],
                    ML.[Stream]             AS [Action Agent - Stream by HR Ops]
                FROM DM.dbo.DM_Onboarding O
                JOIN DM.dbo.DM_Person P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(O.[ONBOARDING_TASK_PROVIDER])
                    AND O.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE O.[TMS_Action_Code] IN ('TMS01')
                    AND O.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND YEAR(O.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

                -- The agent resolves by provider name to DM_Person;
                -- stream then comes from Master_List_of_FT_Posts at the task end date.

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source_Field
                    IRC.dbo.IRC_Operation_Audit.[User]
                    IRC.dbo.IRC_Operation_Audit.[Date Created On Demo]           

                -- Query
                SELECT DISTINCT
                    CAST(I.[ID] AS NVARCHAR)     AS [Case Number],
                    I.[Datetime Created On Demo] AS [Action DateTime],
                    ML.[Stream]                  AS [Action Agent - Stream by HR Ops]
                FROM IRC.dbo.IRC_Operation_Audit I
                JOIN DM.dbo.DM_Person P
                    ON SUBSTRING(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        1, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) - 1)
                            = RTRIM(I.[User])
                    AND I.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN MANUAL.dbo.[Master_List_of_FT_Posts] ML
                    ON ML.[Position] = P.[PA0001.PLANS_Position]
                WHERE I.[BA_code] = '1950'
                    AND YEAR(I.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

                -- IRC joins User to the USRID prefix,
                -- then maps Position→Master_List_of_FT_Posts to get stream on the action date.

.. =====================================================================================================
.. ======== Action Description =========================================================================
.. =====================================================================================================

.. colref-detail:: prod_Action_Description
    :title: Action Description

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field N/A
                
                -- Query
                SELECT DISTINCT
                    C.[task.number]    AS [Case Number],
                    C.[task.closed_at] AS [Action DateTime],
                    'Case closing'     AS [Action Description]
                FROM DM.dbo.DM_SG_Cases C
                WHERE (C.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information'
                    )
                    OR C.[shc_case.u_type.sys_choice] IS NULL)
                    AND C.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND C.[task.active] = 'false'
                    AND YEAR(C.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Value is a constant label introduced in the first INSERT into #TEMP_Prod from DM_SG_Cases;
                -- it flows to #TEMP_Hybrid and then to DM_Productivity. Days with no action are later set to No activity.

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field N/A

                -- Query
                WITH LastPark AS (
                SELECT  C.[task.number],
                        C.[shc_case.u_parked_at],
                        ROW_NUMBER() OVER (
                            PARTITION BY C.[task.number]
                            ORDER BY C.[shc_case.u_parked_at] DESC
                        ) rn
                FROM DM.dbo.DM_SG_Cases C
                WHERE C.[task.active] = 'false'
                    AND NULLIF(C.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(C.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                )
                SELECT L.[task.number]          AS [Case Number],
                       L.[shc_case.u_parked_at] AS [Action DateTime],
                       'Case parking'           AS [Action Description]
                FROM LastPark L
                WHERE L.rn = 1;

                -- The procedure keeps only the latest park per case (ROW_NUMBER filter)
                -- and tags it with the constant Case parking.

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field N/A

                -- Query
                SELECT DISTINCT
                    M.[task.number]     AS [Case Number],
                    M.[task.closed_at]  AS [Action DateTime],
                    'Closing incident'  AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Label is a constant;
                -- the join and filters scope which incidents are counted

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field N/A 

                -- Query
                SELECT DISTINCT
                    M.[task.number]     AS [Case Number],
                    M.[task.opened_at]  AS [Action DateTime],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.opened_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

                -- The label is constant;
                -- in the SP, a helper table is used elsewhere, but the final description comes from this insert.

        .. tab-item:: SG - Closing SC Task by agent

            .. code-block:: tsql

                -- Source Field N/A

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]    AS [Case Number],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    'Closing SCT by Agent'    AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE ((M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics'))
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Label is a constant;
                -- the equality condition selects by agent rows in line with the procedure.

        .. tab-item:: SG - Closing SC Task on behalf of agent
                                
            .. code-block:: tsql

                -- Source Field N/A

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]    AS [Case Number],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    'Closing SCT on behalf of Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE ((M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics'))
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Label is a constant

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field N/A

                -- Query
                SELECT DISTINCT
                    M.[task.number]     AS [Case Number],
                    M.[task.closed_at]  AS [Action DateTime],
                    'Case closing'      AS [Action Description]
                FROM SN.dbo.[10-task] M
                JOIN SN.dbo.[10-task_sla] S
                    ON S.[task_sla.task.value] = M.[task.sys_id]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1
                    AND M.[task.sys_created_on] >= '2024-03-11';

                -- Label is a constant

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field N/A
                
                -- Query
                SELECT DISTINCT
                    M.[task.number]     AS [Case Number],
                    M.[task.closed_at]  AS [Action DateTime],
                    'Chat entries'      AS [Action Description]
                FROM DM.dbo.DM_Chats M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE ((M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics'))
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Label is a constant

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field N/A

                -- Query
                SELECT DISTINCT
                    O.[Requisition Action]   AS [Case Number],
                    O.[TMS_action_end_date]  AS [Action DateTime],
                    'Case closing'           AS [Action Description]
                FROM DM.dbo.DM_Onboarding O
                WHERE O.[TMS_Action_Code] IN ('TMS01')
                    AND O.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND YEAR(O.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

                -- Label is a constant

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field
                    IRC.dbo.IRC_Operation_Audit.[Operation]

                -- Query
                SELECT DISTINCT
                    CAST(I.[ID] AS NVARCHAR)          AS [Case Number],
                    I.[Datetime Created On Demo]      AS [Action DateTime],
                    I.[Operation]                     AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit I
                WHERE I.[BA_code] = '1950'
                    AND YEAR(I.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Assignment Group ===========================================================================
.. =====================================================================================================

.. colref-detail:: prod_Assignment_Group
    :title: Assignment Group

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Cases.[task.assignment_group:sys_user_group.name]

                -- Query
                SELECT DISTINCT
                    C.[task.number]                               AS [Case Number],
                    C.[task.closed_at]                            AS [Action DateTime],
                    C.[task.assignment_group:sys_user_group.name] AS [Assignment Group]
                FROM DM.dbo.DM_SG_Cases C
                WHERE (C.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information'
                    )
                    OR C.[shc_case.u_type.sys_choice] IS NULL)
                    AND C.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND C.[task.active] = 'false'
                    AND YEAR(C.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- SP writes the field above directly into #TEMP_Prod,
                -- then carries it unchanged into #TEMP_Hybrid and DM_Productivity.

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Cases.[task.assignment_group:sys_user_group.name]

                -- Query
                WITH LastPark AS (
                SELECT C.[task.number],
                       C.[shc_case.u_parked_at],
                       ROW_NUMBER() OVER (
                           PARTITION BY C.[task.number]
                           ORDER BY C.[shc_case.u_parked_at] DESC
                       ) rn
                FROM DM.dbo.DM_SG_Cases C
                WHERE C.[task.active] = 'false'
                    AND NULLIF(C.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(C.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                )
                SELECT P.[task.number]                               AS [Case Number],
                       P.[shc_case.u_parked_at]                      AS [Action DateTime],
                       C.[task.assignment_group:sys_user_group.name] AS [Assignment Group]
                FROM LastPark P
                JOIN DM.dbo.DM_SG_Cases C
                    ON C.[task.number] = P.[task.number]
                    AND C.[shc_case.u_parked_at] = P.[shc_case.u_parked_at]
                WHERE P.rn = 1;

                -- SP selects the latest park per case
                -- and uses the assignment group from that same row.

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Incidents.[task.assignment_group:sys_user_group.name]  

                -- Query
                SELECT DISTINCT
                    M.[task.number]                               AS [Case Number],
                    M.[task.closed_at]                            AS [Action DateTime],
                    M.[task.assignment_group:sys_user_group.name] AS [Assignment Group]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Insert #3 copies the incident's assignment group directly into #TEMP_Prod;
                -- joins only scope the dataset.

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Incidents.[task.assignment_group:sys_user_group.name]

                -- Query
                SELECT DISTINCT
                    M.[task.number]                               AS [Case Number],
                    M.[task.opened_at]                            AS [Action DateTime],
                    M.[task.assignment_group:sys_user_group.name] AS [Assignment Group]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.opened_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

                -- Insert #4 copies the assignment group for creations;
                -- the DM_Person join is for the org-unit filter only.

        .. tab-item:: SG - Closing SC Task by agent

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.assignment_group:sys_user_group.name]

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]                               AS [Case Number],
                    M.[task-SCTASK.closed_at]                            AS [Action DateTime],
                    M.[task-SCTASK.assignment_group:sys_user_group.name] AS [Assignment Group]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Insert #5 copies the group;
                -- equality enforces by agent. Value is not transformed.

        .. tab-item:: SG - Closing SC Task on behalf of agent
                                
            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.assignment_group:sys_user_group.name]

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]                               AS [Case Number],
                    M.[task-SCTASK.closed_at]                            AS [Action DateTime],
                    M.[task-SCTASK.assignment_group:sys_user_group.name] AS [Assignment Group]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field
                    SN.dbo.[10-task].[task.assignment_group:sys_user_group.name]

                -- Query
                SELECT DISTINCT
                    M.[task.number]                               AS [Case Number],
                    M.[task.closed_at]                            AS [Action DateTime],
                    M.[task.assignment_group:sys_user_group.name] AS [Assignment Group]
                FROM SN.dbo.[10-task] M
                JOIN SN.dbo.[10-task_sla] S
                    ON S.[task_sla.task.value] = M.[task.sys_id]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1
                    AND M.[task.sys_created_on] >= '2024-03-11';

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_Chats.[task.assignment_group:sys_user_group.name]

                -- Query
                SELECT DISTINCT
                    M.[task.number]                               AS [Case Number],
                    M.[task.closed_at]                            AS [Action DateTime],
                    M.[task.assignment_group:sys_user_group.name] AS [Assignment Group]
                FROM DM.dbo.DM_Chats M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field N/A
                
                -- Query
                SELECT DISTINCT
                    O.[Requisition Action]   AS [Case Number],
                    O.[TMS_action_end_date]  AS [Action DateTime],
                    'HR Onboarding'          AS [Assignment Group]
                FROM DM.dbo.DM_Onboarding O
                WHERE O.[TMS_Action_Code] IN ('TMS01')
                    AND O.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND YEAR(O.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

                -- Literal HR Onboarding hard-coded.

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field N/A
                
                -- Query
                SELECT DISTINCT
                    CAST(I.[ID] AS NVARCHAR)  AS [Case Number],
                    I.[Datetime Created On Demo] AS [Action DateTime],
                    'Customer Care'           AS [Assignment Group]
                FROM IRC.dbo.IRC_Operation_Audit I
                WHERE I.[BA_code] = '1950'
                    AND YEAR(I.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

                -- Literal Customer Care hard-coded.

.. =====================================================================================================
.. ======== Assigned to - Name =========================================================================
.. =====================================================================================================

.. colref-detail:: prod_Assigned_to_Name
    :title: Assigned to - Name

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field N/A

                -- Query
                SELECT DISTINCT
                    C.[task.number]    AS [Case Number],
                    C.[task.closed_at] AS [Action DateTime],
                    'Case closing'     AS [Action Description]
                FROM DM.dbo.DM_SG_Cases C
                WHERE (C.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information'
                    )
                    OR C.[shc_case.u_type.sys_choice] IS NULL)
                    AND C.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND C.[task.active] = 'false'
                    AND YEAR(C.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Literal Case closing hard-coded.                    
                -- Days with no action are later set to No activity.

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field N/A

                -- Query
                WITH LastPark AS (
                    SELECT C.[task.number],
                        C.[shc_case.u_parked_at],
                        ROW_NUMBER() OVER (
                            PARTITION BY C.[task.number]
                            ORDER BY C.[shc_case.u_parked_at] DESC
                        ) rn
                    FROM DM.dbo.DM_SG_Cases C
                    WHERE C.[task.active] = 'false'
                        AND NULLIF(C.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                        AND YEAR(C.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                )
                SELECT L.[task.number]          AS [Case Number],
                       L.[shc_case.u_parked_at] AS [Action DateTime],
                       'Case parking'           AS [Action Description]
                FROM LastPark L
                WHERE L.rn = 1;

                -- Literal Case parking set for the last parked event per case.

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field N/A

                -- Query
                SELECT DISTINCT
                    M.[task.number]    AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    'Closing incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Label is a constant.                   

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field N/A          

                -- Query
                SELECT DISTINCT
                    M.[task.number]     AS [Case Number],
                    M.[task.opened_at]  AS [Action DateTime],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.opened_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

                -- The label is constant.

        .. tab-item:: SG - Closing SC Task by agent

            .. code-block:: tsql

                -- Source Field N/A
                
                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]    AS [Case Number],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    'Closing SCT by Agent'    AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE ((M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics'))
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Label is constant.                   

        .. tab-item:: SG - Closing SC Task on behalf of agent
                                
            .. code-block:: tsql

                -- Source Field N/A                       

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]    AS [Case Number],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    'Closing SCT on behalf of Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE ((M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics'))
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Label is constant.

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field N/A.
            
                -- Query
                SELECT DISTINCT
                    M.[task.number]    AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    'Case closing'     AS [Action Description]
                FROM SN.dbo.[10-task] M
                JOIN SN.dbo.[10-task_sla] S
                    ON S.[task_sla.task.value] = M.[task.sys_id]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1
                    AND M.[task.sys_created_on] >= '2024-03-11';

                -- Label is a constant.          

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field N/A            

                -- Query
                SELECT DISTINCT
                    M.[task.number]    AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    'Chat entries'     AS [Action Description]
                FROM DM.dbo.DM_Chats M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE ((M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics'))
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Label is a constant.

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field N/A            
            
                -- Query
                SELECT DISTINCT
                    O.[Requisition Action]   AS [Case Number],
                    O.[TMS_action_end_date]  AS [Action DateTime],
                    'Case closing'           AS [Action Description]
                FROM DM.dbo.DM_Onboarding O
                WHERE O.[TMS_Action_Code] IN ('TMS01')
                    AND O.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND YEAR(O.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

                -- Label is a constant.

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field
                    IRC.dbo.IRC_Operation_Audit.[Operation] (used directly as Action Description)
            
                -- Query
                SELECT DISTINCT
                    CAST(I.[ID] AS NVARCHAR)     AS [Case Number],
                    I.[Datetime Created On Demo] AS [Action DateTime],
                    I.[Operation]                AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit I
                WHERE I.[BA_code] = '1950'
                    AND YEAR(I.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Assigned to - Email ========================================================================
.. =====================================================================================================

.. colref-detail:: prod_Assigned_to_Email
    :title: Assigned to - Email

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Cases.[task.assigned_to:sys_user.user_name] + 'example.org'
                
                -- Query
                SELECT DISTINCT
                    C.[task.number]    AS [Case Number],
                    C.[task.closed_at] AS [Action DateTime],
                    C.[task.assigned_to:sys_user.user_name] + 'example.org' AS [Assigned to - Email]
                FROM DM.dbo.DM_SG_Cases C
                WHERE (C.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information'
                    ) OR C.[shc_case.u_type.sys_choice] IS NULL)
                    AND C.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND C.[task.active] = 'false'
                    AND YEAR(C.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Cases.[task.assigned_to:sys_user.user_name] + 'example.org'
                
                -- Query
                WITH LastPark AS (
                    SELECT  C.[task.number],
                            C.[shc_case.u_parked_at],
                            ROW_NUMBER() OVER (
                                PARTITION BY C.[task.number]
                                ORDER BY C.[shc_case.u_parked_at] DESC
                            ) rn
                    FROM DM.dbo.DM_SG_Cases C
                    WHERE C.[task.active] = 'false'
                        AND NULLIF(C.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                        AND YEAR(C.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                )
                SELECT P.[task.number] AS [Case Number],
                       P.[shc_case.u_parked_at] AS [Action DateTime],
                       C.[task.assigned_to:sys_user.user_name] + 'example.org' AS [Assigned to - Email]
                FROM LastPark P
                JOIN DM.dbo.DM_SG_Cases C
                    ON C.[task.number] = P.[task.number]
                    AND C.[shc_case.u_parked_at] = P.[shc_case.u_parked_at]
                WHERE P.rn = 1; 

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Incidents.[task.assigned_to:sys_user.user_name] + 'example.org'

                -- Query
                SELECT DISTINCT
                    M.[task.number]      AS [Case Number],
                    M.[task.closed_at]   AS [Action DateTime],
                    M.[task.assigned_to:sys_user.user_name] + 'example.org' AS [Assigned to - Email]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;                    

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Incidents.[task.assigned_to:sys_user.user_name] + 'example.org'
                
                -- Query
                SELECT DISTINCT
                    M.[task.number]     AS [Case Number],
                    M.[task.opened_at]  AS [Action DateTime],
                    M.[task.assigned_to:sys_user.user_name] + 'example.org' AS [Assigned to - Email]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.opened_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

                -- Minor inconsistency about using CLOSED_AT for effectivity. 

        .. tab-item:: SG - Closing SC Task by agent

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.assigned_to:sys_user.user_name] + 'example.org'                    

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]     AS [Case Number],
                    M.[task-SCTASK.closed_at]  AS [Action DateTime],
                    M.[task-SCTASK.assigned_to:sys_user.user_name] + 'example.org' AS [Assigned to - Email]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;                   

        .. tab-item:: SG - Closing SC Task on behalf of agent
                                
            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.assigned_to:sys_user.user_name] + 'example.org' 

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]     AS [Case Number],
                    M.[task-SCTASK.closed_at]  AS [Action DateTime],
                    M.[task-SCTASK.assigned_to:sys_user.user_name] + 'example.org' AS [Assigned to - Email]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field
                    SN.dbo.[10-task].[task.assigned_to:sys_user.user_name] + 'example.org'

                -- Query
                SELECT DISTINCT
                    M.[task.number]     AS [Case Number],
                    M.[task.closed_at]  AS [Action DateTime],
                    M.[task.assigned_to:sys_user.user_name] + 'example.org' AS [Assigned to - Email]
                FROM SN.dbo.[10-task] M
                JOIN SN.dbo.[10-task_sla] S
                    ON S.[task_sla.task.value] = M.[task.sys_id]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Travel has special logic only for the Action Agent (integration user substitution);
                -- Data always comes from assigned_to + domain on the task.

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_Chats.[task.assigned_to:sys_user.user_name] + 'example.org'

                -- Query
                SELECT DISTINCT
                    M.[task.number]     AS [Case Number],
                    M.[task.closed_at]  AS [Action DateTime],
                    M.[task.assigned_to:sys_user.user_name] + 'example.org' AS [Assigned to - Email]
                FROM DM.dbo.DM_Chats M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Email is a direct concat from the chat row;
                -- the person join enforces scope only.

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_Onboarding.[ONBOARDING_TASK_PROVIDER], [TMS_action_end_date]

                -- Query
                SELECT DISTINCT
                    O.[Requisition Action]  AS [Case Number],
                    O.[TMS_action_end_date] AS [Action DateTime],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Assigned to - Email]
                FROM DM.dbo.DM_Onboarding O
                LEFT JOIN DM.dbo.DM_Person P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(O.[ONBOARDING_TASK_PROVIDER])
                    AND O.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE O.[TMS_Action_Code] IN ('TMS01')
                    AND O.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND YEAR(O.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql
                
                -- Source Field
                    IRC.dbo.IRC_Operation_Audit.[User]

                -- Query
                SELECT DISTINCT
                    CAST(I.[ID] AS NVARCHAR)      AS [Case Number],
                    I.[Datetime Created On Demo]  AS [Action DateTime],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Assigned to - Email]
                FROM IRC.dbo.IRC_Operation_Audit I
                LEFT JOIN DM.dbo.DM_Person P
                    ON SUBSTRING(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        1, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) - 1)
                            = RTRIM(I.[User])
                    AND I.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE I.[BA_code] = '1950'
                    AND YEAR(I.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Closed by - Name ===========================================================================
.. =====================================================================================================

.. colref-detail:: prod_Closed_by_Name
    :title: Closed by - Name

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Cases.[task.closed_by:sys_user.name]

                -- Query
                SELECT DISTINCT
                    C.[task.number]                   AS [Case Number],
                    C.[task.closed_at]                AS [Action DateTime],
                    C.[task.closed_by:sys_user.name]  AS [Closed by - Name]
                FROM DM.dbo.DM_SG_Cases C
                WHERE (C.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information')
                    OR C.[shc_case.u_type.sys_choice] IS NULL)
                    AND C.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND C.[task.active] = 'false'
                    AND YEAR(C.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Cases.[task.closed_by:sys_user.name] 

                -- Query
                WITH LastPark AS (
                    SELECT  C.[task.number],
                            C.[shc_case.u_parked_at],
                            ROW_NUMBER() OVER (
                                PARTITION BY C.[task.number]
                                ORDER BY C.[shc_case.u_parked_at] DESC
                            ) rn
                    FROM DM.dbo.DM_SG_Cases C
                    WHERE C.[task.active] = 'false'
                        AND NULLIF(C.[shc_case.u_parked_at],'1900-01-01 00:00:00.000') IS NOT NULL
                        AND YEAR(C.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                )
                SELECT P.[task.number]                    AS [Case Number],
                       P.[shc_case.u_parked_at]           AS [Action DateTime],
                       C.[task.closed_by:sys_user.name]   AS [Closed by - Name]
                FROM LastPark P
                JOIN DM.dbo.DM_SG_Cases C
                    ON C.[task.number] = P.[task.number]
                    AND C.[shc_case.u_parked_at] = P.[shc_case.u_parked_at]
                WHERE P.rn = 1; 

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Incidents.[task.closed_by:sys_user.name] 

                -- Query
                SELECT DISTINCT
                    M.[task.number]                  AS [Case Number],
                    M.[task.closed_at]               AS [Action DateTime],
                    M.[task.closed_by:sys_user.name] AS [Closed by - Name]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Incidents.[task.closed_by:sys_user.name] 

                -- Query
                SELECT DISTINCT
                    M.[task.number]                  AS [Case Number],
                    M.[task.opened_at]               AS [Action DateTime],
                    M.[task.closed_by:sys_user.name] AS [Closed by - Name]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.opened_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

                -- Minor inconsistency about using CLOSED_AT for effectivity.

        .. tab-item:: SG - Closing SC Task by agent

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_by:sys_user.name]  

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]                  AS [Case Number],
                    M.[task-SCTASK.closed_at]               AS [Action DateTime],
                    M.[task-SCTASK.closed_by:sys_user.name] AS [Closed by - Name]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf of agent

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_by:sys_user.name]

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]                  AS [Case Number],
                    M.[task-SCTASK.closed_at]               AS [Action DateTime],
                    M.[task-SCTASK.closed_by:sys_user.name] AS [Closed by - Name]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field
                    SN.dbo.[10-task].[task.closed_by:sys_user.name]           

                -- Query
                SELECT DISTINCT
                    M.[task.number]                   AS [Case Number],
                    M.[task.closed_at]                AS [Action DateTime],
                    M.[task.closed_by:sys_user.name]  AS [Closed by - Name]
                FROM SN.dbo.[10-task] M
                JOIN SN.dbo.[10-task_sla] S
                    ON S.[task_sla.task.value] = M.[task.sys_id]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_Chats.[task.closed_by:sys_user.name]

                -- Query
                SELECT DISTINCT
                    M.[task.number]                  AS [Case Number],
                    M.[task.closed_at]               AS [Action DateTime],
                    M.[task.closed_by:sys_user.name] AS [Closed by - Name]
                FROM DM.dbo.DM_Chats M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_Onboarding.[ONBOARDING_TASK_PROVIDER]

                -- Query
                SELECT DISTINCT
                    O.[Requisition Action]        AS [Case Number],
                    O.[TMS_action_end_date]       AS [Action DateTime],
                    O.[ONBOARDING_TASK_PROVIDER]  AS [Closed by - Name]
                FROM DM.dbo.DM_Onboarding O
                LEFT JOIN DM.dbo.DM_Person P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(O.[ONBOARDING_TASK_PROVIDER])
                    AND O.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE O.[TMS_Action_Code] IN ('TMS01')
                    AND O.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND YEAR(O.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field
                    IRC.dbo.IRC_Operation_Audit.[User Name]
            
                -- Query
                SELECT DISTINCT
                    CAST(I.[ID] AS NVARCHAR)  AS [Case Number],
                    I.[Datetime Created On Demo] AS [Action DateTime],
                    I.[User Name]             AS [Closed by - Name]
                FROM IRC.dbo.IRC_Operation_Audit I
                LEFT JOIN DM.dbo.DM_Person P
                    ON SUBSTRING(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        1, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) - 1)
                            = RTRIM(I.[User])
                    AND I.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE I.[BA_code] = '1950'
                    AND YEAR(I.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Closed by - Email ==========================================================================
.. =====================================================================================================

.. colref-detail:: prod_Closed_by_Email
    :title: Closed by - Email

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Cases.[task.closed_by:sys_user.user_name] + 'example.org'.
                
                -- Query
                SELECT DISTINCT
                    C.[task.number]    AS [Case Number],
                    C.[task.closed_at] AS [Action DateTime],
                    C.[task.closed_by:sys_user.user_name] + 'example.org' AS [Closed by - Email]
                FROM DM.dbo.DM_SG_Cases C
                WHERE (C.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information'
                    )
                    OR C.[shc_case.u_type.sys_choice] IS NULL)
                    AND C.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND C.[task.active] = 'false'
                    AND YEAR(C.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Cases.[task.closed_by:sys_user.user_name] + 'example.org'

                -- Query
                WITH LastPark AS (
                    SELECT C.[task.number],
                           C.[shc_case.u_parked_at],
                           ROW_NUMBER() OVER (
                               PARTITION BY C.[task.number]
                               ORDER BY C.[shc_case.u_parked_at] DESC
                           ) rn
                    FROM DM.dbo.DM_SG_Cases C
                    WHERE C.[task.active] = 'false'
                        AND NULLIF(C.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                        AND YEAR(C.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                )
                SELECT 
                    P.[task.number]           AS [Case Number],
                    P.[shc_case.u_parked_at]  AS [Action DateTime],
                    C.[task.closed_by:sys_user.user_name] + 'example.org' AS [Closed by - Email]
                FROM LastPark P
                JOIN DM.dbo.DM_SG_Cases C
                    ON C.[task.number] = P.[task.number]
                    AND C.[shc_case.u_parked_at] = P.[shc_case.u_parked_at]
                WHERE P.rn = 1; 

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Incidents.[task.closed_by:sys_user.user_name] + 'example.org' 

                -- Query
                SELECT DISTINCT
                    M.[task.number]     AS [Case Number],
                    M.[task.closed_at]  AS [Action DateTime],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Closed by - Email]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Incidents.[task.closed_by:sys_user.user_name] + 'example.org'.
                
                -- Query
                SELECT DISTINCT
                    M.[task.number]     AS [Case Number],
                    M.[task.opened_at]  AS [Action DateTime],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Closed by - Email]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.opened_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by agent

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]     AS [Case Number],
                    M.[task-SCTASK.closed_at]  AS [Action DateTime],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Closed by - Email]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1; 

        .. tab-item:: SG - Closing SC Task on behalf of agent
                                
            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'.                    

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]     AS [Case Number],
                    M.[task-SCTASK.closed_at]  AS [Action DateTime],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Closed by - Email]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field
                    SN.dbo.[10-task].[task.closed_by:sys_user.user_name] + 'example.org'

                -- Query
                SELECT DISTINCT
                    M.[task.number]    AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Closed by - Email]
                FROM SN.dbo.[10-task] M
                JOIN SN.dbo.[10-task_sla] S
                    ON S.[task_sla.task.value] = M.[task.sys_id]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_Chats.[task.closed_by:sys_user.user_name] + 'example.org'

                -- Query
                SELECT DISTINCT
                    M.[task.number]    AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Closed by - Email]
                FROM DM.dbo.DM_Chats M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_Person.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]

                -- Query
                SELECT DISTINCT
                    O.[Requisition Action]  AS [Case Number],
                    O.[TMS_action_end_date] AS [Action DateTime],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Closed by - Email]
                FROM DM.dbo.DM_Onboarding O
                LEFT JOIN DM.dbo.DM_Person P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(O.[ONBOARDING_TASK_PROVIDER])
                    AND O.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE O.[TMS_Action_Code] IN ('TMS01')
                    AND O.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND YEAR(O.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_Person.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]

                -- Query
                SELECT DISTINCT
                    CAST(I.[ID] AS NVARCHAR)     AS [Case Number],
                    I.[Datetime Created On Demo] AS [Action DateTime],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Closed by - Email]
                FROM IRC.dbo.IRC_Operation_Audit I
                LEFT JOIN DM.dbo.DM_Person P
                    ON SUBSTRING(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        1, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) - 1)
                            = RTRIM(I.[User])
                    AND I.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE I.[BA_code] = '1950'
                    AND YEAR(I.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Opened by - Name ===========================================================================
.. =====================================================================================================

.. colref-detail:: prod_Opened_by_Name
    :title: Opened by - Name

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case Closing

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Cases.[task.opened_by:sys_user.name]  

                -- Query
                SELECT DISTINCT
                    C.[task.number]                  AS [Case Number],
                    C.[task.closed_at]               AS [Action DateTime],
                    C.[task.opened_by:sys_user.name] AS [Opened by - Name]
                FROM DM.dbo.DM_SG_Cases C
                WHERE (C.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information'
                    )
                    OR C.[shc_case.u_type.sys_choice] IS NULL)
                    AND C.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND C.[task.active] = 'false'
                    AND YEAR(C.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Cases.[task.opened_by:sys_user.name]                    

                -- Query
                WITH LastPark AS (
                SELECT  C.[task.number],
                        C.[shc_case.u_parked_at],
                        ROW_NUMBER() OVER (
                            PARTITION BY C.[task.number]
                            ORDER BY C.[shc_case.u_parked_at] DESC
                        ) rn
                FROM DM.dbo.DM_SG_Cases C
                WHERE C.[task.active] = 'false'
                    AND NULLIF(C.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(C.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                )
                SELECT  C.[task.number]                  AS [Case Number],
                        C.[shc_case.u_parked_at]         AS [Action DateTime],
                        C.[task.opened_by:sys_user.name] AS [Opened by - Name]
                FROM LastPark P
                JOIN DM.dbo.DM_SG_Cases C
                    ON C.[task.number] = P.[task.number]
                    AND C.[shc_case.u_parked_at] = P.[shc_case.u_parked_at]
                WHERE P.rn = 1;

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Incidents.[task.opened_by:sys_user.name]                   

                -- Query
                SELECT DISTINCT
                    M.[task.number]                  AS [Case Number],
                    M.[task.closed_at]               AS [Action DateTime],
                    M.[task.opened_by:sys_user.name] AS [Opened by - Name]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Incidents.[task.opened_by:sys_user.name]                    

                -- Query
                SELECT DISTINCT
                    M.[task.number]                  AS [Case Number],
                    M.[task.opened_at]               AS [Action DateTime],
                    M.[task.opened_by:sys_user.name] AS [Opened by - Name]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.opened_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.opened_by:sys_user.name]                    

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]                  AS [Case Number],
                    M.[task-SCTASK.closed_at]               AS [Action DateTime],
                    M.[task-SCTASK.opened_by:sys_user.name] AS [Opened by - Name]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf of Agent
                                
            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.opened_by:sys_user.name]
                
                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]                  AS [Case Number],
                    M.[task-SCTASK.closed_at]               AS [Action DateTime],
                    M.[task-SCTASK.opened_by:sys_user.name] AS [Opened by - Name]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field
                    SN.dbo.[10-task].[task.opened_by:sys_user.name]           

                -- Query
                SELECT DISTINCT
                    M.[task.number]                  AS [Case Number],
                    M.[task.closed_at]               AS [Action DateTime],
                    M.[task.opened_by:sys_user.name] AS [Opened by - Name]
                FROM SN.dbo.[10-task] M
                JOIN SN.dbo.[10-task_sla] S
                    ON S.[task_sla.task.value] = M.[task.sys_id]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_Chats.[task.opened_by:sys_user.name]            

                -- Query
                SELECT DISTINCT
                    M.[task.number]                  AS [Case Number],
                    M.[task.closed_at]               AS [Action DateTime],
                    M.[task.opened_by:sys_user.name] AS [Opened by - Name]
                FROM DM.dbo.DM_Chats M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field N/A            

                -- Query
                SELECT DISTINCT
                    O.[Requisition Action] AS [Case Number],
                    O.[TMS_action_end_date] AS [Action DateTime],
                    CAST(NULL AS NVARCHAR(128)) AS [Opened by - Name]
                FROM DM.dbo.DM_Onboarding O
                WHERE O.[TMS_Action_Code] IN ('TMS01')
                    AND O.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND YEAR(O.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

                Technical notes: Value set to NULL.
                
        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field
                    IRC.dbo.IRC_Operation_Audit.[User Name]            

                -- Query
                SELECT DISTINCT
                    CAST(I.[ID] AS NVARCHAR)     AS [Case Number],
                    I.[Datetime Created On Demo] AS [Action DateTime],
                    I.[User Name]                AS [Opened by - Name]
                FROM IRC.dbo.IRC_Operation_Audit I
                LEFT JOIN DM.dbo.DM_Person P
                    ON SUBSTRING(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        1, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) - 1)
                            = RTRIM(I.[User])
                    AND I.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE I.[BA_code] = '1950'
                    AND YEAR(I.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Opened by - Email ==========================================================================
.. =====================================================================================================

.. colref-detail:: prod_Opened_by_Email
    :title: Opened by - Email

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case Closing

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Cases.[task.opened_by:sys_user.user_name] + 'example.org'                    

                -- Query
                SELECT DISTINCT
                    C.[task.number]                                    AS [Case Number],
                    C.[task.closed_at]                                 AS [Action DateTime],
                    C.[task.opened_by:sys_user.user_name] + 'example.org' AS [Opened by - Email]
                FROM DM.dbo.DM_SG_Cases C
                WHERE (C.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information'
                    ) OR C.[shc_case.u_type.sys_choice] IS NULL)
                    AND C.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND C.[task.active] = 'false'
                    AND YEAR(C.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Cases.[task.opened_by:sys_user.user_name] + 'example.org'
                
                -- Query
                WITH LastPark AS (
                SELECT  C.[task.number],
                        C.[shc_case.u_parked_at],
                        ROW_NUMBER() OVER (
                            PARTITION BY C.[task.number]
                            ORDER BY C.[shc_case.u_parked_at] DESC
                        ) rn
                FROM DM.dbo.DM_SG_Cases C
                WHERE C.[task.active] = 'false'
                    AND NULLIF(C.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(C.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                )
                SELECT  C.[task.number]                                    AS [Case Number],
                        C.[shc_case.u_parked_at]                             AS [Action DateTime],
                        C.[task.opened_by:sys_user.user_name] + 'example.org' AS [Opened by - Email]
                FROM LastPark P
                JOIN DM.dbo.DM_SG_Cases C
                    ON C.[task.number] = P.[task.number]
                    AND C.[shc_case.u_parked_at] = P.[shc_case.u_parked_at]
                WHERE P.rn = 1;

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Incidents.[task.opened_by:sys_user.user_name] + 'example.org'                    

                -- Query
                SELECT DISTINCT
                    M.[task.number]                                    AS [Case Number],
                    M.[task.closed_at]                                 AS [Action DateTime],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Opened by - Email]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_Incidents.[task.opened_by:sys_user.user_name] + 'example.org'

                -- Query
                SELECT DISTINCT
                    M.[task.number]                                    AS [Case Number],
                    M.[task.opened_at]                                 AS [Action DateTime],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Opened by - Email]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.opened_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes SP sets this from OPENED_BY.
                -- and effectivity check uses CLOSED_AT;
                -- here we align it to OPENED_AT so the snippet runs sensibly for analysis.

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.opened_by:sys_user.user_name] + 'example.org'                    

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]                                    AS [Case Number],
                    M.[task-SCTASK.closed_at]                                 AS [Action DateTime],
                    M.[task-SCTASK.opened_by:sys_user.user_name] + 'example.org' AS [Opened by - Email]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf of Agent
                                
            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.opened_by:sys_user.user_name] + 'example.org'

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number]                                    AS [Case Number],
                    M.[task-SCTASK.closed_at]                                 AS [Action DateTime],
                    M.[task-SCTASK.opened_by:sys_user.user_name] + 'example.org' AS [Opened by - Email]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task-SCTASK.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                AND M.[task-SCTASK.assigned_to:sys_user.user_name]
                    <> M.[task-SCTASK.closed_by:sys_user.user_name]
                AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field
                    SN.dbo.[10-task].[task.opened_by:sys_user.user_name] + 'example.org'            

                -- Query
                SELECT DISTINCT
                    M.[task.number]                                    AS [Case Number],
                    M.[task.closed_at]                                 AS [Action DateTime],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Opened by - Email]
                FROM SN.dbo.[10-task] M
                JOIN SN.dbo.[10-task_sla] S
                    ON S.[task_sla.task.value] = M.[task.sys_id]
                    AND S.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_Chats.[task.closed_by:sys_user.user_name] + 'example.org'            

                -- Query
                SELECT DISTINCT
                    M.[task.number]                                    AS [Case Number],
                    M.[task.closed_at]                                 AS [Action DateTime],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Opened by - Email]
                FROM DM.dbo.DM_Chats M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (M.[task.assignment_group:sys_user_group.name] IN
                    ('Customer Care','Demo Identity and Access Management','Demo Data Analytics')
                    OR P.[PA0001.ORGEH_Organizational Unit] = '00002854')
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;            

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field N/A           

                -- Query
                SELECT DISTINCT
                    O.[Requisition Action]  AS [Case Number],
                    O.[TMS_action_end_date] AS [Action DateTime],
                    CAST(NULL AS NVARCHAR(128)) AS [Opened by - Email]
                FROM DM.dbo.DM_Onboarding O
                WHERE O.[TMS_Action_Code] IN ('TMS01')
                    AND O.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND YEAR(O.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes Set to NULL.

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field
                    DM.dbo.DM_Person.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]           

                -- Query
                SELECT DISTINCT
                    CAST(I.[ID] AS NVARCHAR)                              AS [Case Number],
                    I.[Datetime Created On Demo]                          AS [Action DateTime],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Opened by - Email]
                FROM IRC.dbo.IRC_Operation_Audit I
                LEFT JOIN DM.dbo.DM_Person P
                    ON SUBSTRING(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        1, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) - 1)
                            = RTRIM(I.[User])
                    AND I.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE I.[BA_code] = '1950'
                    AND YEAR(I.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Parked by - Name ===========================================================================
.. =====================================================================================================

.. colref-detail:: prod_Parked_by_Name
    :title: Parked by - Name

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case Closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_by:sys_user.name]

                -- Query
                SELECT DISTINCT
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.name] AS [Parked by - Name],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes Values may be NULL if the case was never parked.

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_by:sys_user.name]

                -- Query
                WITH LastPark AS (
                    SELECT
                        M.[task.number],
                        MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    AND M.[task.active] = 'false'
                    AND NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    M.[shc_case.u_parked_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.name] AS [Parked by - Name],
                    'Case parking' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt = M.[shc_case.u_parked_at];

                -- SP populates 'Parked by - Name'
                -- from [shc_case.u_parked_by:sys_user.name],
                -- restricted to the latest park per case. 

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s) N/A

                -- Query
                SELECT DISTINCT
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number]     AS [Case Number],
                    CAST(NULL AS NVARCHAR(128)) AS [Parked by - Name],
                    'Closing incident'  AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s) N/A

                -- Query
                SELECT DISTINCT
                    M.[task.opened_at]  AS [Action DateTime],
                    M.[task.number]     AS [Case Number],
                    CAST(NULL AS NVARCHAR(128)) AS [Parked by - Name],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s) N/A

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.number]    AS [Case Number],
                    CAST(NULL AS NVARCHAR(128)) AS [Parked by - Name],
                    'Closing SCT by Agent'    AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s) N/A                        

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.number]    AS [Case Number],
                    CAST(NULL AS NVARCHAR(128)) AS [Parked by - Name],
                    'Closing SCT on behalf of Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s) N/A
                
                -- Query
                SELECT DISTINCT
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number]    AS [Case Number],
                    CAST(NULL AS NVARCHAR(128)) AS [Parked by - Name],
                    'Case closing'     AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS X
                    ON M.[task.sys_id] = X.[sys_id]
                LEFT JOIN SN.dbo.[10-task_sla] AS TS
                    ON M.[task.sys_id] = TS.[task_sla.task.value]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[task.number] LIKE 'TRV%'
                    AND TS.[task_sla.has_breached] IS NOT NULL
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s) N/A   

                -- Query
                SELECT DISTINCT
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number]    AS [Case Number],
                    CAST(NULL AS NVARCHAR(128)) AS [Parked by - Name],
                    'Chat entries'     AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s) N/A

                -- Query
                SELECT DISTINCT
                    M.[TMS_action_end_date] AS [Action DateTime],
                    CAST(M.[Requisition Action] AS NVARCHAR(64)) AS [Case Number],
                    CAST(NULL AS NVARCHAR(128)) AS [Parked by - Name],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s) N/A

                -- Query
                SELECT DISTINCT
                    M.[Datetime Created On Demo] AS [Action DateTime],
                    CAST(M.[ID] AS NVARCHAR(64)) AS [Case Number],
                    CAST(NULL AS NVARCHAR(128)) AS [Parked by - Name],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                    ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

.. =====================================================================================================
.. ======== Parked by - Email ==========================================================================
.. =====================================================================================================

.. colref-detail:: prod_Parked_by_Email
    :title: Parked by - Email

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case Closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_by:sys_user.user_name]

                -- Query
                SELECT DISTINCT
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Parked by - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled', 'Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_by:sys_user.user_name]

                -- Query
                WITH LastPark AS (
                    SELECT
                        M.[task.number],
                        MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    AND M.[task.active] = 'false'
                    AND NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    M.[shc_case.u_parked_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Parked by - Email],
                    'Case parking' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt = M.[shc_case.u_parked_at];

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s) N/A                    

                -- Query
                SELECT DISTINCT
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    CAST(NULL AS NVARCHAR(128)) AS [Parked by - Email],
                    'Closing incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s) N/A

                -- Query
                SELECT DISTINCT
                    M.[task.opened_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    CAST(NULL AS NVARCHAR(128)) AS [Parked by - Email],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s) N/A                    

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.number] AS [Case Number],
                    CAST(NULL AS NVARCHAR(128)) AS [Parked by - Email],
                    'Closing SCT by Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s) N/A                    

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.number] AS [Case Number],
                    CAST(NULL AS NVARCHAR(128)) AS [Parked by - Email],
                    'Closing SCT on behalf of Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s) N/A

                -- Query
                SELECT DISTINCT
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    CAST(NULL AS NVARCHAR(128)) AS [Parked by - Email],
                    'Case closing' AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS X
                    ON M.[task.sys_id] = X.[sys_id]
                LEFT JOIN SN.dbo.[10-task_sla] AS TS
                    ON M.[task.sys_id] = TS.[task_sla.task.value]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[task.number] LIKE 'TRV%'
                    AND TS.[task_sla.has_breached] IS NOT NULL
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s) N/A

                -- Query
                SELECT DISTINCT
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    CAST(NULL AS NVARCHAR(128)) AS [Parked by - Email],
                    'Chat entries' AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field. 

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s) N/A

                -- Query
                SELECT DISTINCT
                    M.[TMS_action_end_date] AS [Action DateTime],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    CAST(NULL AS NVARCHAR(128)) AS [Parked by - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s) N/A

                -- Query
                SELECT DISTINCT
                    M.[Datetime Created On Demo] AS [Action DateTime],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    CAST(NULL AS NVARCHAR(128)) AS [Parked by - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                    ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

.. =====================================================================================================
.. ======== Case Open DateTime =========================================================================
.. =====================================================================================================

.. colref-detail:: prod_Case_Open_DateTime
    :title: Case Open DateTime

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case Closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    M.[task.opened_at] AS [Case Open Datetime],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled', 'Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.opened_at]

                -- Query
                WITH LastPark AS (
                    SELECT
                        M.[task.number],
                        MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    AND M.[task.active] = 'false'
                    AND NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    M.[task.opened_at] AS [Case Open Datetime],
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt = M.[shc_case.u_parked_at];

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    M.[task.opened_at] AS [Case Open Datetime],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    M.[task.opened_at] AS [Case Open Datetime],
                    M.[task.number] AS [Case Number],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.opened_at]

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.opened_at] AS [Case Open Datetime],
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.opened_at]

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.opened_at] AS [Case Open Datetime],
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf of Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                SN.dbo.[10-task].[task.opened_at]

                -- Query
                SELECT DISTINCT
                    M.[task.opened_at] AS [Case Open Datetime],
                    M.[task.number] AS [Case Number],
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                            OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS X
                    ON M.[task.sys_id] = X.[sys_id]
                LEFT JOIN SN.dbo.[10-task_sla] AS TS
                    ON M.[task.sys_id] = TS.[task_sla.task.value]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[task.number] LIKE 'TRV%'
                    AND TS.[task_sla.has_breached] IS NOT NULL
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_Chats.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    M.[task.opened_at] AS [Case Open Datetime],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries' AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_Onboarding.[TMS_action_start_date]

                -- Query
                SELECT DISTINCT
                    M.[TMS_action_start_date] AS [Case Open Datetime],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                IRC.dbo.IRC_Operation_Audit.[Datetime Created On Demo]

                -- Query
                SELECT DISTINCT
                    M.[Datetime Created On Demo] AS [Case Open Datetime],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                    ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Case Open Date =============================================================================
.. =====================================================================================================

.. colref-detail:: prod_Case_Open_Date
    :title: Case Open Date

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case Closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    CAST(M.[task.opened_at] AS date) AS [Case Open Date],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled', 'Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.opened_at]

                -- Query
                WITH LastPark AS (
                    SELECT
                        M.[task.number],
                        MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    AND M.[task.active] = 'false'
                    AND NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    CAST(M.[task.opened_at] AS date) AS [Case Open Date],
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt = M.[shc_case.u_parked_at];

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    CAST(M.[task.opened_at] AS date) AS [Case Open Date],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    CAST(M.[task.opened_at] AS date) AS [Case Open Date],
                    M.[task.number] AS [Case Number],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.opened_at]

                -- Query
                SELECT DISTINCT
                    CAST(M.[task-SCTASK.opened_at] AS date) AS [Case Open Date],
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.opened_at]

                -- Query
                SELECT DISTINCT
                    CAST(M.[task-SCTASK.opened_at] AS date) AS [Case Open Date],
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf of Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                SN.dbo.[10-task].[task.opened_at]

                -- Query
                SELECT DISTINCT
                    CAST(M.[task.opened_at] AS date) AS [Case Open Date],
                    M.[task.number] AS [Case Number],
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                            OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS X
                    ON M.[task.sys_id] = X.[sys_id]
                LEFT JOIN SN.dbo.[10-task_sla] AS TS
                    ON M.[task.sys_id] = TS.[task_sla.task.value]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[task.number] LIKE 'TRV%'
                    AND TS.[task_sla.has_breached] IS NOT NULL
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_Chats.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    CAST(M.[task.opened_at] AS date) AS [Case Open Date],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries' AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1; 

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_Onboarding.[TMS_action_start_date]

                -- Query
                SELECT DISTINCT
                    CAST(M.[TMS_action_start_date] AS date) AS [Case Open Date],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                IRC.dbo.IRC_Operation_Audit.[Datetime Created On Demo]

                -- Query
                SELECT DISTINCT
                    CAST(M.[Datetime Created On Demo] AS date) AS [Case Open Date],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                    ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Case Close DateTime ========================================================================
.. =====================================================================================================

.. colref-detail:: prod_Case_Closed_DateTime
    :title: Case Close DateTime

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case Closing

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_Cases.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    M.[task.closed_at] AS [Case Close Datetime],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled', 'Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_Cases.[task.closed_at]

                -- Query
                WITH LastPark AS (
                    SELECT
                        M.[task.number],
                        MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    AND M.[task.active] = 'false'
                    AND NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    M.[task.closed_at] AS [Case Close Datetime],
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt = M.[shc_case.u_parked_at];

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_Incidents.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    M.[task.closed_at] AS [Case Close Datetime],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_Incidents.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    M.[task.closed_at] AS [Case Close Datetime],
                    M.[task.number] AS [Case Number],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.closed_at] AS [Case Close Datetime],
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.closed_at] AS [Case Close Datetime],
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf of Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                SN.dbo.[10-task].[task.closed_at]

                -- Query
                SELECT DISTINCT
                    M.[task.closed_at] AS [Case Close Datetime],
                    M.[task.number] AS [Case Number],
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                            OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS X
                    ON M.[task.sys_id] = X.[sys_id]
                LEFT JOIN SN.dbo.[10-task_sla] AS TS
                    ON M.[task.sys_id] = TS.[task_sla.task.value]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[task.number] LIKE 'TRV%'
                    AND TS.[task_sla.has_breached] IS NOT NULL
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_Chats.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    M.[task.closed_at] AS [Case Close Datetime],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries' AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1; 

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_Onboarding.[TMS_action_end_date]

                -- Query
                SELECT DISTINCT
                    M.[TMS_action_end_date] AS [Case Close Datetime],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                IRC.dbo.IRC_Operation_Audit.[Datetime Created On Demo]

                -- Query
                SELECT DISTINCT
                    M.[Datetime Created On Demo] AS [Case Close Datetime],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                    ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Case Close Date ============================================================================
.. =====================================================================================================

.. colref-detail:: prod_Case_Close_Date
    :title: Case Close Date

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case Closing

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_Cases.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    CAST(M.[task.closed_at] AS date) AS [Case Close Date],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled', 'Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_Cases.[task.closed_at]

                -- Query
                WITH LastPark AS (
                    SELECT
                        M.[task.number],
                        MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    AND M.[task.active] = 'false'
                    AND NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    CAST(M.[task.closed_at] AS date) AS [Case Close Date],
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt = M.[shc_case.u_parked_at];

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_Incidents.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    CAST(M.[task.closed_at] AS date) AS [Case Close Date],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_Incidents.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    CAST(M.[task.closed_at] AS date) AS [Case Close Date],
                    M.[task.number] AS [Case Number],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    CAST(M.[task-SCTASK.closed_at] AS date) AS [Case Close Date],
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    CAST(M.[task-SCTASK.closed_at] AS date) AS [Case Close Date],
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf of Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                SN.dbo.[10-task].[task.closed_at]

                -- Query
                SELECT DISTINCT
                    CAST(M.[task.closed_at] AS date) AS [Case Close Date],
                    M.[task.number] AS [Case Number],
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                            OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS X
                    ON M.[task.sys_id] = X.[sys_id]
                LEFT JOIN SN.dbo.[10-task_sla] AS TS
                    ON M.[task.sys_id] = TS.[task_sla.task.value]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[task.number] LIKE 'TRV%'
                    AND TS.[task_sla.has_breached] IS NOT NULL
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_Chats.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    CAST(M.[task.closed_at] AS date) AS [Case Close Date],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries' AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1; 

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_Onboarding.[TMS_action_end_date]

                -- Query
                SELECT DISTINCT
                    CAST(M.[TMS_action_end_date] AS date) AS [Case Close Date],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                IRC.dbo.IRC_Operation_Audit.[Datetime Created On Demo]

                -- Query
                SELECT DISTINCT
                    CAST(M.[Datetime Created On Demo] AS date) AS [Case Close Date],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                    ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Case Parked DateTime =======================================================================
.. =====================================================================================================

.. colref-detail:: prod_Case_Parked_DateTime
    :title: Case Parked DateTime

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case Closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]

                -- Query
                SELECT DISTINCT
                    M.[shc_case.u_parked_at] AS [Case Parked Datetime],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled', 'Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]

                -- Query
                WITH LastPark AS (
                    SELECT
                        M.[task.number],
                        MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    AND M.[task.active] = 'false'
                    AND NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    M.[shc_case.u_parked_at] AS [Case Parked Datetime],
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt = M.[shc_case.u_parked_at];

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s) none                        

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS DATETIME) AS [Case Parked Datetime],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS DATETIME) AS [Case Parked Datetime],
                    M.[task.number] AS [Case Number],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS DATETIME) AS [Case Parked Datetime],
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS DATETIME) AS [Case Parked Datetime],
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf of Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS DATETIME) AS [Case Parked Datetime],
                    M.[task.number] AS [Case Number],
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                        OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END            AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS X
                    ON M.[task.sys_id] = X.[sys_id]
                LEFT JOIN SN.dbo.[10-task_sla] AS TS
                    ON M.[task.sys_id] = TS.[task_sla.task.value]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[task.number] LIKE 'TRV%'
                    AND TS.[task_sla.has_breached] IS NOT NULL
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS DATETIME) AS [Case Parked Datetime],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries' AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS DATETIME) AS [Case Parked Datetime],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query                
                SELECT DISTINCT
                    CAST(NULL AS DATETIME) AS [Case Parked Datetime],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                    ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

.. =====================================================================================================
.. ======== Case Parked Date ===========================================================================
.. =====================================================================================================

.. colref-detail:: prod_Case_Parked_Date
    :title: Case Parked Date

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case Closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]

                -- Query
                SELECT DISTINCT
                    CAST(M.[shc_case.u_parked_at] AS date) AS [Case Parked Date],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled', 'Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]

                -- Query
                WITH LastPark AS (
                    SELECT
                        M.[task.number],
                        MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    AND M.[task.active] = 'false'
                    AND NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    CAST(M.[shc_case.u_parked_at] AS date) AS [Case Parked Date],
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt = M.[shc_case.u_parked_at];

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS date) AS [Case Parked Date],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes
                --   NULL is hard-coded in the field.

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS date) AS [Case Parked Date],
                    M.[task.number] AS [Case Number],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS date) AS [Case Parked Date],
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS date) AS [Case Parked Date],
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf of Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS date) AS [Case Parked Date],
                    M.[task.number] AS [Case Number],
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                            OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS X
                    ON M.[task.sys_id] = X.[sys_id]
                LEFT JOIN SN.dbo.[10-task_sla] AS TS
                    ON M.[task.sys_id] = TS.[task_sla.task.value]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[task.number] LIKE 'TRV%'
                    AND TS.[task_sla.has_breached] IS NOT NULL
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS date) AS [Case Parked Date],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries' AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS date) AS [Case Parked Date],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS date) AS [Case Parked Date],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                    ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

.. =====================================================================================================
.. ======== Case Number ================================================================================
.. =====================================================================================================

.. colref-detail:: prod_Case_Number
    :title: Case Number

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case Closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.number]

                -- Query
                SELECT DISTINCT
                    M.[task.number] AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled', 'Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.number]

                -- Query
                WITH LastPark AS (
                    SELECT
                        M.[task.number],
                        MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    AND M.[task.active] = 'false'
                    AND NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_at] AS [Action DateTime],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt = M.[shc_case.u_parked_at];

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.number]

                -- Query
                SELECT DISTINCT
                    M.[task.number] AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                    = M.[task.closed_by:sys_user.user_name] + 'example.org'
                AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.number]

                -- Query
                SELECT DISTINCT
                    M.[task.number] AS [Case Number],
                    M.[task.opened_at] AS [Action DateTime],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.number]

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                    = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.number]

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf of Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN.dbo.[10-task].[task.number]

                -- Query
                SELECT DISTINCT
                    M.[task.number] AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                            OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS X
                    ON M.[task.sys_id] = X.[sys_id]
                LEFT JOIN SN.dbo.[10-task_sla] AS TS
                    ON M.[task.sys_id] = TS.[task_sla.task.value]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[task.number] LIKE 'TRV%'
                    AND TS.[task_sla.has_breached] IS NOT NULL
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Chats.[task.number]

                -- Query
                SELECT DISTINCT
                    M.[task.number] AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries' AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1; 

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Onboarding.[Requisition Action]

                -- Query
                SELECT DISTINCT
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    M.[TMS_action_end_date] AS [Action DateTime],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    IRC.dbo.IRC_Operation_Audit.[ID]

                -- Query
                SELECT DISTINCT
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    M.[Datetime Created On Demo] AS [Action DateTime],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                    ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Performance counter ========================================================================
.. =====================================================================================================

.. colref-detail:: prod_Performance_Counter
    :title: Performance counter

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql  
                
                SELECT DISTINCT
                    1 AS [Performance counter],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled', 'Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1; 

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                WITH LastPark AS (
                    SELECT
                        M.[task.number],
                        MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    AND M.[task.active] = 'false'
                    AND NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    1 AS [Performance counter],
                    M.[shc_case.u_parked_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt = M.[shc_case.u_parked_at];

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql
                
                SELECT DISTINCT
                    1 AS [Performance counter],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number]     AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident'  AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                SELECT DISTINCT
                    1 AS [Performance counter],
                    M.[task.opened_at]  AS [Action DateTime],
                    M.[task.number]     AS [Case Number],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql
                
                SELECT DISTINCT
                    1 AS [Performance counter],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.number]    AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent'    AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf the Agent

            .. code-block:: tsql
                
                SELECT DISTINCT
                    1 AS [Performance counter],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.number]    AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf the Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                SELECT DISTINCT
                    1 AS [Performance counter],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number]    AS [Case Number],
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                            OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS X
                    ON M.[task.sys_id] = X.[sys_id]
                LEFT JOIN SN.dbo.[10-task_sla] AS TS
                    ON M.[task.sys_id] = TS.[task_sla.task.value]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[task.number] LIKE 'TRV%'
                    AND TS.[task_sla.has_breached] IS NOT NULL
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                SELECT DISTINCT
                    1 AS [Performance counter],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number]    AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries'     AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1; 

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                SELECT DISTINCT
                    1 AS [Performance counter],
                    M.[TMS_action_end_date] AS [Action DateTime],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    ND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                A   ND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                SELECT DISTINCT
                    1 AS [Performance counter],
                    M.[Datetime Created On Demo] AS [Action DateTime],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                    ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Service ====================================================================================
.. =====================================================================================================

.. colref-detail:: prod_Service
    :title: Service

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.hr_service:shc_service.name]

                -- Query
                SELECT DISTINCT
                    M.[shc_case.hr_service:shc_service.name] AS [Service],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.hr_service:shc_service.name]

                -- Query
                WITH LastPark AS (
                    SELECT
                        M.[task.number],
                        MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    AND M.[task.active] = 'false'
                    AND NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    M.[shc_case.hr_service:shc_service.name] AS [Service],
                    M.[shc_case.u_parked_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt = M.[shc_case.u_parked_at];

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.business_service:cmdb_ci_service.name]

                -- Query
                SELECT DISTINCT
                    M.[task.business_service:cmdb_ci_service.name] AS [Service],
                    M.[task.closed_at]  AS [Action DateTime],
                    M.[task.number]     AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident'  AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.business_service:cmdb_ci_service.name]

                -- Query
                SELECT DISTINCT
                    M.[task.business_service:cmdb_ci_service.name] AS [Service],
                    M.[task.opened_at]  AS [Action DateTime],
                    M.[task.number]     AS [Case Number],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.request_item:sc_req_item.cat_item:sc_cat_item.name]

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.request_item:sc_req_item.cat_item:sc_cat_item.name] AS [Service],
                    M.[task-SCTASK.closed_at]  AS [Action DateTime],
                    M.[task-SCTASK.number]     AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent'     AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf the Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.request_item:sc_req_item.cat_item:sc_cat_item.name]

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.request_item:sc_req_item.cat_item:sc_cat_item.name] AS [Service],
                    M.[task-SCTASK.closed_at]  AS [Action DateTime],
                    M.[task-SCTASK.number]     AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf the Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                SN_raw.dbo.x_adsr_unall_travel_case.[u_service_type.sys_choice]

                -- Query
                SELECT DISTINCT
                    'Travel Case - ' + ISNULL(X.[u_service_type.sys_choice], 'Other') AS [Service],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number]    AS [Case Number],
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                            OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS X
                    ON M.[task.sys_id] = X.[sys_id]
                LEFT JOIN SN.dbo.[10-task_sla] AS TS
                    ON M.[task.sys_id] = TS.[task_sla.task.value]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[task.number] LIKE 'TRV%'
                    AND TS.[task_sla.has_breached] IS NOT NULL
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_Chats.[task.business_service:cmdb_ci_service.name]

                -- Query
                SELECT DISTINCT
                    M.[task.business_service:cmdb_ci_service.name] AS [Service],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number]    AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries'     AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_Onboarding.[Reporting Process]

                -- Query
                SELECT DISTINCT
                    M.[Reporting Process] AS [Service],
                    M.[TMS_action_end_date] AS [Action DateTime],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                IRC.dbo.IRC_Operation_Audit.[RequestType]

                -- Query
                SELECT DISTINCT
                    M.[RequestType] AS [Service],
                    M.[Datetime Created On Demo] AS [Action DateTime],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                    ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;


.. =====================================================================================================
.. ======== Service type ===============================================================================
.. =====================================================================================================

.. colref-detail:: prod_Service_type
    :title: Service type

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_type.sys_choice]

                -- Query
                SELECT DISTINCT
                    M.[shc_case.u_type.sys_choice] AS [Service type],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_type.sys_choice]

                -- Query
                WITH LastPark AS (
                    SELECT
                        M.[task.number],
                        MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    AND M.[task.active] = 'false'
                    AND NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    M.[shc_case.u_type.sys_choice] AS [Service type],
                    M.[shc_case.u_parked_at] AS [Action DateTime],
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt = M.[shc_case.u_parked_at];

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[incident.category.sys_choice]

                -- Query
                SELECT DISTINCT
                    M.[incident.category.sys_choice] AS [Service type],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number]     AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident'  AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[incident.category.sys_choice]

                -- Query
                SELECT DISTINCT
                    M.[incident.category.sys_choice] AS [Service type],
                    M.[task.opened_at] AS [Action DateTime],
                    M.[task.number]     AS [Case Number],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS NVARCHAR(128)) AS [Service type],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.number]    AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent'    AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Closing SC Task on behalf the Agent

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS NVARCHAR(128)) AS [Service type],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.number]    AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf the Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN_raw.dbo.x_adsr_unall_travel_case.[u_travel_type]

                -- Query
                SELECT DISTINCT
                    CASE
                        WHEN X.[u_travel_type] = '01' THEN 'Duty Travel'
                        WHEN X.[u_travel_type] = '02' THEN 'Entitlement Travel'
                        ELSE NULL
                    END AS [Service type],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number]    AS [Case Number],
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                            OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS X
                    ON M.[task.sys_id] = X.[sys_id]
                LEFT JOIN SN.dbo.[10-task_sla] AS TS
                    ON M.[task.sys_id] = TS.[task_sla.task.value]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[task.number] LIKE 'TRV%'
                    AND TS.[task_sla.has_breached] IS NOT NULL
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS NVARCHAR(128)) AS [Service type],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number]    AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries'     AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS NVARCHAR(128)) AS [Service type],
                    M.[TMS_action_end_date] AS [Action DateTime],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS NVARCHAR(128)) AS [Service type],
                    M.[Datetime Created On Demo] AS [Action DateTime],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                    ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.


.. =====================================================================================================
.. ======== SLA Status =================================================================================
.. =====================================================================================================

.. colref-detail:: prod_SLA_Status
    :title: SLA Status

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task_sla.has_breached]

                -- Query
                SELECT DISTINCT
                    CASE WHEN M.[task_sla.has_breached] = 'false' THEN 1 ELSE 0 END AS [SLA Status],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes
                --   1 = SLA met/within (has_breached = 'false'); 0 = SLA breached OR missing/NULL.
                --   The ELSE 0 branch means any NULL/unknown has_breached is treated as breached.

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task_sla.has_breached]

                -- Query
                WITH LastPark AS (
                    SELECT M.[task.number], MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    AND M.[task.active] = 'false'
                    AND NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    CASE WHEN M.[task_sla.has_breached] = 'false' THEN 1 ELSE 0 END AS [SLA Status],
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_at] AS [Action DateTime],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt = M.[shc_case.u_parked_at];

                -- Technical Notes
                --   1 = SLA met/within; 0 = SLA breached OR missing/NULL.

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task_sla.has_breached]

                -- Query
                SELECT DISTINCT
                    CASE WHEN M.[task_sla.has_breached] = 'false' THEN 1 ELSE 0 END AS [SLA Status],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes
                --   1 = SLA met/within; 0 = SLA breached OR missing/NULL.

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task_sla.has_breached]

                -- Query
                SELECT DISTINCT
                    CASE WHEN M.[task_sla.has_breached] = 'false' THEN 1 ELSE 0 END AS [SLA Status],
                    M.[task.number] AS [Case Number],
                    M.[task.opened_at] AS [Action DateTime],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes
                --   1 = SLA met/within; 0 = SLA breached OR missing/NULL.

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS BIT) AS [SLA Status],
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Closing SC Task on behalf the Agent

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS BIT) AS [SLA Status],
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf the Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN.dbo.[10-task_sla].[task_sla.has_breached]

                -- Query
                SELECT DISTINCT
                    CASE WHEN J2.[task_sla.has_breached] = 'false' THEN 1 ELSE 0 END AS [SLA Status],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                            OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN.dbo.[10-task_sla] AS J2
                    ON M.[task.sys_id] = J2.[task_sla.task.value]
                    AND J2.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

                -- Technical Notes
                --   1 = SLA met/within; 0 = SLA breached OR missing/NULL on the SLA record.
                --   Join restricted to Travel SLAs via J2.[task_sla.sla:contract_sla.name] LIKE 'UNI%TRVL%SLA%'.

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    CAST(NULL AS BIT) AS [SLA Status],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries' AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes NULL is hard-coded in the field.

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Onboarding.[SLA_Met]

                -- Query
                SELECT DISTINCT
                    M.[SLA_Met] AS [SLA Status],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    M.[TMS_action_end_date] AS [Action DateTime],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes Upstream [SLA_Met] is already a 0/1 flag where 1 = SLA met.

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s) none

                -- Query
                SELECT DISTINCT
                    1 AS [SLA Status],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    M.[Datetime Created On Demo] AS [Action DateTime],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                    ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes 1 is hard-coded in the field.

.. =====================================================================================================
.. ======== Status =====================================================================================
.. =====================================================================================================

.. colref-detail:: prod_Status
    :title: Status

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.state.sys_choice]

                -- Query
                SELECT DISTINCT
                    M.[task.state.sys_choice] AS [Status],
                    M.[task.number]           AS [Case Number],
                    M.[task.closed_at]        AS [Action DateTime],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing'            AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.state.sys_choice]

                -- Query
                WITH LastPark AS (
                    SELECT
                        M.[task.number],
                        MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    AND M.[task.active] = 'false'
                    AND NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    M.[task.state.sys_choice] AS [Status],
                    M.[task.number]           AS [Case Number],
                    M.[shc_case.u_parked_at]  AS [Action DateTime],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking'            AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt = M.[shc_case.u_parked_at];

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[incident.incident_state.sys_choice]

                -- Query
                SELECT DISTINCT
                    M.[incident.incident_state.sys_choice] AS [Status],
                    M.[task.number]                        AS [Case Number],
                    M.[task.closed_at]                     AS [Action DateTime],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident'                     AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes
                --   Uses incident-level status: [incident.incident_state.sys_choice]

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[incident.incident_state.sys_choice]

                -- Query
                SELECT DISTINCT
                    M.[incident.incident_state.sys_choice] AS [Status],
                    M.[task.number]                        AS [Case Number],
                    M.[task.opened_at]                     AS [Action DateTime],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident'                    AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND M.[task.opened_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes
                --   Uses incident-level status: [incident.incident_state.sys_choice].

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.state.sys_choice]

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.state.sys_choice] AS [Status],
                    M.[task-SCTASK.number]          AS [Case Number],
                    M.[task-SCTASK.closed_at]       AS [Action DateTime],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent'          AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf the Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.state.sys_choice]

                -- Query
                SELECT DISTINCT
                    M.[task-SCTASK.state.sys_choice] AS [Status],
                    M.[task-SCTASK.number]          AS [Case Number],
                    M.[task-SCTASK.closed_at]       AS [Action DateTime],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf the Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task-SCTASK.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                SN.dbo.[10-task].[task.state.sys_choice]

                -- Query
                SELECT DISTINCT
                    M.[task.state.sys_choice] AS [Status],
                    M.[task.number]           AS [Case Number],
                    M.[task.closed_at]        AS [Action DateTime],
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                            OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS X
                    ON M.[task.sys_id] = X.[sys_id]
                LEFT JOIN SN.dbo.[10-task_sla] AS TS
                    ON M.[task.sys_id] = TS.[task_sla.task.value]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[task.number] LIKE 'TRV%'
                    AND TS.[task_sla.has_breached] IS NOT NULL
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_Chats.[task.state.sys_choice]

                -- Query
                SELECT DISTINCT
                    M.[task.state.sys_choice] AS [Status],
                    M.[task.number]           AS [Case Number],
                    M.[task.closed_at]        AS [Action DateTime],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries'            AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND M.[task.closed_at] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                DM.dbo.DM_Onboarding.[Requisition status]

                -- Query
                SELECT DISTINCT
                    M.[Requisition status] AS [Status],
                    CAST(M.[Requisition Action] AS NVARCHAR(64)) AS [Case Number],
                    M.[TMS_action_end_date] AS [Action DateTime],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND P.[PA0001.ENAME_Formatted Name of Employee or Applicant] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes
                --   Uses the upstream TMS field [Requisition status] as Status.

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                IRC.dbo.IRC_Operation_Audit.[Operation]

                -- Query
                SELECT DISTINCT
                    M.[Operation] AS [Status],
                    CAST(M.[ID] AS NVARCHAR(64)) AS [Case Number],
                    M.[Datetime Created On Demo]  AS [Action DateTime],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                    ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes
                -- Uses [Operation] as Status
                -- (no ServiceNow state available for these audit actions).

.. =====================================================================================================
.. ======== FWA Type ===================================================================================
.. =====================================================================================================

.. colref-detail:: prod_FWA_Type
    :title: FWA Type

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2002].[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                SELECT DISTINCT
                    COALESCE(J.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'Standard') AS [FWA Type],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND CONVERT(date, M.[task.closed_at]) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2002] AS J
                    ON J.[PA2002.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CONVERT(date, M.[task.closed_at]) BETWEEN J.[PA2002.BEGDA_Start Date] AND J.[PA2002.ENDDA_End Date]
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes
                --   If no PA2002 match is found for the PERNR/Action Date, 'Standard' is returned.

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2002].[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                WITH LastPark AS (
                SELECT M.[task.number], MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    AND M.[task.active] = 'false'
                    AND NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    COALESCE(J.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'Standard') AS [FWA Type],
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_at] AS [Action DateTime],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking' AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt = M.[shc_case.u_parked_at]
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org'
                    AND CONVERT(date, M.[shc_case.u_parked_at]) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2002] AS J
                    ON J.[PA2002.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CONVERT(date, M.[shc_case.u_parked_at]) BETWEEN J.[PA2002.BEGDA_Start Date] AND J.[PA2002.ENDDA_End Date];

                -- Technical Notes
                --   Defaults to 'Standard' when no PA2002 match exists for the parked action date.

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2002].[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                SELECT DISTINCT
                    COALESCE(J.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'Standard') AS [FWA Type],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND CONVERT(date, M.[task.closed_at]) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2002] AS J
                    ON J.[PA2002.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CONVERT(date, M.[task.closed_at]) BETWEEN J.[PA2002.BEGDA_Start Date] AND J.[PA2002.ENDDA_End Date];

                -- Technical Notes
                --   Returns PA2002 text or 'Standard' per action date.

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2002].[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                SELECT DISTINCT
                    COALESCE(J.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'Standard') AS [FWA Type],
                    M.[task.number] AS [Case Number],
                    M.[task.opened_at] AS [Action DateTime],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND CONVERT(date, M.[task.opened_at]) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2002] AS J
                    ON J.[PA2002.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CONVERT(date, M.[task.opened_at]) BETWEEN J.[PA2002.BEGDA_Start Date] AND J.[PA2002.ENDDA_End Date];

                -- Technical Notes
                --   Uses the creation date to map to PA2002; defaults to 'Standard' if no match.

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2002].[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                SELECT DISTINCT
                    COALESCE(J.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'Standard') AS [FWA Type],
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND CONVERT(date, M.[task-SCTASK.closed_at]) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2002] AS J
                    ON J.[PA2002.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CONVERT(date, M.[task-SCTASK.closed_at]) BETWEEN J.[PA2002.BEGDA_Start Date] AND J.[PA2002.ENDDA_End Date]
                WHERE M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name];

                -- Technical Notes
                --   Defaults to 'Standard' if no PA2002 record on the action date.

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2002].[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                SELECT DISTINCT
                    COALESCE(J.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'Standard') AS [FWA Type],
                    M.[task-SCTASK.number] AS [Case Number],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf of Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND CONVERT(date, M.[task-SCTASK.closed_at]) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2002] AS J
                    ON J.[PA2002.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CONVERT(date, M.[task-SCTASK.closed_at]) BETWEEN J.[PA2002.BEGDA_Start Date] AND J.[PA2002.ENDDA_End Date]
                WHERE M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name];

                -- Technical Notes
                --   Same derivation; returns 'Standard' where no PA2002 match.

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2002].[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                SELECT DISTINCT
                    COALESCE(J.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'Standard') AS [FWA Type],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    X.ActionEmail AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                CROSS APPLY (
                    SELECT CASE
                            WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                                OR M.[task.closed_by:sys_user.name] IS NULL
                            THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                            ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                        END AS ActionEmail
                ) AS X
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number] = X.ActionEmail
                    AND CONVERT(date, M.[task.closed_at]) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2002] AS J
                    ON J.[PA2002.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CONVERT(date, M.[task.closed_at]) BETWEEN J.[PA2002.BEGDA_Start Date] AND J.[PA2002.ENDDA_End Date]
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

                -- Technical Notes
                --   Uses the effective action agent (closed_by unless integration user, else assigned_to).

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2002].[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                SELECT DISTINCT
                    COALESCE(J.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'Standard') AS [FWA Type],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries' AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND CONVERT(date, M.[task.closed_at]) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2002] AS J
                    ON J.[PA2002.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CONVERT(date, M.[task.closed_at]) BETWEEN J.[PA2002.BEGDA_Start Date] AND J.[PA2002.ENDDA_End Date];

                -- Technical Notes
                --   Returns PA2002 text or 'Standard' per action date.

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2002].[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                SELECT DISTINCT
                    COALESCE(J.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'Standard') AS [FWA Type],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    M.[TMS_action_end_date] AS [Action DateTime],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant]) = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND CONVERT(date, M.[TMS_action_end_date]) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2002] AS J
                    ON J.[PA2002.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CONVERT(date, M.[TMS_action_end_date]) BETWEEN J.[PA2002.BEGDA_Start Date] AND J.[PA2002.ENDDA_End Date];

                -- Technical Notes
                -- Name-to-person resolution follows the existing onboarding join to DM_Person;
                -- 'Standard' when no PA2002 match.

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2002].[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                SELECT DISTINCT
                    COALESCE(J.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'Standard') AS [FWA Type],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    M.[Datetime Created On Demo] AS [Action DateTime],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number], 0,
                            CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]))
                    = RTRIM(M.[User])
                    AND CONVERT(date, M.[Date Created On Demo]) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2002] AS J
                    ON J.[PA2002.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CONVERT(date, M.[Date Created On Demo]) BETWEEN J.[PA2002.BEGDA_Start Date] AND J.[PA2002.ENDDA_End Date]
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes
                -- 'Standard' when no PA2002 match.

.. =====================================================================================================
.. ======== Type of leave ==============================================================================
.. =====================================================================================================

.. colref-detail:: prod_Type_of_leave
    :title: Type of leave

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2001].[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                SELECT DISTINCT
                    COALESCE(J.[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'No registered leave') AS [Type of leave],
                    M.[task.closed_at]  AS [Action DateTime],
                    M.[task.number]     AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing'      AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND CAST(M.[task.closed_at] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2001] AS J
                    ON J.[PA2001.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CAST(M.[task.closed_at] AS date) BETWEEN J.[PA2001.BEGDA_Start Date] AND J.[PA2001.ENDDA_End Date]
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;  

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2001].[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                WITH LastPark AS (
                    SELECT M.[task.number], MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    AND M.[task.active] = 'false'
                    AND NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    COALESCE(J.[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'No registered leave') AS [Type of leave],
                    M.[shc_case.u_parked_at] AS [Action DateTime],
                    M.[task.number]          AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking'           AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt = M.[shc_case.u_parked_at]
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org'
                    AND CAST(M.[shc_case.u_parked_at] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2001] AS J
                    ON J.[PA2001.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CAST(M.[shc_case.u_parked_at] AS date) BETWEEN J.[PA2001.BEGDA_Start Date] AND J.[PA2001.ENDDA_End Date]; 

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2001].[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                SELECT DISTINCT
                    COALESCE(J.[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'No registered leave') AS [Type of leave],
                    M.[task.closed_at]  AS [Action DateTime],
                    M.[task.number]     AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident'  AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND CAST(M.[task.closed_at] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2001] AS J
                    ON J.[PA2001.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CAST(M.[task.closed_at] AS date) BETWEEN J.[PA2001.BEGDA_Start Date] AND J.[PA2001.ENDDA_End Date]
                WHERE (
                        M.[task.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;                    

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2001].[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                SELECT DISTINCT
                    COALESCE(J.[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'No registered leave') AS [Type of leave],
                    M.[task.opened_at]  AS [Action DateTime],
                    M.[task.number]     AS [Case Number],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND CAST(M.[task.opened_at] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2001] AS J
                    ON J.[PA2001.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CAST(M.[task.opened_at] AS date) BETWEEN J.[PA2001.BEGDA_Start Date] AND J.[PA2001.ENDDA_End Date]
                WHERE P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2001].[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                SELECT DISTINCT
                    COALESCE(J.[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'No registered leave') AS [Type of leave],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.number]    AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent'    AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND CAST(M.[task-SCTASK.closed_at] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2001] AS J
                    ON J.[PA2001.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CAST(M.[task-SCTASK.closed_at] AS date) BETWEEN J.[PA2001.BEGDA_Start Date] AND J.[PA2001.ENDDA_End Date]
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;                   

        .. tab-item:: SG - Closing SC Task on behalf the Agent

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2001].[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                SELECT DISTINCT
                    COALESCE(J.[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'No registered leave') AS [Type of leave],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.number]    AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf the Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND CAST(M.[task-SCTASK.closed_at] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2001] AS J
                    ON J.[PA2001.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CAST(M.[task-SCTASK.closed_at] AS date) BETWEEN J.[PA2001.BEGDA_Start Date] AND J.[PA2001.ENDDA_End Date]
                WHERE (
                        M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                            'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                        )
                        OR P.[PA0001.ORGEH_Organizational Unit] = '00002854'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2001].[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                SELECT DISTINCT
                    COALESCE(J.[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'No registered leave') AS [Type of leave],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number]    AS [Case Number],
                    X.ActionEmail      AS [Action Agent - Email],
                    'Case closing'     AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                CROSS APPLY (
                    SELECT CASE
                            WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                                OR M.[task.closed_by:sys_user.name] IS NULL
                            THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                            ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                        END AS ActionEmail
                ) AS X
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number] = X.ActionEmail
                    AND CAST(M.[task.closed_at] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2001] AS J
                    ON J.[PA2001.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CAST(M.[task.closed_at] AS date) BETWEEN J.[PA2001.BEGDA_Start Date] AND J.[PA2001.ENDDA_End Date]
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2001].[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                SELECT DISTINCT
                    COALESCE(J.[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'No registered leave') AS [Type of leave],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number]    AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries'     AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Person AS P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND CAST(M.[task.closed_at] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2001] AS J
                    ON J.[PA2001.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CAST(M.[task.closed_at] AS date) BETWEEN J.[PA2001.BEGDA_Start Date] AND J.[PA2001.ENDDA_End Date];           

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2001].[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                SELECT DISTINCT
                    COALESCE(J.[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'No registered leave') AS [Type of leave],
                    M.[TMS_action_end_date] AS [Action DateTime],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant]) = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND CAST(M.[TMS_action_end_date] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2001] AS J
                    ON J.[PA2001.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CAST(M.[TMS_action_end_date] AS date) BETWEEN J.[PA2001.BEGDA_Start Date] AND J.[PA2001.ENDDA_End Date]
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    SAP.dbo.[10-PA2001].[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type]

                -- Query
                SELECT DISTINCT
                    COALESCE(J.[PA2001.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type], 'No registered leave') AS [Type of leave],
                    M.[Datetime Created On Demo] AS [Action DateTime],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                    ) = RTRIM(M.[User])
                    AND CAST(M.[Date Created On Demo] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                LEFT JOIN SAP.dbo.[10-PA2001] AS J
                    ON J.[PA2001.PERNR_Personnel number] = P.[PERNR_Personnel number]
                    AND CAST(M.[Date Created On Demo] AS date) BETWEEN J.[PA2001.BEGDA_Start Date] AND J.[PA2001.ENDDA_End Date]
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Workday ====================================================================================
.. =====================================================================================================

.. colref-detail:: prod_Workday
    :title: Workday

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    DM.[Workday]                               AS [Workday],
                    M.[task.closed_at]                         AS [Action DateTime],
                    M.[task.number]                            AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing'                             AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task.closed_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled', 'Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;                    

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]

                -- Query
                WITH LastPark AS (
                    SELECT M.[task.number], MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    AND M.[task.active] = 'false'
                    AND M.[shc_case.u_parked_at] IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    DM.[Workday]                               AS [Workday],
                    M.[shc_case.u_parked_at]                   AS [Action DateTime],
                    M.[task.number]                            AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking'                             AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt = M.[shc_case.u_parked_at]
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[shc_case.u_parked_at] AS date)
                    AND DM.[Service Area - Code] = '1950';

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    DM.[Workday]                               AS [Workday],
                    M.[task.closed_at]                         AS [Action DateTime],
                    M.[task.number]                            AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident'                         AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task.closed_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[task.assignment_group:sys_user_group.name] IN (
                        'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                    )
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    DM.[Workday]                               AS [Workday],
                    M.[task.opened_at]                         AS [Action DateTime],
                    M.[task.number]                            AS [Case Number],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident'                        AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task.opened_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[task.assignment_group:sys_user_group.name] IN (
                        'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                    )
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]
                
                -- Query
                SELECT DISTINCT
                    DM.[Workday]                                        AS [Workday],
                    M.[task-SCTASK.closed_at]                           AS [Action DateTime],
                    M.[task-SCTASK.number]                              AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent'                              AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task-SCTASK.closed_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                        'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf the Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    DM.[Workday]                                        AS [Workday],
                    M.[task-SCTASK.closed_at]                           AS [Action DateTime],
                    M.[task-SCTASK.number]                              AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf the Agent'                   AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task-SCTASK.closed_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                        'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN.dbo.[10-task].[task.closed_at]

                -- Query
                SELECT DISTINCT
                    DM.[Workday] AS [Workday],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number]    AS [Case Number],
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                            OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task.closed_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';           

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Chats.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    DM.[Workday]                               AS [Workday],
                    M.[task.closed_at]                         AS [Action DateTime],
                    M.[task.number]                            AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries'                             AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task.closed_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[task.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                        )
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Onboarding.[TMS_action_end_date]

                -- Query
                SELECT DISTINCT
                    DM.[Workday] AS [Workday],
                    M.[TMS_action_end_date] AS [Action DateTime],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing' AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[TMS_action_end_date] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;           

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    IRC.dbo.IRC_Operation_Audit.[Date Created On Demo]

                -- Query
                SELECT DISTINCT
                    DM.[Workday] AS [Workday],
                    M.[Datetime Created On Demo] AS [Action DateTime],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                    ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = M.[Date Created On Demo]
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Day of week ================================================================================
.. =====================================================================================================

.. colref-detail:: prod_Day_of_Week
    :title: Day of week

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    DM.[Day of Week]                          AS [Day of week],
                    M.[task.closed_at]                        AS [Action DateTime],
                    M.[task.number]                           AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing'                            AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN DM.dbo.DM_Calendar AS DM
                ON DM.[Master Date] = CAST(M.[task.closed_at] AS date)
                AND DM.[Service Area - Code] = '1950'
                WHERE (M.[shc_case.u_type.sys_choice] NOT IN (
                        'Letter of Appointment',
                        'Certificate of Employment without Salary Information',
                        'Certificate of Employment with Salary Information'
                    ) OR M.[shc_case.u_type.sys_choice] IS NULL)
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;                    

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]

                -- Query
                WITH LastPark AS (
                    SELECT M.[task.number], MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        ) OR M.[shc_case.u_type.sys_choice] IS NULL)
                    AND M.[task.active] = 'false'
                    AND M.[shc_case.u_parked_at] IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    DM.[Day of Week]                          AS [Day of week],
                    M.[shc_case.u_parked_at]                  AS [Action DateTime],
                    M.[task.number]                           AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking'                            AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt  = M.[shc_case.u_parked_at]
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[shc_case.u_parked_at] AS date)
                    AND DM.[Service Area - Code] = '1950';

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    DM.[Day of Week]                          AS [Day of week],
                    M.[task.closed_at]                        AS [Action DateTime],
                    M.[task.number]                           AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident'                        AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task.closed_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[task.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                    )
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    DM.[Day of Week]                          AS [Day of week],
                    M.[task.opened_at]                        AS [Action DateTime],
                    M.[task.number]                           AS [Case Number],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident'                       AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task.opened_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[task.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                    )
                AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    DM.[Day of Week]                          AS [Day of week],
                    M.[task-SCTASK.closed_at]                 AS [Action DateTime],
                    M.[task-SCTASK.number]                    AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent'                    AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task-SCTASK.closed_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf the Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    DM.[Day of Week]                          AS [Day of week],
                    M.[task-SCTASK.closed_at]                 AS [Action DateTime],
                    M.[task-SCTASK.number]                    AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf the Agent'         AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task-SCTASK.closed_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN.dbo.[10-task].[task.closed_at]

                -- Query
                SELECT DISTINCT
                    DM.[Day of Week]                          AS [Day of week],
                    M.[task.closed_at]                        AS [Action DateTime],
                    M.[task.number]                           AS [Case Number],
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                        OR  M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END                                        AS [Action Agent - Email],
                    'Case closing'                             AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task.closed_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';            

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Chats.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    DM.[Day of Week]                          AS [Day of week],
                    M.[task.closed_at]                        AS [Action DateTime],
                    M.[task.number]                           AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries'                            AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task.closed_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[task.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                    )
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Onboarding.[TMS_action_end_date]

                -- Query
                SELECT DISTINCT
                    DM.[Day of Week]                          AS [Day of week],
                    M.[TMS_action_end_date]                   AS [Action DateTime],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing'                            AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[TMS_action_end_date] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    IRC.dbo.IRC_Operation_Audit.[Date Created On Demo]

                -- Query
                SELECT DISTINCT
                    DM.[Day of Week]                          AS [Day of week],
                    M.[Datetime Created On Demo]              AS [Action DateTime],
                    CAST(M.[ID] AS nvarchar(64))              AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation]                             AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                        ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = M.[Date Created On Demo]
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Master Date - Dayname ======================================================================
.. =====================================================================================================

.. colref-detail:: prod_Master_Date_Dayname
    :title: Master Date - Dayname

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    DATENAME(WEEKDAY, CAST(M.[task.closed_at] AS date)) AS [Master Date - Dayname],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number]    AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing'     AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;                    

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]

                -- Query
                WITH LastPark AS (
                    SELECT M.[task.number], MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE M.[task.active] = 'false'
                        AND M.[shc_case.u_parked_at] IS NOT NULL
                        AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    DATENAME(WEEKDAY, CAST(M.[shc_case.u_parked_at] AS date)) AS [Master Date - Dayname],
                    M.[shc_case.u_parked_at] AS [Action DateTime],
                    M.[task.number]          AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking'           AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt  = M.[shc_case.u_parked_at];

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    DATENAME(WEEKDAY, CAST(M.[task.closed_at] AS date)) AS [Master Date - Dayname],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number]    AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                WHERE M.[task.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                    )
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    DATENAME(WEEKDAY, CAST(M.[task.opened_at] AS date)) AS [Master Date - Dayname],
                    M.[task.opened_at] AS [Action DateTime],
                    M.[task.number]    AS [Case Number],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident' AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                WHERE M.[task.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                    )
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    DATENAME(WEEKDAY, CAST(M.[task-SCTASK.closed_at] AS date)) AS [Master Date - Dayname],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.number]    AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent'    AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                WHERE M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                        'Customer Care','Demo Identity and Access Management','Demo Data Analytics'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf the Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    DATENAME(WEEKDAY, CAST(M.[task-SCTASK.closed_at] AS date)) AS [Master Date - Dayname],
                    M.[task-SCTASK.closed_at] AS [Action DateTime],
                    M.[task-SCTASK.number]    AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf the Agent' AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                WHERE M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN.dbo.[10-task].[task.closed_at]

                -- Query
                SELECT DISTINCT
                    DATENAME(WEEKDAY, CAST(M.[task.closed_at] AS date)) AS [Master Date - Dayname],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number]    AS [Case Number],
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                        OR  M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END               AS [Action Agent - Email],
                    'Case closing'    AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Chats.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    DATENAME(WEEKDAY, CAST(M.[task.closed_at] AS date)) AS [Master Date - Dayname],
                    M.[task.closed_at] AS [Action DateTime],
                    M.[task.number]    AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries'     AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                WHERE M.[task.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                    )
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Onboarding.[TMS_action_end_date]

                -- Query
                SELECT DISTINCT
                    DATENAME(WEEKDAY, CAST(M.[TMS_action_end_date] AS date)) AS [Master Date - Dayname],
                    M.[TMS_action_end_date] AS [Action DateTime],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing'     AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant])
                        = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    IRC.dbo.IRC_Operation_Audit.[Date Created On Demo]

                -- Query
                SELECT DISTINCT
                    DATENAME(WEEKDAY, M.[Date Created On Demo]) AS [Master Date - Dayname],
                    M.[Datetime Created On Demo] AS [Action DateTime],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation] AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                        ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== ISO Week ===================================================================================
.. =====================================================================================================

.. colref-detail:: prod_ISO_Week
    :title: ISO Week

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    DM.[Week of Year - ISO]                 AS [ISO Week],
                    M.[task.closed_at]                      AS [Action DateTime],
                    M.[task.number]                         AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case closing'                          AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN DM.dbo.DM_Calendar AS DM
                ON DM.[Master Date] = CAST(M.[task.closed_at] AS date)
                AND DM.[Service Area - Code] = '1950'
                WHERE (
                        M.[shc_case.u_type.sys_choice] NOT IN (
                            'Letter of Appointment',
                            'Certificate of Employment without Salary Information',
                            'Certificate of Employment with Salary Information'
                        )
                        OR M.[shc_case.u_type.sys_choice] IS NULL
                    )
                    AND M.[task.state.sys_choice] NOT IN ('Cancelled','Closed Skipped')
                    AND M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

                -- Technical Notes
                --   Looked up from DM_Calendar using the action date.

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]

                -- Query
                WITH LastPark AS (
                    SELECT M.[task.number], MAX(M.[shc_case.u_parked_at]) AS LastParkedAt
                    FROM DM.dbo.DM_SG_Cases AS M
                    WHERE (
                            M.[shc_case.u_type.sys_choice] NOT IN (
                                'Letter of Appointment',
                                'Certificate of Employment without Salary Information',
                                'Certificate of Employment with Salary Information'
                            )
                            OR M.[shc_case.u_type.sys_choice] IS NULL
                        )
                    AND M.[task.active] = 'false'
                    AND M.[shc_case.u_parked_at] IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1
                    GROUP BY M.[task.number]
                )
                SELECT DISTINCT
                    DM.[Week of Year - ISO]                 AS [ISO Week],
                    M.[shc_case.u_parked_at]                AS [Action DateTime],
                    M.[task.number]                         AS [Case Number],
                    M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Case parking'                          AS [Action Description]
                FROM DM.dbo.DM_SG_Cases AS M
                JOIN LastPark LP
                    ON LP.[task.number] = M.[task.number]
                    AND LP.LastParkedAt  = M.[shc_case.u_parked_at]
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[shc_case.u_parked_at] AS date)
                    AND DM.[Service Area - Code] = '1950';

                -- Technical Notes
                --   Uses the latest parked timestamp per case before joining to DM_Calendar.

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    DM.[Week of Year - ISO]                 AS [ISO Week],
                    M.[task.closed_at]                      AS [Action DateTime],
                    M.[task.number]                         AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing incident'                      AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task.closed_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[task.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                    )
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    DM.[Week of Year - ISO]                 AS [ISO Week],
                    M.[task.opened_at]                      AS [Action DateTime],
                    M.[task.number]                         AS [Case Number],
                    M.[task.opened_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Creating incident'                     AS [Action Description]
                FROM DM.dbo.DM_SG_Incidents AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task.opened_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[task.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                    )
                    AND YEAR(M.[task.opened_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    DM.[Week of Year - ISO]                 AS [ISO Week],
                    M.[task-SCTASK.closed_at]               AS [Action DateTime],
                    M.[task-SCTASK.number]                  AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT by Agent'                  AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task-SCTASK.closed_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] = M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf the Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    DM.[Week of Year - ISO]                 AS [ISO Week],
                    M.[task-SCTASK.closed_at]               AS [Action DateTime],
                    M.[task-SCTASK.number]                  AS [Case Number],
                    M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Closing SCT on behalf the Agent'       AS [Action Description]
                FROM DM.dbo.DM_SG_SC_Tasks AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task-SCTASK.closed_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[task-SCTASK.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                    )
                    AND M.[task-SCTASK.assigned_to:sys_user.user_name] <> M.[task-SCTASK.closed_by:sys_user.user_name]
                    AND YEAR(M.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN.dbo.[10-task].[task.closed_at]

                -- Query
                SELECT DISTINCT
                    DM.[Week of Year - ISO]                 AS [ISO Week],
                    M.[task.closed_at]                      AS [Action DateTime],
                    M.[task.number]                         AS [Case Number],
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                            OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END                                     AS [Action Agent - Email],
                    'Case closing'                          AS [Action Description]
                FROM SN.dbo.[10-task] AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task.closed_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[task.number] LIKE 'TRV%'
                    AND M.[task.assignment_group:sys_user_group.name] LIKE '%Demo%'
                    AND M.[task.sys_created_on] >= '2024-03-11';

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Chats.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    DM.[Week of Year - ISO]                 AS [ISO Week],
                    M.[task.closed_at]                      AS [Action DateTime],
                    M.[task.number]                         AS [Case Number],
                    M.[task.closed_by:sys_user.user_name] + 'example.org' AS [Action Agent - Email],
                    'Chat entries'                          AS [Action Description]
                FROM DM.dbo.DM_Chats AS M
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[task.closed_at] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[task.assignment_group:sys_user_group.name] IN (
                        'Customer Care',
                        'Demo Identity and Access Management',
                        'Demo Data Analytics'
                    )
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Onboarding.[TMS_action_end_date]

                -- Query
                SELECT DISTINCT
                    DM.[Week of Year - ISO]                 AS [ISO Week],
                    M.[TMS_action_end_date]                 AS [Action DateTime],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    'Case closing'                          AS [Action Description]
                FROM DM.dbo.DM_Onboarding AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant]) = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND M.[TMS_action_end_date] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = CAST(M.[TMS_action_end_date] AS date)
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[ONBOARDING_TASK_PROVIDER] IS NOT NULL
                    AND M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    IRC.dbo.IRC_Operation_Audit.[Date Created On Demo]

                -- Query
                SELECT DISTINCT
                    DM.[Week of Year - ISO]                 AS [ISO Week],
                    M.[Datetime Created On Demo]            AS [Action DateTime],
                    CAST(M.[ID] AS nvarchar(64))            AS [Case Number],
                    LOWER(P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) AS [Action Agent - Email],
                    M.[Operation]                           AS [Action Description]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        0, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number])
                        ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                JOIN DM.dbo.DM_Calendar AS DM
                    ON DM.[Master Date] = M.[Date Created On Demo]
                    AND DM.[Service Area - Code] = '1950'
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;

.. =====================================================================================================
.. ======== Scenario ===================================================================================
.. =====================================================================================================

.. colref-detail:: prod_Scenario
    :title: Scenario

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.closed_at]

                -- Query
                SELECT
                    CASE
                    WHEN C.[Workday]=0 THEN 'Weekends or holiday'
                    WHEN EXISTS (
                        SELECT 1 FROM SAP.dbo.[10-PA2001] L
                        WHERE L.[PA2001.PERNR_Personnel number]=P.[PERNR_Personnel number]
                            AND CAST(M.[task.closed_at] AS date) BETWEEN L.[PA2001.BEGDA_Start Date] AND L.[PA2001.ENDDA_End Date]
                    ) THEN 'Approved leave'
                    WHEN EXISTS (
                        SELECT 1 FROM SAP.dbo.[10-PA2002] F
                        WHERE F.[PA2002.PERNR_Personnel number]=P.[PERNR_Personnel number]
                            AND CAST(M.[task.closed_at] AS date) BETWEEN F.[PA2002.BEGDA_Start Date] AND F.[PA2002.ENDDA_End Date]
                            AND F.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type] LIKE '%Tele%'
                    ) THEN 'Teleworking with productivity'
                    ELSE 'Standard Work with productivity'
                    END AS [Scenario],
                    M.[task.number] AS [Case Number],
                    M.[task.closed_at] AS [Action DateTime]
                FROM DM.dbo.DM_SG_Cases M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND CAST(M.[task.closed_at] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                JOIN DM.dbo.DM_Calendar C
                    ON C.[Master Date] = CAST(M.[task.closed_at] AS date)
                    AND C.[Service Area - Code] = '1950'; 

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]

                -- Query
                SELECT
                    CASE
                    WHEN C.[Workday]=0 THEN 'Weekends or holiday'
                    WHEN EXISTS (
                        SELECT 1 FROM SAP.dbo.[10-PA2001] L
                        WHERE L.[PA2001.PERNR_Personnel number]=P.[PERNR_Personnel number]
                            AND CAST(M.[shc_case.u_parked_at] AS date) BETWEEN L.[PA2001.BEGDA_Start Date] AND L.[PA2001.ENDDA_End Date]
                    ) THEN 'Approved leave'
                    WHEN EXISTS (
                        SELECT 1 FROM SAP.dbo.[10-PA2002] F
                        WHERE F.[PA2002.PERNR_Personnel number]=P.[PERNR_Personnel number]
                            AND CAST(M.[shc_case.u_parked_at] AS date) BETWEEN F.[PA2002.BEGDA_Start Date] AND F.[PA2002.ENDDA_End Date]
                            AND F.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type] LIKE '%Tele%'
                    ) THEN 'Teleworking with productivity'
                    ELSE 'Standard Work with productivity'
                    END AS [Scenario],
                    M.[task.number] AS [Case Number],
                    M.[shc_case.u_parked_at] AS [Action DateTime]
                FROM DM.dbo.DM_SG_Cases M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[shc_case.u_parked_by:sys_user.user_name] + 'example.org'
                    AND CAST(M.[shc_case.u_parked_at] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                JOIN DM.dbo.DM_Calendar C
                    ON C.[Master Date] = CAST(M.[shc_case.u_parked_at] AS date)
                    AND C.[Service Area - Code] = '1950';

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.closed_at]

                -- Query
                SELECT
                    CASE
                    WHEN C.[Workday]=0 THEN 'Weekends or holiday'
                    WHEN EXISTS (
                        SELECT 1 FROM SAP.dbo.[10-PA2001] L
                        WHERE L.[PA2001.PERNR_Personnel number]=P.[PERNR_Personnel number]
                            AND CAST(M.[task.closed_at] AS date) BETWEEN L.[PA2001.BEGDA_Start Date] AND L.[PA2001.ENDDA_End Date]
                    ) THEN 'Approved leave'
                    WHEN EXISTS (
                        SELECT 1 FROM SAP.dbo.[10-PA2002] F
                        WHERE F.[PA2002.PERNR_Personnel number]=P.[PERNR_Personnel number]
                            AND CAST(M.[task.closed_at] AS date) BETWEEN F.[PA2002.BEGDA_Start Date] AND F.[PA2002.ENDDA_End Date]
                            AND F.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type] LIKE '%Tele%'
                    ) THEN 'Teleworking with productivity'
                    ELSE 'Standard Work with productivity'
                    END AS [Scenario],
                    M.[task.number], M.[task.closed_at] AS [Action DateTime]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND CAST(M.[task.closed_at] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                JOIN DM.dbo.DM_Calendar C
                    ON C.[Master Date] = CAST(M.[task.closed_at] AS date)
                    AND C.[Service Area - Code] = '1950';

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.opened_at]

                -- Query
                SELECT
                    CASE
                    WHEN C.[Workday]=0 THEN 'Weekends or holiday'
                    WHEN EXISTS (
                        SELECT 1 FROM SAP.dbo.[10-PA2001] L
                        WHERE L.[PA2001.PERNR_Personnel number]=P.[PERNR_Personnel number]
                            AND CAST(M.[task.opened_at] AS date) BETWEEN L.[PA2001.BEGDA_Start Date] AND L.[PA2001.ENDDA_End Date]
                    ) THEN 'Approved leave'
                    WHEN EXISTS (
                        SELECT 1 FROM SAP.dbo.[10-PA2002] F
                        WHERE F.[PA2002.PERNR_Personnel number]=P.[PERNR_Personnel number]
                            AND CAST(M.[task.opened_at] AS date) BETWEEN F.[PA2002.BEGDA_Start Date] AND F.[PA2002.ENDDA_End Date]
                            AND F.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type] LIKE '%Tele%'
                    ) THEN 'Teleworking with productivity'
                    ELSE 'Standard Work with productivity'
                    END AS [Scenario],
                    M.[task.number], M.[task.opened_at] AS [Action DateTime]
                FROM DM.dbo.DM_SG_Incidents M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.opened_by:sys_user.user_name] + 'example.org'
                    AND CAST(M.[task.opened_at] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                JOIN DM.dbo.DM_Calendar C
                    ON C.[Master Date] = CAST(M.[task.opened_at] AS date)
                    AND C.[Service Area - Code] = '1950';

        .. tab-item:: SG - Closing SC Task by agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT
                    CASE
                    WHEN C.[Workday]=0 THEN 'Weekends or holiday'
                    WHEN EXISTS (SELECT 1 FROM SAP.dbo.[10-PA2001] L
                                WHERE L.[PA2001.PERNR_Personnel number]=P.[PERNR_Personnel number]
                                    AND CAST(M.[task-SCTASK.closed_at] AS date) BETWEEN L.[PA2001.BEGDA_Start Date] AND L.[PA2001.ENDDA_End Date])
                        THEN 'Approved leave'
                    WHEN EXISTS (SELECT 1 FROM SAP.dbo.[10-PA2002] F
                                WHERE F.[PA2002.PERNR_Personnel number]=P.[PERNR_Personnel number]
                                    AND CAST(M.[task-SCTASK.closed_at] AS date) BETWEEN F.[PA2002.BEGDA_Start Date] AND F.[PA2002.ENDDA_End Date]
                                    AND F.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type] LIKE '%Tele%')
                        THEN 'Teleworking with productivity'
                    ELSE 'Standard Work with productivity'
                    END AS [Scenario],
                    M.[task-SCTASK.number], M.[task-SCTASK.closed_at] AS [Action DateTime]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND CAST(M.[task-SCTASK.closed_at] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                JOIN DM.dbo.DM_Calendar C
                    ON C.[Master Date] = CAST(M.[task-SCTASK.closed_at] AS date)
                    AND C.[Service Area - Code] = '1950';

        .. tab-item:: SG - Closing SC Task on behalf of agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT
                    CASE
                    WHEN C.[Workday]=0 THEN 'Weekends or holiday'
                    WHEN EXISTS (SELECT 1 FROM SAP.dbo.[10-PA2001] L
                                WHERE L.[PA2001.PERNR_Personnel number]=P.[PERNR_Personnel number]
                                    AND CAST(M.[task-SCTASK.closed_at] AS date) BETWEEN L.[PA2001.BEGDA_Start Date] AND L.[PA2001.ENDDA_End Date])
                        THEN 'Approved leave'
                    WHEN EXISTS (SELECT 1 FROM SAP.dbo.[10-PA2002] F
                                WHERE F.[PA2002.PERNR_Personnel number]=P.[PERNR_Personnel number]
                                    AND CAST(M.[task-SCTASK.closed_at] AS date) BETWEEN F.[PA2002.BEGDA_Start Date] AND F.[PA2002.ENDDA_End Date]
                                    AND F.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type] LIKE '%Tele%')
                        THEN 'Teleworking with productivity'
                    ELSE 'Standard Work with productivity'
                    END AS [Scenario],
                    M.[task-SCTASK.number], M.[task-SCTASK.closed_at] AS [Action DateTime]
                FROM DM.dbo.DM_SG_SC_Tasks M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task-SCTASK.closed_by:sys_user.user_name] + 'example.org'
                    AND CAST(M.[task-SCTASK.closed_at] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                JOIN DM.dbo.DM_Calendar C
                    ON C.[Master Date] = CAST(M.[task-SCTASK.closed_at] AS date)
                    AND C.[Service Area - Code] = '1950';

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN.dbo.[10-task].[task.closed_at]

                -- Query
                SELECT
                    CASE
                        WHEN C.[Workday]=0 THEN 'Weekends or holiday'
                        WHEN EXISTS (SELECT 1 FROM SAP.dbo.[10-PA2001] L
                                    WHERE L.[PA2001.PERNR_Personnel number]=P.[PERNR_Personnel number]
                                    AND CAST(M.[task.closed_at] AS date) BETWEEN L.[PA2001.BEGDA_Start Date] AND L.[PA2001.ENDDA_End Date])
                            THEN 'Approved leave'
                        WHEN EXISTS (SELECT 1 FROM SAP.dbo.[10-PA2002] F
                                    WHERE F.[PA2002.PERNR_Personnel number]=P.[PERNR_Personnel number]
                                    AND CAST(M.[task.closed_at] AS date) BETWEEN F.[PA2002.BEGDA_Start Date] AND F.[PA2002.ENDDA_End Date]
                                    AND F.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type] LIKE '%Tele%')
                            THEN 'Teleworking with productivity'
                        ELSE 'Standard Work with productivity'
                    END AS [Scenario],
                    M.[task.number], M.[task.closed_at] AS [Action DateTime]
                FROM SN.dbo.[10-task] M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number] =
                    CASE
                        WHEN M.[task.closed_by:sys_user.name] = 'INT-PRD-UNall-Travel case Integration'
                            OR M.[task.closed_by:sys_user.name] IS NULL
                        THEN M.[task.assigned_to:sys_user.user_name] + 'example.org'
                        ELSE M.[task.closed_by:sys_user.user_name] + 'example.org'
                    END
                AND CAST(M.[task.closed_at] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                JOIN DM.dbo.DM_Calendar C
                    ON C.[Master Date] = CAST(M.[task.closed_at] AS date)
                    AND C.[Service Area - Code] = '1950';

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Chats.[task.closed_at]

                -- Query
                SELECT
                    CASE
                        WHEN C.[Workday]=0 THEN 'Weekends or holiday'
                        WHEN EXISTS (SELECT 1 FROM SAP.dbo.[10-PA2001] L
                                    WHERE L.[PA2001.PERNR_Personnel number]=P.[PERNR_Personnel number]
                                    AND CAST(M.[task.closed_at] AS date) BETWEEN L.[PA2001.BEGDA_Start Date] AND L.[PA2001.ENDDA_End Date])
                            THEN 'Approved leave'
                        WHEN EXISTS (SELECT 1 FROM SAP.dbo.[10-PA2002] F
                                    WHERE F.[PA2002.PERNR_Personnel number]=P.[PERNR_Personnel number]
                                    AND CAST(M.[task.closed_at] AS date) BETWEEN F.[PA2002.BEGDA_Start Date] AND F.[PA2002.ENDDA_End Date]
                                    AND F.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type] LIKE '%Tele%')
                            THEN 'Teleworking with productivity'
                        ELSE 'Standard Work with productivity'
                    END AS [Scenario],
                    M.[task.number], M.[task.closed_at] AS [Action DateTime]
                FROM DM.dbo.DM_Chats M
                JOIN DM.dbo.DM_Person P
                    ON P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]
                        = M.[task.closed_by:sys_user.user_name] + 'example.org'
                    AND CAST(M.[task.closed_at] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                JOIN DM.dbo.DM_Calendar C
                    ON C.[Master Date] = CAST(M.[task.closed_at] AS date)
                    AND C.[Service Area - Code] = '1950';

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Onboarding.[TMS_action_end_date]

                -- Query
                SELECT
                    CASE
                        WHEN C.[Workday]=0 THEN 'Weekends or holiday'
                        WHEN EXISTS (SELECT 1 FROM SAP.dbo.[10-PA2001] L
                                    WHERE L.[PA2001.PERNR_Personnel number]=P.[PERNR_Personnel number]
                                    AND CAST(M.[TMS_action_end_date] AS date) BETWEEN L.[PA2001.BEGDA_Start Date] AND L.[PA2001.ENDDA_End Date])
                            THEN 'Approved leave'
                        WHEN EXISTS (SELECT 1 FROM SAP.dbo.[10-PA2002] F
                                    WHERE F.[PA2002.PERNR_Personnel number]=P.[PERNR_Personnel number]
                                    AND CAST(M.[TMS_action_end_date] AS date) BETWEEN F.[PA2002.BEGDA_Start Date] AND F.[PA2002.ENDDA_End Date]
                                    AND F.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type] LIKE '%Tele%')
                            THEN 'Teleworking with productivity'
                        ELSE 'Standard Work with productivity'
                    END AS [Scenario],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number],
                    M.[TMS_action_end_date] AS [Action DateTime]
                FROM DM.dbo.DM_Onboarding M
                JOIN DM.dbo.DM_Person P
                    ON RTRIM(P.[PA0001.ENAME_Formatted Name of Employee or Applicant]) = RTRIM(M.[ONBOARDING_TASK_PROVIDER])
                    AND CAST(M.[TMS_action_end_date] AS date) BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                JOIN DM.dbo.DM_Calendar C
                    ON C.[Master Date] = CAST(M.[TMS_action_end_date] AS date)
                    AND C.[Service Area - Code] = '1950';

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    IRC.dbo.IRC_Operation_Audit.[Date Created On Demo]

                -- Query
                SELECT
                    CASE
                        WHEN C.[Workday]=0 THEN 'Weekends or holiday'
                        WHEN EXISTS (SELECT 1 FROM SAP.dbo.[10-PA2001] L
                                    WHERE L.[PA2001.PERNR_Personnel number]=P.[PERNR_Personnel number]
                                    AND M.[Date Created On Demo] BETWEEN L.[PA2001.BEGDA_Start Date] AND L.[PA2001.ENDDA_End Date])
                            THEN 'Approved leave'
                        WHEN EXISTS (SELECT 1 FROM SAP.dbo.[10-PA2002] F
                                    WHERE F.[PA2002.PERNR_Personnel number]=P.[PERNR_Personnel number]
                                    AND M.[Date Created On Demo] BETWEEN F.[PA2002.BEGDA_Start Date] AND F.[PA2002.ENDDA_End Date]
                                    AND F.[PA2002.AWART_Attendance or Absence Type:T554T.ATEXT_Text for Attendance/Absence Type] LIKE '%Tele%')
                            THEN 'Teleworking with productivity'
                        ELSE 'Standard Work with productivity'
                    END AS [Scenario],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number],
                    M.[Datetime Created On Demo] AS [Action DateTime]
                FROM IRC.dbo.IRC_Operation_Audit M
                JOIN DM.dbo.DM_Person P
                    ON SUBSTRING(
                        P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number],
                        1, CHARINDEX('@', P.[PA0105-0010.USRID_LONG_Communication: Long Identification/Number]) - 1
                    ) = RTRIM(M.[User])
                    AND M.[Date Created On Demo] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                JOIN DM.dbo.DM_Calendar C
                    ON C.[Master Date] = M.[Date Created On Demo]
                    AND C.[Service Area - Code] = '1950';

.. =====================================================================================================
.. ======== Coloring ===================================================================================
.. =====================================================================================================

.. colref-detail:: prod_Coloring
    :title: Coloring

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    CASE
                    WHEN [Workday] = 0 THEN 1
                    WHEN [Type of leave] <> 'No registered leave' THEN 2
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 1 THEN 3
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 1 THEN 4
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 0 THEN 5
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 0 THEN 6
                    WHEN [Type of leave] = 'No registered leave' AND [Performance counter] = 0 THEN 7
                    ELSE NULL
                    END AS [Coloring],
                    [Case Number], [Action DateTime]
                FROM DM.dbo.DM_Productivity
                WHERE [Action Description] = 'Case closing'
                    AND YEAR([Action DateTime]) >= YEAR(GETDATE()) - 1;                    

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_parked_at]

                -- Query
                SELECT DISTINCT
                    CASE
                    WHEN [Workday] = 0 THEN 1
                    WHEN [Type of leave] <> 'No registered leave' THEN 2
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 1 THEN 3
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 1 THEN 4
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 0 THEN 5
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 0 THEN 6
                    WHEN [Type of leave] = 'No registered leave' AND [Performance counter] = 0 THEN 7
                    ELSE NULL
                    END AS [Coloring],
                    [Case Number], [Action DateTime]
                FROM DM.dbo.DM_Productivity
                WHERE [Action Description] = 'Case parking'
                    AND YEAR([Action DateTime]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    CASE
                    WHEN [Workday] = 0 THEN 1
                    WHEN [Type of leave] <> 'No registered leave' THEN 2
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 1 THEN 3
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 1 THEN 4
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 0 THEN 5
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 0 THEN 6
                    WHEN [Type of leave] = 'No registered leave' AND [Performance counter] = 0 THEN 7
                    ELSE NULL
                    END AS [Coloring],
                    [Case Number], [Action DateTime]
                FROM DM.dbo.DM_Productivity
                WHERE [Action Description] = 'Closing incident'
                    AND YEAR([Action DateTime]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Incidents.[task.opened_at]

                -- Query
                SELECT DISTINCT
                    CASE
                    WHEN [Workday] = 0 THEN 1
                    WHEN [Type of leave] <> 'No registered leave' THEN 2
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 1 THEN 3
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 1 THEN 4
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 0 THEN 5
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 0 THEN 6
                    WHEN [Type of leave] = 'No registered leave' AND [Performance counter] = 0 THEN 7
                    ELSE NULL
                    END AS [Coloring],
                    [Case Number], [Action DateTime]
                FROM DM.dbo.DM_Productivity
                WHERE [Action Description] = 'Creating incident'
                    AND YEAR([Action DateTime]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    CASE
                    WHEN [Workday] = 0 THEN 1
                    WHEN [Type of leave] <> 'No registered leave' THEN 2
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 1 THEN 3
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 1 THEN 4
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 0 THEN 5
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 0 THEN 6
                    WHEN [Type of leave] = 'No registered leave' AND [Performance counter] = 0 THEN 7
                    ELSE NULL
                    END AS [Coloring],
                    [Case Number], [Action DateTime]
                FROM DM.dbo.DM_Productivity
                WHERE [Action Description] = 'Closing SCT by Agent'
                    AND YEAR([Action DateTime]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_SC_Tasks.[task-SCTASK.closed_at]

                -- Query
                SELECT DISTINCT
                    CASE
                    WHEN [Workday] = 0 THEN 1
                    WHEN [Type of leave] <> 'No registered leave' THEN 2
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 1 THEN 3
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 1 THEN 4
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 0 THEN 5
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 0 THEN 6
                    WHEN [Type of leave] = 'No registered leave' AND [Performance counter] = 0 THEN 7
                    ELSE NULL
                    END AS [Coloring],
                    [Case Number], [Action DateTime]
                FROM DM.dbo.DM_Productivity
                WHERE [Action Description] = 'Closing SCT on behalf the Agent'
                    AND YEAR([Action DateTime]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    SN.dbo.[10-task].[task.closed_at]

                -- Query
                SELECT DISTINCT
                    CASE
                    WHEN [Workday] = 0 THEN 1
                    WHEN [Type of leave] <> 'No registered leave' THEN 2
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 1 THEN 3
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 1 THEN 4
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 0 THEN 5
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 0 THEN 6
                    WHEN [Type of leave] = 'No registered leave' AND [Performance counter] = 0 THEN 7
                    ELSE NULL
                    END AS [Coloring],
                    [Case Number], [Action DateTime]
                FROM DM.dbo.DM_Productivity
                WHERE [Action Description] = 'Case closing'
                AND [Case Number] LIKE 'TRV%'
                    AND YEAR([Action DateTime]) >= YEAR(GETDATE()) - 1;
            
        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Chats.[task.closed_at]

                -- Query
                SELECT DISTINCT
                    CASE
                    WHEN [Workday] = 0 THEN 1
                    WHEN [Type of leave] <> 'No registered leave' THEN 2
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 1 THEN 3
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 1 THEN 4
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 0 THEN 5
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 0 THEN 6
                    WHEN [Type of leave] = 'No registered leave' AND [Performance counter] = 0 THEN 7
                    ELSE NULL
                    END AS [Coloring],
                    [Case Number], [Action DateTime]
                FROM DM.dbo.DM_Productivity
                WHERE [Action Description] = 'Chat entries'
                    AND YEAR([Action DateTime]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Onboarding.[TMS_action_end_date]

                -- Query
                SELECT DISTINCT
                    CASE
                    WHEN [Workday] = 0 THEN 1
                    WHEN [Type of leave] <> 'No registered leave' THEN 2
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 1 THEN 3
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 1 THEN 4
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 0 THEN 5
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 0 THEN 6
                    WHEN [Type of leave] = 'No registered leave' AND [Performance counter] = 0 THEN 7
                    ELSE NULL
                    END AS [Coloring],
                    [Case Number], [Action DateTime]
                FROM DM.dbo.DM_Productivity
                WHERE [Action Description] = 'Case closing'
                    AND YEAR([Action DateTime]) >= YEAR(GETDATE()) - 1;            

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    IRC.dbo.IRC_Operation_Audit.[Date Created On Demo]

                -- Query
                SELECT DISTINCT
                    CASE
                    WHEN [Workday] = 0 THEN 1
                    WHEN [Type of leave] <> 'No registered leave' THEN 2
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 1 THEN 3
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 1 THEN 4
                    WHEN [Type of leave] = 'No registered leave' AND [FWA Type] NOT LIKE '%Tele%' AND [Performance counter] = 0 THEN 5
                    WHEN [FWA Type] LIKE '%Tele%' AND [Performance counter] = 0 THEN 6
                    WHEN [Type of leave] = 'No registered leave' AND [Performance counter] = 0 THEN 7
                    ELSE NULL
                    END AS [Coloring],
                    [Case Number], [Action DateTime]
                FROM DM.dbo.DM_Productivity
                WHERE YEAR([Action DateTime]) >= YEAR(GETDATE()) - 1;
        

.. =====================================================================================================
.. ======== Last available date ========================================================================
.. =====================================================================================================

.. colref-detail:: prod_Last_available_date
    :title: Last available date

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Case Close Date]

                -- Query
                SELECT MAX([Case Close Date]) AS [Last available date]
                FROM DM.dbo.DM_Productivity
                WHERE LEFT(RIGHT([Case Number], 5), 3) <> 'TMS';                    

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Case Close Date]

                -- Query
                SELECT MAX([Case Close Date]) AS [Last available date]
                FROM DM.dbo.DM_Productivity
                WHERE LEFT(RIGHT([Case Number], 5), 3) <> 'TMS';

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Case Close Date]

                -- Query
                SELECT MAX([Case Close Date]) AS [Last available date]
                FROM DM.dbo.DM_Productivity
                WHERE LEFT(RIGHT([Case Number], 5), 3) <> 'TMS';

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Case Close Date]

                -- Query
                SELECT MAX([Case Close Date]) AS [Last available date]
                FROM DM.dbo.DM_Productivity
                WHERE LEFT(RIGHT([Case Number], 5), 3) <> 'TMS';

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Case Close Date]

                -- Query
                SELECT MAX([Case Close Date]) AS [Last available date]
                FROM DM.dbo.DM_Productivity
                WHERE LEFT(RIGHT([Case Number], 5), 3) <> 'TMS';

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Case Close Date]

                -- Query
                SELECT MAX([Case Close Date]) AS [Last available date]
                FROM DM.dbo.DM_Productivity
                WHERE LEFT(RIGHT([Case Number], 5), 3) <> 'TMS';

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Case Close Date]

                -- Query
                SELECT MAX([Case Close Date]) AS [Last available date]
                FROM DM.dbo.DM_Productivity
                WHERE LEFT(RIGHT([Case Number], 5), 3) <> 'TMS';

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Case Close Date]

                -- Query
                SELECT MAX([Case Close Date]) AS [Last available date]
                FROM DM.dbo.DM_Productivity
                WHERE LEFT(RIGHT([Case Number], 5), 3) <> 'TMS';

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Case Close Date]

                -- Query
                SELECT MAX([Case Close Date]) AS [Last available date]
                FROM DM.dbo.DM_Productivity
                WHERE LEFT(RIGHT([Case Number], 5), 3) = 'TMS';

                -- Technical Notes SP updates TMS rows separately;
                -- sets their [Last available date] to the max close date.

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Case Close Date]

                -- Query
                SELECT MAX([Case Close Date]) AS [Last available date]
                FROM DM.dbo.DM_Productivity
                WHERE LEFT(RIGHT([Case Number], 5), 3) <> 'TMS';

.. =====================================================================================================
.. ======== Service Area Name =========================================================================
.. =====================================================================================================

.. colref-detail:: prod_Service_Area_Name
    :title: Service Area Name

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_Service_Area:shc_Service_Area.u_name]

                -- Query
                SELECT DISTINCT
                    M.[shc_case.u_Service_Area:shc_Service_Area.u_name] AS [Service Area Name],
                    M.[task.number] AS [Case Number]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE M.[task.active] = 'false'
                    AND YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;                    

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_SG_Cases.[shc_case.u_Service_Area:shc_Service_Area.u_name]

                -- Query
                SELECT DISTINCT
                    M.[shc_case.u_Service_Area:shc_Service_Area.u_name] AS [Service Area Name],
                    M.[task.number] AS [Case Number]
                FROM DM.dbo.DM_SG_Cases AS M
                WHERE NULLIF(M.[shc_case.u_parked_at], '1900-01-01 00:00:00.000') IS NOT NULL
                    AND YEAR(M.[shc_case.u_parked_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Person.[PA0001.GSBER_Service Area:TGSBT.GTEXT_Service Area description]

                -- Query
                SELECT DISTINCT
                    P.[PA0001.GSBER_Service Area:TGSBT.GTEXT_Service Area description] AS [Service Area Name],
                    I.[task.number] AS [Case Number]
                FROM DM.dbo.DM_SG_Incidents AS I
                LEFT JOIN sn_raw.dbo.sys_user AS U
                    ON I.[incident.u_affected_user:sys_user.user_name] = U.[user_name]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON U.u_client_personnel_number = P.[PERNR_Personnel number]
                    AND I.[task.sys_created_on] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE YEAR(I.[task.closed_at]) >= YEAR(GETDATE()) - 1;                    

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Person.[PA0001.GSBER_Service Area:TGSBT.GTEXT_Service Area description]

                -- Query
                SELECT DISTINCT
                    P.[PA0001.GSBER_Service Area:TGSBT.GTEXT_Service Area description] AS [Service Area Name],
                    I.[task.number] AS [Case Number]
                FROM DM.dbo.DM_SG_Incidents AS I
                LEFT JOIN sn_raw.dbo.sys_user AS U
                    ON I.[incident.u_affected_user:sys_user.user_name] = U.[user_name]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON U.u_client_personnel_number = P.[PERNR_Personnel number]
                    AND I.[task.sys_created_on] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE YEAR(I.[task.opened_at]) >= YEAR(GETDATE()) - 1; 

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Person.[PA0001.GSBER_Service Area:TGSBT.GTEXT_Service Area description]

                -- Query
                SELECT DISTINCT
                    P.[PA0001.GSBER_Service Area:TGSBT.GTEXT_Service Area description] AS [Service Area Name],
                    T.[task-SCTASK.number] AS [Case Number]
                FROM DM.dbo.DM_SG_SC_Tasks AS T
                LEFT JOIN sn_raw.dbo.sys_user AS U
                    ON T.[task-SCTASK.opened_by:sys_user.user_name] = U.[user_name]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON U.u_client_personnel_number = P.[PERNR_Personnel number]
                    AND T.[task-SCTASK.sys_created_on] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE YEAR(T.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1
                    AND T.[task-SCTASK.assigned_to:sys_user.user_name] = T.[task-SCTASK.closed_by:sys_user.user_name];                    

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Person.[PA0001.GSBER_Service Area:TGSBT.GTEXT_Service Area description]

                -- Query
                SELECT DISTINCT
                    P.[PA0001.GSBER_Service Area:TGSBT.GTEXT_Service Area description] AS [Service Area Name],
                    T.[task-SCTASK.number] AS [Case Number]
                FROM DM.dbo.DM_SG_SC_Tasks AS T
                LEFT JOIN sn_raw.dbo.sys_user AS U
                    ON T.[task-SCTASK.opened_by:sys_user.user_name] = U.[user_name]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON U.u_client_personnel_number = P.[PERNR_Personnel number]
                    AND T.[task-SCTASK.sys_created_on] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE YEAR(T.[task-SCTASK.closed_at]) >= YEAR(GETDATE()) - 1
                    AND T.[task-SCTASK.assigned_to:sys_user.user_name] <> T.[task-SCTASK.closed_by:sys_user.user_name];

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Calendar.[Service Area - Name]

                -- Query
                SELECT DISTINCT
                    C.[Service Area - Name] AS [Service Area Name],
                    M.[task.number] AS [Case Number]
                FROM SN.dbo.[10-task] AS M
                LEFT JOIN SN_raw.dbo.x_adsr_unall_travel_case AS X
                    ON M.[task.sys_id] = X.[sys_id]
                LEFT JOIN DM.dbo.DM_Calendar AS C
                    ON X.[u_Service_Area_code] = C.[Service Area - Code]
                    AND C.[Master Date] = (SELECT TOP 1 [Master Date] FROM DM.dbo.DM_Calendar ORDER BY 1 DESC)
                WHERE M.[task.number] LIKE 'TRV%'
                    AND YEAR(M.[task.sys_created_on]) >= YEAR(GETDATE()) - 1;           

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Person.[PA0001.GSBER_Service Area:TGSBT.GTEXT_Service Area description]

                -- Query
                SELECT DISTINCT
                    P.[PA0001.GSBER_Service Area:TGSBT.GTEXT_Service Area description] AS [Service Area Name],
                    M.[task.number] AS [Case Number]
                FROM DM.dbo.DM_Chats AS M
                LEFT JOIN sn_raw.dbo.sys_user AS U
                    ON M.[task.opened_by:sys_user.user_name] = U.[user_name]
                LEFT JOIN DM.dbo.DM_Person AS P
                    ON U.u_client_personnel_number = P.[PERNR_Personnel number]
                    AND M.[task.sys_created_on] BETWEEN P.BEGDA_Master AND P.ENDDA_Master
                WHERE YEAR(M.[task.closed_at]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Onboarding.[Country]

                -- Query
                SELECT DISTINCT
                    M.[Country] AS [Service Area Name],
                    CAST(M.[Requisition Action] AS nvarchar(64)) AS [Case Number]
                FROM DM.dbo.DM_Onboarding AS M
                WHERE M.[TMS_Action_Code] IN ('TMS01')
                    AND YEAR(M.[TMS_action_end_date]) >= YEAR(GETDATE()) - 1;

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    IRC.dbo.IRC_Operation_Audit.[BA_Text]

                -- Query
                SELECT DISTINCT
                    M.[BA_Text] AS [Service Area Name],
                    CAST(M.[ID] AS nvarchar(64)) AS [Case Number]
                FROM IRC.dbo.IRC_Operation_Audit AS M
                WHERE M.[BA_code] = '1950'
                    AND YEAR(M.[Date Created On Demo]) >= YEAR(GETDATE()) - 1;
        

.. =====================================================================================================
.. ======== Stream of Case =============================================================================
.. =====================================================================================================

.. colref-detail:: prod_Stream_of_Case
    :title: Stream of Case

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Performance.[Stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    COALESCE(M.[Stream],
                        CASE
                        WHEN LEFT(P.[Case Number],3) IN ('SCT','CHA') THEN 'Customer Care'
                        WHEN P.[Service] IN (
                                'Account & Access Management',
                                'Business Processes & Solutions',
                                'ICT Infrastructure'
                            )
                                THEN 'Customer Care'
                        END) AS [Stream of Case]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN DM.dbo.DM_Performance AS M
                    ON M.[Case Number] = P.[Case Number]
                WHERE P.[Action Description] = 'Case closing';

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Performance.[Stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    COALESCE(M.[Stream],
                        CASE
                        WHEN LEFT(P.[Case Number],3) IN ('SCT','CHA') THEN 'Customer Care'
                        WHEN P.[Service] IN (
                                'Account & Access Management',
                                'Business Processes & Solutions',
                                'ICT Infrastructure'
                            )
                                THEN 'Customer Care'
                        END) AS [Stream of Case]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN DM.dbo.DM_Performance AS M
                    ON M.[Case Number] = P.[Case Number]
                WHERE P.[Action Description] = 'Case parking';

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Performance.[Stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    COALESCE(M.[Stream],
                        CASE
                        WHEN LEFT(P.[Case Number],3) IN ('SCT','CHA') THEN 'Customer Care'
                        WHEN P.[Service] IN (
                                'Account & Access Management',
                                'Business Processes & Solutions',
                                'ICT Infrastructure'
                            )
                                THEN 'Customer Care'
                        END) AS [Stream of Case]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN DM.dbo.DM_Performance AS M
                    ON M.[Case Number] = P.[Case Number]
                WHERE P.[Action Description] = 'Closing incident';

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Performance.[Stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    COALESCE(M.[Stream],
                        CASE
                        WHEN LEFT(P.[Case Number],3) IN ('SCT','CHA') THEN 'Customer Care'
                        WHEN P.[Service] IN (
                                'Account & Access Management',
                                'Business Processes & Solutions',
                                'ICT Infrastructure'
                            )
                                THEN 'Customer Care'
                        END) AS [Stream of Case]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN DM.dbo.DM_Performance AS M
                    ON M.[Case Number] = P.[Case Number]
                WHERE P.[Action Description] = 'Creating incident';

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Performance.[Stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    COALESCE(M.[Stream],
                        CASE
                        WHEN LEFT(P.[Case Number],3) IN ('SCT','CHA') THEN 'Customer Care'
                        WHEN P.[Service] IN (
                            'Account & Access Management',
                            'Business Processes & Solutions',
                            'ICT Infrastructure'
                        )
                                THEN 'Customer Care'
                        END) AS [Stream of Case]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN DM.dbo.DM_Performance AS M
                    ON M.[Case Number] = P.[Case Number]
                WHERE P.[Action Description] = 'Closing SCT by Agent';

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Performance.[Stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    COALESCE(M.[Stream],
                        CASE
                        WHEN LEFT(P.[Case Number],3) IN ('SCT','CHA') THEN 'Customer Care'
                        WHEN P.[Service] IN (
                                'Account & Access Management',
                                'Business Processes & Solutions',
                                'ICT Infrastructure'
                            )
                                THEN 'Customer Care'
                        END) AS [Stream of Case]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN DM.dbo.DM_Performance AS M
                    ON M.[Case Number] = P.[Case Number]
                WHERE P.[Action Description] = 'Closing SCT on behalf the Agent';

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Performance.[Stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    COALESCE(M.[Stream],
                        CASE
                        WHEN LEFT(P.[Case Number],3) IN ('SCT','CHA') THEN 'Customer Care'
                        WHEN P.[Service] IN (
                                'Account & Access Management',
                                'Business Processes & Solutions',
                                'ICT Infrastructure'
                            )
                                THEN 'Customer Care'
                        END) AS [Stream of Case]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN DM.dbo.DM_Performance AS M
                    ON M.[Case Number] = P.[Case Number]
                WHERE P.[Case Number] LIKE 'TRV%' AND P.[Action Description] = 'Case closing';           

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Performance.[Stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    COALESCE(M.[Stream],
                        CASE
                        WHEN LEFT(P.[Case Number],3) IN ('SCT','CHA') THEN 'Customer Care'
                        WHEN P.[Service] IN (
                                'Account & Access Management',
                                'Business Processes & Solutions',
                                'ICT Infrastructure'
                            )
                                THEN 'Customer Care'
                        END) AS [Stream of Case]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN DM.dbo.DM_Performance AS M
                    ON M.[Case Number] = P.[Case Number]
                WHERE P.[Action Description] = 'Chat entries';

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Performance.[Stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    COALESCE(M.[Stream],
                        CASE
                        WHEN LEFT(P.[Case Number],3) IN ('SCT','CHA') THEN 'Customer Care'
                        WHEN P.[Service] IN (
                                'Account & Access Management',
                                'Business Processes & Solutions',
                                'ICT Infrastructure'
                            )
                                THEN 'Customer Care'
                        END) AS [Stream of Case]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN DM.dbo.DM_Performance AS M
                    ON M.[Case Number] = P.[Case Number]
                WHERE LEFT(RIGHT(P.[Case Number],5),3) = 'TMS';

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Performance.[Stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    COALESCE(M.[Stream],
                            CASE
                            WHEN LEFT(P.[Case Number],3) IN ('SCT','CHA') THEN 'Customer Care'
                            WHEN P.[Service] IN (
                                    'Account & Access Management',
                                    'Business Processes & Solutions'
                                    'ICT Infrastructure'
                                )
                                    THEN 'Customer Care'
                            END) AS [Stream of Case]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN DM.dbo.DM_Performance AS M
                    ON M.[Case Number] = P.[Case Number];

.. =====================================================================================================
.. ======== Stream by Reporting Line ===================================================================
.. =====================================================================================================

.. colref-detail:: prod_Stream_by_Reporting_Line
    :title: Stream by Reporting Line

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    REF.dbo.Stream_Members_by_Reporting_Line.[stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    B.[stream] AS [Stream by Reporting Line]
                FROM DM.dbo.DM_Productivity AS P
                JOIN REF.dbo.Stream_Members_by_Reporting_Line AS B
                    ON P.[Action Agent - PERNR] = B.[PERNR_Personnel Number]
                    AND P.[Action Date] BETWEEN B.[HRP1001.BEGDA_Start Date] AND B.[HRP1001.ENDDA_End Date]
                WHERE P.[Action Description] = 'Case closing';                    

        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    REF.dbo.Stream_Members_by_Reporting_Line.[stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    B.[stream] AS [Stream by Reporting Line]
                FROM DM.dbo.DM_Productivity AS P
                JOIN REF.dbo.Stream_Members_by_Reporting_Line AS B
                    ON P.[Action Agent - PERNR] = B.[PERNR_Personnel Number]
                    AND P.[Action Date] BETWEEN B.[HRP1001.BEGDA_Start Date] AND B.[HRP1001.ENDDA_End Date]
                WHERE P.[Action Description] = 'Case parking';

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    REF.dbo.Stream_Members_by_Reporting_Line.[stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    B.[stream] AS [Stream by Reporting Line]
                FROM DM.dbo.DM_Productivity AS P
                JOIN REF.dbo.Stream_Members_by_Reporting_Line AS B
                    ON P.[Action Agent - PERNR] = B.[PERNR_Personnel Number]
                    AND P.[Action Date] BETWEEN B.[HRP1001.BEGDA_Start Date] AND B.[HRP1001.ENDDA_End Date]
                WHERE P.[Action Description] = 'Closing incident';

                -- Technical Notes
                -- Effective‑dated lookup; no special handling per incident beyond this join in the SP.

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    REF.dbo.Stream_Members_by_Reporting_Line.[stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    B.[stream] AS [Stream by Reporting Line]
                FROM DM.dbo.DM_Productivity AS P
                JOIN REF.dbo.Stream_Members_by_Reporting_Line AS B
                    ON P.[Action Agent - PERNR] = B.[PERNR_Personnel Number]
                    AND P.[Action Date] BETWEEN B.[HRP1001.BEGDA_Start Date] AND B.[HRP1001.ENDDA_End Date]
                WHERE P.[Action Description] = 'Creating incident';

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    REF.dbo.Stream_Members_by_Reporting_Line.[stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    B.[stream] AS [Stream by Reporting Line]
                FROM DM.dbo.DM_Productivity AS P
                JOIN REF.dbo.Stream_Members_by_Reporting_Line AS B
                    ON P.[Action Agent - PERNR] = B.[PERNR_Personnel Number]
                    AND P.[Action Date] BETWEEN B.[HRP1001.BEGDA_Start Date] AND B.[HRP1001.ENDDA_End Date]
                WHERE P.[Action Description] = 'Closing SCT by Agent';

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s)
                    REF.dbo.Stream_Members_by_Reporting_Line.[stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    B.[stream] AS [Stream by Reporting Line]
                FROM DM.dbo.DM_Productivity AS P
                JOIN REF.dbo.Stream_Members_by_Reporting_Line AS B
                    ON P.[Action Agent - PERNR] = B.[PERNR_Personnel Number]
                    AND P.[Action Date] BETWEEN B.[HRP1001.BEGDA_Start Date] AND B.[HRP1001.ENDDA_End Date]
                WHERE P.[Action Description] = 'Closing SCT on behalf the Agent';

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    REF.dbo.Stream_Members_by_Reporting_Line.[stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    B.[stream] AS [Stream by Reporting Line]
                FROM DM.dbo.DM_Productivity AS P
                JOIN REF.dbo.Stream_Members_by_Reporting_Line AS B
                    ON P.[Action Agent - PERNR] = B.[PERNR_Personnel Number]
                    AND P.[Action Date] BETWEEN B.[HRP1001.BEGDA_Start Date] AND B.[HRP1001.ENDDA_End Date]
                WHERE P.[Action Description] = 'Case closing'
                    AND LEFT(P.[Case Number],3) = 'TRV';

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    REF.dbo.Stream_Members_by_Reporting_Line.[stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    B.[stream] AS [Stream by Reporting Line]
                FROM DM.dbo.DM_Productivity AS P
                JOIN REF.dbo.Stream_Members_by_Reporting_Line AS B
                    ON P.[Action Agent - PERNR] = B.[PERNR_Personnel Number]
                    AND P.[Action Date] BETWEEN B.[HRP1001.BEGDA_Start Date] AND B.[HRP1001.ENDDA_End Date]
                WHERE P.[Action Description] = 'Chat entries';

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    REF.dbo.Stream_Members_by_Reporting_Line.[stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    B.[stream] AS [Stream by Reporting Line]
                FROM DM.dbo.DM_Productivity AS P
                JOIN REF.dbo.Stream_Members_by_Reporting_Line AS B
                    ON P.[Action Agent - PERNR] = B.[PERNR_Personnel Number]
                    AND P.[Action Date] BETWEEN B.[HRP1001.BEGDA_Start Date] AND B.[HRP1001.ENDDA_End Date]
                WHERE P.[Action Description] = 'Case closing'
                    AND P.[Assignment Group] = 'HR Onboarding';

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    REF.dbo.Stream_Members_by_Reporting_Line.[stream]

                -- Query
                SELECT DISTINCT
                    P.[Case Number],
                    B.[stream] AS [Stream by Reporting Line]
                FROM DM.dbo.DM_Productivity AS P
                JOIN REF.dbo.Stream_Members_by_Reporting_Line AS B
                    ON P.[Action Agent - PERNR] = B.[PERNR_Personnel Number]
                    AND P.[Action Date] BETWEEN B.[HRP1001.BEGDA_Start Date] AND B.[HRP1001.ENDDA_End Date]
                WHERE P.[Assignment Group] = 'Customer Care'
                    AND TRY_CONVERT(BIGINT, P.[Case Number]) IS NOT NULL;  -- isolates IRC numeric IDs

.. =====================================================================================================
.. ======== Stream of Case - Calculated ================================================================
.. =====================================================================================================

.. colref-detail:: prod_Stream_of_Case_Calculated
    :title: Stream of Case - Calculated

    .. tab-set::
        :class: dt-tabs-compact

        .. tab-item:: SG - Case closing

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Stream of Case]

                -- Query
                ;WITH NonCC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN,
                        [Action Date]         AS AD,
                        [Stream of Case]      AS SC,
                        ROW_NUMBER() OVER (
                            PARTITION BY [Action Agent - Name],[Action Date]
                            ORDER BY COUNT(*) DESC
                        ) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] IS NOT NULL
                    AND [Stream of Case] NOT IN ('Workflow','Customer Care')
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d
                WHERE rn=1
                ),
                CC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN,
                        [Action Date]         AS AD,
                        [Stream of Case]      AS SC,
                        ROW_NUMBER() OVER (
                            PARTITION BY [Action Agent - Name],[Action Date]
                            ORDER BY COUNT(*) DESC
                        ) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] = 'Customer Care'
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d
                WHERE rn=1
                )
                SELECT
                    P.[Case Number],
                    P.[Action DateTime],
                COALESCE(NC.SC,
                        NULLIF(P.[Stream of Case],'Workflow'),
                        CC.SC,
                        P.[Stream of Case]) AS [Stream of Case - Calculated]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN NonCC AS NC
                    ON NC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN NC.AD AND NC.Next_AD
                LEFT JOIN CC
                    ON CC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN CC.AD AND CC.Next_AD
                WHERE P.[Action Description] = 'Case closing';
                
        .. tab-item:: SG - Case parking

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Stream of Case]

                -- Query                    
                ;WITH NonCC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN, [Action Date] AS AD, [Stream of Case] AS SC,
                        ROW_NUMBER() OVER (PARTITION BY [Action Agent - Name],[Action Date] ORDER BY COUNT(*) DESC) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] IS NOT NULL AND [Stream of Case] NOT IN ('Workflow','Customer Care')
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d WHERE rn=1
                ),
                CC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN, [Action Date] AS AD, [Stream of Case] AS SC,
                        ROW_NUMBER() OVER (PARTITION BY [Action Agent - Name],[Action Date] ORDER BY COUNT(*) DESC) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] = 'Customer Care'
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d WHERE rn=1
                )
                SELECT
                    P.[Case Number],
                    P.[Action DateTime],
                COALESCE(NC.SC, NULLIF(P.[Stream of Case],'Workflow'), CC.SC, P.[Stream of Case]) AS [Stream of Case - Calculated]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN NonCC AS NC
                    ON NC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN NC.AD AND NC.Next_AD
                LEFT JOIN CC
                    ON CC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN CC.AD AND CC.Next_AD
                WHERE P.[Action Description] = 'Case parking';

        .. tab-item:: SG - Closing incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Stream of Case]

                -- Query                    
                ;WITH NonCC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN, [Action Date] AS AD, [Stream of Case] AS SC,
                        ROW_NUMBER() OVER (PARTITION BY [Action Agent - Name],[Action Date] ORDER BY COUNT(*) DESC) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] IS NOT NULL AND [Stream of Case] NOT IN ('Workflow','Customer Care')
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d WHERE rn=1
                ),
                CC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN, [Action Date] AS AD, [Stream of Case] AS SC,
                        ROW_NUMBER() OVER (PARTITION BY [Action Agent - Name],[Action Date] ORDER BY COUNT(*) DESC) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] = 'Customer Care'
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d WHERE rn=1
                )
                SELECT
                    P.[Case Number],
                    P.[Action DateTime],
                COALESCE(NC.SC, NULLIF(P.[Stream of Case],'Workflow'), CC.SC, P.[Stream of Case]) AS [Stream of Case - Calculated]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN NonCC AS NC
                    ON NC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN NC.AD AND NC.Next_AD
                LEFT JOIN CC
                    ON CC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN CC.AD AND CC.Next_AD
                WHERE P.[Action Description] = 'Closing incident';

        .. tab-item:: SG - Creating incident

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Stream of Case]

                -- Query                    
                ;WITH NonCC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN, [Action Date] AS AD, [Stream of Case] AS SC,
                        ROW_NUMBER() OVER (PARTITION BY [Action Agent - Name],[Action Date] ORDER BY COUNT(*) DESC) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] IS NOT NULL AND [Stream of Case] NOT IN ('Workflow','Customer Care')
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d WHERE rn=1
                ),
                CC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN, [Action Date] AS AD, [Stream of Case] AS SC,
                        ROW_NUMBER() OVER (PARTITION BY [Action Agent - Name],[Action Date] ORDER BY COUNT(*) DESC) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] = 'Customer Care'
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d WHERE rn=1
                )
                SELECT
                    P.[Case Number],
                    P.[Action DateTime],
                COALESCE(NC.SC, NULLIF(P.[Stream of Case],'Workflow'), CC.SC, P.[Stream of Case]) AS [Stream of Case - Calculated]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN NonCC AS NC
                    ON NC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN NC.AD AND NC.Next_AD
                LEFT JOIN CC
                    ON CC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN CC.AD AND CC.Next_AD
                WHERE P.[Action Description] = 'Creating incident';

        .. tab-item:: SG - Closing SC Task by Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Stream of Case]

                -- Query                    
                ;WITH NonCC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN, [Action Date] AS AD, [Stream of Case] AS SC,
                        ROW_NUMBER() OVER (PARTITION BY [Action Agent - Name],[Action Date] ORDER BY COUNT(*) DESC) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] IS NOT NULL AND [Stream of Case] NOT IN ('Workflow','Customer Care')
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d WHERE rn=1
                ),
                CC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN, [Action Date] AS AD, [Stream of Case] AS SC,
                        ROW_NUMBER() OVER (PARTITION BY [Action Agent - Name],[Action Date] ORDER BY COUNT(*) DESC) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] = 'Customer Care'
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d WHERE rn=1
                )
                SELECT
                    P.[Case Number],
                    P.[Action DateTime],
                COALESCE(NC.SC, NULLIF(P.[Stream of Case],'Workflow'), CC.SC, P.[Stream of Case]) AS [Stream of Case - Calculated]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN NonCC AS NC
                    ON NC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN NC.AD AND NC.Next_AD
                LEFT JOIN CC
                    ON CC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN CC.AD AND CC.Next_AD
                WHERE P.[Action Description] = 'Closing SCT by Agent';

        .. tab-item:: SG - Closing SC Task on behalf of Agent

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Stream of Case]

                -- Query
                ;WITH NonCC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN, [Action Date] AS AD, [Stream of Case] AS SC,
                        ROW_NUMBER() OVER (PARTITION BY [Action Agent - Name],[Action Date] ORDER BY COUNT(*) DESC) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] IS NOT NULL AND [Stream of Case] NOT IN ('Workflow','Customer Care')
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d WHERE rn=1
                ),
                CC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN, [Action Date] AS AD, [Stream of Case] AS SC,
                        ROW_NUMBER() OVER (PARTITION BY [Action Agent - Name],[Action Date] ORDER BY COUNT(*) DESC) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] = 'Customer Care'
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d WHERE rn=1
                )
                SELECT
                    P.[Case Number],
                    P.[Action DateTime],
                COALESCE(NC.SC, NULLIF(P.[Stream of Case],'Workflow'), CC.SC, P.[Stream of Case]) AS [Stream of Case - Calculated]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN NonCC AS NC
                    ON NC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN NC.AD AND NC.Next_AD
                LEFT JOIN CC
                    ON CC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN CC.AD AND CC.Next_AD
                WHERE P.[Action Description] = 'Closing SCT on behalf the Agent';

        .. tab-item:: SG - Travel action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Stream of Case]

                -- Query            
                ;WITH NonCC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN, [Action Date] AS AD, [Stream of Case] AS SC,
                        ROW_NUMBER() OVER (PARTITION BY [Action Agent - Name],[Action Date] ORDER BY COUNT(*) DESC) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] IS NOT NULL AND [Stream of Case] NOT IN ('Workflow','Customer Care')
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d WHERE rn=1
                ),
                CC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN, [Action Date] AS AD, [Stream of Case] AS SC,
                        ROW_NUMBER() OVER (PARTITION BY [Action Agent - Name],[Action Date] ORDER BY COUNT(*) DESC) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] = 'Customer Care'
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d WHERE rn=1
                )
                SELECT
                P.[Case Number],
                P.[Action DateTime],
                COALESCE(NC.SC, NULLIF(P.[Stream of Case],'Workflow'), CC.SC, P.[Stream of Case]) AS [Stream of Case - Calculated]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN NonCC AS NC
                    ON NC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN NC.AD AND NC.Next_AD
                LEFT JOIN CC
                    ON CC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN CC.AD AND CC.Next_AD
                WHERE P.[Case Number] LIKE 'TRV%'
                    AND P.[Action Description] = 'Case closing';

        .. tab-item:: SG - Chats action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Stream of Case]

                -- Query            
                ;WITH NonCC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN, [Action Date] AS AD, [Stream of Case] AS SC,
                        ROW_NUMBER() OVER (PARTITION BY [Action Agent - Name],[Action Date] ORDER BY COUNT(*) DESC) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] IS NOT NULL AND [Stream of Case] NOT IN ('Workflow','Customer Care')
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d WHERE rn=1
                ),
                CC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN, [Action Date] AS AD, [Stream of Case] AS SC,
                        ROW_NUMBER() OVER (PARTITION BY [Action Agent - Name],[Action Date] ORDER BY COUNT(*) DESC) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] = 'Customer Care'
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d WHERE rn=1
                )
                SELECT
                    P.[Case Number],
                    P.[Action DateTime],
                COALESCE(NC.SC, NULLIF(P.[Stream of Case],'Workflow'), CC.SC, P.[Stream of Case]) AS [Stream of Case - Calculated]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN NonCC AS NC
                    ON NC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN NC.AD AND NC.Next_AD
                LEFT JOIN CC
                    ON CC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN CC.AD AND CC.Next_AD
                WHERE P.[Action Description] = 'Chat entries';

        .. tab-item:: TMS - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Stream of Case]

                -- Query            
                ;WITH NonCC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN, [Action Date] AS AD, [Stream of Case] AS SC,
                        ROW_NUMBER() OVER (PARTITION BY [Action Agent - Name],[Action Date] ORDER BY COUNT(*) DESC) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] IS NOT NULL AND [Stream of Case] NOT IN ('Workflow','Customer Care')
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d WHERE rn=1
                ),
                CC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN, [Action Date] AS AD, [Stream of Case] AS SC,
                        ROW_NUMBER() OVER (PARTITION BY [Action Agent - Name],[Action Date] ORDER BY COUNT(*) DESC) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] = 'Customer Care'
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d WHERE rn=1
                )
                SELECT
                    P.[Case Number],
                    P.[Action DateTime],
                COALESCE(NC.SC, NULLIF(P.[Stream of Case],'Workflow'), CC.SC, P.[Stream of Case]) AS [Stream of Case - Calculated]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN NonCC AS NC
                    ON NC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN NC.AD AND NC.Next_AD
                LEFT JOIN CC
                    ON CC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN CC.AD AND CC.Next_AD
                WHERE LEFT(RIGHT(P.[Case Number],5),3) = 'TMS';

        .. tab-item:: IRC - Action

            .. code-block:: tsql

                -- Source Field(s)
                    DM.dbo.DM_Productivity.[Stream of Case]

                -- Query            
                ;WITH NonCC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN, [Action Date] AS AD, [Stream of Case] AS SC,
                        ROW_NUMBER() OVER (PARTITION BY [Action Agent - Name],[Action Date] ORDER BY COUNT(*) DESC) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] IS NOT NULL AND [Stream of Case] NOT IN ('Workflow','Customer Care')
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d WHERE rn=1
                ),
                CC AS (
                SELECT AAN, AD, SC,
                        LEAD(AD,1,CONVERT(date,'9999-12-31')) OVER (PARTITION BY AAN ORDER BY AD) AS Next_AD
                FROM (
                    SELECT [Action Agent - Name] AS AAN, [Action Date] AS AD, [Stream of Case] AS SC,
                        ROW_NUMBER() OVER (PARTITION BY [Action Agent - Name],[Action Date] ORDER BY COUNT(*) DESC) AS rn
                    FROM DM.dbo.DM_Productivity
                    WHERE [Stream of Case] = 'Customer Care'
                    GROUP BY [Action Agent - Name],[Action Date],[Stream of Case]
                ) d WHERE rn=1
                )
                SELECT
                    P.[Case Number],
                    P.[Action DateTime],
                COALESCE(NC.SC, NULLIF(P.[Stream of Case],'Workflow'), CC.SC, P.[Stream of Case]) AS [Stream of Case - Calculated]
                FROM DM.dbo.DM_Productivity AS P
                LEFT JOIN NonCC AS NC
                    ON NC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN NC.AD AND NC.Next_AD
                LEFT JOIN CC
                    ON CC.AAN = P.[Action Agent - Name]
                    AND P.[Action Date] BETWEEN CC.AD AND CC.Next_AD
                WHERE YEAR(P.[Action DateTime]) >= YEAR(GETDATE()) - 1;

