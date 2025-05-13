import Cart from "@/pages/Cart/Cart";
import Checkout from "@/pages/Cart/Checkout";
import Contact from "@/pages/Contact/Contact";
import Home from "@/pages/Home/Home";
import Lookbook from "@/pages/Lookbook/Lookbook";
import NotFound from "@/pages/NotFound/NotFound";
import OurStory from "@/pages/OurStory/OurStory";
import ProductList from "@/pages/Products/ProductList";
import Sales from "@/pages/Sales/Sales";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const ScrollToTopWhenRedirect = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};
function Content() {
  return (
    <>
      <ScrollToTopWhenRedirect />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/story" element={<OurStory />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/look-book" element={<Lookbook />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sale" element={<Sales />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Content;
