import { JSX } from "react";
import { AiFillStar } from "react-icons/ai";
import { getColorFromName } from "../../utils/getColorFromName";
import { CiHeart, CiShoppingCart } from "react-icons/ci";

type ProductProps = {
  isSale: boolean;
  isNew: boolean;
  img: string;
  title: string;
  star: JSX.Element;
  reviews: number;
  prevPrice: string;
  newPrice: string;
  company: string;
  color: string;
  category: string;
};

const ProductCard = ({
  isSale,
  isNew,
  img,
  title,
  //   star,
  reviews,
  prevPrice,
  newPrice,
  //   company,
  color,
}: //   category,
ProductProps) => {
  console.log(isSale ? "sale" : isNew ? "new" : "");
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
            {color &&
              color
                .split(" ")
                .map((color) => (
                  <div style={{ backgroundColor: getColorFromName(color) }} />
                ))}
          </div>
          <p className="card-title">{title}</p>
          <div className="card-price">
            <span className="card-price-current">{prevPrice}</span>
            <span className="card-price-prev">${newPrice}</span>
          </div>
          <div className="card-review">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} />
            ))}

            <span className="total-reviews">({reviews} reviews)</span>
          </div>
        </div>
      </div>
      <div className="card-actions">
        <button className="product-btn btn-heart">
          <CiHeart size={24} style={{ strokeWidth: 0.5 }} />
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
