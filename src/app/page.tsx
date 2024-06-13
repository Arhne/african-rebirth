"use client"
import React, { useState } from 'react';
import { details } from '.';
import { FiEye } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';
import Button from '@/app/components/custom-button'
import QRModal from './(admin-section)/admin/delegates-info/qr-modal';
import { VscEdit } from 'react-icons/vsc';
import Navbar  from "./components/navbar/page"
const DelegateInfo = () => {

const [showQRCode, setShowQRCode] = useState(false)
const router = useRouter();

  return ( <>
    <Navbar />
    <div className={styles.card}>
      <h1>Delegates Information</h1>
    
    <div className={styles.cardBody}>
    {details.map((detail) => 
    <div key={detail.id} className={styles.col}>
      <div  className={styles.view}>
     <VscEdit onClick={() => router.push(`/sign-in`)} />
     <FiEye onClick={() => router.push(`admin/delegates-info/view-details`)} />
     </div>
     
     <ul className={styles.flow}>
        <li>First Name: {detail.fName}</li>
        <li>Last Name: {detail.lName}</li>
        <li>Arrival Flight Detail: {detail.arrivalFlight}</li>
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
     <Button 
      text="View QR Code"
      type='button'
      onClick={() => setShowQRCode(true)}
      />
    </div>
    )}
    {showQRCode && (<QRModal onClickClose = {() => setShowQRCode(false)}/>)}
    </div>

    </div>
    </>
  )
}

export default DelegateInfo;