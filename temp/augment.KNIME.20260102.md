---
id: 'augment.KNIME.20260102'
title: Building a Robust XML ETL Pipeline with KNIME
desc: >-
  Session log documenting the process of creating an automated KNIME workflow to read daily financial XML reports (pacs.002 and pacs.003), extract transaction data, and append to a master Excel database, including troubleshooting XML parsing issues and implementing parallel processing strategies.
updated: 1767350516265
created: 1735815921000
tags:
  - knime
  - etl
  - xml-processing
  - data-pipeline
  - financial-reports
  - workflow-automation
---

## Table of Contents

- [Objective](#objective)
- [Part 1: The pacs.002 Challenge (Valid XML)](#part-1-the-pacs002-challenge-valid-xml)
  - [Goal](#goal)
  - [Step 1: The "Single Row" Problem](#step-1-the-single-row-problem)
  - [Step 2: The "Missing Header" Problem](#step-2-the-missing-header-problem)
- [Part 2: The pacs.003 Challenge (Corrupt Data)](#part-2-the-pacs003-challenge-corrupt-data)
  - [Goal](#goal-1)
  - [Step 3: The "Empty Table" Diagnosis](#step-3-the-empty-table-diagnosis)
  - [Step 4: The "Repair Shop" Sub-Workflow](#step-4-the-repair-shop-sub-workflow)
  - [Step 5: The "Surgical" Regex Fix](#step-5-the-surgical-regex-fix)
- [Part 3: Data Quality & Execution](#part-3-data-quality--execution)
  - [Step 6: Date Format Correction](#step-6-date-format-correction)
  - [Step 7: The "Excel Lock" (Race Condition)](#step-7-the-excel-lock-race-condition)
  - [Step 8: Final Documentation](#step-8-final-documentation)
- [Summary of Final Workflow Logic](#summary-of-final-workflow-logic)
- [Appendix: Visual Debugging Log](#appendix-visual-debugging-log)
  - [Exhibit A: The Silent Failure](#exhibit-a-the-silent-failure)
  - [Exhibit B: The "Smoking Gun"](#exhibit-b-the-smoking-gun)
  - [Exhibit C: The Boolean Mismatch](#exhibit-c-the-boolean-mismatch)
  - [Exhibit D: The "Missing Value" Error](#exhibit-d-the-missing-value-error)
  - [Exhibit E: The Parallel Crash](#exhibit-e-the-parallel-crash)

## Objective

Create an automated workflow to read daily financial XML reports (pacs.002 and pacs.003), extract specific transaction data, and append it to a master Excel database.

## Part 1: The pacs.002 Challenge (Valid XML)

### Goal

Extract multiple transactions and a single header ID from a standard XML file.

### Step 1: The "Single Row" Problem

**Symptom:** The workflow was reading the file but only extracting the first transaction (Amount/Date) from the XML.

**Root Cause:** The XPath node was configured to return a "Single Cell" (String). This tells KNIME to stop after the first match.

**The Fix:**

1. Open the first XPath node.
2. Change Return Type to Node cell (XML).
3. Change Multiple tag options to Multiple Rows.

**Result:** The node now "shreds" the file, creating a new row for every `<TxInfAndSts>` block found.

### Step 2: The "Missing Header" Problem

**Symptom:** After shredding the file into transaction rows, the file header information (specifically the MSG_ID) was lost/inaccessible.

**Failed Attempt:** We tried extracting the MSG_ID in the same loop and passing it via Flow Variables. This caused complex issues with variable scope ("Propagate modified loop variables") and data overwriting (race conditions).

**The Solution (Architecture Change):** We adopted a Two-Branch Parallel Strategy.

- **Branch A (Transactions):** Loops through files to extract Amount and Event_date. Adds Filename as a column.
- **Branch B (Header):** Loops through files to extract only MSG_ID. Adds Filename as a column.
- **Merge:** A Joiner node merges the two branches using Filename as the common key.

## Part 2: The pacs.003 Challenge (Corrupt Data)

### Goal

Process pacs.003 files that were failing in the standard reader.

### Step 3: The "Empty Table" Diagnosis

**Symptom:** The XML Reader node for pacs.003 produced an empty table (silent failure) or a SAXParseException.

**Investigation:**

We tried changing XPath queries (`//dns:DrctDbtTxInf`) and ignoring namespaces (`local-name()`). Result: Still empty.

**Breakthrough:** You provided a browser error message: "Extra content at the end of the document".

**Diagnosis:** The file was malformed. It contained multiple valid XML documents concatenated into a single text file (multiple `<?xml...` headers). Standard parsers stop immediately after the first document closes.

### Step 4: The "Repair Shop" Sub-Workflow

We replaced the XML Reader with a custom file-repair pipeline:

1. **Ingest:** Line Reader (read as plain text) → GroupBy (concatenate all lines into one cell).
2. **Split:** Cell Splitter (delimiter: `<?xml`) → Split the file into chunks.
3. **Reshape:** Unpivoting → Convert the columns of chunks into rows.
4. **Clean:** Row Filter → Remove the first empty row created by the split.

### Step 5: The "Surgical" Regex Fix

The split chunks were messy (containing partial headers and trailing junk).

**Action:** Used String Manipulation to surgically extract only the valid code.

**Formula:** `regexReplace($ColumnValues$, ".*(<Document[\\s\\S]*<\\/Document>).*", "$1")`

**Logic:** Find the `<Document>...</Document>` block and discard everything before and after it.

**Rebuild:** Used String Manipulation to add the standard header: `join("<?xml version=\"1.0\" encoding=\"UTF-8\"?>", $ColumnValues$)`.

**Finalize:** Used String to XML to convert the text to a valid XML data type.

## Part 3: Data Quality & Execution

### Step 6: Date Format Correction

**Symptom:** The String to Date&Time node failed on dates like `2025-10-01`.

**Cause:** We used the format `yyyy-mm-dd`. In KNIME/Java, lowercase `mm` stands for minutes.

**Fix:** Changed format to `yyyy-MM-dd` (uppercase `MM` for months).

### Step 7: The "Excel Lock" (Race Condition)

**Symptom:** The workflow failed at the very last step. Writing to 3 sheets in the same Excel file simultaneously caused a file lock error.

**Fix:** We enforced Sequential Execution.

1. Connected the Flow Variable ports (red circles) between the three Excel Writer nodes.
2. Order: Stream 1 finishes → triggers Stream 2 → triggers Stream 3.

### Step 8: Final Documentation

**Goal:** Ensure the workflow is maintainable by a KNIME beginner and capture the knowledge gained.

**Action:** Generated a comprehensive node-by-node guide (KNIME Workflow Documentation.md) covering both workflows, FAQs, and maintenance tips to ensure long-term usability.


## Summary of Final Workflow Logic

1. **Read Config:** User inputs date.
2. **List Files:** Find files matching the date pattern.
3. **Filter:** Exclude files already in the database.
4. **Parallel Loops:**
   - **pacs.002:** Standard XML Read → Shred → Extract.
   - **pacs.003:** Repair (Split/Regex/Rebuild) → Shred → Extract.
5. **Join & Clean:** Merge Headers with Transactions, fix data types.
6. **Write:** Sequentially append to Excel.

## Appendix: Visual Debugging Log

How specific visual evidence drove troubleshooting process:

### Exhibit A: The Silent Failure

**Visual:** Screenshot of XML Reader node producing an empty output table (0 rows).

**Diagnosis:** The node was not erroring out (red light); it was simply failing to find a valid root structure it understood. This eliminated the theory that our XPath queries were wrong—the problem was upstream at the file level.

### Exhibit B: The "Smoking Gun"

**Visual:** Screenshot of file opened in a web browser showing: "Error: Extra content at the end of the document."

**Diagnosis:** This confirmed the file wasn't just "corrupt" with random noise. It was malformed structure. The parser finished one document and immediately hit the start of a second one (`<?xml...`), which is illegal. This dictated the strategy: Split the file.

### Exhibit C: The Boolean Mismatch

**Visual:** Screenshot of String Manipulation node output showing True / False instead of XML text.

**Diagnosis:** We were using a function designed to check for a match (regexMatcher in some contexts) rather than replace the text. This led us to switch to `regexReplace` (or extraction-focused) configuration to physically grab the text.

### Exhibit D: The "Missing Value" Error

**Visual:** Screenshot of a red error icon (!) in the new column output.

**Diagnosis:** The regex pattern was failing to match anything. A visual inspection of the formula revealed a single typo: `[\\s]S]` instead of `[\\s\\S]`. This tiny difference meant the pattern couldn't match newlines, causing the entire repair step to fail.

### Exhibit E: The Parallel Crash

**Visual:** Workflow failing only at the final write step, with red lights on the Excel Writer nodes.

**Diagnosis:** A classic visual representation of a Race Condition. Seeing three parallel lines converging on a single file resource simultaneously confirmed that we needed to serialize the write operations using flow variable connections.


