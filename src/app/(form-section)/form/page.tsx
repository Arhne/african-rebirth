"use client"
import { CustomInput } from '@/app/components/custom-input'
import React, { useState } from 'react';
import styles from "./page.module.css";
import { CustomSelect } from '@/app/components/custom-select';
import Button from '@/app/components/custom-button';
import CustomModal from '@/app/components/success-modal/custom-modal';


const DelegatesForm = () => {
 const options = [
    { value: 'gold', label: 'Gold' },
    { value: 'silver', label: 'Silver' },
    { value: 'bronze', label: 'Bronze' },
]
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

const [submitSuccessful, setSubmitSuccessful] = useState(false);
  return (
    <div className={styles.form}>
        <h1>Travel Plan Itinerary</h1>
        <p>Welcome, we look forward to having your presence in Nigeria</p>
      
      
      <div className={styles.grid}>
      
        <CustomInput
          labelText = "Enter First Name"
          style = {styles.delegateInput}
          />
          <CustomInput
          labelText = "Enter Last Name"
          style = {styles.delegateInput}
          />

          <CustomSelect
            labelText='Please select your travel itinerary plan'
            placeholder = "Please Select"
            options={options}
            onChange={handleChange}
            customStyle ={styles.width}
          />
              
          <div className= {styles.grid}>
            <label htmlFor="file" className={styles.marginbtm}>Upload picture</label>
            <input type='file' name='file' id= 'file' accept='image/*, .pdf' />
          </div>

      </div>
     
      <Button 
      text ="Submit"
      type='submit'
      style={styles.btn}
      onClick={() => setSubmitSuccessful(true)}
      />

      {submitSuccessful && (<CustomModal
      text = "Your entry has been submitted sucessfully"
      onClickClose ={() => setSubmitSuccessful(false)}/>)}
    </div>
  )
}

export default DelegatesForm