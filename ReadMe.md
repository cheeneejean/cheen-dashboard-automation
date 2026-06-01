# Cheen Dashboard Automation

Automated Google Sheets dashboard for **Cheen** — replacing a manually updated spreadsheet with a live data pipeline pulling from Shopify, Meta Ads, and Google Ads via API.

**Brands:** brand1 (AU, NZ) · brand2 (AU, NZ, US, UK) · brand3 (AU)

---

## What it does

- Pulls **Shopify net revenue** per brand/market daily
- Pulls **Meta Ads spend** per brand, split by campaign name filter
- Pulls **Google Ads spend** per account
- Writes to a structured Google Sheets dashboard with 4 tabs
- Auto-refreshes every day at **6 AM AEST** via time-based trigger
- Includes a **Cheen Dashboard** custom menu in Google Sheets for manual refresh

---

## Files

| File | Description |
|---|---|
| `Cheen_Automated_Dashboard.js` | Main Apps Script — paste into Apps Script editor as `Code.gs` |
| `appsscript.json` | Manifest file with required OAuth scopes |
| `Cheen_Dashboard_Documentation_Cleaned.docx` | Public-safe technical documentation |

---

## Platform Connection Status

| Platform | Brand | Market | Status |
|---|---|---|---|
| Shopify | brand1 | AU | ✅ Connected |
| Shopify | brand1 | NZ | ✅ Connected |
| Meta Ads | brand1 | AU | ✅ Connected |
| Meta Ads | brand1 | NZ | ✅ Connected |
| Google Ads | brand1 | AU | ✅ Connected |
| Google Ads | brand1 | NZ | ✅ Connected |
| All platforms | brand2, brand3 | All | ✅ Connected |

---

## Notes

- Public version uses placeholders instead of live tokens or IDs
- Sensitive client identifiers were removed for portfolio use
- Google Ads is now reflected as connected for brand1 AU/NZ

---

*Developer: Cheen · Portfolio-safe version · June 2026*