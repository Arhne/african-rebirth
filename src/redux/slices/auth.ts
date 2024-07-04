import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "cookies-next";
import { RootState } from "../store";
import { Constants } from "../enum";
import { toast } from "react-toastify";

// export interface IUser {
//   firstName: string;
//   lastName: string;
//   id: string;
//   email: string;
//   accessToken?: string;
// }

interface AuthState {
  user: ILoginResponse | null;
  rememberMe: boolean;
}

const getUserFromCookie = (): ILoginResponse | null => {
  if (typeof sessionStorage !== "undefined") {
    const userString = sessionStorage.getItem(Constants.USER)?.toString();
    if (userString) {
      return JSON.parse(userString);
    }
  }
  return null;
};

const initialState: AuthState = {
  user: getUserFromCookie(),
  rememberMe: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<ILoginResponse>) {
      const { token, ...userDetails } = action.payload;
      const cookieOptions = state.rememberMe
        ? { maxAge: 30 * 24 * 60 * 60 }
        : { maxAge: 86400 }; // 30 days or 1 day

      setCookie(Constants.USER, JSON.stringify(userDetails), cookieOptions);
      if (token) {
        setCookie(Constants.TOKEN, token, cookieOptions);
      }
      state.user = action.payload;
    },
    setRememberMe(state, action: PayloadAction<boolean>) {
      state.rememberMe = action.payload;
    },
    clearUser(state) {
      state.user = null;
      state.rememberMe = false;
    },
  },
});

export const { setUser, setRememberMe, clearUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectRememberMe = (state: RootState) => state.auth.rememberMe;

export default authSlice;
