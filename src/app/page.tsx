"use client";

import { FiEye } from "react-icons/fi";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import Navbar from "./components/navbar/page";
import Image from "next/image";
import {
  useGetDelegatesQuery,
} from "@/redux/api/delegates";
import { RiDeleteBin6Line } from "react-icons/ri";
import { QRButton } from "./components/qr-button";
import { BsQrCodeScan } from "react-icons/bs";
import { Loader } from "./components/loader";
import { isAdmin } from "@/utils";

const DelegateInfo = () => {
  const router = useRouter();

  const { data: delegatesData, isLoading } = useGetDelegatesQuery();

  const handleViewDelegate = (detail: IDelegates) => {
    if(isAdmin) {
      router.push(`/admin/add/${detail.id}`);
    } else {
      router.push('/sign-in')
    }
  }

  if (isLoading) {
    return (
      <div className="loading">
        <Loader isLoading />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.card}>
        <h1>Delegates</h1>
        <div className={styles.cardBody}>
          {delegatesData?.data.map((detail, index) => (
            <div key={index} className={styles.col}>
              <div className={styles.view}>
                {isAdmin && (
                  <div>
                    <RiDeleteBin6Line />
                  </div>
                )}
                <FiEye
                  onClick={() => handleViewDelegate(detail)}
                />
              </div>

              <div className={styles.evencol}>
                <ul className={styles.flow}>
                  <li>
                    Name: {detail.firstname} {detail.lastname}
                  </li>
                  <li>Plan: {detail.itineraryPlan}</li>
                  <li>
                    Location: {detail?.inAttendance ? "In Conference" : "In Transit"}
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
        {isAdmin && (
          <QRButton
            onClick={() => router.push("/product-scanner")}
            text={"Scan code"}
            icon={<BsQrCodeScan color="white" size={25} />}
          />
        )}
      </div>
    </>
  );
};

export default DelegateInfo;
