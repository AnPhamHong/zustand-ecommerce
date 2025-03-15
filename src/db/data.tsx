import getRandomRating from "../utils/getRating";

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
  colors: string[];
  category: string;
  id: string;
}

/** Trả về true/false ngẫu nhiên */
function randomBoolean(): boolean {
  return Math.random() > 0.5;
}

/** Trả về số nguyên ngẫu nhiên trong [min, max] */
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Danh mục sản phẩm (bạn có thể thêm/bớt) */
const categories = ["Sneakers", "Flats", "Sandals", "Heels"];

/** Danh sách hãng (bạn có thể thêm/bớt) */
const companies = ["Nike", "Adidas", "Vans", "Puma"];

/** Màu sắc có thể có */
const colorPool = [
  "white",
  "black",
  "red",
  "blue",
  "green",
  "brown",
  "purple",
  "yellow",
  "gray",
  "pink",
  "violet",
  "crimson",
];

/** Trả về mảng màu ngẫu nhiên (1-3 màu), không lặp lại */
function randomColors(): string[] {
  const size = randomInt(1, 3);
  const arr: string[] = [];
  while (arr.length < size) {
    const c = colorPool[randomInt(0, colorPool.length - 1)];
    if (!arr.includes(c)) {
      arr.push(c);
    }
  }
  return arr;
}

/** Tên sản phẩm mẫu (bạn có thể thêm/bớt) */
const titlePool = [
  "Air Monarch IV",
  "Air Vapormax Plus",
  "Waffle One Sneaker",
  "Running Shoe",
  "Flat Slip On Pumps",
  "Knit Ballet Flat",
  "Loafer Flats",
  "Zoom Freak",
  "Men's Sneaker",
  "Pacer Future Sneaker",
  "Unisex-Adult Super",
  "Roma Basic Sneaker",
  "Fusion Evo Golf Shoe",
  "Rainbow Chex Skate",
  "Low-Top Trainers",
  "Classic Bandana Sneakers",
  "Chunky High Heel",
  "Slip On Stiletto High Heel",
  "Court Shoes",
  "Low Mid Block Heels",
  "Amore Fashion Stilettos",
  "Bridal Sandals Glitter",
  "Wedding Prom Bridal",
];

/** Trả về 1 tên sản phẩm ngẫu nhiên */
function randomTitle() {
  return titlePool[randomInt(0, titlePool.length - 1)];
}

/** Danh sách ảnh mẫu (bạn có thể thêm/bớt) */
const imagePool = [
  "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
  "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
  "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
  "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
  "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
  "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
  "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
  "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
  "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
  "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
  "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
  "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
  "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
  "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
  "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
  "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
  "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
];

/** Trả về 1 link ảnh ngẫu nhiên */
function randomImage() {
  return imagePool[randomInt(0, imagePool.length - 1)];
}

export const generateProducts = () =>
  Array.from({ length: 50 }).map((_, idx) => {
    const category = categories[randomInt(0, categories.length - 1)];
    const comp = companies[randomInt(0, companies.length - 1)];
    const oldPrice = randomInt(80, 200);
    const price = randomInt(50, oldPrice);

    return {
      isSale: randomBoolean(),
      isNew: randomBoolean(),
      img: randomImage(),
      title: `${comp} ${randomTitle()}`,
      rating: getRandomRating(),
      reviews: randomInt(50, 500),
      oldPrice,
      price,
      company: comp,
      colors: randomColors(),
      category,
      id: `PROD-ENP-${idx}`,
    };
  });

export function getProducts(): Product[] {
  const saved = localStorage.getItem("products-data");
  if (saved) {
    try {
      return JSON.parse(saved) as Product[];
    } catch (error) {
      console.error("Error parsing saved products:", error);
    }
  }
  const products = generateProducts();
  localStorage.setItem("products-data", JSON.stringify(products));
  return products;
}
