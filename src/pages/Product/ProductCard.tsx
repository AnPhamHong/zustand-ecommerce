import { getColorFromName } from "../../utils/getColorFromName";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Product } from "../../db/data";
import renderStar from "../../utils/getStar";
import { useFavoritesStore } from "../../store/favoriteStore";

const ProductCard = ({
  isSale,
  isNew,
  img,
  title,
  rating,
  reviews,
  price,
  oldPrice,
  colors,
  id,
}: Product) => {
  const { favorites, toggleFavorite } = useFavoritesStore();

  const handleToggleFavorite = () => {
    toggleFavorite(id);
  };

  const isFavorite = favorites.includes(id);
  console.log(isFavorite);
  return (
    <div className="card-container">
      <div className="card-img-wrapper">
        <img src={img} alt={title} className="card-img" />
      </div>

      <div
        className="corner-ribbon"
        data-ribbon={isSale ? "sale" : isNew ? "new" : ""}
      />

      <div className="card-details">
        <div className="card-info">
          <div className="card-color">
            {colors.length &&
              colors.map((color, idx) => (
                <div
                  key={idx}
                  style={{ backgroundColor: getColorFromName(color) }}
                />
              ))}
          </div>
          <p className="card-title">{title}</p>
          <div className="card-price">
            <span className="card-price-current">${price}</span>
            <span className="card-price-prev">${oldPrice}</span>
          </div>
          <div className="card-review">
            {renderStar(rating)}

            <span className="total-reviews">({reviews} reviews)</span>
          </div>
        </div>
      </div>
      <div className="card-actions">
        <button
          className="product-btn btn-heart"
          onClick={handleToggleFavorite}
        >
          <CiHeart
            size={24}
            style={{ strokeWidth: 0.5 }}
            color={isFavorite ? "#E63946" : ""}
          />
        </button>
        <button className="product-btn btn-cart">
          <CiShoppingCart size={24} style={{ strokeWidth: 0.5 }} />
        </button>
        <button className="product-btn btn-view-detail">View Detail</button>
      </div>
    </div>
  );
};

export default ProductCard;
