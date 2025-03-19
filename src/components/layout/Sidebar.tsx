import RadioGroup from "../UI/RadioGroup";
import { initialMaxPrice } from "../../db/priceRanges";
import { useFilterStore } from "../../store/filterStore";
import { CategoryType } from "../../types/product";

const Sidebar = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    maxPrice,
    minPrice,
    priceRanges,
    getPriceLabel,
    setMinPrice,
    setMaxPrice,
  } = useFilterStore();

  const handlePriceChange = (label: string) => {
    const priceRange = priceRanges.find((range) => range.label === label);

    if (priceRange) {
      setMinPrice(priceRange.min ?? initialMaxPrice);
      setMaxPrice(priceRange.max ?? initialMaxPrice);
    }
  };

  const categoryOptions: CategoryType[] = [
    "All",
    "Sneakers",
    "Flats",
    "Sandals",
    "Heels",
  ];

  return (
    <div className="filters-container">
      {/* Filter Category */}
      <RadioGroup<CategoryType>
        title="Category"
        options={categoryOptions}
        selected={selectedCategory}
        onChange={setSelectedCategory}
      />
      {/* Filter Price */}
      <RadioGroup<string>
        title="Price"
        options={priceRanges.map((ele) => ele.label)}
        selected={getPriceLabel(minPrice, maxPrice)}
        onChange={handlePriceChange}
      />
    </div>
  );
};

export default Sidebar;
