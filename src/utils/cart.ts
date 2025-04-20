export function getTotalPrice(price: number, quality: number): string {
  const total = price * quality;
  return total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
