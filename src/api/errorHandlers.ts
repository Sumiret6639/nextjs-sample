import type { EnhancedStore } from "@reduxjs/toolkit";
import { RootState, AppDispatch } from "~/app/store";
import {
  updateIsLogin,
  updateToken,
  updateRefreshToken,
  updateIsLoading,
} from "~/slice/userDataSlice";
import { postUserRefreshToken } from "./user";

const httpErrorHandler = (status: number, store: EnhancedStore) => {
  switch (status) {
    case 401:
      response401(store);
      break;

    case 404:
      response404();
      break;

    case 405:
      response405();
      break;

    case 451:
      response451();
      break;

    case 500:
      response500();
      break;

    default:
      responseSpecial();
      break;
  }
};

const response401 = async (store: EnhancedStore) => {
  try {
    // 取得Redux的store和disaptch
    const rootState: RootState = store.getState();
    const dispatch: AppDispatch = store.dispatch;

    // 取得 store 裡的 token, refreshToken
    const { userData } = rootState;
    const { token, refreshToken } = userData;

    if (token === null || refreshToken === null)
      throw Error("token || resfreshToken is null");

    const postData = {
      token: token,
      refresh_token: refreshToken,
    };

    const responseData = await postUserRefreshToken(postData);

    if (responseData === null) throw Error("no responseData!");

    if (!responseData.isSuccess) {
      const loginErrorMessage = "系統已逾時，請重新登入";

      alert(loginErrorMessage);
      dispatch(updateIsLogin(false));

      throw Error(loginErrorMessage);
    }

    // API沒有錯誤且取回新的Token，將新的Token們保存起來並重整頁面
    const { data: resultData } = responseData;
    const { token: newToken, refresh_token: newRefreshToken } = resultData;
    dispatch(updateToken(newToken));
    dispatch(updateRefreshToken(newRefreshToken));

    // 重新整理該頁面
    setTimeout(() => {
      location.reload();
    }, 300);

    // 關閉loading狀態
    // dispatch(updateIsLoading(false));
  } catch (error) {
    console.log(error);
  }

  return null;
};

const response404 = () => {
  alert("404，訪問的頁面不存在");
};

const response405 = () => {
  alert("405，方法錯誤，請求拒絕");
};

const response451 = () => {
  alert("451，憑證過期");
};

const response500 = () => {
  alert("500，伺服器錯誤，請通知系統人員");
};

const responseSpecial = () => {
  alert("請求錯誤，請重新再試");
};

export {
  httpErrorHandler,
  response401,
  response404,
  response405,
  response451,
  response500,
  responseSpecial,
};
