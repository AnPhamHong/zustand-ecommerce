import React from "react";
import "@/styles/pages/ProductLst.scss";
import { Product } from "@/types/product";
import { getProducts } from "@/db/data";
import ProductItem from "@/pages/Products/ProductItem";
function shuffleArray(arr: Product[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function getRandomItems(arr: Product[], count = 6) {
  const newArr = [...arr];
  shuffleArray(newArr);
  return newArr.slice(0, count);
}

const BestSeller: React.FC = () => {
  const filteredProducts = getRandomItems(getProducts());

  return (
    <section className="best-seller-container">
      <div className="best-seller-title">
        <h2 className="best-seller-subtitle">our best seller</h2>
        <div className="best-seller-view-all">view all best sellers</div>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
