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
import Image from "next/image"

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
     
     <div className={styles.evencol}>
    <ul className={styles.flow}>
      <li>Name: {detail.fName} {detail.lName}</li>
      <li>Plan: {detail.travelPlan}</li>
    </ul>
      
    <Image src= '/{detail.passport}' alt= "passport" height={100} width={100} className={styles.image}/>
    </div>
    <Button 
      text="View QR Code"
      type='button'
      style={styles.btn}
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