# cHeen Dashboard Automation

Automated Google Sheets dashboard for **cHeen** — replacing a manually updated spreadsheet with a live data pipeline pulling from Shopify, Meta Ads, and Google Ads via API.

**Brands:** DB Cosmetics (AU, NZ) · INIKA Organic (AU, NZ, US, UK) · RAWW Cosmetics (AU)

---

## What it does

- Pulls **Shopify net revenue** per brand/market daily
- Pulls **Meta Ads spend** per brand, split by campaign name filter
- Pulls **Google Ads spend** per account (pending API approval)
- Writes to a structured Google Sheets dashboard with 4 tabs
- Auto-refreshes every day at **6 AM AEST** via time-based trigger
- Includes a **cHeen Dashboard** custom menu in Google Sheets for manual refresh

---

## Files

| File | Description |
|---|---|
| `cHeen_Automated_Dashboard.js` | Main Apps Script — paste into Apps Script editor as `Code.gs` |
| `appsscript.json` | Manifest file with required OAuth scopes |
| `cHeen_Dashboard_Documentation.docx` | Full technical documentation and version history |

---

## Sheet Tabs

| Tab | Contents |
|---|---|
| Platform Summary | Master view — all platforms in one sheet |
| Google Ads Data | MTD spend, daily spend, budget pacing |
| Meta Data | MTD spend split by AU/NZ campaign filter |
| Shopify Data | Orders, gross sales, discounts, taxes, shipping, returns, net/total sales |

---

## Setup

### 1. Apps Script
1. Open your Google Sheet → **Extensions → Apps Script**
2. Delete all existing code in `Code.gs`
3. Paste the contents of `cHeen_Automated_Dashboard.js`
4. Enable the manifest: **Project Settings → Show `appsscript.json`**
5. Paste the contents of `appsscript.json`
6. Save both files

### 2. Authorize
1. Close and reopen the spreadsheet
2. Approve the OAuth popup (covers Sheets, Google Ads, and external requests)

### 3. Test
Run these from **cHeen Dashboard** menu in order:
1. **Test Shopify Connection** — check Execution Logs for revenue figures
2. **Test Meta Connection** — check Execution Logs for spend figures
3. **Refresh All Platform Tables** — writes data to all tabs
4. **Setup 6am Auto-Refresh** — run once to activate daily trigger

---

## Platform Connection Status

| Platform | Brand | Market | Status |
|---|---|---|---|
| Shopify | Brand 1 | AU | ✅ Connected |
| Shopify | Brand 1 | NZ | ✅ Connected |
| Meta Ads | Brand 1 | AU | ✅ Connected |
| Meta Ads | Brand 1 | NZ | ✅ Connected |
| Google Ads | Brand 1 | AU | ✅ Connected |
| Google Ads | Brand 1 | NZ | ✅ Connected |
| All platforms | Brand 2, Brand 3 | All | ✅ Connected |
---

## Configuration

Update these variables at the top of the script each month:

```javascript
var BUDGETS = {
  DB_AU:    { mediaSpend: 22000, revenueTarget: 132000 },
  DB_NZ:    { mediaSpend: 2000,  revenueTarget: 8000   },
  // ...
};
```

Add new brands by extending `BRANDS`, `BUDGETS`, and `CONNECTIONS`.

---

## Revenue Calculation (Shopify)

```
Gross Sales     = sum of (line_item.price × quantity)
Net Sales       = Gross Sales - Discounts - Returns
Total Sales     = Net Sales + Shipping + Taxes
```

Refunds are calculated from `refund_line_items.subtotal` where available, falling back to `transactions.amount` for transaction-level refunds.

---

## Meta AU/NZ Split

DB AU and DB NZ share one Meta ad account (`155299648560020`). The script splits spend by filtering campaign names:

- `AM | DB | AU` → counted as DB AU spend
- `AM | DB | NZ` → counted as DB NZ spend

---

## Version History

| Version | Date | Summary |
|---|---|---|
| v0.1 | May 12, 2026 | Initial script with all platform functions |
| v0.2 | May 12, 2026 | ES5 syntax fixes (backticks, optional chaining, numeric separators) |
| v0.3 | May 12–13, 2026 | Hardcoded credentials, Google Ads API v17→v24 fix |
| v0.4 | May 13, 2026 | OAuth scope fix for Google Ads (adwords scope in manifest) |
| v0.5 | May 13–14, 2026 | Shopify integration — resolved shpss/atkn/shpat token issues |
| v0.6 | May 14, 2026 | Revenue accuracy fix — subtract tax + refunds |
| v0.7 | May 14, 2026 | Duplicate row fix, custom cHeen Dashboard menu |
| v0.8 | May 14, 2026 | Meta Ads integration, trigger permission fix, restructured tabs |

---

## Troubleshooting

| Error | Fix |
|---|---|
| `403 SERVICE_DISABLED` (Google Ads) | Enable Google Ads API in GCP project 506999764125 |
| `403 ACCESS_TOKEN_SCOPE_INSUFFICIENT` | Add `adwords` scope to `appsscript.json` and re-authorize |
| `401 Invalid API key` (Shopify) | Use `shpat_` token from Shopify Admin → Apps → Develop apps |
| `400 app_not_installed` (Shopify) | Install app from Shopify Partners Dashboard into the store |
| Duplicate rows | Script clears all rows before each write — fixed in v0.7 |
| `setupTriggers()` permission error | Add `script.scriptapp` scope to `appsscript.json` |
| `SyntaxError: Unexpected token` | Apps Script requires ES5 — no backticks, `?.`, or `1_000` |

---

## Notes

- **Do not commit real tokens to a public repo** — replace with `YOUR_TOKEN_HERE` placeholders
- Google Ads API requires Basic Access approval from Google — see `cHeen_GoogleAds_API_Access_Request.docx`
- Shopify token generation changed in January 2026 — tokens must now be created via the Shopify Dev Dashboard

---

*Developer: Cheen (cj.ronquillo09@gmail.com) · Coordinator: Cheen · Client: cHeen · May 2026*
