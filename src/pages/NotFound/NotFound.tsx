import React from "react";
import "@/styles/pages/NotFound.scss";

const NotFound: React.FC = () => {
  return (
    <section className="notfound-section">
      <div className="container">
        <div className="content">
          <h1 className="error-code">404</h1>
          <p className="title">Something's missing.</p>
          <p className="description">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <a href="/" className="back-button">
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
