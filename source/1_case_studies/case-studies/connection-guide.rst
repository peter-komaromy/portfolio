Connecting to the Warehouse
===========================

|br|

.. grid:: 1
    :class-container: case-study-intro-grid

    .. grid-item-card:: Documentation challenge
        :columns: 9

        :blue-bold:`Starting point` - Data warehouse users needed connection instructions for three tools across on-premises and Microsoft Fabric deployments.

        :blue-bold:`Problem` - The same task changed by tool and platform, making a single linear procedure difficult to scan and maintain.

        :blue-bold:`Work` - Designed and wrote a task-based guide organized by data tool, with the relevant platform-specific steps presented in each documentation version.

        :blue-bold:`Demonstrates` - Procedural writing, information architecture, audience-aware content design, versioned documentation, and docs-as-code authoring.


User Guide Sample
-----------------

This sample is adapted from the deployed Data Warehouse Documentation Portal. In the original portal, the on-premises and Fabric instructions were published as separate documentation versions. The portfolio presents both variants on one page so their organization can be reviewed directly.

Connection details in the text use synthetic values to protect internal information.

Select a platform, then select the data tool you use.

.. raw:: html

    <div class="connection-guide-platform-switcher d-flex flex-wrap justify-content-end align-items-center gap-2 mb-3" data-connection-guide-platform-switcher data-default-platform="onprem">
        <span id="connection-guide-platform-label" class="fw-semibold">Platform</span>
        <div class="btn-group btn-group-sm" role="group" aria-labelledby="connection-guide-platform-label">
            <button type="button" class="btn btn-outline-primary active" data-platform="onprem" aria-pressed="true">On-prem</button>
            <button type="button" class="btn btn-outline-primary" data-platform="fabric" aria-pressed="false">Fabric</button>
        </div>
    </div>

.. tab-set::
    :class: connection-guide-tool-tabs

    .. tab-item:: SSMS

        .. rst-class:: para-list

        Use SQL Server Management Studio (SSMS) when you need to write, run, and inspect SQL queries directly.

        1. Open SSMS.
        2. In the *Connect to Server* dialog, enter the platform-specific connection details:

           .. container:: connection-guide-platform-content platform-onprem

              - Server name: ``warehouse.example.internal``
              - Authentication: *Windows Authentication*

           .. container:: connection-guide-platform-content platform-fabric

              - Server name: ``example.datawarehouse.fabric.microsoft.com``
              - Authentication: *Microsoft Entra MFA*

        3. Select *Connect*.

        .. rst-class:: img-caption-top

        *SSMS Login*

        .. container:: tb-blue-rule-wide

            .. image:: /_static/png/User_guides/1_SSMS_Login.png
                :alt: SSMS Login
                :width: 100%
                :align: center
                :class: tb-blue-rule-wide

        |br|

        4. Select *New Query* on the toolbar.

        .. rst-class:: img-caption-top

        *Start a New Query*

        .. container:: tb-blue-rule-wide

            .. image:: /_static/png/User_guides/2_SSMS_Click_New_Query.png
                :alt: Start a New Query
                :width: 100%
                :align: center
                :class: tb-blue-rule-wide

        |br|

        5. Enter or paste the query in the query editor.
        6. Select *Execute*.

        .. rst-class:: img-caption-top

        *Execute your Query*

        .. container:: tb-blue-rule-wide

            .. image:: /_static/png/User_guides/3_SSMS_Execute.png
                :alt: Execute your Query
                :width: 100%
                :align: center
                :class: tb-blue-rule-wide

        |br|

        SSMS displays the query results below the editor.

    .. tab-item:: Power BI

        .. rst-class:: para-list

        Use Power BI Desktop when you want to load warehouse data into a report or query it directly.

        1. Open Power BI Desktop.
        2. On the *Home* tab, select *Get data* > *SQL Server*. Alternatively, select *Import data from SQL Server* on the report canvas.

        .. rst-class:: img-caption-top

        *Connect to the Server*

        .. container:: tb-blue-rule-wide

            .. image:: /_static/png/User_guides/4_PBI_Select_SQL_Server.png
                :alt: Connect to Server
                :width: 100%
                :align: center
                :class: tb-blue-rule-wide

        |br|

        3. Enter the platform-specific connection details:

           .. container:: connection-guide-platform-content platform-onprem

              - Server: ``warehouse.example.internal``
              - Database: ``SampleWarehouse``
              - If prompted, use your Windows credentials.

           .. container:: connection-guide-platform-content platform-fabric

              - Server: ``example.datawarehouse.fabric.microsoft.com``
              - Database: ``SampleWarehouse``
              - If prompted, select *Microsoft account*, sign in, and then select *Connect*.

        4. Choose a data connectivity mode:

           - Select *Import* to load a copy of the query result into the Power BI file.
           - Select *DirectQuery* to query the warehouse when the report is used.

        5. If required, expand *Advanced options* and enter an SQL statement.
        6. Select *OK*.

        .. rst-class:: img-caption-top

        *Enter Connection Details*

        .. container:: tb-blue-rule-wide

            .. image:: /_static/png/User_guides/5_PBI_Click_OK.png
                :alt: Enter Connection Details
                :width: 100%
                :align: center
                :class: tb-blue-rule-wide

        |br|

        7. Select *Load* to add the data to the report, or select *Transform Data* to edit it first.

        Loading can take several minutes, depending on the size of the query result and the selected connectivity mode.

        .. rst-class:: img-caption-top

        *Load Data*

        .. container:: tb-blue-rule-wide

            .. image:: /_static/png/User_guides/6_PBI_Result.png
                :alt: Load Data
                :width: 100%
                :align: center
                :class: tb-blue-rule-wide

        |br|

        In Import mode, the query results are available in Power BI as a table.

    .. tab-item:: Excel

        .. rst-class:: para-list

        Use Excel when you want to analyze warehouse data in a worksheet.

        1. Open Excel.
        2. On the *Data* tab, select *Get Data* > *From Database* > *From SQL Server Database*.

        .. rst-class:: img-caption-top

        *Connect to the Server*

        .. container:: tb-blue-rule-wide

            .. image:: /_static/png/User_guides/7_Excel.png
                :alt: Connect to Server
                :width: 100%
                :align: center
                :class: tb-blue-rule-wide

        |br|

        3. Enter the platform-specific connection details:

           .. container:: connection-guide-platform-content platform-onprem

              - Server: ``warehouse.example.internal``
              - Database: ``SampleWarehouse``
              - If prompted, use your Windows credentials.

           .. container:: connection-guide-platform-content platform-fabric

              - Server: ``example.datawarehouse.fabric.microsoft.com``
              - Database: ``SampleWarehouse``
              - If prompted, select *Microsoft account*, sign in, and then select *Connect*.

        4. If required, expand *Advanced options* and enter a SQL statement.
        5. Select *OK*.

        .. rst-class:: img-caption-top

        *Enter Connection Details*

        .. container:: tb-blue-rule-wide

            .. image:: /_static/png/User_guides/8_Excel.png
                :alt: Enter Connection Details
                :width: 100%
                :align: center
                :class: tb-blue-rule-wide

        |br|

        6. In the Navigator, select *Load* to add the data to a worksheet, or select *Transform Data* to edit it first.

        Loading can take several minutes, depending on the size of the query result.

        .. rst-class:: img-caption-top

        *Load Data*

        .. container:: tb-blue-rule-wide

            .. image:: /_static/png/User_guides/9_Excel.png
                :alt: Load Data
                :width: 100%
                :align: center
                :class: tb-blue-rule-wide

        |br|

        The query results appear in a new worksheet.
