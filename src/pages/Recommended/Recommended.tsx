import { useFilterStore } from "../../store/filterStore";
import "../../styles/pages/Recommended.scss";
import { BrandType } from "../../types/product";
const Recommended = () => {
  const { selectedBrand, setSelectedBrand } = useFilterStore();

  const brandOptions: BrandType[] = [
    "All Products",
    "Vans",
    "Adidas",
    "Puma",
    "Nike",
    "Skechers",
    "Under Armour",
    "New Balance",
    "Bruno Marc",
    "UIN",
  ];

  return (
    <div className="recommended-container">
      <h2>Recommended</h2>
      <div className="brand-filters">
        {brandOptions.map((brand) => {
          return (
            <button
              key={brand}
              className={`brand-filter ${
                brand === selectedBrand ? "active" : ""
              }`}
              onClick={() => setSelectedBrand(brand)}
            >
              {brand}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Recommended;
