"use client"
import React from 'react'
import { details } from '../../../..'
import styles from "@/app/styles.module.css"
import { useRouter } from 'next/navigation'

const ViewSingleDelegateInfo = () => {

  const router = useRouter();
  return (
    <div className={styles.card}>
  <p className={styles.arrow} onClick={() => router.push("/")}><span>&larr;</span></p>      
<div className= {styles.cardBody}>
    {details.map((detail) => 
    <div key={detail.id} className={styles.col}>
      <p className={styles.name}>{detail.fName} {detail.lName}</p>
     <ul className={styles.flow}>
        <li>Hotel Abuja: {detail.hotelAbuja}</li>
        <li>Hotel Nassarawa: {detail.hotelNass}</li>
        <li>Hotel Enugu: {detail.hotelEnugu}</li>
        <li>Hotel Delta: {detail.hotelDelta}</li>
        <li>Hotel Abia: {detail.hotelAbia}</li>
        <li>Hotel Akwa-ibom: {detail.hotelAks}</li>
        <li>Hotel Cross-river: {detail.hotelCrossriver}</li>
        <li>Local Flight Plan: {detail.departLocalFlight}</li>
        <li>International Departure Plan: {detail.departureFlight}</li>
     </ul>
    </div>
    )}
    </div>
    </div>
  )
}

export default ViewSingleDelegateInfo