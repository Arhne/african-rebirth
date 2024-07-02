"use client";
import { CustomInput } from "@/app/components/custom-input";
import React, { useState } from "react";
import styles from "./page.module.css";
import { CustomSelect } from "@/app/components/custom-select";
import Button from "@/app/components/custom-button";
import CustomModal from "@/app/components/success-modal/custom-modal";
import { useFormik } from "formik";
import {
  useCreateDelegatesMutation,
  useUploadPassportMutation,
} from "@/redux/api/delegates";
import { toast } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";
import { PiSpinnerGapThin } from "react-icons/pi";
import Navbar from "@/app/components/navbar/page";
import { useRouter } from "next/navigation";

interface IValues {
  prefix: string;
  firstname: string;
  lastname: string;
  itineraryPlan: string;
  email: string;
  
}

const DelegatesForm = () => {
  const router = useRouter();
  const options = [
    { value: "gold", label: "Gold" },
    { value: "silver", label: "Silver" },
    { value: "bronze", label: "Bronze" },
  ];
  const prefix = [
    { value: "mr", label: "Mr" },
    { value: "mrs", label: "Mrs" },
    { value: "miss", label: "Miss" },
  ];

  const [createDelegates, { isLoading }] = useCreateDelegatesMutation();
  const [uploadPassport, { isLoading: isUploading }] =
    useUploadPassportMutation();
  const [passport, setPassport] = useState("");
  const [submitSuccessful, setSubmitSuccessful] = useState(false);

  const initialValues: IValues = {
    prefix: "",
    firstname: "",
    lastname: "",
    itineraryPlan: "",
    email: "",
  };

  const onSubmit = (values: IValues) => {
    const payload = { ...values, passport };
    createDelegates(payload)
      .unwrap()
      .then(() => {
        toast.success(
          "Congratulations you have successfully registered for the event"
        );
        router.back();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const { handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
  });

  const handleUpload = async (file: FormData): Promise<void> => {
    try {
      const res = await uploadPassport(file).unwrap();
      toast.success("Upload successful");
      setPassport(res.url);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handlePassport = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("image", file);
      handleUpload(formData);
    }
  };

  return (
    <>
      

      <div className={styles.form}>
        <div className={styles.headers}>
          <h1>Travel Plan Itinerary</h1>
          <p>Welcome, we look forward to having your presence in Nigeria</p>
        </div>

        <div className={styles.grid}>
          <CustomSelect
            labelText="Select Prefix"
            placeholder="Please Select"
            options={prefix}
            onChange={handleChange("prefix")}
            customStyle={styles.width}
          />
          <CustomInput
            labelText="Enter First Name"
            style={styles.delegateInput}
            onChange={handleChange("firstname")}
          />
          <CustomInput
            onChange={handleChange("lastname")}
            labelText="Enter Last Name"
            style={styles.delegateInput}
          />
          <CustomInput
            onChange={handleChange("email")}
            labelText="Enter Email Address"
            style={styles.delegateInput}
          />
          <CustomSelect
            labelText="Please select your travel itinerary plan"
            placeholder="Please Select"
            options={options}
            onChange={handleChange("itineraryPlan")}
            customStyle={styles.width}
          />
          <div className={styles.grid}>
            <label htmlFor="file" className={styles.marginbtm}>
              Upload picture
            </label>
            <div className={styles.flex}>
              <input
                onChange={handlePassport}
                type="file"
                name="form"
                id="form"
                accept="image/*, .pdf"
                className={styles.select}
              />
              {isUploading && (
                <span className={styles.loader}>
                  <PiSpinnerGapThin className={styles.loader} size={25} />
                </span>
              )}
            </div>
          </div>
        </div>

        <Button
          text="Submit"
          type="submit"
          style={styles.btn}
          isLoading={isLoading}
          onClick={() => handleSubmit()}
          disabled={passport.trim() === ""}
        />

        {submitSuccessful && (
          <CustomModal
            text="Your entry has been submitted successfully"
            onClickClose={() => setSubmitSuccessful(false)}
          />
        )}
      </div>
    </>
  );
};

export default DelegatesForm;
