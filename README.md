# cHeen Dashboard Automation

GitHub-safe version of the Google Sheets automation project for cHeen. This dashboard replaces a manually updated spreadsheet with a live pipeline that pulls from Shopify, Meta Ads, and Google Ads.

## Public repo changes

- Gmail/account reference updated to `cj.ronquillo09@gmail.com`
- Brand labels renamed to `bRand_1`, `bRand_2`, and `bRand_3`
- Google Ads status updated to `Connected`
- Sensitive values replaced with placeholders for safe public upload

## Files

- `cHeen_Automated_Dashboard_GitHub_Safe.js` — public-safe Apps Script file
- `appsscript.json` — OAuth manifest
- `README_GitHub_Safe.md` — public-safe documentation starter

## Brand mapping

- `bRand_1` = former DB brand entries
- `bRand_2` = former INIKA brand entries
- `bRand_3` = former RAWW brand entries

## Before deployment

Replace these placeholders in the script before using it in Google Apps Script:

- `YOUR_SPREADSHEET_ID_HERE`
- `YOUR_GOOGLE_ADS_DEVELOPER_TOKEN_HERE`
- `YOUR_GOOGLE_ADS_CUSTOMER_ID_AU`
- `YOUR_GOOGLE_ADS_CUSTOMER_ID_NZ`
- `YOUR_SHOPIFY_ADMIN_TOKEN_AU`
- `YOUR_SHOPIFY_ADMIN_TOKEN_NZ`
- `YOUR_META_AD_ACCOUNT_ID`
- `YOUR_META_ACCESS_TOKEN`

## Suggested .gitignore

```gitignore
*credentials*
*tokens*
*.env
node_modules/
.DS_Store
```

## GitHub repository name ideas

- `cheen-dashboard-automation`
- `cheen-platform-dashboard`
- `cheen-marketing-dashboard`
- `brand-performance-dashboard`

Recommended: `cheen-dashboard-automation`
