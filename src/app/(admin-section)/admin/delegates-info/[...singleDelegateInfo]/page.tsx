"use client";
import React from "react";
import { details } from "../../../..";
import styles from "@/app/styles.module.css";
import { useRouter } from "next/navigation";

const ViewSingleDelegateInfo = () => {
  const router = useRouter();
  return (
    <div className={styles.card}>
      <p className={styles.arrow} onClick={() => router.push("/")}>
        <span>&larr;</span>
      </p>
      <div className={styles.cardBody}>
        {details.map((detail) => (
          <div key={detail.id} className={styles.col}>
            <p className={styles.name}>
              {detail.fName} {detail.lName}
            </p>
            <ul className={styles.flow}>
              <li>Plan: {detail.travelPlan}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewSingleDelegateInfo;
