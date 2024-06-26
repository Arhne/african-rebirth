import React, { useState } from "react";
import styles from "./custom-input.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

interface IFormInput {
  placeholder?: string;
  labelText?: string;
  value?: string;
  type?: string;
  style?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

interface IFormInputNumber {
  placeholder: string;
  labelText?: string;
}


export const CustomInput = ({
  placeholder,
  labelText,
  value,
  type,
  style,
  onChange,
}: IFormInput) => {
  return (
    <div className={styles.InputComp}>
      {labelText && <label className={styles.label}>{labelText}</label>}
      <input
        type ={type}
        className={`${styles.input} ${style}`}
        placeholder={placeholder}
        value = {value}
        onChange={onChange}
      />
    </div>
  );
};

export const CustomPasswordInput = ({
  placeholder,
  labelText,
  onChange,
}: IFormInput) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.InputComp}>
     {labelText && <label className={styles.label}>{labelText}</label>}
      <div className={styles.passwordInputWrap}>
        <input
          type={showPassword ? "text" : "password"}
          className={styles.passwordInput}
          placeholder={placeholder}
        onChange={onChange}
        />
        <button
          className={styles.iconButton}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
     
    </div>
  );
};


export const CustomInputNumber = ({
  placeholder,
  labelText,
}: IFormInputNumber) => {
  return (
    <div className={styles.InputComp}>
      {labelText && <label className={styles.label}>{labelText}</label>}
      <input
        type="number"
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
};
