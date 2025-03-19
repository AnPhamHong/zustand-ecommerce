export type CategoryType = "All" | "Sneakers" | "Flats" | "Sandals" | "Heels";
export type BrandType = "All Products" | "Vans"
  | "Adidas"
  | "Puma"
  | "Nike"
  | "Skechers"
  | "Under Armour"
  | "New Balance"
  | "Bruno Marc"
  | "UIN";

export interface PriceRange {
  label: string;
  min: number;
  max: number;
}

export interface Product {
  isSale: boolean;
  isNew: boolean;
  img: string;
  title: string;
  rating: number;
  reviews: number;
  oldPrice: number;
  price: number;
  company: string;
  category: string;
  id: string;
}
