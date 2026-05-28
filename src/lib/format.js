import { CURRENCY_MAP, DEFAULT_CURRENCY } from '../data/currencies.js'

/**
 * Convert a base INR price into the active currency and format it
 * with the correct symbol, spacing and decimal places.
 */
export function formatPrice(amountInINR, currencyCode = DEFAULT_CURRENCY) {
  const c = CURRENCY_MAP[currencyCode] || CURRENCY_MAP[DEFAULT_CURRENCY]
  const converted = amountInINR * c.rate
  const rounded =
    c.decimals === 0 ? Math.round(converted) : Math.round(converted * 100) / 100
  const num = rounded.toLocaleString('en-US', {
    minimumFractionDigits: c.decimals,
    maximumFractionDigits: c.decimals,
  })
  return `${c.symbol}${c.symbolSpace ? ' ' : ''}${num}`
}

/** Convert without symbol (for inputs / maths). */
export function convert(amountInINR, currencyCode = DEFAULT_CURRENCY) {
  const c = CURRENCY_MAP[currencyCode] || CURRENCY_MAP[DEFAULT_CURRENCY]
  return amountInINR * c.rate
}
