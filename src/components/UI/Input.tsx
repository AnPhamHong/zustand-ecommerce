import React from "react";
import styles from "@/styles/components/Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div className={styles["input-container"]}>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input
        className={`${styles.input} ${error ? styles["input-error"] : ""}`}
        {...props}
      />
      {error && <p className={styles["input-container"]}>{error}</p>}
    </div>
  );
};

export default Input;
