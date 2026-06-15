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


DM_Vendors
============

**Column Reference**

|br|

Filter with header icons > Expand row toggles for hidden fields > Click truncated text or  :fas:`circle-info;sd-text-info`  for full details. \| For table introductions, see :doc:`User Guides <../../1_User_Guides/User_Guides>`. \| To contribute, use the |ColRef_Excel_Link_DM_Vendors|.


.. =================================================================================================================
.. --- DM_Vendors Col. Ref. ---------------------------------------------------------------------------------------
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

    * - LFA1.LAND1_Country Key
      - Code for the country in the vendor’s address.
      - ``183``, ``453``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.LFURL_Uniform Resource Locator
      - URL for the vendor’s website.
      - ``www.example.uk``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.LIFNR_Account Number of Vendor or Creditor
      - The vendor’s account number, which identifies them in SAP.
      - ``S00588776``, ``1900871758``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.LNRZA_Account Number of the Alternative Payee
      - Account number of the alternative payee (i.e., an entity who receives payments for the vendor).
      - ``2300145275``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.LOEVM_Central Deletion Flag for Master Record
      - Shows whether the vendor’s master record is centrally flagged for deletion.
      - ``X``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.LTSNA_Indicator: vendor sub-range relevant
      - Shows whether vendor subranges are relevant for the vendor.
      - ``X``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.MCOD1_Search term for matchcode search
      - First matchcode-search term to help find the vendor in SAP.
      - ``ABC LTD``, ``BAGHDAD - IRAQ``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.MCOD2_Search term for matchcode search
      - Second matchcode-search term to help find the vendor in SAP.
      - ``ABC LTD``, ``BAGHDAD - IRAQ``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.MCOD3_Search term for matchcode search
      - Third matchcode-search term to help find the vendor in SAP.
      - ``ABC LTD``, ``BAGHDAD - IRAQ``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.NAME1_Name 1
      - Name of the vendor (line 1)
      - ``ABC Tours Ltd``, ``Jane Smith`` 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.NAME2_Name 2
      - Name of the vendor (line 2)
      - ``ABC Tours Ltd``, ``Jane Smith`` 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.NAME3_Name 3
      - Name of the vendor (line 3)
      - ``ABC Tours Ltd``, ``Jane Smith`` 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.NAME4_Name 4
      - Name of the vendor (line 4)
      - ``ABC Tours Ltd``, ``Jane Smith`` 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.NODEL_Central deletion block for master record
      - Shows whether deletion is centrally blocked for the vendor's master record.
      - ``X``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.ORT01_City
      - Name of the city in the vendor's address.
      - ``Budapest``, ``Cairo``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.ORT02_District
      - Name of the district in the vendor's address.
      - ``Parque Central``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.PFACH_PO Box
      - The vendor's PO Box number.
      - ``10173``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.PFORT_PO Box city
      - Name of the city in the vendor's PO Box address.
      - ``East London``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.PROFS_Profession
      - The vendor's profession.
      - ``Lawyer``, ``Graphic designer``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.PSTLZ_Postal Code
      - Postal code in the vendor's address.
      - ``7800``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.REGIO_Region (State, Province, County)
      - Code for the region (state, province, or county) in the vendor’s address.
      - ``05``, ``GE``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.SEXKZ_Key for the Sex of the Person Subject to Withholding Tax
      - The vendor's gender when the vendor is a natural person (for tax-reporting purposes)
      - ``1``, ``2``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.SORTL_Sort field
      - Key which determines how the vendor is alphabetically sorted in lists.
      - ``URBAN``, ``INACTIVE``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.SPERM_Centrally imposed purchasing block
      - Shows whether purchasing is centrally blocked for the vendor.
      - ``X``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.SPERQ_Function That Will Be Blocked
      - Code that specifies the functions that are blocked for the vendor.
      - ``88``, ``99``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.SPERR_Central posting block
      - Shows whether posting is centrally blocked for the vendor.
      - ``X``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.SPRAS_Language Key
      - Code for the language SAP uses for correspondence with the vendor
      - ``E``, ``S``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.STCD1_Tax Number 1
      - The vendor’s first tax number.
      - ``80047434-1``, ``1910280``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.STCD2_Tax Number 2
      - The vendor’s second tax number.
      - ``80047434-1``, ``1910280``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.STCD5_Tax Number 5
      - The vendor’s fifth tax number.
      - ``80047434-1``, ``1910280``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.STCEG_VAT Registration Number
      - The vendor's VAT registration number
      - ``7713570398``, ``VEGE591010G95``, 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.STENR_Tax Number at Responsible Tax Authority
      - The vendor’s tax number as registered with their tax authority
      - ``100261884``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.STKZN_Natural Person
      - Shows whether the vendor is recorded as a natural person.
      - ``X``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.TAXBS_Tax Base in Percentage
      - Percentage that SAP applies to amounts posted for the vendor to derive the base for tax calculation
      - ``0``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.TELBX_Telebox number
      - The vendor’s telebox number.
      - ``jane.smith@yr.``, ``www.example.org``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.TELF1_First telephone number
      - The vendor’s primary telephone number.
      - ``+44 1142 820196``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.TELF2_Second telephone number
      - The vendor’s secondary telephone number.
      - ``+44 1142 820196``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.TELFX_Fax Number
      - The vendor’s fax number.
      - ``(49) 949 9362 8021 10``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.TELTX_Teletex number
      - The vendor's teletex number
      - ``http://www.example-travel.co``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.TELX1_Telex number
      - The vendor's telex number
      - ``818479``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.UPDAT_Date on Which the Changes Were Confirmed
      - Date when changes to the vendor’s master record were last confirmed.
      - ``2025-06-10``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.UPTIM_Time of Last Change Confirmation
      - Time when changes to the vendor’s master record were last confirmed.
      - ``15:37:50.000``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.VBUND_Company ID of Trading Partner
      - ID of the trading partner company that the vendor is mapped to for intercompany transactions.
      - ``100000``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.WERKR_Indicator: plant level relevant
      - Shows whether plant-level purchasing data is relevant for the vendor.
      - ``X``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.XCPDK_Indicator: Is the account a one-time account?
      - Shows whether the vendor’s account is set up as a one-time vendor account.
      - ``X``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.XLFZA_Indicator: Alternative payee using account number
      - Shows whether permitted alternative payee vendor account numbers are maintained for the vendor.
      - ``X``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.XZEMP_Indicator: Alternative payee in document allowed ?
      - Shows whether an alternative payee can be entered in documents posted to the vendor.
      - ``X``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.ZZCSOCAT_CSO Category
      - Code that classifies the vendor by civil society organization category.
      - ``ACAD``, ``NGO``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.ZZCSOCATTXT_CSO Category Text
      - Name of the civil society organization category that classifies the vendor.
      - ``Academic Institution``, ``Non-Government Organization`` 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.ZZCSOTYPE_CSO type
      - Code that classifies the vendor by civil society organization type.
      - ``N``, ``A``, ``R``, ``C``, ``I``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.ZZGRP_ALLI_Grouping/ Alliance
      - Code for the grouping or alliance that the vendor belongs to.
      - ``0007``, ``0018``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.ZZLASTASSDT_Date of Positive Assessment Against Core Values
      - Date when the vendor last received a positive assessment against core values.
      - ``2025-01-03``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.ZZNRC_Non - Registered chapter of Int'l Org
      - Shows whether the vendor is a non-registered chapter of an international organization.
      - ``N``, ``Y``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - ``Y`` = a non-registered chapter; ``N`` = not a non-registered chapter
      - 

    * - LFA1.ZZPARENT_ORG_Parent Organization Number for Vendor
      - Account number that identifies the parent organization the vendor belongs to.
      - ``2500000120``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.ZZPARENT_ORGTXT_Parent Organization Name for Vendor
      - Name of the parent organization the vendor belongs to.
      - ``Red Cross Belgium`` 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.ZZPTYPE_Partner type
      - Code for the partner type classification assigned to the vendor.
      - ``GOVT``, ``CSO``, ``UN``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.ZZRISK_RATE_Risk Rating
      - Code for the risk rating assigned to the vendor.
      - ``1``, ``2``, ``3``, ``4``, ``5``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.ZZSAD_Special Audit Done?
      - Shows whether a special audit has been completed on the vendor.
      - ``X``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.ZZTAD_Type of Assessment Done
      - Code for the type of assessment completed on the vendor.
      - ``A``, ``B``, ``C``, ``D``, ``E``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.ZZTXT30_Account Group Name
      - Name of the account group assigned to the vendor.
      - ``International NGOs``, ``Travel Agency Vendors``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.BRSCH_Industry key:T016T.BRTXT_Description of the Industry Key
      - Name of the industry assigned to the vendor.
      - ``Staff - Local``, ``Non-Governmental Org``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.KTOKK_Supplier account group:T077Y.TXT30_Account Group Name
      - Name of the supplier account group assigned to the vendor.
      - ``International CSOs``, ``Travel Agency Vendors``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.LAND1_Country Key:T005T.LANDX_Country Name
      - Name of the country in the vendor’s address.
      - ``Hungary``, ``Egypt``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.LAND1_Country Key:T005T.NATIO_Nationality
      - Nationality for the country in the vendor’s address.
      - ``Hungarian``, ``Egyptian``
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.Extract_Timestamp
      - Date and time when the vendor record was extracted into the DM_Vendors.
      - ``2025-06-10 15:37:50.000``
      - SAP
      - LFA1
      - N/A
      - 

    * - LFB1.AKONT_Reconciliation Account in General Ledger
      - 
      - ``0002000120``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.ALTKN_Previous Master Record Number
      - 
      - ``20002715``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.BEGRU_Authorization Group
      - 
      - ``6980``, ``Z014``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.BUKRS_Company Code
      - 
      - ``1000``, ``2000``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      -     

    * - LFB1.CERDT_Certification date
      - 
      - ``2025-01-03``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.EIKTO_Our account number with the vendor
      - 
      - ``JANE SMITH``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.ERDAT_Date on which the Record Was Created
      - 
      - ``2025-01-03``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      -     

    * - LFB1.ERNAM_Name of Person who Created the Object
      - 
      - ``JSMITH``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.FDGRV_Planning group
      - 
      - ``VF``, ``V1``, ``V2``, ``V3``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.FRGRP_Release Approval Group
      - 
      - ``0001``, ``0002``, ``0003``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      -     

    * - LFB1.GUZTE_Payment Terms Key for Credit Memos
      - 
      - ``Z120``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.HBKID_Short Key for a House Bank
      - 
      - ``CF001``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.INTAD_Internet address of partner company clerk
      - 
      - ``jsmith@gmail.com``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      -    

    * - LFB1.J_SC_OFFSR_Offset Percentage
      - 
      - ``000``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.KVERM_Memo
      - 
      - ``jsmith@gmail.com``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.LNRZB_Account number of the alternative payee
      - 
      - ``1900008163``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.LNRZE_Head office account number
      - 
      - ``1900720039``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.LOEVM_Deletion Flag for Master Record (Company Code Level)
      - 
      - ``X``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.NODEL_Deletion bock for master record (company code level)
      - 
      - ``X``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.PERNR_Personnel Number
      - 
      - ``01145041``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.PREPAY_RELEVANT_Prepayment Relevance (Vendor Master)
      - 
      - ``A``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.REPRF_Check Flag for Double Invoices or Credit Memos
      - 
      - ``X``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.SPERR_Posting block for company code
      - 
      - ``X``
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.TLFNS_Accounting clerk's telephone number at business partner
      - 
      - ````, ````
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.TLFXS_Accounting clerk's fax number at the customer/vendor
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.TOGRU_Tolerance group for the business partner/G/L account
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.UPDAT_Date on Which the Changes Were Confirmed
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.UPTIM_Time of Last Change Confirmation
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.WEBTR_Bill of exchange limit (in local currency)
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.XDEZV_Indicator: Local processing?
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.XEDIP_Indicator: Send Payment Advices by EDI
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - ADRC.FAX_EXTENS_First fax no.: extension
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - LFB1.XLFZB_Indicator: Alternative payee using account number
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.XPORE_Indicator: Pay all items separately ?
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.XVERR_Indicator: Clearing between customer and vendor?
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.ZAHLS_Block Key for Payment
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.ZGRUP_Key for Payment Grouping
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.ZINRT_Interest calculation frequency in months
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.ZSABE_Clerk at vendor
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.ZTERM_Terms of Payment Key
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.ZUAWA_Key for sorting according to assignment numbers
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.FRGRP_Release Approval Group:VBWF07.FRGRT_Release Approval Group Name
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.HBKID_Short Key for a House Bank:T012T.HKTID_ID for account details
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.HBKID_Short Key for a House Bank:T012T.TEXT1_Description
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.ZAHLS_Block Key for Payment:T008T.TEXTL_Explanation of the Reason for Payment Block
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.ZGRUP_Key for Payment Grouping:TZGRT.TTEXT_Text (30 Characters)
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.ZUAWA_Key for sorting according to assignment numbers:TZUNT.TTEXT_Description of the Sort Key
      - 
      - 
      - SAP
      - Vendor Master (Company Code Section) (LFB1)
      - N/A
      - 

    * - LFB1.Extract_Timestamp
      - 
      - ``2025-06-10 15:37:50.000``
      - SAP
      - LFB1
      - N/A
      - 

    * - LFBK-One.BANKL_Bank Keys
      - 
      - 
      - SAP
      - First Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-One.BANKN_Bank account number
      - 
      - 
      - SAP
      - First Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-One.BANKS_Bank country key
      - 
      - 
      - SAP
      - First Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-One.BKONT_Bank Control Key
      - 
      - 
      - SAP
      - First Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-One.BKREF_Reference specifications for bank details
      - 
      - 
      - SAP
      - First Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-One.BVTYP_Partner Bank Type
      - 
      - 
      - SAP
      - First Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-One.KOINH_Account Holder Name
      - 
      - 
      - SAP
      - First Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-One.XEZER_Indicator: Is there collection authorization ?
      - 
      - 
      - SAP
      - First Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-One.Extract_Timestamp
      - 
      - ``2025-06-10 15:37:50.000``
      - SAP
      - First Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-Two.BANKL_Bank Keys
      - 
      - 
      - SAP
      - Second Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-Two.BANKN_Bank account number
      - 
      - 
      - SAP
      - Second Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-Two.BANKS_Bank country key
      - 
      - 
      - SAP
      - Second Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-Two.BKONT_Bank Control Key
      - 
      - 
      - SAP
      - Second Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-Two.BKREF_Reference specifications for bank details
      - 
      - 
      - SAP
      - Second Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-Two.BVTYP_Partner Bank Type
      - 
      - 
      - SAP
      - Second Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-Two.KOINH_Account Holder Name
      - 
      - 
      - SAP
      - Second Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-Two.XEZER_Indicator: Is there collection authorization ?
      - 
      - 
      - SAP
      - Second Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-Two.Extract_Timestamp
      - 
      - ``2025-06-10 15:37:50.000``
      - SAP
      - Second Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-Three.BANKL_Bank Keys
      - 
      - 
      - SAP
      - Third Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-Three.BANKN_Bank account number
      - 
      - 
      - SAP
      - Third Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFA1.ADRNR_Address
      - 
      - 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.ANRED_Title
      - 
      - 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.BBBNR_International location number  (part 1)
      - 
      - 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.BBSNR_International location number (Part 2)
      - 
      - 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.BEGRU_Authorization Group
      - 
      - 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.BRSCH_Industry key
      - 
      - 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.BUBKZ_Check digit for the international location number
      - 
      - 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.CONFS_Status of Change Authorization (Central)
      - 
      - 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.DTAWS_Instruction key for data medium exchange
      - 
      - 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.DUEFL_Status of Data Transfer into Subsequent Release
      - 
      - 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.ERDAT_Date on which the Record Was Created
      - 
      - 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.ERNAM_Name of Person who Created the Object
      - 
      - 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.GBDAT_Date of birth of the person subject to withholding tax
      - 
      - 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.GBORT_Place of birth of the person subject to withholding tax
      - 
      - 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.KONZS_Group key
      - 
      - 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.KTOCK_Reference Account Group for One-Time Account (Vendor)
      - 
      - 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.KTOKK_Supplier account group
      - 
      - 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFA1.KUNNR_Customer Number
      - 
      - 
      - SAP
      - Vendor Master (General Section) (LFA1)
      - N/A
      - 

    * - LFBK-Three.BANKS_Bank country key
      - 
      - 
      - SAP
      - Third Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-Three.BKONT_Bank Control Key
      - 
      - 
      - SAP
      - Third Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-Three.BKREF_Reference specifications for bank details
      - 
      - 
      - SAP
      - Third Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-Three.BVTYP_Partner Bank Type
      - 
      - 
      - SAP
      - Third Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-Three.KOINH_Account Holder Name
      - 
      - 
      - SAP
      - Third Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-Three.XEZER_Indicator: Is there collection authorization ?
      - 
      - 
      - SAP
      - Third Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK-Three.Extract_Timestamp
      - 
      - ``2025-06-10 15:37:50.000``
      - SAP
      - Third Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - LFBK.Bank_Account_Count
      - 
      - 
      - SAP
      - Third Bank Account - Vendor Master (Bank Details) (LFBK)
      - N/A
      - 

    * - ADRC.MC_CITY1_City name in Uppercase for Search Help
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADR6.ADDRNUMBER_Address Number
      - 
      - 
      - SAP
      - E-Mail Addresses (Business Address Services) (ADR6)
      - N/A
      - 

    * - ADR6.CONSNUMBER_Sequence Number
      - 
      - 
      - SAP
      - E-Mail Addresses (Business Address Services) (ADR6)
      - N/A
      - 

    * - ADR6.DATE_FROM_Valid-from date - in current Release only 00010101 possible
      - 
      - 
      - SAP
      - E-Mail Addresses (Business Address Services) (ADR6)
      - N/A
      - 

    * - ADR6.ENCODE_Required Data Encoding (E-Mail)
      - 
      - 
      - SAP
      - E-Mail Addresses (Business Address Services) (ADR6)
      - N/A
      - 

    * - ADR6.FLG_NOUSE_Flag: This Communication Number is Not Used
      - 
      - 
      - SAP
      - E-Mail Addresses (Business Address Services) (ADR6)
      - N/A
      - 

    * - ADR6.FLGDEFAULT_Flag: this address is the default address
      - 
      - 
      - SAP
      - E-Mail Addresses (Business Address Services) (ADR6)
      - N/A
      - 

    * - ADR6.HOME_FLAG_Recipient address in this communication type (mail sys.grp)
      - 
      - 
      - SAP
      - E-Mail Addresses (Business Address Services) (ADR6)
      - N/A
      - 

    * - ADR6.PERSNUMBER_Person number
      - 
      - 
      - SAP
      - E-Mail Addresses (Business Address Services) (ADR6)
      - N/A
      - 

    * - ADR6.SMTP_ADDR_E-Mail Address
      - 
      - 
      - SAP
      - E-Mail Addresses (Business Address Services) (ADR6)
      - N/A
      - 

    * - ADR6.SMTP_SRCH_E-Mail Address Search Field
      - 
      - 
      - SAP
      - E-Mail Addresses (Business Address Services) (ADR6)
      - N/A
      - 

    * - ADR6.VALID_FROM_Communication Data: Valid From (YYYYMMDDHHMMSS)
      - 
      - 
      - SAP
      - E-Mail Addresses (Business Address Services) (ADR6)
      - N/A
      - 

    * - ADR6.VALID_TO_Communication Data: Valid To (YYYYMMDDHHMMSS)
      - 
      - 
      - SAP
      - E-Mail Addresses (Business Address Services) (ADR6)
      - N/A
      - 

    * - ADR6.Extract_Timestamp
      - 
      - ``2025-06-10 15:37:50.000``
      - SAP
      - ADR6
      - N/A
      - 

    * - ADR6.tabkey
      - 
      - 
      - SAP
      - E-Mail Addresses (Business Address Services) (ADR6)
      - N/A
      - 

    * - ADRC.ADDR_GROUP_Address Group (Key) (Business Address Services)
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.ADDRNUMBER_Address Number
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.ADRC_UUID_UUID Used in the Address
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.BUILDING_Building (Number or Code)
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.CITY1_City
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.CITY2_District
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.COUNTRY_Country Key
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.DATE_FROM_Valid-from date - in current Release only 00010101 possible
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.DATE_TO_Valid-to date in current Release only 99991231 possible
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.DEFLT_COMM_Communication Method (Key) (Business Address Services)
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.DELI_SERV_TYPE_Type of Delivery Service
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.EXTENSION1_Extension (only for data conversion) (e.g. data line)
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.EXTENSION2_Extension (only for data conversion) (e.g. telebox)
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.FAX_NUMBER_First Fax No.: Area Code + Number
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.FLAGCOMM10_Flag: Printer defined
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.FLAGCOMM11_Flag: SSF defined
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.FLAGCOMM12_Flag: URI/FTP address defined
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.FLAGCOMM13_Flag: Pager address defined
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.FLAGCOMM2_Flag: Telephone number(s) defined
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.FLAGCOMM3_Flag: Fax number(s) defined
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.FLAGCOMM4_Flag: Teletex number(s) defined
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.FLAGCOMM5_Flag: Telex number(s) defined
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.FLAGCOMM6_Flag: E-mail address(es) defined
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.FLAGCOMM7_Flag: RML (remote mail) addresse(s) defined
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.FLAGCOMM8_Flag: X.400 addresse(s) defined
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.FLOOR_Floor in building
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.HOME_CITY_City (different from postal city)
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.HOUSE_NUM1_House Number
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.HOUSE_NUM2_House number supplement
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.LANGU_CREA_Address record creation original language
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.LANGU_Language Key
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.LOCATION_Street 5
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.MC_NAME1_Name (Field NAME1) in Uppercase for Search Help
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.MC_STREET_Street Name in Uppercase for Search Help
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.NAME_CO_c/o name
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.NAME_TEXT_Converted name field (with form of address)
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.NAME1_Name 1
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.NAME2_Name 2
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.NAME3_Name 3
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.NAME4_Name 4
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.PERS_ADDR_Flag: This is a personal address
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.PO_BOX_LOBBY_PO Box Lobby
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - DRC.PO_BOX_LOC_PO Box city
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.PO_BOX_PO Box
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.POST_CODE1_City postal code
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.POST_CODE2_PO Box Postal Code
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.POST_CODE3_Company Postal Code (for Large Customers)
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.REGION_Region (State, Province, County)
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.ROOMNUMBER_Room or Apartment Number
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.SORT1_Search Term 1
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.SORT2_Search Term 2
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.STR_SUPPL1_Street 2
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.STR_SUPPL2_Street 3
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.STR_SUPPL3_Street 4
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.STREET_Street
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.TEL_EXTENS_First Telephone No.: Extension
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.TEL_NUMBER_First telephone no.: dialling code+number
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.TIME_ZONE_Address time zone
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.TITLE_Form-of-Address Key
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.TRANSPZONE_Transportation zone to or from which the goods are delivered
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    * - ADRC.Extract_Timestamp
      - 
      - ``2025-06-10 15:37:50.000``
      - SAP
      - ADRC
      - N/A
      - 

    * - ADRC.tabkey
      - 
      - 
      - SAP
      - Addresses (Business Address Services) (ADRC)
      - N/A
      - 

    