import React, { useMemo } from "react";
import { data } from "../../db/data";
import "../../styles/pages/Products.scss";
import ProductCard from "./ProductCard";
import { useFilterStore } from "../../store/filterStore";
import EmptyProduct from "./EmptyProduct";

const Products: React.FC = () => {
  const {
    selectedCategory,
    maxPrice,
    minPrice,
    selectedColors,
    searchQuery,
    selectedBrand,
  } = useFilterStore();

  const filteredProducts = useMemo(() => {
    return data.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;

      const matchesColors =
        selectedColors.length === 0 ||
        selectedColors.some((color) =>
          product.colors.includes(color.toLowerCase())
        );

      const matchesBrand =
        selectedBrand === "All Products" || product.company === selectedBrand;
      return (
        matchesBrand &&
        matchesCategory &&
        matchesSearch &&
        matchesPrice &&
        matchesColors
      );
    });
  }, [
    selectedCategory,
    searchQuery,
    minPrice,
    maxPrice,
    selectedColors,
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
