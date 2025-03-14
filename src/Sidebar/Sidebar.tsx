import { useState } from "react";
import RadioGroup from "../components/RadioGroup";

type CategoryType = "All" | "Sneakers" | "Flats" | "Sandals" | "Heels";
type PriceRange = "All" | "$0 - $50" | "$50 - $100" | "Over $150";
type ColorType = "Black" | "Blue" | "Red" | "Green" | "White";

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const [selectedPrice, setSelectedPrice] = useState<PriceRange>("All");
  const [selectedColor, setSelectedColor] = useState<ColorType>("Black");

  return (
    <div className="filters-container">
      {/* Filter Category */}
      <RadioGroup<CategoryType>
        title="Category"
        options={["All", "Sneakers", "Flats", "Sandals", "Heels"]}
        selected={selectedCategory}
        onChange={setSelectedCategory}
      />
      {/* Filter Price */}
      <RadioGroup<PriceRange>
        title="Price"
        options={["All", "$0 - $50", "$50 - $100", "Over $150"]}
        selected={selectedPrice}
        onChange={setSelectedPrice}
      />
      {/* Filter Colors */}
      <RadioGroup<ColorType>
        title="Colors"
        options={["Black", "Blue", "Red", "Green", "White"]}
        selected={selectedColor}
        onChange={setSelectedColor}
      />
    </div>
  );
};

export default Sidebar;
