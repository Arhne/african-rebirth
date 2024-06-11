import React from "react";
import { PiSpinnerGapThin } from "react-icons/pi";
import styles from "./button.module.css";


interface ButtonProp {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text?: string;
  className?: string;
  isLoading?: boolean;
  style?: string;
  type?: "submit" | "reset" | "button";
}

const Button = ({ 
    onClick, 
    text, 
    isLoading, 
    style,
    type,
  }: ButtonProp) => {
  return (
    <button className={`${styles.ButtonComp} ${style}`} onClick={onClick} type={type} >
      {isLoading ? (
        <span className={styles.loader}>
          <PiSpinnerGapThin className={styles.loader} size={25} />
        </span>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
