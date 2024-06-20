"use client";
import React, { useState } from "react";
import { details } from ".";
import { FiEye } from "react-icons/fi";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import Button from "@/app/components/custom-button";
import QRModal from "./(admin-section)/admin/delegates-info/qr-modal";
import { VscEdit } from "react-icons/vsc";
import Navbar from "./components/navbar/page";
import Image from "next/image";
import {
  useGetDelegateByIdQuery,
  useGetDelegatesQuery,
} from "@/redux/api/delegates";

const DelegateInfo = () => {
  const [showQRCode, setShowQRCode] = useState<IDelegates | null>(null);
  const router = useRouter();

  const { data: delegatesData, isLoading } = useGetDelegatesQuery();
  return (
    <>
      {!!showQRCode && (
        <QRModal
          userName={`${showQRCode.firstname} ${showQRCode.lastname} `}
          showModal={!!showQRCode}
          passport={showQRCode.passport}
          codeUrl={showQRCode.qrcode}
          onClickClose={() => setShowQRCode(null)}
        />
      )}
      <Navbar />
      <div className={styles.card}>
        <h1>Delegates</h1>

        <div className={styles.cardBody}>
          {delegatesData?.data.map((detail, index) => (
            <div key={index} className={styles.col}>
              <div className={styles.view}>
                <VscEdit onClick={() => router.push(`/sign-in`)} />
                <FiEye
                  onClick={() =>
                    router.push(`admin/delegates-info/view-details`)
                  }
                />
              </div>

              <div className={styles.evencol}>
                <ul className={styles.flow}>
                  <li>
                    Name: {detail.firstname} {detail.lastname}
                  </li>
                  <li>Plan: {detail.itineraryPlan}</li>
                </ul>

                <Image
                  src={detail.passport ?? "www.image.co"}
                  alt="passport"
                  height={100}
                  width={100}
                  className={styles.image}
                />
              </div>
              <Button
                text="View QR Code"
                type="button"
                style={styles.btn}
                onClick={() => setShowQRCode(detail)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DelegateInfo;
