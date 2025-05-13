import "@/styles/pages/Checkout.scss";
import { useCartStore } from "@/store/cartStore";
import { formattedPrice, getTotalOrder, getTotalPrice } from "@/utils/cart";
import { useCartTotal } from "@/hooks/userCartTotal";
import { MdExpandCircleDown } from "react-icons/md";
import { useState } from "react";
import { FormData } from "@/types/checkout";

type Errors = Partial<Record<keyof FormData, string>>;

function Checkout() {
  const { lst } = useCartStore();
  const { formatted, subTotal } = useCartTotal();

  const onExpand = (e: React.MouseEvent<SVGElement>) => {
    e.currentTarget.classList.toggle("rotate");
  };

  const [infoForm, setInfoForm] = useState<FormData>({
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    sameAsShipping: true,
  });

  const onChangeForm = (keyChange: string, value: unknown) => {
    setInfoForm((v) => {
      return {
        ...v,
        [keyChange]: value,
      };
    });
  };
  const validateForm = (formData: FormData): Errors => {
    const errors: Errors = {};

    // Email
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    // Card number
    if (!formData.cardNumber) {
      errors.cardNumber = "Card number is required";
    } else if (!/^\d{13,19}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
      errors.cardNumber = "Invalid card number";
    }

    // Expiration date
    if (!formData.expiry) {
      errors.expiry = "Expiration date is required";
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry)) {
      errors.expiry = "Invalid format (MM/YY)";
    }

    // CVC
    if (!formData.cvc) {
      errors.cvc = "CVC is required";
    } else if (!/^\d{3,4}$/.test(formData.cvc)) {
      errors.cvc = "Invalid CVC";
    }

    // Address
    if (!formData.address) {
      errors.address = "Address is required";
    }

    // City
    if (!formData.city) {
      errors.city = "City is required";
    }

    // State
    if (!formData.state) {
      errors.state = "State/Province is required";
    }

    // Postal Code
    if (!formData.postalCode) {
      errors.postalCode = "Postal code is required";
    } else if (!/^\d{4,10}$/.test(formData.postalCode)) {
      errors.postalCode = "Invalid postal code";
    }

    return errors;
  };

  const [formErrors, setFormErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm(infoForm); // `formData` là state của bạn

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors); // show lỗi ra UI
      return;
    }

    console.log("Form OK", infoForm);
  };

  return (
    <section className="checkout-container">
      <div className="checkout-left">
        <form className="checkout-form">
          <section className="section">
            <h2>Contact information</h2>
            <div className="section-form">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                value={infoForm.email}
                onChange={(e) => onChangeForm("email", e.target.value)}
              />
              {formErrors.email && <p className="error">{formErrors.email}</p>}
            </div>
          </section>

          <section className="section">
            <h2>Payment details</h2>
            <div className="section-form">
              <label htmlFor="card_number">Card number</label>
              <input
                type="text"
                id="card_number"
                placeholder="Card number"
                value={infoForm.cardNumber}
                onChange={(e) => onChangeForm("cardNumber", e.target.value)}
              />
              {formErrors.cardNumber && (
                <p className="error">{formErrors.cardNumber}</p>
              )}
            </div>
            <div className="row">
              <div className="section-form">
                <label htmlFor="expiry">Expiration date (MM/YY)</label>
                <input
                  type="date"
                  id="expiry"
                  placeholder="Expiration date (MM/YY)"
                  value={infoForm.expiry}
                  onChange={(e) => onChangeForm("expiry", e.target.value)}
                />
                {formErrors.expiry && (
                  <p className="error">{formErrors.expiry}</p>
                )}
              </div>
              <div className="section-form">
                <label htmlFor="cvc">CVC</label>
                <input
                  type="text"
                  id="cvc"
                  placeholder="CVC"
                  value={infoForm.cvc}
                  onChange={(e) => onChangeForm("cvc", e.target.value)}
                />
                {formErrors.cvc && <p className="error">{formErrors.cvc}</p>}
              </div>
            </div>
          </section>

          <section className="section">
            <h2>Shipping address</h2>
            <div className="section-form">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                type="text"
                placeholder="Address"
                value={infoForm.address}
                onChange={(e) => onChangeForm("address", e.target.value)}
              />
              {formErrors.address && (
                <p className="error">{formErrors.address}</p>
              )}
            </div>
            <div className="grid">
              <div className="section-form">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  value={infoForm.city}
                  onChange={(e) => onChangeForm("city", e.target.value)}
                />
                {formErrors.city && <p className="error">{formErrors.city}</p>}
              </div>
              <div className="section-form">
                <label htmlFor="state">State / Province</label>
                <input
                  type="text"
                  id="state"
                  placeholder="State / Province"
                  value={infoForm.state}
                  onChange={(e) => onChangeForm("state", e.target.value)}
                />
                {formErrors.state && (
                  <p className="error">{formErrors.state}</p>
                )}
              </div>
              <div className="section-form">
                <label htmlFor="postalCode">Postal code</label>
                <input
                  id="postalCode"
                  type="text"
                  placeholder="Postal code"
                  value={infoForm.postalCode}
                  onChange={(e) => onChangeForm("postalCode", e.target.value)}
                />
                {formErrors.postalCode && (
                  <p className="error">{formErrors.postalCode}</p>
                )}
              </div>
            </div>
          </section>

          <section className="section checkbox">
            <h2>Billing information</h2>
            <label>
              <input
                type="checkbox"
                defaultChecked
                checked={infoForm.sameAsShipping}
                onChange={(e) =>
                  onChangeForm("sameAsShipping", e.target.checked)
                }
              />
              Same as shipping information
            </label>
          </section>

          <div className="btn-container">
            <button type="submit" className="pay-btn" onClick={handleSubmit}>
              Pay now
            </button>
          </div>
        </form>
      </div>
      <div className="checkout-right">
        <h2>Amount due</h2>
        <p>$232.00</p>
        <MdExpandCircleDown
          size={20}
          color="#ddd"
          className="icon-expands"
          onClick={(e) => onExpand(e)}
        />
        <div>
          <div className="checkout-cart-list">
            {lst.map((v) => {
              return (
                <div key={v.id} className="checkout-cart-list__item">
                  <img src={v.img} alt={v.title} />
                  <div className="product-title">
                    <p>{v.title}</p>
                    <span>Price: {formattedPrice(v.price)}</span>
                    <br />
                    <span>SL: {+v.quantityAddToCart}</span>
                  </div>
                  <div className="product-subprice">
                    {getTotalPrice(v.price, v.quantityAddToCart)}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="checkout-cart-pay-detail">
            <div className="detail">
              <span>Subtotal</span>
              <span>{formatted}</span>
            </div>
            <div className="detail">
              <span>Shipping</span>
              <span>{formattedPrice(5)}</span>
            </div>
            <div className="detail">
              <span>Taxes</span>
              <span>{formattedPrice(47.6)}</span>
            </div>
          </div>
          <div className="checkout-cart-total">
            <div className="detail">
              <span>Total</span>
              <span>{getTotalOrder(subTotal.price, 5, 47.6)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
