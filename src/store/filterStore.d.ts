import { BrandType, CategoryType, PriceRange } from "@/types/product";
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
export declare const useFilterStore: import("zustand").UseBoundStore<FilterState, import("zustand").StoreApi<FilterState>>;
export {};
