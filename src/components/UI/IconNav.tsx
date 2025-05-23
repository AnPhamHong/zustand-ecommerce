import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import styles from "@/styles/components/IconNav.module.scss";
import { useFavoritesStore } from "@/store/favoriteStore";
import { useCartStore } from "@/store/cartStore";
interface IconNavProps {
  isOnlyCart?: boolean;
}

const IconNav = ({ isOnlyCart }: IconNavProps) => {
  const { favorites } = useFavoritesStore();
  const { total, openQuickViewCart } = useCartStore();
  const totalFavoriteItem = favorites.length ?? 0;
  return isOnlyCart ? (
    <div className={styles.iconNav}>
      <div
        className={styles["heart-container"]}
        onClick={() => {
          openQuickViewCart();
        }}
      >
        <CiShoppingCart size={32} />
        {total > 0 && <span className={styles["heart-badge"]}>{total}</span>}
      </div>
    </div>
  ) : (
    <div className={styles.iconNav}>
      <div className={styles["heart-container"]}>
        <CiHeart size={32} />
        {totalFavoriteItem > 0 && (
          <span className={styles["heart-badge"]}>{totalFavoriteItem}</span>
        )}
      </div>

      <div
        className={styles["heart-container"]}
        onClick={() => {
          openQuickViewCart();
        }}
      >
        <CiShoppingCart size={32} />
        {total > 0 && <span className={styles["heart-badge"]}>{total}</span>}
      </div>

      <CiUser size={32} />
    </div>
  );
};

export default IconNav;
