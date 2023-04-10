import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Info = {
  userName: string;
};

// 有SWR後就不一定要用isLoading，可以轉給SWR提供的方法處理就好
interface InitialState {
  isLogin: boolean;
  info: Info;
  token: string | null;
  refreshToken: string | null;
  isLoading: boolean;
}

const initialState: InitialState = {
  isLogin: false,
  info: {
    userName: "",
  },
  token: null,
  refreshToken: null,
  isLoading: false,
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    updateToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    updateRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    updateInfo: (state, action: PayloadAction<Info>) => {
      state.info = { ...action.payload };
    },
    updateIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  updateIsLogin,
  updateToken,
  updateRefreshToken,
  updateInfo,
  updateIsLoading,
} = userDataSlice.actions; //給React組件個別使用

export default userDataSlice.reducer; //給store.js使用
