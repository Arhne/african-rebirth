"use client";
import React, { useState }  from "react";
import { details } from "../../../..";
import styles from "@/app/styles.module.css";
import { useRouter } from "next/navigation";
import Button from "@/app/components/custom-button";
import QRModal from "@/app/(admin-section)/admin/delegates-info/qr-modal"
import { VscEdit } from "react-icons/vsc";
import EditModal from "@/app/(admin-section)/admin/delegates-info/edit-modal"

const ViewSingleDelegateInfo = () => {
  const router = useRouter();
  const [showQRCode, setShowQRCode] = useState<IDelegates | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);

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

    {showEditModal && (
      <EditModal
        userName={`${showEditModal.firstname} ${showEditModal.lastname} `}
        showModal={!!showEditModal}
        passport={showEditModal.passport}
        codeUrl={showEditModal.qrcode}
        onClickClose={() => setShowEditModal(false)}
      />
    )}
    <div className={styles.card}>
      <p className={styles.arrow} onClick={() => router.push("/")}>
        <span>&larr;</span>
      </p>
      <div className={styles.cardBody}>
        {details.map((detail) => (
          <div key={detail.id} className={styles.col}>
              <div className={styles.view}>
              <VscEdit
                  onClick={() => setShowEditModal(true)}
               />
              </div>
            <p className={styles.name}>
              {detail.fName} {detail.lName}
            </p>
            <ul className={styles.flow}>
              <li>Plan: {detail.travelPlan}</li>
              <li>Email: {detail.travelPlan}</li>
              <li>Status: {detail.travelPlan}</li>
            </ul>

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

export default ViewSingleDelegateInfo;
