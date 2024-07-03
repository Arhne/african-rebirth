"use client";

import { details } from ".";
import { FiEye } from "react-icons/fi";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import Button from "@/app/components/custom-button";
import QRModal from "./(admin-section)/admin/qr-modal";
import { VscEdit } from "react-icons/vsc";
import Navbar from "./components/navbar/page";
import Image from "next/image";
import {
  useGetDelegateByIdQuery,
  useGetDelegatesQuery,
} from "@/redux/api/delegates";
import { AiOutlineMore } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { QRButton } from "./components/qr-button";
import { BsQrCodeScan } from "react-icons/bs";

const DelegateInfo = () => {
 
  const router = useRouter();

  const { data: delegatesData, isLoading } = useGetDelegatesQuery();


  return (
    <>
      
      <Navbar />
      <div className={styles.card}>
        <h1>Delegates</h1>

        <div className={styles.cardBody}>
          {delegatesData?.data.map((detail, index) => (
            <div key={index} className={styles.col}>
              <div className={styles.view}>
                <RiDeleteBin6Line />
                <FiEye onClick={() => router.push(`/admin/delegates-info/${detail.id}`)} />
                
              </div>

              <div className={styles.evencol}>
                <ul className={styles.flow}>
                  <li>
                    Name: {detail.firstname} {detail.lastname}
                  </li>
                  <li>Plan: {detail.itineraryPlan}</li>
                  <li>Location: 
                  {detail?.inAttendance ? "In Conference" : "Hotel"}
                  </li>
                </ul>

                <Image
                  src={detail.passport ?? "www.image.co"}
                  alt="passport"
                  height={100}
                  width={100}
                  className={styles.image}
                />
              </div>
             
            </div>
          ))}
        </div>
        <QRButton
            onClick={() => router.push("/product-scanner")}
            text={"Scan code"}
            icon={<BsQrCodeScan color="white" size={25} />}
          />
      </div>
    </>
  );
};

export default DelegateInfo;
