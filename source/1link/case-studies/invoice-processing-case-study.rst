==========================
Reverse-engineering an RPA
==========================

|br|

.. grid:: 1
  :class-container: case-study-intro-grid

  .. grid-item-card:: Documentation challenge
    :columns: 9

    :blue-bold:`Starting point` - A 2,268-line process reference derived from Blue Prism XML and scattered implementation material.

    :blue-bold:`Problem` - No single view to connect system boundaries, data flows, decisions, validation rules, failures, or states.

    :blue-bold:`Work` - Reverse-engineered the RPA to document its overall structure, logic, and behavior.

    :blue-bold:`Demonstrates` - System analysis, information architecture, interface documentation, process visualization, and docs-as-code authoring.


2. Work Samples
===============

Sample 1: Architecture and Workflow
-----------------------------------

Maps system responsibilities and the decision path for one invoice case.

.. rst-class:: img-caption-top

*System architecture*

.. container:: tb-blue-rule-wide custom-mermaid

  .. mermaid::

    flowchart TB
        subgraph CASES["Case management boundary"]
            CASESVC["Case queue and attachments"]
        end

        subgraph RPA["RPA runtime boundary"]
            BP["Blue Prism orchestrator"]
        end

        subgraph CORE["Core financial boundary"]
            SAPREAD["SAP read operations"]
            SAPPARK["SAP invoice parking"]
        end

        subgraph CLOUD["Cloud services boundary"]
            LOGIC["Azure Logic Apps"]
            EXTRACT["Document extraction"]
            VALIDATE["Validation function"]
        end

        subgraph DATA["Reporting boundary"]
            SQL[("Processing results database")]
            BI["Business intelligence reports"]
        end

        CASESVC -->|"Case fields and invoice"| BP
        BP -->|"Vendor and purchase order lookups"| SAPREAD
        SAPREAD -->|"Supporting financial data"| BP
        BP -->|"Invoice and reference data"| LOGIC
        LOGIC --> EXTRACT
        LOGIC --> VALIDATE
        LOGIC -->|"Extracted and validated fields"| BP
        BP -->|"Validated invoice data"| SAPPARK
        SAPPARK -->|"Parking result"| BP
        BP -->|"Status and result"| CASESVC
        BP -->|"Audit and processing result"| SQL
        BI -->|"Read for reporting"| SQL


:blue-bold:`Per-case workflow`: Reduces low-level RPA stages to the decisions that determine automatic or manual handling.

.. rst-class:: img-caption-top

*Per-case decision flow*

.. container:: tb-blue-rule-wide custom-mermaid

  .. mermaid::

    flowchart TB
        START(["Case acquired"]) --> VALIDATECASE["Validate scope and mandatory case data"]
        VALIDATECASE --> CASEOK{"Case valid?"}
        CASEOK -->|No| MANUAL["Return for manual handling"]
        CASEOK -->|Yes| SUPPORT["Retrieve supporting SAP data"]
        SUPPORT --> DOWNLOAD["Download invoice attachment"]
        DOWNLOAD --> EXTRACT["Extract invoice fields through Azure workflow"]
        EXTRACT --> VALIDATEDATA["Validate extracted fields"]
        VALIDATEDATA --> DATAOK{"Data valid?"}
        DATAOK -->|No| MANUAL
        DATAOK -->|Yes| SIMULATE{"Dry-run mode?"}
        SIMULATE -->|Yes| UPDATE["Update case without SAP write"]
        SIMULATE -->|No| PARK["Park invoice in SAP"]
        PARK --> PARKED{"Parking successful?"}
        PARKED -->|No| MANUAL
        PARKED -->|Yes| FIDOC["Retrieve financial document number"]
        FIDOC --> UPDATE["Update case with processing result"]
        MANUAL --> LOG["Write processing and exception result"]
        UPDATE --> LOG
        LOG --> END(["Case complete"])


Sample 2: Data Flows
--------------------

Makes each system exchange traceable by recording its payload and
classification.

.. rst-class:: img-caption-top

*Selected data flows*

.. list-table::
  :header-rows: 1
  :widths: 10 30 42 18
  :class: grid-table-1

  * - Flow
    - Movement
    - Data
    - Classification
  * - DF1
    - Case management platform to Blue Prism
    - Case identifier, case fields, purchase order details, and invoice attachment
    - Confidential
  * - DF2
    - Blue Prism to SAP read operations
    - Vendor identifier and purchase order lookup criteria
    - Internal
  * - DF3
    - SAP read operations to Blue Prism
    - Vendor name, bank account records, baseline date, and document data
    - Confidential
  * - DF4
    - Blue Prism to Azure Logic Apps
    - Base64-encoded invoice and SAP reference values used for validation
    - Confidential
  * - DF5
    - Azure Logic Apps to Blue Prism
    - Extracted fields, confidence scores, validation results, and workflow metadata
    - Confidential
  * - DF6
    - Blue Prism to SAP invoice parking
    - Validated invoice header, line item, bank, and date values
    - Confidential
  * - DF7
    - Blue Prism to case management platform
    - Processing status, document identifiers, work notes, and exception details
    - Internal
  * - DF8
    - Blue Prism to SQL Server
    - Case result, timestamps, processing status, document identifiers, and error details
    - Confidential


Sample 3: Interface Contract
----------------------------

Documents the Azure workflow as a request, response, failure, and security contract.

:blue-bold:`Request`: The workflow accepts an HTTP ``POST`` request.

.. code-block:: json

  {
    "fileName": "invoice-example.pdf",
    "fileContent": "<base64-encoded PDF>",
    "vendorName": "Example Vendor Limited",
    "BankAccounts": [
      {
        "accountNumber": "<account-number>",
        "bankName": "Example Bank"
      }
    ]
  }

.. rst-class:: img-caption-top

*Request fields*

.. list-table::
  :header-rows: 1
  :widths: 25 15 15 45
  :class: grid-table-1

  * - Field
    - Type
    - Required
    - Purpose
  * - ``fileName``
    - string
    - No
    - Identifies the invoice file in logs and diagnostics.
  * - ``fileContent``
    - string
    - Yes
    - Contains the PDF as a Base64-encoded string.
  * - ``vendorName``
    - string
    - Yes
    - Supplies the vendor name from SAP for comparison with the invoice.
  * - ``BankAccounts``
    - array
    - Yes
    - Supplies known SAP bank-account records for validation.


:blue-bold:`Response`: Combines extracted values, confidence scores, and validation results.

.. code-block:: json

  {
    "logicAppsRunID": "<workflow run ID>",
    "VendorName": "Example Vendor Limited",
    "VendorNameConfidence": 0.96,
    "InvoiceID": "INV-10027",
    "InvoiceIDConfidence": 0.98,
    "InvoiceDate": "2026-02-12",
    "InvoiceDateConfidence": 0.97,
    "InvoiceCurrency": "EUR",
    "InvoiceTotal": 1210.00,
    "InvoiceTotalConfidence": 0.95,
    "vendorNameValidation": {
      "foundFlag": true,
      "matchedValue": "Example Vendor Limited",
      "score": 96
    },
    "bankAccountMatchCount": 1
  }

The documentation also distinguishes the following outcomes:

.. rst-class:: img-caption-top

*Workflow outcomes*

.. list-table::
  :header-rows: 1
  :widths: 30 30 40
  :class: grid-table-1

  * - Condition
    - Workflow response
    - RPA outcome
  * - File content is empty
    - Client error response
    - Stop extraction and record an input error.
  * - Document submission or extraction fails
    - Extraction error response with diagnostic detail
    - Record a system exception and return the case for manual handling.
  * - Validation function fails or times out
    - Validation error response
    - Record a system exception and return the case for manual handling.
  * - Extraction and validation succeed
    - Success response with values, scores, and validation results
    - Apply the RPA validation rules before attempting the SAP write.


:blue-bold:`Security record`

.. rst-class:: img-caption-top

*Security controls and recommendations*

.. list-table::
  :header-rows: 1
  :widths: 28 52 20
  :class: grid-table-1

  * - Item
    - Documentation
    - Status
  * - Workflow run history
    - Inputs containing invoice data and authentication headers are configured
      as secure data and are not displayed in ordinary workflow run history.
    - Implemented
  * - Service key
    - The service key is stored as a secure workflow parameter rather than as
      visible text in the workflow definition.
    - Implemented
  * - Authentication model
    - Replace the subscription key with managed identity to reduce secret
      storage and rotation requirements.
    - Recommendation


Sample 4: Validation Logic
--------------------------

Explains how vendor matching combines normalization, several fuzzy scores, and a full-text fallback while limiting false positives.


:blue-bold:`Matching phases`

.. rst-class:: img-caption-top

*Vendor name matching flow*

.. container:: tb-blue-rule-wide custom-mermaid

  .. mermaid::

    flowchart TB
        SAP["Vendor name from SAP"] --> NORMALIZE["Normalize punctuation, spacing, and business suffixes"]
        EXTRACTED["Vendor name extracted from invoice"] --> PHASE1["Score direct extracted name match"]
        NORMALIZE --> PHASE1
        PHASE1 --> PASS1{"Meets threshold?"}
        PASS1 -->|Yes| ACCEPT1["Accept phase 1 match"]
        PASS1 -->|No| WINDOWS["Create adaptive word windows from full invoice text"]
        WINDOWS --> PREFILTER["Apply token overlap pre-filter"]
        PREFILTER --> SCORE["Run fuzzy scoring methods"]
        SCORE --> BEST["Keep best adjusted score"]
        BEST --> PASS2{"Meets threshold?"}
        PASS2 -->|Yes| ACCEPT2["Accept full text match"]
        PASS2 -->|No| REVIEW["Report best candidate for manual review"]


:blue-bold:`Controls against False Positives`

.. rst-class:: img-caption-top

*Vendor matching controls*

.. list-table::
  :header-rows: 1
  :widths: 25 40 35
  :class: grid-table-1

  * - Control
    - Purpose
    - Example risk
  * - Business suffix normalization
    - Expands common legal form abbreviations before comparison.
    - ``Ltd`` and ``Limited`` appear different despite naming the same entity.
  * - Multiple fuzzy scoring methods
    - Compares token sets, token order, weighted similarity, and partial similarity instead of relying on one score.
    - Word order or OCR noise distorts one comparison method.
  * - Length-aware penalty
    - Reduces scores when one candidate is much shorter than the other.
    - ``Example Tech`` incorrectly matches ``Example Technology Services``.
  * - Adaptive full text windows
    - Searches document text in chunks sized to the known vendor name.
    - The extraction service fails to isolate the vendor-name field.
  * - Token overlap pre-filter
    - Avoids expensive fuzzy comparisons where the required name tokens are absent.
    - Large invoice text creates many irrelevant candidate windows.

Diagnostic output records the best value, score, method, source, and phase results for investigating borderline matches.


Sample 5: Exceptions and Operations
-----------------------------------

Separates recoverable case failures from failures that make continued processing unsafe.

.. rst-class:: img-caption-top

*Layered exception strategy*

.. list-table::
   :header-rows: 1
   :widths: 24 30 46
   :class: grid-table-1

   * - Layer
     - Scope
     - Outcome
   * - Case input validation
     - Mandatory fields, case scope, vendor consistency, and attachment data
     - Record a business exception, update the case for manual handling, and continue with the next case.
   * - Per-case processing block
     - SAP lookups, file retrieval, extraction, validation, and invoice parking
     - Capture the stage, type, and detail; set the case status to failed; update the case and SQL record; continue where safe.
   * - Case platform update check
     - An unexpected failure to update the case management platform, excluding a recognized reassignment condition
     - Stop the run after recording the current result rather than process more cases while their source status cannot be updated reliably.
   * - Outer process block
     - Initialization, case loop control, and finalization
     - Preserve available exception details and proceed to controlled finalization.


:blue-bold:`Status lifecycle`

.. rst-class:: img-caption-top

*Case status lifecycle*

.. container:: tb-blue-rule-wide custom-mermaid

  .. mermaid::

    stateDiagram-v2
        [*] --> new: Case acquired
        new --> in_progress: Processing starts
        new --> failed: Initial validation fails
        in_progress --> processed: SAP parking succeeds
        in_progress --> failed: Processing exception occurs
        processed --> [*]: Case and audit record updated
        failed --> [*]: Case returned for manual handling

Every recovery path must set the case to ``processed`` or ``failed`` before the next case begins.


:blue-bold:`Operational Constraints`: Records constraints that were visible only in implementation or configuration.

.. rst-class:: img-caption-top

*Operational constraints and consequences*

.. list-table::
  :header-rows: 1
  :widths: 28 72
  :class: grid-table-1

  * - Constraint
    - Operational consequence
  * - No Blue Prism work queue
    - Cases are held in an in-memory collection after one API call. They cannot be distributed across several runtime resources, and a restart retrieves the cases again.
  * - External vendor mapping
    - Processing depends on a maintained vendor mapping source. A missing or duplicate mapping prevents automatic processing.
  * - Cloud extraction dependency
    - If the Azure workflow is unavailable, invoice extraction and validation cannot continue.
  * - Dry-run flag
    - Test mode bypasses SAP write operations. The production value must be checked because the process can otherwise appear successful without parking an invoice.
  * - Fixed company configuration
    - A company identifier is fixed in the SAP automation object. Supporting another company requires an implementation change.
  * - Incomplete SAP cleanup
    - An interruption during invoice parking may leave the SAP session in an inconsistent state because the object has no complete cleanup sequence.
  * - Case update dependency
    - An unexpected case update failure stops the run to prevent additional cases from advancing while their source records remain unchanged. A recognized reassignment condition is logged and does not stop the run.
