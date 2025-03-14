import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import styles from "../styles/components/IconNav.module.scss";

const IconNav = () => {
  return (
    <div className={styles.iconNav}>
      <CiHeart size={24} />
      <CiShoppingCart size={24} />
      <CiUser size={24} />
    </div>
  );
};

export default IconNav;
