import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import styles from "../styles/components/IconNav.module.scss";
import { useFavoritesStore } from "../store/favoriteStore";

const IconNav = () => {
  const { favorites } = useFavoritesStore();
  const totalFavoriteItem = favorites.length ?? 0;
  return (
    <div className={styles.iconNav}>
      <div className={styles["heart-container"]}>
        <CiHeart size={32} />
        {totalFavoriteItem > 0 && (
          <span className={styles["heart-badge"]}>{totalFavoriteItem}</span>
        )}
      </div>
      <CiShoppingCart size={32} />
      <CiUser size={32} />
    </div>
  );
};

export default IconNav;
