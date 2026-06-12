# Fee And QA Checklist

Use this checklist when rewriting a contract from a template and the task includes contract amount, maintenance fees, annual fees, renewal terms, payment timing, or fee table edits.

## Fee Reconciliation

- Identify one-time development or implementation fees.
- Identify first-year maintenance, traffic, hosting, terminal, or service fees.
- Identify future annual maintenance or renewal fees.
- Distinguish "本次合同总费用" from "后续每年度费用".
- Make prose, table totals, payment schedule, responsibility clauses, and renewal clauses agree.
- Check Chinese uppercase amounts:
  - 5000 元: 伍仟圆整 or 伍仟元整, follow the source/template style.
  - 15000 元: 壹万伍仟圆整 or 壹万伍仟元整.
  - 20000 元: 贰万元整.
  - 29000 元: 贰万玖仟圆整 or 贰万玖仟元整.
- If the user gives a corrected fee, use that instruction even if source documents differ.

## Suggested Wording Pattern

For a contract where the current total includes first-year maintenance:

`本次合同技术服务费用总计：20000元（贰万元整），其中一次性开发与对接费用15000元（壹万伍仟圆整），首年终端流量与维护费用5000元（伍仟圆整）。`

For future annual maintenance:

`本合同期满后，后续每年度的终端流量费和维护费为5000元（伍仟圆整），于每年服务期起始日之前，甲方收到乙方合法发票后10个工作日内支付。`

## Final QA

- Search for old project names and old party names.
- Search for old fee numbers and confirm any remaining occurrence is intentional.
- Search for old law references if source uses a newer law, such as replacing `合同法` with `民法典` when appropriate.
- Extract all table rows and ensure totals match row items.
- Render all pages if possible and inspect:
  - cover page fields
  - main body headings
  - fee table
  - bank account lines
  - signature page
  - page breaks and table overflow
