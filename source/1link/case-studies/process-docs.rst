Automation Screen Reference
===========================

.. rubric:: *Sample 3*

See below for a list of key screen interactions with their variables and XPaths specified.

Report Download
^^^^^^^^^^^^^^^

.. rst-class:: img-caption-top

*Dropdown menu & link*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/TMS_Case_Closure/ScreenMapping_16.png
        :align: center
        :width: 100%
        :class: tb-blue-rule-wide
        :alt: TMS_Case_Closure

.. code-block:: powershell
    :linenos:
    :lineno-start: 1

    $sXP_Report_DropDownLink = '//td[@aria-label="Actions for ' & $sReportFileName & '"]/div/div[@class="dropdown"]'
    $sDownloadLink = '//td[@aria-label="Actions for Onboarding complete"]/div/div[@class="dropdown show"]//button[@aria-label="Download report"]'   

-----

.. rst-class:: img-caption-top

*Spinner*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/TMS_Case_Closure/ScreenMapping_16c.png
        :align: center
        :width: 60%
        :class: tb-blue-rule-wide
        :alt: TMS_Case_Closure

.. code-block:: powershell
    :linenos:
    :lineno-start: 3

    $sXP_spinner = '//div[@class="spinner"]'

----------------------------------------------------------------------------------------------------------

Requisiton
^^^^^^^^^^

.. rst-class:: img-caption-top

*Manage Requisitions screen*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/TMS_Case_Closure/ScreenMapping_5.png
        :align: center
        :width: 100%
        :class: tb-blue-rule-wide
        :alt: TMS_Case_Closure

.. code-block:: powershell
    :linenos:
    :lineno-start: 1

    $sXP_Requisition_Clear = 'clearAll()'
    $sXP_Requisition_Searchbutton = '//input[@name="search"]'
    $sXP_Requisition_JobField = '//input[@name="sExternalJobID"]'
    $sXP_Requisition_ApplicationsLink = '//*[@id="grid_jobs_table"]//span[@title="' & $oApplicant($sK_JobNo) & '"]/ancestor::tr//td[@class="actionCell"]//img[@title="Applications"]/parent::a'
    $sXP_Requisition_ResultTable = '//table[@id="grid_jobs_table"]'
    $sXP_Requisition_RecordCount = '//div[@class="recordCount"]'

-----

.. rst-class:: img-caption-top

*Requisitions - No record*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/TMS_Case_Closure/ScreenMapping_5b.png
        :align: center
        :width: 100%
        :class: tb-blue-rule-wide
        :alt: TMS_Case_Closure

.. code-block:: powershell
    :linenos:
    :lineno-start: 7

    $sXP_Requisition_noRecords = '//tr[@class="noRecords"]'

------------------------------------------------------------------------------------------------

Applications
^^^^^^^^^^^^

.. rst-class:: img-caption-top

*Applications - Search tab*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/TMS_Case_Closure/ScreenMapping_6.png
        :align: center
        :width: 100%
        :class: tb-blue-rule-wide
        :alt: TMS_Case_Closure

.. code-block:: powershell
    :linenos:
    :lineno-start: 1

    $sXP_Application_SearchTab = '//*[@id="tab_tab__0_wrapper" and ./span/text()="Search"]'
    $sXP_Application_Job = '//*[@id="sJobField"]'
    $sXP_Application_SearchJob = '//i[@title="Search" and contains(@class,"searchButton")]'
    $sXP_Application_Status = '//*[@id="ApplicationStatusWrapper"]/span/label[contains(text(),"' & $sAppStatus & '")]'
    $sXP_Application_AppNo = '//*/input[@name="lApplicantNumber"]'
    $sXP_Application_SearchButton = '//*[@id="tabItem_tab__0"]//input[@name="search"]'
    $sXP_Application_StatusWrapper = '//*[@id="ApplicationStatusWrapper"]/span'

-----

.. rst-class:: img-caption-top

*Applications - Legacy screen link*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/TMS_Case_Closure/ScreenMapping_6b.png
        :align: center
        :width: 100%
        :class: tb-blue-rule-wide
        :alt: TMS_Case_Closure

.. code-block:: powershell
    :linenos:
    :lineno-start: 8

    $sXP_Application_LegacyScreenLink = '//button[@aria-label="Manage Applications"]'

-----

.. rst-class:: img-caption-top

*Applications - Results tab*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/TMS_Case_Closure/ScreenMapping_7.png
        :align: center
        :width: 100%
        :class: tb-blue-rule-wide
        :alt: TMS_Case_Closure

.. code-block:: powershell
    :linenos:
    :lineno-start: 1

    $sXP_Application_resultTable = '//table[@id="grid_applications_table"]'
    $sXP_Application_Link = '//*[@id="sUpDownId_1"]'
    $sXP_Application_recordcount = '//*[@id="tabItem_tab__1"]//div[@class="recordCount"]'

------------------------------------------------------------------------------------------------

Applicant Card & Flags
^^^^^^^^^^^^^^^^^^^^^^

.. rst-class:: img-caption-top

*Applicant Card*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/TMS_Case_Closure/ScreenMapping_8.png
        :align: center
        :width: 100%
        :class: tb-blue-rule-wide
        :alt: TMS_Case_Closure

.. code-block:: powershell
    :linenos:
    :lineno-start: 1

    $sXP_Application_FlagElement = '//i[@title="' & $aUnCheckFlags[$i] & '"]'
    $sXP_Application_OpenFlagWindow = '//*[@id="popup-top"]/div/span[2]/a[contains(text(), "Add")]'
    # PERNR: not used currently
    # Index Number: not used currently
    $sXP_Application_OfferLink = '//h5[contains(text(),"' & $oApplicant($sK_JobNo) & '")]/parent::div/parent::div/div/span[contains(@class,"offerStatus")]/dd/a'
    $sXP_Application_StatusChangeLink = '//h5[contains(text(),"' & $oApplicant($sK_JobNo) & '")]/parent::div/parent::div//a[text()="' & $sStatusOnboardingComplete & '"]'

-----

.. rst-class:: img-caption-top

*Flags popup*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/TMS_Case_Closure/ScreenMapping_9.png
        :align: center
        :width: 50%
        :class: tb-blue-rule-wide
        :alt: TMS_Case_Closure

.. code-block:: powershell
    :linenos:
    :lineno-start: 1

    $sXP_Flags_FlagElement = '//*[@id="ctl00_Main_flagsWrapper"]/div/div/label[contains(text(), "' & $sFlag & '")]/input'
    $sXP_Flags_SaveFlagWindow = '//*[@id="ctl00_Buttons_Save"]'
    $sXP_Flags_CancelFlagWindow = '//*[@value="Cancel"]'

-----

.. rst-class:: img-caption-top

*Status Change*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/TMS_Case_Closure/ScreenMapping_10.png
        :align: center
        :width: 90%
        :class: tb-blue-rule-wide
        :alt: TMS_Case_Closure

.. code-block:: powershell
    :linenos:
    :lineno-start: 1

    $sXP_Status_TargetStatusRow = '//*[@id="ctl00_Main__objApplicationSelect"]/option[contains(text(),"' & $sStatusOnboardingSurvey & '")]'
    $sJS_Status_Next  # JS that the "next" button calls: 'PageCallBack("next")'    

-----

.. rst-class:: img-caption-top

*Confirm Status Change*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/TMS_Case_Closure/ScreenMapping_10b.png
        :align: center
        :width: 70%
        :class: tb-blue-rule-wide
        :alt: TMS_Case_Closure

.. code-block:: powershell
    :linenos:
    :lineno-start: 3

    $sXP_Status_StatusSubmit = '//*[@id="SubmitButton"]'  

-------------------------------------------------------------------------------------------

Offer Card
^^^^^^^^^^

.. rst-class:: img-caption-top

*Offer Card*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/TMS_Case_Closure/ScreenMapping_11.png
        :align: center
        :width: 80%
        :class: tb-blue-rule-wide
        :alt: TMS_Case_Closure

.. code-block:: powershell
    :linenos:
    :lineno-start: 2
    
    $sXP_Offer_SendDocumentsLink = '//input[@id="bCanExportDocuments"]'
    $sXP_Offer_SaveAndClose = '//*[@id="save"]'
    $sXP_Offer_Cancel = '//*[@id="cancel"]'

-----

.. rst-class:: img-caption-top

*Offer details*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/TMS_Case_Closure/ScreenMapping_12.png
        :align: center
        :width: 80%
        :class: tb-blue-rule-wide
        :alt: TMS_Case_Closure

.. code-block:: powershell
    :linenos:
    :lineno-start: 1

    $sXP_Offer_PositionInfoElement = '//div[@id="sPositionNo_1_fieldInfo"]'

-----------------------------------------------------------------------------------------------

User Records
^^^^^^^^^^^^

.. rst-class:: img-caption-top

*Manage: Users*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/TMS_Case_Closure/ScreenMapping_13.png
        :align: center
        :width: 100%
        :class: tb-blue-rule-wide
        :alt: TMS_Case_Closure

.. code-block:: powershell
    :linenos:
    :lineno-start: 1

    $sXP_User_FN = '//*[@id="ctl00_Main_manageUsers_ctl00_ctl00_ctl00"]'
    $sXP_User_LN = '//*[@id="ctl00_Main_manageUsers_ctl00_ctl00_ctl01"]'
    $sXP_User_Email = '//*[@id="ctl00_Main_manageUsers_ctl00_ctl00_ctl04"]'
    $sXP_User_Clear = '//*[@id="ctl00_Main_manageUsers_ctl00_ctl00_Clear"]'
    $sXP_User_Search = '//*[@id="ctl00_Main_manageUsers_ctl00_ctl00_SearchButton"]'
    $sXP_User_LinkToProfile = '//*[@id="manageUsers_table"]/tbody/tr[' & $iUserProfile + 1 & ']/td[' & $iColUser_FN + 1 & ']/span/a'
    $sXP_User_UnArchiveLink = ''
    $sXP_User_ArchiveLink = '//*[@id="ctl00_Main_manageUsers_ctl00_ctl00_bArchive"]'
    $sXP_User_recordCount = '//*[@id="ctl00_Main_manageUsers"]//div[@class="recordCount"]'
    $sXP_User_resulttable = '//*[@id="manageUsers_table"]'

|br|

.. rst-class:: img-caption-top

*Users - Loading Overlay*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/TMS_Case_Closure/ScreenMapping_13b.png
        :align: center
        :width: 100%
        :class: tb-blue-rule-wide
        :alt: TMS_Case_Closure

.. code-block:: powershell
    :linenos:
    :lineno-start: 11

    $sXP_User_loadingOverlay = '//*[@id="gridBlanketmanageUsers"]'

|br|

.. rst-class:: img-caption-top

*Users - No results*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/TMS_Case_Closure/ScreenMapping_13c.png
        :align: center
        :width: 100%
        :class: tb-blue-rule-wide
        :alt: TMS_Case_Closure

.. code-block:: powershell
    :linenos:
    :lineno-start: 12

    $sXP_User_noresult = '//tr[@id="manageUsers_noRecords"]'

|br|

.. rst-class:: img-caption-top

*User Card*

.. container:: tb-blue-rule-wide

    .. image:: /_static/png/TMS_Case_Closure/ScreenMapping_14.png
        :align: center
        :width: 80%
        :class: tb-blue-rule-wide
        :alt: TMS_Case_Closure

.. code-block:: powershell
    :linenos:
    :lineno-start: 1

    $sXP_User_PositionInfoElement = '//div[@id="sPositionNo_1_fieldInfo"]'
    $sXP_User_PERNR = '//input[@id="sPerNr_1"]'
    $sXP_User_Index = '//input[@id="sIndex_1"]'

|br|

|br|