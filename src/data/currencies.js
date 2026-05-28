/* ============================================================
   Multi-currency support.
   Base currency of the store is INR (₹). All product prices are
   authored in INR and converted on the fly using the indicative
   (demo) rates below. Flags are served from flagcdn.com.

   NOTE: rates are indicative demo values for presentation only,
   not live FX. Wire to a live FX feed for production.
   ============================================================ */

export const CURRENCIES = [
  { code: 'INR', symbol: '₹',   country: 'in', label: 'Indian Rupee',        rate: 1,       decimals: 0, symbolSpace: false },
  { code: 'USD', symbol: '$',   country: 'us', label: 'US Dollar',           rate: 0.012,   decimals: 2, symbolSpace: false },
  { code: 'EUR', symbol: '€',   country: 'eu', label: 'Euro',                rate: 0.011,   decimals: 2, symbolSpace: false },
  { code: 'GBP', symbol: '£',   country: 'gb', label: 'British Pound',       rate: 0.0095,  decimals: 2, symbolSpace: false },
  { code: 'JPY', symbol: '¥',   country: 'jp', label: 'Japanese Yen',        rate: 1.85,    decimals: 0, symbolSpace: false },
  { code: 'AUD', symbol: 'A$',  country: 'au', label: 'Australian Dollar',   rate: 0.018,   decimals: 2, symbolSpace: false },
  { code: 'CAD', symbol: 'CA$', country: 'ca', label: 'Canadian Dollar',     rate: 0.016,   decimals: 2, symbolSpace: false },
  { code: 'CHF', symbol: 'CHF', country: 'ch', label: 'Swiss Franc',         rate: 0.0105,  decimals: 2, symbolSpace: true  },
  { code: 'CNY', symbol: '¥',   country: 'cn', label: 'Chinese Yuan',        rate: 0.085,   decimals: 2, symbolSpace: false },
  { code: 'HKD', symbol: 'HK$', country: 'hk', label: 'Hong Kong Dollar',    rate: 0.094,   decimals: 2, symbolSpace: false },
  { code: 'SGD', symbol: 'S$',  country: 'sg', label: 'Singapore Dollar',    rate: 0.016,   decimals: 2, symbolSpace: false },
  { code: 'AED', symbol: 'د.إ', country: 'ae', label: 'UAE Dirham',          rate: 0.044,   decimals: 2, symbolSpace: true  },
  { code: 'RUB', symbol: '₽',   country: 'ru', label: 'Russian Ruble',       rate: 1.10,    decimals: 0, symbolSpace: false },
  { code: 'THB', symbol: '฿',   country: 'th', label: 'Thai Baht',           rate: 0.42,    decimals: 0, symbolSpace: false },
  { code: 'MYR', symbol: 'RM',  country: 'my', label: 'Malaysian Ringgit',   rate: 0.055,   decimals: 2, symbolSpace: true  },
  { code: 'BTN', symbol: 'Nu.', country: 'bt', label: 'Bhutanese Ngultrum',  rate: 1,       decimals: 0, symbolSpace: true  },
]

export const CURRENCY_MAP = Object.fromEntries(CURRENCIES.map((c) => [c.code, c]))

export const DEFAULT_CURRENCY = 'INR'

export const flagUrl = (country) => `https://flagcdn.com/w40/${country}.png`
