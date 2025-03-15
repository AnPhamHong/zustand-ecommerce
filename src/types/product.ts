export type CategoryType = "All" | "Sneakers" | "Flats" | "Sandals" | "Heels";
export type ColorType = "Black" | "Blue" | "Red" | "Green" | "White";
export type BrandType = "All Products" | "Vans" | "Adidas" | "Puma" | "Nike";

export interface PriceRange {
  label: string;
  min: number;
  max: number;
}
