import React from "react";
import "../../styles/pages/BestSeller.scss";
import { getProducts } from "../../db/data";
import { Product } from "../../types/product";

function shuffleArray(arr: Product[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function getRandomItems(arr: Product[], count = 9) {
  const newArr = [...arr];
  shuffleArray(newArr);
  return newArr.slice(0, count);
}

const NewArrivals: React.FC = () => {
  const filteredProducts = getRandomItems(getProducts());

  return (
    <section className="best-seller-container">
      <div className="best-seller-title">
        <h2 className="best-seller-subtitle">new arrivals</h2>
        <div className="best-seller-view-all">view all new arrivals</div>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <div
                className="product-corner-ribbon"
                data-ribbon={product.isNew ? "new" : ""}
              />
              <img src={product.img} alt={product.title} />
              <div className="quick-view">Quick View</div>
            </div>
            <div className="product-details">
              <h3>{product.title}</h3>
              <p className="product-price">
                {product.oldPrice && (
                  <span className="original-price">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
                <span className="current-price">
                  ${product.price.toFixed(2)}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
