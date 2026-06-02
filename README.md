# Client Multibrand Dashboard Automation

Automated Google Sheets dashboard for **Cheen** — replacing a manually updated spreadsheet with a live data pipeline pulling from Shopify, Meta Ads, and Google Ads via API.

**Brands:** brand1 (AU, NZ) · brand2 (AU, NZ, US, UK) · brand3 (AU)

---

## What it does

- Pulls **Shopify net revenue** per brand/market daily (gross sales, discounts, taxes, shipping, returns, net sales)
- Pulls **Meta Ads spend** per brand, split by campaign name filter (AU vs NZ from a single shared ad account)
- Pulls **Google Ads spend** per customer account with daily and MTD breakdowns
- Writes to a structured Google Sheets dashboard with 4 tabs
- Auto-refreshes every day at **6 AM AEST** via time-based trigger
- Includes a **Cheen Dashboard** custom menu in Google Sheets for manual refresh and connection testing

---

## Dashboard Tabs

| Tab | Contents |
|---|---|
| Platform Summary | Aggregated view of all platforms and brands |
| Google Ads Data | Daily spend · MTD cost · Budget · Remaining · Pacing % |
| Meta Data | Daily spend · MTD cost · Budget · Remaining · Pacing % |
| Shopify Data | Orders · Gross Sales · Discounts · Taxes · Shipping · Returns · Net Sales · Total Sales |

---

## Platform Connection Status

| Platform | Brand | Market | Status |
|---|---|---|---|
| Shopify | brand1 | AU | ✅ Connected |
| Shopify | brand1 | NZ | ✅ Connected |
| Shopify | brand2 | AU / NZ / US / UK | ✅ Connected |
| Shopify | brand3 | AU | ✅ Connected |
| Meta Ads | brand1 | AU | ✅ Connected |
| Meta Ads | brand1 | NZ | ✅ Connected |
| Meta Ads | brand2 | AU / NZ / US / UK | ✅ Connected |
| Meta Ads | brand3 | AU | ✅ Connected |
| Google Ads | brand1 | AU | ✅ Connected |
| Google Ads | brand1 | NZ | ✅ Connected |
| Google Ads | brand2 | AU / NZ / US / UK | ✅ Connected |
| Google Ads | brand3 | AU | ✅ Connected |

---

## Files

| File | Description |
|---|---|
| `Cheen_Automated_Dashboard.js` | Main Apps Script — paste into Apps Script editor as `Code.gs` |
| `appsscript.json` | Manifest file with required OAuth scopes |
| `README.md` | This file |
| `Cheen_Dashboard_Documentation.docx` | Full technical documentation |

---

## Setup

### 1. Add the script
1. Open your Google Sheet → **Extensions → Apps Script**
2. Paste the contents of `Cheen_Automated_Dashboard.js` into `Code.gs`
3. Replace `appsscript.json` contents with the file from this repo (enable it via **Project Settings → Show appsscript.json**)
4. Save

### 2. Set timezone
In Apps Script → **Project Settings** → set **Time zone** to `Australia/Sydney`

### 3. Activate the daily trigger
1. In the function dropdown at the top, select **`setupTriggers`**
2. Click **▶ Run**
3. Approve permissions when the popup appears
4. Confirm the trigger exists under the **Triggers** panel (clock icon in sidebar)

### 4. Test connections
In your Google Sheet → **Cheen Dashboard** menu:
- **Test Shopify Connection** — logs MTD metrics per brand
- **Test Meta Connection** — logs AU and NZ spend split by campaign filter
- **Test Google Ads Connection** — logs spend for connected accounts

---

## Key Technical Details

### Shopify Formula
```
Gross Sales  = sum(line_item.price × quantity)
Net Sales    = Gross Sales − Discounts − Returns
Total Sales  = Net Sales + Shipping + Taxes
```

### Meta AU/NZ Split
brand1 shares a single Meta ad account. The script filters campaign rows by name:
- AU → campaign name contains `AM | DB | AU`
- NZ → campaign name contains `AM | DB | NZ`

### Timezone
Dynamic Sydney offset handles daylight saving: `+11:00` (AEDT, Oct–Apr) and `+10:00` (AEST, May–Sep)

### Rate Limiting
Shopify calls include exponential backoff retry on HTTP 429 (up to 5 attempts) and a 300ms pause between paginated pages.

---

## Required OAuth Scopes

```json
"oauthScopes": [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/script.scriptapp",
  "https://www.googleapis.com/auth/script.external_request",
  "https://www.googleapis.com/auth/adwords",
  "https://www.googleapis.com/auth/script.container.ui"
]
```

---

## Privacy Note

This is a portfolio-safe version. All live tokens, store domains, customer IDs, ad account IDs, and client identifiers have been replaced with placeholders. Brand names have been anonymised as brand1, brand2, brand3.

---

*Developer: Cheen · cj.ronquillo09@gmail.com · Portfolio-safe version · June 2026*
