import { FC } from "react";
import styles from "@/styles/components/ModalCart.module.scss";
import { cn } from "@/utils/cn";
import { ProductInCartState } from "@/types/cart";
import { IoBagRemoveSharp } from "react-icons/io5";
import { getTotalPrice } from "@/utils/cart";

interface ModalCartProps {
  isOpen: boolean;
  onClose: () => void;
  lstCart: ProductInCartState[];
  updateCart: (id: string, action: "decrease" | "increase") => void;
  removeItem: (id: string) => void;
  updateAmountItem: (item: string, quality: number) => void;
  total: string;
  totalQuality: number;
  isLoading: boolean;
}

const ModalCart: FC<ModalCartProps> = ({
  isOpen,
  onClose,
  lstCart,
  updateCart,
  removeItem,
  total,
  isLoading,
  updateAmountItem,
  totalQuality,
}) => {
  return (
    <div
      className={cn(styles.overlay, isOpen && styles.active)}
      id={`modal_cart-quick-view-${isOpen && "active"}`}
      onClick={onClose}
    >
      <div
        className={cn(styles.modal, isOpen && styles["modal--active"])}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.cart_header}>
          <h1>Shopping Cart</h1>
          <button className={styles.close} onClick={onClose}>
            &times;
          </button>
        </div>
        <div
          className={cn(
            styles.cart_body,
            isLoading && styles.cart_body_loading
          )}
        >
          {isLoading && (
            <div id="loading-cart" className={styles.loadingWrapper}>
              <div className={styles.spinner}></div>
            </div>
          )}
          {lstCart.map((product) => {
            return (
              <div key={product.id} className={styles.cart_items}>
                <img
                  src={product.img}
                  alt="img_product"
                  width={50}
                  height={50}
                />
                <div className={styles.cart_items_info}>
                  <div className={styles.cart_items_info_top}>
                    <h1>{product.title}</h1>
                    <IoBagRemoveSharp
                      size={20}
                      onClick={() => removeItem(product.id)}
                    />
                  </div>
                  <div className={styles.cart_items_info_bottom}>
                    <div className={styles.cart_actions}>
                      <button
                        onClick={() => updateCart(product.id, "decrease")}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className={styles.quality_add_to_cart}
                        defaultValue={+product.quantityAddToCart}
                        onChange={(e) =>
                          updateAmountItem(product.id, +e.target.value)
                        }
                      />
                      <button
                        onClick={() => updateCart(product.id, "increase")}
                      >
                        +
                      </button>
                    </div>
                    <p>
                      {getTotalPrice(product.price, product.quantityAddToCart)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.cart_footer}>
          <div className={styles.cart_footer_subtotal}>
            <h1>Subtotal: {totalQuality} items</h1>
            <p>{total}</p>
          </div>
          <div className={styles.cart_footer_actions}>
            <button>View Cart</button>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
