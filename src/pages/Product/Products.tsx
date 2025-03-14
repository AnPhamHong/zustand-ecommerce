import { data } from "../../db/data";
import "../../styles/pages/Products.scss";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <>
      <section className="card-list">
        {data.map((item, index) => {
          return <ProductCard key={index} {...item} />;
        })}
      </section>
    </>
  );
};

export default Products;
