import  create from "zustand";
import { persist, devtools } from "zustand/middleware";
import {
  BrandType,
  CategoryType,
  PriceRange,
} from "@/types/product";
import { initialMaxPrice, priceRanges } from "@/db/priceRanges";

interface FilterState {
  selectedBrand: BrandType;
  selectedCategory: CategoryType;
  searchQuery: string;
  minPrice: number;
  maxPrice: number;
  priceRanges: PriceRange[];
  setSelectedCategory: (cat: CategoryType) => void;
  setSelectedBrand: (brand: BrandType) => void;
  setSearchQuery: (query: string) => void;
  setMinPrice: (price: number) => void;
  setMaxPrice: (price: number) => void;
  getPriceLabel: (min: number, max: number) => string;
}

function getPriceLabel(min: number, max: number): string {
  const found = priceRanges.find(
    (range) => range.min === min && range.max === max
  );
  return found ? found.label : "Custom";
}

export const useFilterStore = create<FilterState>(
  devtools(
    persist<FilterState>(
      (set) => ({
        selectedBrand: "All Products",
        selectedCategory: "All",
        searchQuery: "",
        minPrice: 0,
        maxPrice: initialMaxPrice,
        priceRanges: priceRanges,
        setSelectedCategory: (cat) => set({ selectedCategory: cat }),
        setSelectedBrand: (brand) => set({ selectedBrand: brand }),
        setSearchQuery: (query) => set({ searchQuery: query }),
        setMinPrice: (price) => set({ minPrice: price }),
        setMaxPrice: (price) => set({ maxPrice: price }),
        getPriceLabel: (min, max) => getPriceLabel(min, max),
      }),

      {
        name: "filter-storage",
      }
    )
  )
);
