import { getCookie } from "cookies-next";

export const isAdmin = () => {
  if (typeof sessionStorage !== "undefined") {
    const userType = sessionStorage.getItem("africanToken");
    return userType ? true : false;
  } else {
    return false;
  }
};
