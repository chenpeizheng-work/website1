---
name: contract-template-rewrite
description: Rewrite or regenerate Chinese contract DOCX files from an existing contract template while preserving the template's layout, headings, signature pages, tables, and business style. Use when the user asks to "按模板改合同", "基于模板重做合同", "用前一个合同当模板", "根据模板改成另一个合同", or asks Codex to merge one contract's format with another contract's content.
---

# Contract Template Rewrite

## Overview

Use this skill to turn a source contract's business content into a new contract that follows a template contract's structure and visual style. Prioritize preserving the template's page furniture and legal-document feel while making the business facts, fee logic, party information, and signature content internally consistent.

## Workflow

1. Identify the role of each file.
   - Treat the user-named template contract as the formatting and clause-structure source.
   - Treat the other contract, notes, or user instructions as the business-content source.
   - If the user says "前一个合同当模板", use the first referenced contract as the template.

2. Inspect both documents before editing.
   - Extract visible paragraph text and tables from both files.
   - Check whether files with `.docx` extensions are actually legacy Word binary files; if a template has a `D0 CF 11 E0` header, convert it through Word/LibreOffice before using python-docx.
   - Preserve original files. Work on copies and write a clearly named new `.docx` unless the user explicitly asks to overwrite.

3. Map template structure to source content.
   - Preserve cover page layout, title treatment, filling instructions, heading hierarchy, signature page, and table styling from the template.
   - Replace project name, party names, addresses, legal representatives, contacts, introductory paragraph, technical goals, technical content, collaboration responsibilities, fee terms, responsibility terms, maintenance terms, and other source-specific content.
   - Remove template-only modules that do not apply to the new contract.
   - Add source-only clauses when they are part of the business deal and fit the template structure.

4. Reconcile fee logic.
   - Do not only change isolated numbers. Rewrite the surrounding fee paragraphs, payment terms, maintenance terms, and fee table so they agree.
   - If the user gives a new fee instruction, treat it as authoritative over both documents.
   - Check arithmetic in tables and prose.
   - Keep current-year fees distinct from future annual maintenance or renewal fees.
   - Read `references/fee-and-qa-checklist.md` when the task includes pricing, annual fees, maintenance fees, renewal fees, totals, or payment timing.

5. Preserve formatting carefully.
   - Prefer editing runs/paragraphs in the converted template rather than creating a fresh document.
   - When replacing text, preserve the first run's styling where possible.
   - When replacing tables, keep the template's table object and row/cell styling; adjust row count and cell text.
   - Avoid command-line Chinese encoding corruption. If direct Chinese literals become mojibake, copy text from source DOCX objects or use Unicode escapes in scripts.

6. Verify the output.
   - Extract the final document's key paragraphs and tables and compare against user instructions.
   - Search for obsolete template terms such as old project names, old totals, old party names, or outdated laws.
   - Render or export the DOCX to PDF/images and visually inspect all pages when available.
   - Check for乱码, clipped table text, awkward page breaks, missing signature lines, and fee inconsistencies.
   - If render tooling is missing, use Word COM export on Windows when available; otherwise disclose that visual QA was limited.

7. Deliver only the final DOCX unless the user asks for intermediate files.

## Output Naming

Use a descriptive Chinese filename, usually:

`<新项目合同名>-按<模板简称>模板重做.docx`

If revising an existing generated contract, update that file when the user says "改一下这个" or clearly refers to the current deliverable.

## Common Trigger Examples

- "用这个合同当模板，把另一个合同重做一下"
- "以后我要基于模板改合同，你按这个套路来"
- "按糖脂康合同模板改统一支付合同"
- "这个合同费用改成 20000，其中首年维护费 5000，以后每年 5000"
- "模板格式不变，内容换成新项目"
