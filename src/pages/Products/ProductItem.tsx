import "@/styles/pages/ProductLst.scss";
import { Product } from "@/types/product";
import StarRating from "@/components/UI/StarRating";

interface ProductItemProps {
  product: Product;
  openModal?: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, openModal }) => {
  const { isSale, isNew, img, title, rating, price, oldPrice, id } = product;

  return (
    <div className="product-card" key={id}>
      <div className="product-image" onClick={openModal}>
        <div
          className="product-corner-ribbon"
          data-ribbon={isSale ? "sale" : isNew ? "new" : ""}
        />
        <img src={img} alt={title} />
        <div className="quick-view">Quick View</div>
      </div>
      <div className="product-details">
        <h3>{title}</h3>
        <p className="product-price">
          {oldPrice && (
            <span className="original-price">${oldPrice.toFixed(2)}</span>
          )}
          <span className="current-price">${price.toFixed(2)}</span>
        </p>
        <div className="product-rating">
          <StarRating rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
