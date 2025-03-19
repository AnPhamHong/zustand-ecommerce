import React from "react";
import "../../styles/pages/PromotionBanner.scss";
import bgPromotion from "../../assets/promotion.png";

const PromotionBanner: React.FC = () => {
  return (
    <section className="promotion-banner">
      <img src={bgPromotion} alt="bgPromotion" />
    </section>
  );
};

export default PromotionBanner;
