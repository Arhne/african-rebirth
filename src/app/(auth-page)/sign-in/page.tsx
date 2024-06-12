"use client"
import Image from "next/image";
import styles from "./style.module.css";
import { AfricanRebirthGrey, logo } from "@/assets"
import { CustomInput, CustomPasswordInput } from "@/app/components/custom-input";
import { useRouter } from "next/navigation";
import Button from "@/app/components/custom-button";



export default function Home() {
  const router = useRouter();
  

  return (
    
      <div className={styles.container}>
        <div className={`${styles.topImage}`}>
          {/* <AfricanRebirthGrey /> */}
        </div>
        <div className={`${styles.bottomImage}`}>
          {/* <AfricanRebirthGrey /> */}
        </div>

        <div className={styles.centerContent}>
          <Image 
          src={logo} 
          alt=""
          height={80} 
          width={50}  
          className={styles.img}
          />
        </div>
        <h2 className={styles.title}>Sign In</h2>
        <p className={styles.subTitle}>Welcome Support Teams!</p>
        
        <div className={styles.form}>
          <div className={styles.inputGroup}>
            <CustomInput
              type="text"
              placeholder="Enter Email"
              value= ""
              />

            <CustomPasswordInput
              placeholder="Enter Password"
              value=""
            />
          </div>

          <p
            className={styles.forgetPassword}
            onClick={() => router.push("/")}>
            Forget Password?
          </p>

          <div className={styles.buttonSignin}>
            <Button
              style= {styles.btn}
              type = "submit"
              text= "Sign In"
              
              onClick={() => router.push("admin/delegates-info")}
            />

          </div>
        </div>
      </div>
    
  );
}
