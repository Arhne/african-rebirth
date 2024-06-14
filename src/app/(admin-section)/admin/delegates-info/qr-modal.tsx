import Button from '@/app/components/custom-button'
import React from 'react'
import Image from "next/image";
import styles from "./qr.module.css"


const QRModal = ({onClickClose}: any) => {
  return (
    <div className={styles.qrModal}>
      <div className={styles.content}>
      <div className={styles.textContent}>
        <Image src="" height={100} width={100} alt="passport" className={styles.Image} />
        </div>
        <div className={styles.buttonFlex}>
          <Button text="Download" style={styles.btn}/>
        </div>


        <div className={styles.textContent}>
        <Image src="" height={150} width={180} alt="qrcode" className={styles.Image} />
        </div>
        <div className={styles.buttonFlex}>
          <Button text="Close" style={styles.btn} onClick={onClickClose} />
          <Button text="Download" style={styles.btn}/>
        </div>
      </div>
    </div>
  )
}

export default QRModal