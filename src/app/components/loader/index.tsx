import React from "react";
import styles from "./loader.module.css";
import { ImSpinner9 } from "react-icons/im";

export const Loader = ({ isLoading }: { isLoading: boolean }) => {
  const style = {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={style}>
      <span className={styles.loader}>
        <ImSpinner9 color="#19b360" className={styles.loader} size={35} />
      </span>
    
    </div>
  );
};
