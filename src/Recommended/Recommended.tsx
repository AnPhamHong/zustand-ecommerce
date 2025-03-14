import "../styles/pages/Recommended.scss";
const Recommended = () => {
  return (
    <div className="recommended-container">
      <h2>Recommended</h2>
      <div className="brand-filters">
        <button className="brand-filter">All Products</button>
        <button className="brand-filter">Nike</button>
        <button className="brand-filter">Adidas</button>
        <button className="brand-filter">Puma</button>
        <button className="brand-filter">Vans</button>
      </div>
    </div>
  );
};

export default Recommended;
