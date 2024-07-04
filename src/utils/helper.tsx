import { getCookie } from "cookies-next";




export const isAdmin = () => {
  const userType =
       sessionStorage.getItem("africanToken")
  return userType ? true : false;
};
