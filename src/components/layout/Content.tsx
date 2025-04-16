import Home from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound/NotFound";
import ProductList from "@/pages/Products/ProductList";
import { Route, Routes } from "react-router-dom";

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Content;
