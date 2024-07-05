"use client";

import { FiEye } from "react-icons/fi";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import Navbar from "./components/navbar/page";
import Image from "next/image";
import {
  useDeleteDelegatesMutation,
  useGetDelegatesQuery,
} from "@/redux/api/delegates";
import { RiDeleteBin6Line } from "react-icons/ri";
import { QRButton } from "./components/qr-button";
import { BsQrCodeScan } from "react-icons/bs";
import { Loader } from "./components/loader";
import { isAdmin } from "@/utils";
import { useState } from "react";
import { DeleteModal } from "./components/delete-modal";
import { toast } from "react-toastify";

const DelegateInfo = () => {
  const router = useRouter();
  const [deleteModal, setDeleteModal] = useState<IDelegates | null>(null);
  const { data: delegatesData, isLoading } = useGetDelegatesQuery();
  const [deleteDelegates, {isLoading: isDeleting}] = useDeleteDelegatesMutation()
  const adminValue = isAdmin()
  const handleViewDelegate = (detail: IDelegates) => {
    if(adminValue) {
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

  const handleDelete = (id: any) => {
    deleteDelegates(id)
      .unwrap()
      .then((result) => {
        toast.success("delete successful");
        setDeleteModal(null);
      })
      .catch((error) => {
        toast.error(error?.data?.message[0]);
      });
  };

  return (
    <div>
      <Navbar />
      <div className={styles.card}>
        <h1>Delegates</h1>
        <div className={styles.cardBody}>
          {delegatesData?.data.map((detail, index) => (
            <div key={index} className={styles.col}>
              <div className={styles.view}>
                {adminValue && (
                  <div>
                    <RiDeleteBin6Line 
                      onClick={() => {
                        setDeleteModal(detail);
                      }}
                    />
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
        {adminValue && (
          <QRButton
            onClick={() => router.push("/product-scanner")}
            text={"Scan code"}
            icon={<BsQrCodeScan color="white" size={25} />}
          />
        )}
      </div>
      {!!deleteModal && (
      <DeleteModal
        deleteTitle={"Delegate"}
        deleteItem={"delegates info"}
        onClickDelete={() => {
          handleDelete(deleteModal.id);
        }}
        onClickClose={() => setDeleteModal(null)}
        isLoading={isDeleting}
      />
    )}
    </div>
  );
};

export default DelegateInfo;
