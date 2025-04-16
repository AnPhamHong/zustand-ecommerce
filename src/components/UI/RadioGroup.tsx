import styles from "@/styles/components/RadioGroup.module.scss";

type RadioGroupProps<T> = {
  title: string;
  options: T[];
  selected: T;
  onChange: (value: T) => void;
};

const RadioGroup = <T extends string>({
  title,
  options,
  selected,
  onChange,
}: RadioGroupProps<T>) => {
  return (
    <div className={styles["filter-section"]}>
      <h2>{title}</h2>

      <form>
        {options.map((option) => {
          return (
            <label key={option} className={styles["radio-label"]}>
              <input
                type="radio"
                name={title.toLowerCase()}
                value={option}
                checked={selected === option}
                onChange={() => onChange(option)}
              />
              <span>{option}</span>
            </label>
          );
        })}
      </form>
    </div>
  );
};

export default RadioGroup;
