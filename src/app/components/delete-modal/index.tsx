import React from "react";
import styles from "./styles.module.scss";

interface IDeleteModal {
  deleteTitle: string;
  deleteItem: string;
  onClickDelete: () => void;
  onClickClose: () => void;
  isLoading?: boolean;
}

export const DeleteModal = ({
  deleteTitle,
  deleteItem,
  onClickDelete,
  onClickClose,
  isLoading,
}: IDeleteModal) => {
  return (
    <div className={styles.DeleteModal}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <p className={styles.title}>Delete {deleteTitle}?</p>
          <p className={styles.subTitle}>
            Are you sure you want to delete <span>{deleteItem}</span>?
          </p>
        </div>
        <div className={styles.buttonFlex}>
          <button className={styles.closeButton} onClick={onClickClose}>
            Close
          </button>
          <button className={styles.button} onClick={onClickDelete}>
            {isLoading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};
