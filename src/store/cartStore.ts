import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Product } from "../types/product";

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
  updateCart: (newProd: Product) => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist<CartState>(
      (set, get) => ({
        lst: [],
        total: 0,
        updateCart: (newProd) => {
          let product = {
            img: newProd.img,
            title: newProd.title,
            oldPrice: newProd.oldPrice,
            price: newProd.price,
            id: newProd.id,
            quantityAddToCart: 1,
          };

          const { lst } = get();
          const existingItem = lst.find((item) => item.id === product.id);
          if (existingItem) {
            product = {
              ...product,
              quantityAddToCart: existingItem.quantityAddToCart + 1,
            };
            set({ lst: [...lst, product], total: lst.length + 1 });
          } else {
            set({ lst: [...lst, product], total: lst.length + 1 });
          }
        },
      }),
      {
        name: "cart-storage",
      }
    )
  )
);
