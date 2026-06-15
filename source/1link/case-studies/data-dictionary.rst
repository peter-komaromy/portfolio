

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

**Column Reference**

|br|

Filter with header icons > Expand row toggles for hidden fields > Click truncated text or  :fas:`circle-info;sd-text-info` for full details. \| For table introductions, see :dead-link:`User Guides <../../1_User_Guides/User_Guides.fabric>`.



.. =================================================================================================================
.. --- DM_Changes Col. Ref. ---------------------------------------------------------------------------------------
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

    * - CDPOS.TABNAME_Table Name
      - Name of the SAP table where the change occured
      - ``BSEC``, ``LFA1``
      - SAP
      - CDPOS
      - N/A
      - 

    * - CDPOS.TABKEY_Changed table record key
      - Concatenated key that uniquely identifies the record in the changed SAP table
      - ``3000000261125 00010101001``
      - SAP
      - CDPOS
      - N/A
      - 

    * - DM_Changes.00_Change_Key
      - Reserved for technical purposes
      - ``NULL``
      - SAP
      - N/A
      - N/A
      - 

    * - DM_Changes.01_Change_Key
      - Reserved for technical purposes
      - ``NULL``
      - SAP
      - N/A
      - N/A
      - 

    * - DM_Changes.02_Change_Key
      - Reserved for technical purposes
      - ``NULL``
      - SAP
      - N/A
      - N/A
      - 

    * - CDHDR.USERNAME_User name of the person responsible in change document
      - Username of the SAP user who made the change
      - ``JSMITH``
      - SAP
      - CDPOS
      - N/A
      - 

    * - DM_Person.PA0001_ENAME
      - Full name of the SAP user who made the change
      - ``NULL``
      - SAP
      - CDPOS
      - N/A
      - 

    * - DM_Person.PA0105_EMAIL
      - Email address of the SAP user who made the change
      - ``NULL``
      - SAP
      - PA0105
      - N/A
      - 

    * - DM_Person.HRP1008_Service_Area
      - Service Area of the SAP user who made the change
      - ``1950``, ``4500``
      - SAP
      - HRP1008
      - N/A
      - 

    * - DM_Person.HRP1001_Org_Unit
      - Organizational unit of the SAP user who made the change
      - ``NULL``
      - SAP
      - HRP1001
      - N/A
      - 

    * - DM_Person.Demo_Stream
      - Demo Stream of the SAP user who made the change
      - ``NULL``
      - SAP
      - ?
      - N/A
      - 

    * - DM_Changes.Change_Timestamp
      - Timestamp when the change was recorded in the DM_Changes table
      - ``2022-01-01 03:08:00.000``
      - SAP
      - N/A
      - N/A
      - 

    * - CDPOS_Parse.CDHDR_Timestamp
      - Timestamp parsed from the original SAP change document header
      - ``2022-01-01 03:08:00.000``
      - SAP
      - CDHDR
      - N/A
      - 

    * - CDHDR.UDATE_Creation date of the change document
      - Date on which the change document was created in SAP
      - ``2022-01-01``
      - SAP
      - CDHDR
      - N/A
      - 

    * - CDHDR.UTIME_Time changed
      - Time of day when the change was made
      - ``03:08:00.000``
      - SAP
      - CDHDR
      - N/A
      - 

    * - CDHDR.TCODE_Transaction in which a change was made
      - SAP transaction code used for making the change
      - ``FK03``, ``ME41``
      - SAP
      - CDHDR
      - N/A
      - 

    * - CDHDR.CHANGE_IND_Application object change type (U, I, E, D)
      - Type of change made.
      - ``U``, ``I``, ``E``, ``D``
      - SAP
      - CDHDR
      - ``U`` = update, ``I`` = insert, ``E`` = extension, ``D`` = deletion
      - 

    * - CDPOS.VALUE_NEW_New contents of changed field
      - Value in the field after the change
      - ``Bampton Road``, ``001653539-0000``
      - SAP
      - CDPOS
      - N/A
      - 

    * - CDPOS.VALUE_OLD_Old contents of changed field
      - Value in the field before the change
      - ``Bampton Road``, ``001653539-0000``
      - SAP
      - CDPOS
      - N/A
      - 

    * - CDHDR.OBJECTCLAS_Object class
      - Object class used by SAP to group similar change documents
      - ``BELEG``, ``IBAN``
      - SAP
      - CDPOS
      - ``BELEG`` = Accounting Documents, ``IBAN`` = International Bank Account Number
      - 

    * - CDHDR.OBJECTID_Object Value
      - Unique identifier of the changed business object instance
      - ``1900000221``
      - SAP
      - CDHDR
      - Often aligned with ``TABKEY``
      - 

    * - CDHDR.CHANGENR_Change Number of Document
      - System-generated ID for a change event in SAP (i.e., the "change number" of the SAP document)
      - ``0133557976``
      - SAP
      - CDHDR
      - N/A
      - 

    * - CDHDR.VERSION_3-Byte field
      - Version information
      - ``NULL``
      - SAP
      - CDHDR
      - N/A
      - 

    * - CDHDR.Expr1
      - Reserved for technical purposes
      - ``NULL``
      - SAP
      - CDHDR
      - N/A
      - 

    * - CDHDR.Expr2
      - Reserved for technical purposes
      - ``NULL``
      - SAP
      - CDHDR
      - N/A
      - 

    * - CDHDR.Expr3
      - Reserved for technical purposes
      - ``NULL``
      - SAP
      - CDHDR
      - N/A
      - 

    * - CDPOS.FNAME_Field Name
      - Technical field name that was changed in the target SAP table
      - ``BKTXT``, ``FKBER``
      - SAP
      - CDPOS
      - N/A
      - 

    * - CDPOS.CHNGIND_Change Type (U, I, E, D)
      - Type of change applied to the field
      - ``U``, ``I``, ``E``, ``D``
      - SAP
      - CDPOS
      - ``U`` = update, ``I`` = insert, ``E`` = extension, ``D`` = deletion
      - 

    * - CDPOS.TEXT_CASE_Flag: X=Text change
      - Shows whether the change affected a text field
      - ``X``, ``NULL``
      - SAP
      - CDPOS
      - ``X`` = yes
      - 

    * - CDPOS.UNIT_OLD_Change documents, unit referenced
      - Measurement unit of the old value before the change
      - ``KG``
      - SAP
      - CDPOS
      - N/A
      - 

    * - CDPOS.UNIT_NEW_Change documents, unit referenced
      - Measurement unit of the new value after the change
      - ``KG``
      - SAP
      - CDPOS
      - N/A
      - 

    * - CDPOS.CUKY_OLD_Change documents, referenced currency
      - Currency code of the old value before the change.
      - ``USD``
      - SAP
      - CDPOS
      - N/A
      - 

    * - CDPOS.CUKY_NEW_Change documents, referenced currency
      - Currency code of the new value after the change.
      - ``USD``
      - SAP
      - CDPOS
      - N/A
      - 

    * - CDPOS_Parse.GJAHR_Fiscal Year
      - Fiscal year of the accounting document referenced by the change
      - ``2023``
      - SAP
      - CDPOS
      - Values parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - CDPOS_Parse.BELNR_Accounting Document Number
      - Number of the accounting document affected by the change
      - ``0100000095``
      - SAP
      - CDPOS
      - Parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - CDPOS_Parse.BUZEI_Number of Line Item Within Accounting Document
      - Line item number in the accounting document affected by the change
      - ``186``
      - SAP
      - CDPOS
      - Parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - CDPOS_Parse.LIFNR_Account Number of Vendor or Creditor
      - Account number of vendor or creditor
      - ``1900001445``
      - SAP
      - CDPOS
      - Parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - CDPOS_Parse.BANKS_Bank country key
      - Country key of the bank that holds the vendor’s account
      - ``051``, ``2RO``
      - SAP
      - CDPOS
      - Parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - CDPOS_Parse.BANKL_Bank Keys
      - Bank identifier within the country (bank code)
      - ``00100012``
      - SAP
      - CDPOS
      - Parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - CDPOS_Parse.BANKN_Bank account number
      - Bank account number of the vendor or creditor
      - ``00000000-76535631``
      - SAP
      - CDPOS
      - Parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - CDPOS_Parse.IBAN_IBAN (International Bank Account Number)
      - IBAN of the vendor's bank account, if present in the key
      - ``00000000-78607804``
      - SAP
      - CDPOS
      - Parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - CDPOS_Parse.BKONT_Bank Control Key
      - Bank control key, used for payment control and bank communication
      - ``33``, ``05``, ``Q``, ``F``
      - SAP
      - CDPOS
      - Parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - CDPOS_Parse.ADDRNUMBER_Address Number
      - SAP internal address number linked to the vendor
      - ``0000262599``
      - SAP
      - CDPOS
      - Parsed from the ``CDPOS.TABKEY`` string, so that you don't have to manually decode the key for filtering or reference.
      - 

    * - CDPOS_Parse.USERNAME_User name of the person responsible in change document
      - SAP user name (used when not available in CDHDR)
      - ``JSMITH``
      - SAP
      - CDPOS
      - N/A
      - 

    * - BKPF.Document Number
      - Document number from SAP BKPF
      - ``NULL``
      - SAP
      - BKPF (Accounting Document Header); Field: BELNER 
      - N/A
      - 

    * - BSEG.Document Number Line Item
      - Line item number from SAP BSEG 
      - ``NULL``
      - SAP
      - BSEG (Accounting Document Segment) Field: BUZEI
      - N/A
      - 

    * - DD02T.DDTEXT_Short Description of Repository Objects
      - Short description of the changed SAP table
      - ``Accounting Document Header``, ``Vendor Master (Company Code)``
      - SAP
      - DD02T
      - Lookup for human-readable context from SAP Data Dictionary; explains ``CDPOS.TABNAME_Table Name``
      - 

    * - DD03M.DDTEXT_Short Description of Repository Objects
      - Short description of the changed field
      - ``City postal code``, ``Document Header Text``
      - SAP
      - DD03M
      - Lookup for human-readable context from SAP Data Dictionary; explains ``CDPOS.FNAME_Field Name``
      - 