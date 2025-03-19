
import { PriceRange } from "../types/product";

export const initialMaxPrice = Number.MAX_SAFE_INTEGER; 

export const priceRanges: PriceRange[] = [
  { label: "All", min: 0, max: initialMaxPrice },
  { label: "$0 - $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "Over $150", min: 150, max: initialMaxPrice },
];
