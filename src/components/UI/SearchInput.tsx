import React, { ChangeEvent } from "react";
import styles from "@/styles/components/SearchInput.module.scss";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Enter your search...",
  value,
  onChange,
  ...props
}) => {
  return (
    <div className={styles.container_search_input}>
      <input
        type="text"
        className={styles.search_input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default SearchInput;
