/** @format */

export const formatCurrencyToVND = (amount: number): string => {
  if (!amount || isNaN(amount)) {
    return ""
  }

  const result = amount.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).replace("₫", "").trim();

  return result
};


export const formatCurrencyToUSD = (amount: number): string => {
  if (!amount || isNaN(amount)) {
    return ""
  }

  const result = amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).replace("$", "").trim();

  return result
};