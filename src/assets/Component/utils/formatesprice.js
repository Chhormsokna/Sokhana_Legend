export function formatPrice(amount) {
  return `$${Number(amount || 0).toFixed(2)}`;
}

export default formatPrice;
