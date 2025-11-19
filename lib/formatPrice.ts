/**
 * lib/formatPrice.ts
 *
 * Convert USD to VND and format for vi-VN locale.
 */

export type FormatUsdToVndOptions = {
  /** Exchange rate: 1 USD = X VND. Default: 24000 */
  rate?: number;
  /** Show currency symbol (₫). Default: true */
  includeCurrency?: boolean;
  /** Number of fraction digits in output. Default: 0 (VND usually has no decimals) */
  decimals?: number;
};

/**
 * Convert and format USD to VND.
 *
 * Examples:
 * formatUsdToVnd(10) -> "240.000 ₫" (with default rate 24000)
 * formatUsdToVnd("1,234.56", { rate: 23500, includeCurrency: false }) -> "29.012.616"
 */
export function formatUsdToVnd(
  amountUsd: number | string,
  options: FormatUsdToVndOptions = {}
): string {
  const { rate = 24000, includeCurrency = true, decimals = 0 } = options;

  // Normalize input (allow commas in strings)
  const num =
    typeof amountUsd === "string"
      ? parseFloat(amountUsd.replace(/,/g, ""))
      : amountUsd;

  if (!isFinite(num)) return "";

  const vndValue = num * rate;

  if (includeCurrency) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    }).format(vndValue);
  }

  return new Intl.NumberFormat("vi-VN", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(vndValue);
}

export default formatUsdToVnd;
