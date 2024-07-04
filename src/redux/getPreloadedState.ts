import { getCookie } from "cookies-next";

export const getPreloadedState = () => {
  if (typeof sessionStorage !== "undefined") {
    const token = sessionStorage.getItem("africanToken");
    const defalutValue = {
      auth: {
        access_token: (token ? token : null) as string | null,
      },
    };
    return defalutValue;
  }
};
