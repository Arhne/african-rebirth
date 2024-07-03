import Button from "@/app/components/custom-button";
import React, { FC, useRef } from "react";
import Image from "next/image";
import styles from "./qr.module.css";
import { Modal } from "antd";
import { useReactToPrint } from "react-to-print";

interface IModal {
  onClickClose: () => void;
  codeUrl: string;
  passport: string;
  showModal: boolean;
  userName: string;
}

export const QRModal: FC<IModal> = ({
  onClickClose,
  codeUrl,
  passport,
  showModal,
  userName,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const reactToPrintContent = () => {
    return targetRef.current;
  };

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: `QR code for ${userName}`,    
    pageStyle: `
      @media print {
        @page {
          size: A10 Portrait;
          margin: 0; /* Remove margins to ensure the QR code is centered */
        }
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh; /* Use the full height of the page */
        }
        .print-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        .print-container img {
          width: 300px; /* Adjust size as needed */
          height: auto;
        }
      }
    `,
  });

  return (
    <Modal open={showModal} centered footer={[]} onCancel={onClickClose}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <Image
            src={passport}
            height={100}
            width={100}
            alt="passport"
            className={styles.Image}
          />
        </div>
        <div className={styles.buttonFlex}>
          <Button text="Download" style={styles.btn} />
        </div>

        <div className={styles.textContent} ref={targetRef}>
          <div className="print-container">
            <Image
              src={codeUrl}
              height={150}
              width={180}
              alt="qrcode"
              className={styles.Image}
            />
          </div>
        </div>
        <div className={styles.buttonFlex}>
          <Button text="Close" style={styles.btn} onClick={onClickClose} />
          <Button onClick={handlePrint} text="Download" style={styles.btn} />
        </div>
      </div>
    </Modal>
  );
};

