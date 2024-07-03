import Button from "@/app/components/custom-button";
import React, { FC } from "react";
import styles from "./qr.module.css";
import { Modal } from "antd";
import { FileUploadComp } from "@/app/components/file-upload/index"
import { CustomInput } from "@/app/components/custom-input";
import { CustomSelect } from "@/app/components/custom-select";

interface IEditModal {
  onClickClose: () => void;
  codeUrl: string;
  passport: string;
  showModal: boolean;
  userName: string;
}

const EditModal: FC<IEditModal> = ({
  onClickClose,
  codeUrl,
  passport,
  showModal,
  userName,
}) => {

  const options = [
    { value: "gold", label: "Gold" },
    { value: "silver", label: "Silver" },
    { value: "bronze", label: "Bronze" },
  ];

  const status = [
    {
      activitystatus: [
        { value: "inAttendance", label: "In Attendance at" },
        { value: "backinHotel", label: "Back In Hotel at" },
        { value: "outOfMeeting", label: "Out Of Meeting at" },
        { value: "inTransitTo", label: "In Transit To" },
        { value: "arrived", label: "Arrived at" },
      ],
   },
   {
      locationstatus: [
        { value: "nassarawa", label: "Nassarawa" },
        { value: "abuja", label: "Abuja" },
        { value: "Enugu", label: "Enugu" },
        { value: "uyo", label: "Uyo" },
        { value: "abia", label: "Abia" },
        { value: "crossriver", label: "Cross River" },
      ],
    },
  ];

  return (
    <Modal open={showModal} centered footer={[]} onCancel={onClickClose}>
      <div className={styles.content}>
        <div className={styles.textContent}>
        <FileUploadComp header="Passport" title="Logo" onChange={()=>{}} />
        <FileUploadComp header="Qr Code" title="Cover Image"  onChange={()=>{}}/>
        </div>
        
        <div>
        <CustomInput
            labelText="Enter First Name"
            style={styles.delegateInput}
            // onChange={handleChange("firstname")}
          />
          <CustomInput
            // onChange={handleChange("lastname")}
            labelText="Enter Last Name"
            style={styles.delegateInput}
          />
          <CustomInput
            // onChange={handleChange("email")}
            labelText="Enter Email Address"
            style={styles.delegateInput}
          />
           <CustomSelect
            labelText="Please select your travel itinerary plan"
            placeholder="Please Select"
            options={options}
            onChange={()=>{}}
            customStyle={styles.width}
          />
          <CustomSelect
            labelText="Activity status"
            placeholder="Please Select"
            options={status[0].activitystatus!}
            onChange={()=>{}}
            customStyle={styles.width}
          />
          <CustomSelect
            labelText="What is the location status"
            placeholder="Please Select"
            options={status[0].locationstatus!}
            onChange={()=>{}}
            customStyle={styles.width}
          />
        </div>

        <div className={styles.buttonFlex}>
          <Button text="Save" style={styles.btn} onClick={onClickClose} />
          <Button text="Cancel" style={styles.btn} />
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
