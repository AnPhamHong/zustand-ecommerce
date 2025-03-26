import React from "react";
import styles from "@/styles/components/StarRating.module.scss";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  return (
    <div className={styles["star-rating"]}>
      {[...Array(5)].map((_, i) => {
        return (
          <span
            key={i}
            className={`${styles.star} ${i < fullStars ? styles.full : ""} ${
              i === fullStars && hasHalfStar ? styles.half : ""
            }`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
