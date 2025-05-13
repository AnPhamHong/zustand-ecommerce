import "@/styles/pages/Header.scss";
import IconNav from "@/components/UI/IconNav";
import logoStore from "@/assets/logo-store.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import ModalCart from "@/pages/Cart/ModalCart";
import { useCartStore } from "@/store/cartStore";
import { useCartTotal } from "@/hooks/userCartTotal";

const Nav = ({
  isOpen,
  onChangeOpen,
}: {
  isOpen: boolean;
  onChangeOpen: (newStatus: boolean) => void;
}) => {
  return (
    <div className={`below-header-site ${isOpen ? "mobile-active" : ""}`}>
      <div className="header-container">
        {!isOpen ? (
          <div className="header-actions only-cart">
            <IconNav isOnlyCart={true} />
          </div>
        ) : null}

        <div className="header-menu-container-left">
          <a href="/">
            <img
              src={logoStore}
              alt="Borcelle shoes store"
              className={`header-logo-store ${isOpen ? "mobile-active" : ""}`}
            />
          </a>
        </div>
        <div className="header-menu-container-right">
          <div className={`header-menu ${isOpen ? "mobile-active" : ""}`}>
            <Link to="/products" onClick={() => onChangeOpen(!isOpen)}>
              Shoes
            </Link>
            {/* <Link to="/collection" onClick={() => onChangeOpen(!isOpen)}>
              Collection
            </Link> */}
            <Link to="/look-book" onClick={() => onChangeOpen(!isOpen)}>
              Lookbook
            </Link>
            <Link to="/sale" onClick={() => onChangeOpen(!isOpen)}>
              Sale
            </Link>
            <Link to="/story" onClick={() => onChangeOpen(!isOpen)}>
              Our story
            </Link>
            <Link to="/contact" onClick={() => onChangeOpen(!isOpen)}>
              Contact
            </Link>
          </div>
          <div className="header-actions">
            <IconNav />
          </div>
        </div>
        {/* Hamburger menu button */}
        <div
          onClick={() => onChangeOpen(!isOpen)}
          className={`hamburger-menu ${isOpen ? "mobile-active" : ""}`}
        >
          {!isOpen ? <CiMenuBurger size={32} /> : <AiOutlineClose size={32} />}
        </div>
      </div>
    </div>
  );
};

function sectionAboveHeader() {
  return (
    <div className="above-header-site above-header-bar">
      <div>
        <p>Free Express Shipping on all orders with all duties included</p>
      </div>
    </div>
  );
}

function Header() {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const {
    lst,
    isQuickViewCart,
    updateAmountCart,
    removeItem,
    openQuickViewCart,
    isLoading,
    updateAmountById,
  } = useCartStore();

  const { formatted, subTotal } = useCartTotal();

  return location.pathname === "/checkout" ? (
    sectionAboveHeader()
  ) : (
    <>
      {sectionAboveHeader()}
      <Nav
        isOpen={isMenuOpen}
        onChangeOpen={() => setIsMenuOpen(!isMenuOpen)}
      />
      <ModalCart
        isOpen={isQuickViewCart}
        onClose={() => openQuickViewCart()}
        lstCart={lst}
        updateCart={(id, action) => updateAmountCart(id, action)}
        updateAmountItem={(id, quality) => updateAmountById(id, quality)}
        removeItem={(id) => removeItem(id)}
        total={formatted}
        isLoading={isLoading}
        totalQuality={subTotal.quality}
      />
    </>
  );
}

export default Header;
