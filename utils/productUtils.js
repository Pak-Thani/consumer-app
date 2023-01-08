export function numberPriceToStringPrice(price) {
  if (!price) return "";
  return (
    "Rp. " + price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.")
  );
}
