"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { logo } from "@/assets";
import {
  CustomInput,
  CustomPasswordInput,
} from "@/app/components/custom-input";
import { useRouter } from "next/navigation";
import Button from "@/app/components/custom-button";
import { useLoginAdminMutation } from "@/redux/api/admins";
import { useFormik } from "formik";
import { setCookie } from "cookies-next";
import { toast } from "react-toastify";

export default function Home() {
  const router = useRouter();

  const [adminLogin, { isLoading }] = useLoginAdminMutation();

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values: ILogin) => {
    adminLogin(values)
      .unwrap()
      .then((res) => {
        setCookie("token", res.data.token);
        toast.success("Login successful");
        router.push("/");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const { handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <div className={styles.container}>
      <div className={`${styles.topImage}`}>{/* <AfricanRebirthGrey /> */}</div>
      <div className={`${styles.bottomImage}`}>
        {/* <AfricanRebirthGrey /> */}
      </div>
      <p className={styles.arrow} onClick={() => router.push("/")}>
        <span>&larr;</span>
      </p>
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

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <CustomInput
            onChange={handleChange("email")}
            type="text"
            placeholder="Enter Email"
          />

          <CustomPasswordInput
            onChange={handleChange("password")}
            placeholder="Enter Password"
          />
        </div>

        <p className={styles.forgetPassword} onClick={() => router.push("/")}>
          Forget Password?
        </p>

        <div className={styles.buttonSignin}>
          <Button
            style={styles.btn}
            type="submit"
            text="Sign In"
            isLoading={isLoading}
            // onClick={() => router.push("admin/delegates-info")}
          />
        </div>
      </form>
    </div>
  );
}
