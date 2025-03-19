import styles from "../styles/components/RadioGroup.module.scss";
interface CheckboxGroupProps<T> {
  title: string;
  options: T[];
  selected: T[];
  onChange: (values: T[]) => void;
}

function CheckboxGroup<T>({
  title,
  options,
  selected,
  onChange,
}: CheckboxGroupProps<T>) {
  const handleToggle = (option: T) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className={styles["filter-section"]}>
      <h2>{title}</h2>
      <form>
        {options.map((option, index) => (
          <label key={index} className={styles["radio-label"]}>
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => handleToggle(option)}
            />
            <span>{String(option)}</span>
          </label>
        ))}
      </form>
    </div>
  );
}

export default CheckboxGroup;
