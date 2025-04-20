import { Product } from "@/types/product";

export interface ProductInCartState {
  img: string;
  title: string;
  oldPrice: number;
  price: number;
  id: string;
  quantityAddToCart: number;
}

export interface CartState {
  lst: ProductInCartState[];
  total: number;
  updateCart: (newProd: Product, amount: number) => void;
  isQuickViewCart: boolean;
  openQuickViewCart: () => void;
  updateAmountCart: (id: string, action: "increase" | "decrease") => void;
  removeItem: (id: string) => void;
  isLoading: boolean;
  updateAmountById: (id: string, quality: number) => void
}