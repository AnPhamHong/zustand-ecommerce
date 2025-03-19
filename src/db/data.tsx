import { Product } from "../types/product";
import getRandomRating from "../utils/getRating";

/** Return a random true/false */
function randomBoolean(): boolean {
  return Math.random() > 0.5;
}

/** Return a random integer within [min, max] */
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Product categories (you can add or remove items) */
const categories = ["Sneakers", "Flats", "Sandals", "Heels"];

/** List of brands (you can add or remove items) */
const companies = [
  "All Products",
  "Vans",
  "Adidas",
  "Puma",
  "Nike",
  "Skechers",
  "Under Armour",
  "New Balance",
  "Bruno Marc",
  "UIN",
];

/** Possible colors */
// const colorPool = [
//   "white",
//   "black",
//   "red",
//   "blue",
//   "green",
//   "brown",
//   "purple",
//   "yellow",
//   "gray",
//   "pink",
//   "violet",
//   "crimson",
// ];

/** Return a random array of colors (1 to 3 items), ensuring no duplicates */
// function randomColors(): string[] {
//   const size = randomInt(1, 3);
//   const arr: string[] = [];
//   while (arr.length < size) {
//     const c = colorPool[randomInt(0, colorPool.length - 1)];
//     if (!arr.includes(c)) {
//       arr.push(c);
//     }
//   }
//   return arr;
// }

/** Sample product names (you can add or remove items) */
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

/** Return one random product name */
function randomTitle() {
  return titlePool[randomInt(0, titlePool.length - 1)];
}

/** List of sample images (you can add or remove items) */
const imagePool = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXMlMjBzcG9ydHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1514514757092-71ebbc3db4e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXMlMjBzcG9ydHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXMlMjBzcG9ydHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXMlMjBzcG9ydHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1663134176589-eb782d207d13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNob2VzJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1578314921455-34dd4626b38d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2VzJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1600185365778-7875a359b924?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob2VzJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1619253341026-74c609e6ce50?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNob2VzJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1582229877992-183467c5eee9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNob2VzJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNob2VzJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNob2VzJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHNob2VzJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHNob2VzJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1631542204051-7927ce32b94e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHNob2VzJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1511556670410-f6989d6b0766?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHNob2VzJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNob2VzJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHNob2VzJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXMlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXMlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1519707574798-77140649cfe5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXMlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1597423913719-ad1f2b0e8f44?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXMlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1673977133185-a460c4744cec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNob2VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1673977134574-95689f812241?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNob2VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1673977132936-435a5cf780bd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNob2VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1689245691840-2ab8b3bf9cd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHNob2VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1723826750827-7c4f7855a440?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHNob2VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1668698471580-02f5c8eb739a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHNob2VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1673977134662-a7b143adc016?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHNob2VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1676234844384-82e1830af724?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHNob2VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1711609994211-ff45cfbcb04a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHNob2VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1671632777077-3fefe4004192?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fHNob2VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1483520960794-981c2c643540?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHNob2VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1454720503269-3a35c21bebc6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHNob2VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1674068280536-ca18252cfa8c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHNob2VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1665664652418-91f260a84842?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxzaG9lcyUyMHdvbWFufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1673448930612-fbc0bdff635e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxzaG9lcyUyMHdvbWFufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1675107359943-2319a2b473cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxzaG9lcyUyMHdvbWFufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1671586882027-bcf54eeec378?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxzaG9lcyUyMHdvbWFufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1668767725936-f896fbca8c66?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxzaG9lcyUyMHdvbWFufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1665413642308-c5c1ed052d12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxzaG9lcyUyMHdvbWFufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1674128399258-093aab2c7fc5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxzaG9lcyUyMHdvbWFufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1681855277910-f4e7f06331cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ5fHxzaG9lcyUyMHdvbWFufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1523450001312-faa4e2e37f0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxzaG9lcyUyMHdvbWFufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1671028365111-cec8e5a95a87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxzaG9lcyUyMHdvbWFufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1664457233911-9bdbcf827cc3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxzaG9lcyUyMHdvbWFufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1723826752957-0a9a82c2cc80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxzaG9lcyUyMHdvbWFufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1723651224498-d40493461602?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTczfHxzaG9lcyUyMHdvbWFufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1664438655922-3b10d3cbc3a4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgxfHxzaG9lcyUyMHdvbWFufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1738091397424-1345f9a574e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg5fHxzaG9lcyUyMHdvbWFufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1499321889027-736489e2f5a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxzaG9lcyUyMHdvbWFufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1738862175998-3283e92026ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk3fHxzaG9lcyUyMHdvbWFufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1739612422117-3bb527d279ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA5fHxzaG9lcyUyMHdvbWFufGVufDB8fDB8fHww",
];

/** Return one random image URL */
function randomImage() {
  return imagePool[randomInt(0, imagePool.length - 1)];
}

export const generateProducts = () =>
  Array.from({ length: 100 }).map((_, idx) => {
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
