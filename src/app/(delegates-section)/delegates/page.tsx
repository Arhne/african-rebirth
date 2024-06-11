"use client"
import { CustomInput } from '@/app/components/custom-input'
import React from 'react';
import { FlightArrangements, HotelArrangements } from '.';
import styles from "./delegates.module.css";
import { CustomSelect } from '@/app/components/custom-select';
import Button from '@/app/components/custom-button';


const DelegatesForm = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className={styles.form}>
            <h1>Travel Plan Itinerary</h1>
            <p>Welcome, we look forward to having your presence in Nigeria</p>
        <div className={styles.grid}>
        <div className= {styles.col}>
          <CustomInput
            labelText = "Enter First Name"
            style = {styles.delegateInput}
           />
           <CustomInput
            labelText = "Enter Last Name"
            style = {styles.delegateInput}
           />
        </div>

        <div className= {styles.col}>
        {FlightArrangements.map((flight)=>
            <div key={flight.id}>
                <h3 className={styles.heading}>{flight.question}</h3>
                
                  <CustomSelect
                    placeholder = "Please Select"
                    options={flight.options}
                    onChange={handleChange}
                    customStyle ={styles.width}
                  />
                
            </div>
        )}

        {HotelArrangements.map((hotel)=>
            <div key={hotel.id}>
                <h3  className={styles.heading}>{hotel.question}</h3>
                <div className={styles.content}>
				
                  <CustomSelect
                    placeholder = "Please Select"
                    options={hotel.options}
                    onChange={handleChange}
                    customStyle ={styles.width}
                  />
                </div>
            </div>
        )}
        </div>
        </div>
        <Button 
        text ="Submit"
        type='submit'
        style={styles.btn}
        />
    </div>
  )
}

export default DelegatesForm