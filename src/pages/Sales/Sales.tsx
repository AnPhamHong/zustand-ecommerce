import dataPromotion from "@/db/dtPromotion";
import ProductList from "@/pages/Products/ProductList";
import "@/styles/pages/Sales.scss";
import { FaGifts } from "react-icons/fa";
export default function Sales() {
  return (
    <>
      <section className="sales-container">
        <h1>Sale</h1>
        <div className="promotion-box">
          {dataPromotion.map((promotion) => {
            return (
              <div key={promotion.id} className="promotion-column">
                <img src={promotion.image} alt={promotion.name} />
                <div className="promotion-detail">
                  <div className="promotion-detail-name">{promotion.name}</div>
                  <div className="promotion-detail-desc">{promotion.desc}</div>
                  <a className="promotion-detail-href" href={promotion.href}>
                    <button>Learn more</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <ProductList title="last pairs" onlySale />
      </section>
      <div className="best-gift-container">
        <div className="best-gift-left">
          <FaGifts size={48} color="#6E7051" />
          <div>
            <h2>The best gift</h2>
            <p>Lacus vel sit eu integer leo nec ornare consequat eget dolor</p>
          </div>
        </div>

        <button>shop gift card</button>
      </div>
    </>
  );
}
