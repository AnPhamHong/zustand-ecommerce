import { useMemo } from "react";
import { Product } from "@/types/product";
import { getProducts } from "@/db/data";

export const UseProduct = (id: string) => {
  const products: Product[] = useMemo(() => getProducts(), []);

  return products.find((p) => p.id === id) || null;
};
