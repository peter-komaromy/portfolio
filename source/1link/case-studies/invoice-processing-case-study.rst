==========================
Reverse-engineering an RPA
==========================

I reconstructed an unattended invoice-processing system from an exported RPA
process definition and related implementation material, then converted the
findings into a navigable technical reference. The documentation connects the
business workflow to the system architecture, data exchanges, interface
contracts, validation rules, exception paths, and operational constraints.

.. rst-class:: no-bullets at-a-glance

- :blue-bold:`Objective`: Make a distributed automation process understandable and
  maintainable without requiring readers to inspect the RPA implementation.
- :blue-bold:`Primary source`: Blue Prism process and object definitions exported as XML.
- :blue-bold:`Other sources`: An Azure Logic Apps workflow, a Python validation module,
  configuration records, and existing implementation notes.
- :blue-bold:`Systems covered`: A case management platform, Blue Prism, SAP, Azure Logic
  Apps, Azure Content Understanding, an Azure Function, SQL Server, and Power BI.
- :blue-bold:`Deliverables`: Architecture and process diagrams, a data flow inventory,
  interface documentation, validation logic, an exception reference, a state
  model, and operational notes.


1. Context
==========

The process retrieves finance cases from an enterprise case management queue,
downloads invoice attachments, retrieves supporting data from SAP, and sends
the invoice to an Azure workflow for document extraction and validation. If the
case and extracted data pass validation, Blue Prism parks the invoice in SAP,
updates the originating case, and records the result in SQL Server.

It runs unattended on an hourly schedule.

The process parks invoices only. It does not post invoices or trigger payment.
Cases that cannot be processed safely are returned for manual handling.

The implementation spans several technologies and ownership boundaries. The
RPA process controls the sequence, but important behavior also resides in SAP
automation objects, the case management API, the Azure workflow, a validation
function, SQL tables, and configuration records.


2. Documentation Problem
========================

The exported Blue Prism XML contained detailed implementation evidence, but it
was not usable as documentation. It described stages, actions, collections,
variables, and exception blocks without providing a reader-oriented explanation
of the system.

The main documentation problems were the following:

- The process logic was distributed across the main RPA process and several
  reusable objects.
- The same case moved through several systems, each with its own terminology
  and status model.
- The happy path did not explain what happened after validation failures,
  integration failures, or partial processing.
- Data crossed internal, cloud, and core financial boundaries, but the exported
  process did not present those movements as a coherent data flow model.
- Nested Blue Prism collections obscured where fields originated and how they
  changed during processing.
- Configuration values, credentials, and environment settings were mixed with
  process logic.
- Some design constraints were visible only indirectly, through hard-coded
  values, empty cleanup stages, or the absence of a Blue Prism work queue.

The documentation therefore needed to do more than restate the process stages.
It needed to reconstruct the system model and make the evidence traceable.


3. Analysis Method
==================

I treated each implementation artifact as evidence for a specific part of the
documentation rather than treating all source material as equally reliable.

.. rst-class:: img-caption-top

*Source map*

.. list-table::
  :header-rows: 1
  :widths: 28 32 40
  :class: grid-table-1

  * - Source
    - Evidence extracted
    - Documentation produced
  * - Blue Prism process export
    - Page structure, stage sequence, object calls, collections, variables,
      decisions, exception blocks, and exposed statistics
    - Process overview, page inventory, orchestration flow, state model,
      exception reference, and data item reference
  * - Referenced Blue Prism objects and implementation notes
    - SAP actions, API operations, file handling, SQL operations, and report
      generation
    - Dependency map and component responsibilities
  * - Azure Logic Apps definition
    - Trigger schema, workflow actions, polling behavior, response structure,
      security settings, and failure paths
    - Interface contract, workflow description, error model, and operational
      guidance
  * - Python validation module specification
    - Normalization, fuzzy scoring methods, fallback matching, controls against
      false positives, output fields, and edge cases
    - Explanation of validation logic and function reference
  * - Configuration and environment records
    - Runtime dependencies, flags, credential references, paths, and service
      settings
    - Configuration reference, security notes, and deployment constraints

I separated direct implementation evidence from interpretation and
recommendations. For example, the documentation records the existing
authentication with a subscription key as implemented, while managed identity is
labeled as a recommended improvement rather than current behavior.


4. Information Architecture
============================

The material was divided by reader question instead of mirroring the Blue
Prism page tree.

.. rst-class:: img-caption-top

*Reader questions and documentation sections*

.. list-table::
  :header-rows: 1
  :widths: 42 58
  :class: grid-table-1

  * - Reader question
    - Documentation section
  * - What does the process do, and what does it not do?
    - Process overview and scope
  * - Which system performs each step?
    - Architecture and integration map
  * - How does one case move through the process?
    - Per-case workflow and sequence diagrams
  * - What data crosses each boundary?
    - Data flow diagram and data flow inventory
  * - What does the Azure workflow accept and return?
    - Request schema, response schema, and failure contract
  * - How are extracted values validated?
    - Validation rules and vendor matching logic
  * - What happens when a step fails?
    - Exception strategy, exception reference, and status lifecycle
  * - What must maintainers know before changing or running it?
    - Dependencies, configuration, limitations, and troubleshooting

This structure lets readers start with a concise system model and move into
implementation detail only when required.


5. Reconstructed System Model
=============================

The first model shows the systems involved and separates orchestration,
financial processing, cloud extraction, and reporting.

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


5.1 Per-case workflow
---------------------

The implementation contained many low-level stages. I consolidated them into
the decisions that determine whether a case can continue automatically.

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


5.2 Data Flow Inventory
-----------------------

The architecture diagram is paired with a data flow inventory so that each
arrow has an explicit payload and classification.

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
    - Case identifier, case fields, purchase order details, and invoice
      attachment
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
    - Extracted fields, confidence scores, validation results, and workflow
      metadata
    - Confidential
  * - DF6
    - Blue Prism to SAP invoice parking
    - Validated invoice header, line item, bank, and date values
    - Confidential
  * - DF7
    - Blue Prism to case management platform
    - Processing status, document identifiers, work notes, and exception
      details
    - Internal
  * - DF8
    - Blue Prism to SQL Server
    - Case result, timestamps, processing status, document identifiers, and
      error details
    - Confidential


6. Interface Documentation
===========================

The Azure workflow is documented as an interface rather than as a screenshot
of a visual workflow. This makes the contract reviewable and testable.


6.1 Request
-----------

The workflow receives an HTTP ``POST`` request. The following example uses
fictional data.

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


6.2 Response
------------

The response combines extracted values, confidence scores, and validation
results so that Blue Prism can decide whether processing may continue.

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


6.3 Security record
-------------------

I documented existing controls separately from recommended improvements.

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


7. Explaining the Vendor Validation Algorithm
=============================================

A Python module compares the vendor name held in SAP with text extracted from
the invoice. A simple substring check would produce false positives, especially
when SAP contains an abbreviated or truncated legal name. I documented the
algorithm in terms of its matching phases and the risk controlled by each
operation.


7.1 Matching phases
-------------------

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


7.2 Controls against False Positives
------------------------------------

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
    - Compares token sets, token order, weighted similarity, and partial
      similarity instead of relying on one score.
    - Word order or OCR noise distorts one comparison method.
  * - Length-aware penalty
    - Reduces scores when one candidate is much shorter than the other.
    - ``Example Tech`` incorrectly matches ``Example Technology Services``.
  * - Adaptive full text windows
    - Searches document text in chunks sized to the known vendor name.
    - The extraction service fails to isolate the vendor-name field.
  * - Token overlap pre-filter
    - Avoids expensive fuzzy comparisons where the required name tokens are
      absent.
    - Large invoice text creates many irrelevant candidate windows.

The function returns the matched value, adjusted score, scoring method, match
source, and detailed phase results. That diagnostic output lets maintainers
investigate borderline matches instead of receiving only a Boolean value.


8. Exception and State Models
=============================

The process distinguishes failures that affect one case from failures that make
continued processing unsafe.

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
    - Record a business exception, update the case for manual handling, and
      continue with the next case.
  * - Per-case processing block
    - SAP lookups, file retrieval, extraction, validation, and invoice parking
    - Capture the stage, type, and detail; set the case status to failed; update
      the case and SQL record; continue where safe.
  * - Case platform update check
    - An unexpected failure to update the case management platform, excluding
      a recognized reassignment condition
    - Stop the run after recording the current result rather than process more
      cases while their source status cannot be updated reliably.
  * - Outer process block
    - Initialization, case loop control, and finalization
    - Preserve available exception details and proceed to controlled
      finalization.


8.1 Status lifecycle
--------------------

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

The state model also exposes a control point: the process must not leave a case
marked as in progress after an exception. Every recovery path therefore needs
to reach either ``processed`` or ``failed`` before the next case begins.


9. Operational Constraints Made Visible
=======================================

The source analysis revealed limitations that were important for maintainers
but easy to miss in the implementation.

.. list-table::
  :header-rows: 1
  :widths: 28 72
  :class: grid-table-1

  * - Constraint
    - Operational consequence
  * - No Blue Prism work queue
    - Cases are held in an in-memory collection after one API call. They cannot
      be distributed across several runtime resources, and a restart retrieves
      the cases again.
  * - External vendor mapping
    - Processing depends on a maintained vendor mapping source. A missing or
      duplicate mapping prevents automatic processing.
  * - Cloud extraction dependency
    - If the Azure workflow is unavailable, invoice extraction and validation
      cannot continue.
  * - Dry-run flag
    - Test mode bypasses SAP write operations. The production value must be
      checked because the process can otherwise appear successful without
      parking an invoice.
  * - Fixed company configuration
    - A company identifier is fixed in the SAP automation object. Supporting
      another company requires an implementation change.
  * - Incomplete SAP cleanup
    - An interruption during invoice parking may leave the SAP session in an
      inconsistent state because the object has no complete cleanup sequence.
  * - Case update dependency
    - An unexpected case update failure stops the run to prevent additional
      cases from advancing while their source records remain unchanged. A
      recognized reassignment condition is logged and does not stop the run.

Documenting these constraints turns hidden implementation behavior into
reviewable operational knowledge. It also separates documentation findings
from proposed product changes.


10. Result
==========

The final documentation does not reproduce the implementation stage by stage.
It provides several connected views of the same system:

- A scope statement defines the automation boundary and makes clear that the
  process parks invoices but does not post or pay them.
- The architecture model assigns each responsibility to a system boundary.
- The data flow inventory makes every significant exchange traceable.
- The per-case workflow reduces hundreds of implementation stages to the
  decisions that control automatic or manual processing.
- The interface documentation exposes the request, response, failure, and
  security contracts of the Azure workflow.
- The validation section explains why the matching algorithm uses several
  scoring methods and controls against false positives.
- The exception and state models show whether a failure affects one case or the
  complete run.
- The limitations section records operational risks that are otherwise visible
  only in code or configuration.

This work sample demonstrates system analysis, information architecture,
process logic visualization, data flow modeling, interface documentation,
exception analysis, and docs-as-code authoring with reStructuredText and
Mermaid.
