import "../../styles/pages/Header.scss";
import IconNav from "../../components/UI/IconNav";
import logoStore from "../../assets/logo-store.png";
import { Link } from "react-router-dom";

const Nav = () => {
  // const [keySearch, setKeySearch] = useState<string>("");

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   return setKeySearch(event.target.value);
  // };
  return (
    <div className="flex-row below-header-site">
      {/* <SearchInput
        placeholder="Enter your search shoes..."
        onChange={handleChange}
        value={keySearch}
      /> */}
      <div className="header-menu-container-left">
        <div className="header-logo-store">
          <img src={logoStore} alt="Borcelle shoes store" />
        </div>
        <div className="header-menu">
          <Link to="/shoes">Shoes</Link>
          <Link to="/collection">Collection</Link>
          <Link to="/look-book">Lookbook</Link>
          <Link to="/sale">Sale</Link>
        </div>
      </div>

      <div className="header-menu-container-right">
        <div className="header-menu">
          <Link to="/story">Our story</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <IconNav />
      </div>
    </div>
  );
};
function Header() {
  return (
    <>
      <div className="above-header-site above-header-bar">
        <div>
          <p>Free Express Shipping on all orders with all duties included</p>
        </div>
      </div>
      <Nav />
    </>
  );
}

export default Header;
