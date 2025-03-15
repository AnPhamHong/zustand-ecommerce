import CheckboxGroup from "../components/CheckboxGroup";
import RadioGroup from "../components/RadioGroup";
import { initialMaxPrice } from "../constants/priceRanges";
import { useFilterStore } from "../store/filterStore";
import { CategoryType, ColorType } from "../types/product";

const Sidebar = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedColors,
    maxPrice,
    minPrice,
    priceRanges,
    getPriceLabel,
    setMinPrice,
    setMaxPrice,
    setSelectedColors,
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

  const colorOptions: ColorType[] = ["Black", "Blue", "Red", "Green", "White"];

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
      {/* Filter Colors */}
      <CheckboxGroup<ColorType>
        title="Colors"
        options={colorOptions}
        selected={selectedColors}
        onChange={setSelectedColors}
      />
    </div>
  );
};

export default Sidebar;
