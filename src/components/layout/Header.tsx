import "@/styles/pages/Header.scss";
import IconNav from "../../components/UI/IconNav";
import logoStore from "../../assets/logo-store.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

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
        <div className="header-menu-container-left">
          <img
            src={logoStore}
            alt="Borcelle shoes store"
            className="header-logo-store"
          />
          {/* <div className={`header-menu ${isOpen ? "mobile-active" : ""}`}></div> */}
        </div>
        <div className="header-menu-container-right">
          <div className={`header-menu ${isOpen ? "mobile-active" : ""}`}>
            <Link to="/shoes">Shoes</Link>
            <Link to="/collection">Collection</Link>
            <Link to="/look-book">Lookbook</Link>
            <Link to="/sale">Sale</Link>
            <Link to="/story">Our story</Link>
            <Link to="/contact">Contact</Link>
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

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="above-header-site above-header-bar">
        <div>
          <p>Free Express Shipping on all orders with all duties included</p>
        </div>
      </div>
      <Nav
        isOpen={isMenuOpen}
        onChangeOpen={() => setIsMenuOpen(!isMenuOpen)}
      />
    </>
  );
}

export default Header;
