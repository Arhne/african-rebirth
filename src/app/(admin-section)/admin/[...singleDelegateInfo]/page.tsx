"use client";
import React, { useState } from "react";
import styles from "@/app/styles.module.css";
import { useRouter } from "next/navigation";
import Button from "@/app/components/custom-button";
import { VscEdit } from "react-icons/vsc";
import { useGetDelegateByIdQuery } from "@/redux/api/delegates";
import { EditModal, QRModal } from "./components";

const ViewSingleDelegateInfo = ({
  params,
}: {
  params: { singleDelegateInfo: string[] };
}) => {
  const [pageName, pageId] = params.singleDelegateInfo;
  const { data } = useGetDelegateByIdQuery(pageId);
  console.log("WAHAHA", pageId);
  console.log("WAHAHA", pageName);
  const detail = data?.data;
  const router = useRouter();
  const [showQRCode, setShowQRCode] = useState<IDelegates | null>(null);
  const [showEditModal, setShowEditModal] = useState<IDelegates | null>(null);

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

      {!!showEditModal && (
        <EditModal
          userName={`${showEditModal.firstname} ${showEditModal.lastname} `}
          showModal={!!showEditModal}
          passport={showEditModal.passport}
          codeUrl={showEditModal.qrcode}
          onClickClose={() => setShowEditModal(null)}
        />
      )}
      <div className={styles.card}>
        <p className={styles.arrow} onClick={() => router.push("/")}>
          <span>&larr;</span>
        </p>
        <div className={styles.cardBody}>
          <div className={styles.col}>
            <div className={styles.view}>
              <VscEdit onClick={() => setShowEditModal(detail!)} />
            </div>
            <p className={styles.name}>
              {detail?.firstname} {detail?.lastname}
            </p>
            <ul className={styles.flow}>
              <li>Plan: {detail?.itineraryPlan}</li>
              <li>Email: {detail?.email}</li>
              <li>
                Status: {detail?.inAttendance ? "In Conference" : "Hotel"}
              </li>
            </ul>

            <Button
              text="View QR Code"
              type="button"
              style={styles.btn}
              onClick={() => setShowQRCode(detail!)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewSingleDelegateInfo;
