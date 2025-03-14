import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import IconNav from "../components/IconNav";

const Nav = () => {
  const [keySearch, setKeySearch] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setKeySearch(event.target.value);
  };
  return (
    <div className="flex-row nav-bar">
      <SearchInput
        placeholder="Enter your search shoes..."
        onChange={handleChange}
        value={keySearch}
      />
      <IconNav />
    </div>
  );
};

export default Nav;
