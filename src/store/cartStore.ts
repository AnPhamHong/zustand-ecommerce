import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Product } from "@/types/product";

interface ProductInCartState {
  img: string;
  title: string;
  oldPrice: number;
  price: number;
  id: string;
  quantityAddToCart: number;
}

interface CartState {
  lst: ProductInCartState[];
  total: number;
  updateCart: (newProd: Product, amount: number) => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist<CartState>(
      (set, get) => ({
        lst: [],
        total: 0,
        updateCart: (newProd, amount) => {
          console.log(amount)
          const product = {
            img: newProd.img,
            title: newProd.title,
            oldPrice: newProd.oldPrice,
            price: newProd.price,
            id: newProd.id,
            quantityAddToCart: 1,
          };

          const { lst } = get();
          const cloneLstCart = [...lst];
          const existingItemIdx = lst.findIndex((item) => item.id === product.id);
          if (existingItemIdx > -1) {
            cloneLstCart[existingItemIdx].quantityAddToCart = cloneLstCart[existingItemIdx].quantityAddToCart + (amount ?? 1);
          } else {
            cloneLstCart.push(product);
          }

          const totalAds = cloneLstCart.reduce((total, item) => total + item.quantityAddToCart, 0)
          
          set({ lst: [...cloneLstCart], total: totalAds });
        },
      }),
      {
        name: "cart-storage",
      }
    )
  )
);
