import { FC, ReactNode } from "react";
import styles from "./style.module.css";

interface IQRButton {
  onClick: () => void;
  text: string;
  icon: ReactNode;
}

export const QRButton: FC<IQRButton> = ({ onClick, text, icon }) => {
  return (
    <section className={styles.Container}>
      <div className={styles.Indicator}></div>
      <button className={styles.Button} onClick={onClick}>
        <p>{icon}</p>
      </button>
      <p className={styles.IconText}>{text}</p>
    </section>
  );
};