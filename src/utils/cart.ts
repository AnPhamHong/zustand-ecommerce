export function getTotalPrice(price: number, quality: number): string {
  const total = price * quality;
  return total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function getTotalOrder(price: number, tax: number = 5,shipping:number = 8.32): string {
  const total = price + tax + shipping;
  return total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}


export function formattedPrice(price: number): string {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
