import imgEmpty from "../../assets/undraw_empty_4zx0.svg";
import "../../styles/pages/EmptyProduct.scss";

export default function EmptyProduct() {
  return (
    <div className="no-product-container">
      <img
        src={imgEmpty}
        alt="No products found"
        className="no-product-image"
      />
      <h2>No products found</h2>
      <p>
        Try adjusting the filters or click the button below to see all products.
      </p>
      <button className="reset-filters-btn">Reset Filters</button>
    </div>
  );
}
