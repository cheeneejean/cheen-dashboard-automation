var SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
var DEVELOPER_TOKEN = 'YOUR_GOOGLE_ADS_DEVELOPER_TOKEN';
var TIMEZONE = 'Australia/Sydney';

var TAB_SUMMARY = 'Platform Summary';
var TAB_GOOGLE_ADS = 'Google Ads Data';
var TAB_META = 'Meta Data';
var TAB_SHOPIFY = 'Shopify Data';

var BUDGETS = {
  BRAND1_AU: { mediaSpend: 22000, revenueTarget: 132000 },
  BRAND1_NZ: { mediaSpend: 2000, revenueTarget: 8000 },
  BRAND2_AU: { mediaSpend: 35000, revenueTarget: 69367 },
  BRAND2_US: { mediaSpend: 11150, revenueTarget: 42274 },
  BRAND2_NZ: { mediaSpend: 4500, revenueTarget: 5923 },
  BRAND2_UK: { mediaSpend: 12000, revenueTarget: 24323 },
  BRAND3_AU: { mediaSpend: 4000, revenueTarget: 22696 }
};

var BRANDS = [
  { key: 'BRAND1_AU', brand: 'brand1', market: 'AU' },
  { key: 'BRAND1_NZ', brand: 'brand1', market: 'NZ' },
  { key: 'BRAND2_AU', brand: 'brand2', market: 'AU' },
  { key: 'BRAND2_US', brand: 'brand2', market: 'US' },
  { key: 'BRAND2_NZ', brand: 'brand2', market: 'NZ' },
  { key: 'BRAND2_UK', brand: 'brand2', market: 'UK' },
  { key: 'BRAND3_AU', brand: 'brand3', market: 'AU' }
];

var CONNECTIONS = {
  googleAds: {
    BRAND1_AU: { customerId: 'YOUR_GOOGLE_ADS_CUSTOMER_ID_AU', approved: true },
    BRAND1_NZ: { customerId: 'YOUR_GOOGLE_ADS_CUSTOMER_ID_NZ', approved: true },
    ALL_PLATFORMS: { connected: true }
  },
  shopify: {
    BRAND1_AU: { shop: 'your-brand1-au-store.myshopify.com', token: 'YOUR_SHOPIFY_TOKEN_AU', connected: true },
    BRAND1_NZ: { shop: 'your-brand1-nz-store.myshopify.com', token: 'YOUR_SHOPIFY_TOKEN_NZ', connected: true }
  },
  meta: {
    adAccountId: 'YOUR_META_AD_ACCOUNT_ID',
    accessToken: 'YOUR_META_ACCESS_TOKEN',
    connected: true,
    filters: {
      BRAND1_AU: 'AM | brand1 | AU',
      BRAND1_NZ: 'AM | brand1 | NZ'
    }
  }
};

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Cheen Dashboard')
    .addItem('Refresh All Platform Tables', 'manualRefreshAll')
    .addSeparator()
    .addItem('Setup 6am Auto-Refresh', 'setupTriggers')
    .addSeparator()
    .addItem('Test Shopify Connection', 'testShopifyConnection')
    .addItem('Test Meta Connection', 'testMetaConnection')
    .addItem('Test Google Ads Connection', 'testGoogleAdsConnection')
    .addToUi();
}
