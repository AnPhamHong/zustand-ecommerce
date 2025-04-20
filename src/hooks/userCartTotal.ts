
import { useCartStore } from "@/store/cartStore";
import { useMemo } from "react";

export function useCartTotal() {
  const cart = useCartStore((state) => state.lst);


  const subTotal = useMemo(() => {
    return {
      price: cart.reduce((sum, item) => {
        const price = item.price ?? 0;
        const quantity = item.quantityAddToCart ?? 0;
        return sum + price * quantity;
      }, 0),
      quality: cart.reduce((sum, item) => sum + item.quantityAddToCart, 0)
    };
  }, [cart]);

  const formatted = useMemo(() => {
    return subTotal.price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }, [subTotal]);

  return { subTotal, formatted };
}
