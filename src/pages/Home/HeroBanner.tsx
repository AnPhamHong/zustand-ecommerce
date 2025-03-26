import React from "react";
import "@/styles/pages/HeroBanner.scss";

const HeroBanner: React.FC = () => {
  return (
    <section className="hero-banner">
      {/* Background Img */}
      <div className="hero-banner__background">
        <div className="hero-banner__overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-banner__content">
        <h1 className="hero-banner__title">Love the Borcelle we walk on</h1>
        <p className="hero-banner__description">
          Bibendum fermentum, aenean donec pretium aliquam blandit tempor
          imperdiet arcu arcu ut nunc in dictum mauris at ut.
        </p>
        <div className="hero-banner__buttons">
          <button className="hero-banner__button">shop now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
