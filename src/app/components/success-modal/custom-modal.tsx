import Button from '@/app/components/custom-button'
import React from 'react'
import Image from "next/image";
import styles from "./custom-modal.module.css"


interface CustomModalProps {
    onClickClose: () => void;
    text: string;
}

const CustomModal = ({onClickClose, text}: CustomModalProps) => {
  return (
    <div className={styles.Modal}>
      <div className={styles.content}>
        <div className={styles.textContent}>
        <Image src="" height={150} width={180} alt="" className={styles.Image} />
        </div>
        <p>{text}</p>
        <div className={styles.buttonFlex}>
          <Button text="Close" style={styles.closeButton} onClick={onClickClose} />
        </div>
      </div>
    </div>
  )
}

export default CustomModal