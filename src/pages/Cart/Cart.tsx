import "@/styles/pages/Cart.scss";
import { ProductInCartState } from "@/types/cart";
import { useCartStore } from "@/store/cartStore";
import { IoBagRemoveSharp } from "react-icons/io5";
import { getTotalOrder, getTotalPrice } from "@/utils/cart";
import { useCartTotal } from "@/hooks/userCartTotal";
import PromotionBanner from "@/pages/Home/PromotionBanner";

export interface IAppProps {
  items: ProductInCartState[];
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function Cart() {
  const {
    lst,
    updateAmountById,
    removeItem,
    updateAmountCart,
  } = useCartStore();

  const { formatted, subTotal } = useCartTotal();
  return (
    <section className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-wrapper">
        <table className="cart-table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {lst.map((item, idx) => (
              <tr key={item.id}>
                <td
                  data-label={`${idx + 1}.`}
                  style={{ color: "#f4a261", fontWeight: 600 }}
                >
                  <IoBagRemoveSharp
                    className="remove-btn"
                    size={24}
                    onClick={() => removeItem(item.id)}
                  />
                </td>
                <td>
                  <img src={item.img} alt={item.title} />
                </td>
                <td data-label="Product:">
                  <span>{item.title}</span>
                </td>
                <td data-label="Price:">${item.price.toFixed(2)}</td>
                <td data-label="Quantity:">
                  <div className="quantity-control">
                    <button
                      onClick={() => updateAmountCart(item.id, "decrease")}
                    >
                      –
                    </button>
                    <input
                      className="quality_add_to_cart"
                      type="number"
                      value={+item.quantityAddToCart}
                      onChange={(e) =>
                        updateAmountById(item.id, +e.target.value)
                      }
                    />
                    <button
                      onClick={() => updateAmountCart(item.id, "increase")}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td data-label="Subtotal:" style={{ textAlign: "right" }}>
                  {getTotalPrice(item.price, item.quantityAddToCart)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="cart-totals">
          <div className="cart-totals-header">
            <h4>Cart totals</h4>
          </div>
          <div className="line">
            <span>Subtotal</span>
            <span>{formatted}</span>
          </div>
          <div className="line">
            <span>Shipping estimate</span>
            <span>$5.00</span>
          </div>
          <div className="line">
            <span>Tax estimate</span>
            <span>$8.32</span>
          </div>
          <div className="line">
            <span>Order total</span>
            <span>{getTotalOrder(subTotal.price)}</span>
          </div>
          <button className="checkout-btn">PROCEED TO CHECKOUT</button>
        </div>
      </div>
      <PromotionBanner />
    </section>
  );
}
