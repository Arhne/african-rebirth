import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./style.module.css";
import BarcodeScanner from "./barcode-scanner";
import { toast } from "react-toastify";

interface IScannedDetails extends IDelegates {
  id: string;
}
export const ProductScanner: React.FC = () => {
  const router = useRouter();

  const handleScan = (decodedText: string, decodedResult: any) => {
    console.log(decodedText);
    console.log(decodedResult, "YEYEYEYE");

    const valueObject: IScannedDetails = JSON.parse(decodedResult.decodedText);
    if (valueObject._id) {
      router.push(`/admin/view/${valueObject._id}`);
    } else {
      router.push(`/admin/view/${valueObject.id}`);
    }
  };

  const handleError = (error: any) => {
    // toast.error("Something went wrong please try again", {
    // 	hideProgressBar: true,
    // 	draggable: true
    // })
  };

  return (
    <div className={style.Product_Scanner}>
      <div className={style.content}>
        <div className={style.header_text}>
          <p className={style.title}>Scan Delegate</p>
          <p className={style.paragraph}>
            Scan the Delegates QR code to check details
          </p>
        </div>
        <div className={style.scanner_wrap}>
          <div className={style.border1} />
          <div className={style.border2} />
          <BarcodeScanner onScan={handleScan} onError={handleError} />
          <div className={style.border3} />
          <div className={style.border4} />
        </div>
        <p className={style.paragraph} onClick={() => router.refresh()}>
          Can&apos;t scan a Delegate?{" "}
          <span className={style.spanBody}>Click Here</span> to refresh scanner
        </p>
      </div>
    </div>
  );
};
