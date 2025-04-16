import React, { useMemo } from "react";
import "@/styles/pages/Products.scss";
import EmptyProduct from "./EmptyProduct";
import { getProducts } from "@/db/data";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import { useFilterStore } from "@/store/filterStore";

const Products: React.FC = () => {
  const {
    selectedCategory,
    maxPrice,
    minPrice,
    searchQuery,
    selectedBrand,
  } = useFilterStore();

  const products: Product[] = useMemo(() => getProducts(), []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;

      const matchesBrand =
        selectedBrand === "All Products" || product.company === selectedBrand;
      return matchesBrand && matchesCategory && matchesSearch && matchesPrice;
    });
  }, [
    products,
    selectedCategory,
    searchQuery,
    minPrice,
    maxPrice,
    selectedBrand,
  ]);

  return (
    <>
      <section className="card-list">
        {filteredProducts.length ? (
          filteredProducts.map((item, index) => {
            return <ProductCard key={index} {...item} />;
          })
        ) : (
          <EmptyProduct />
        )}
      </section>
    </>
  );
};

export default Products;
