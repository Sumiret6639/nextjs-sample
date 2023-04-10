import Api from "./axios";
import type {
  ILoginData,
  ILoginResponse,
  IRefreshTokenData,
  IRefreshTokenResponse,
} from "~/types/api";

export const postUserLogin = async (data: ILoginData) => {
  try {
    const response = await Api.post({
      path: "/User/Login",
      data,
      auth: false,
    });

    if (response !== null) {
      const { result }: { result: ILoginResponse } = response;
      return result;
    } else {
      throw Error("axios response data is null!");
    }
  } catch (error) {
    console.warn(error);
    return null;
  }
};

export const postUserRefreshToken = async (data: IRefreshTokenData) => {
  try {
    const response = await Api.post({
      path: "/User/RefreshToken",
      data,
      auth: false,
    });

    if (response !== null) {
      const { result }: { result: IRefreshTokenResponse } = response;
      return result;
    } else {
      throw Error("axios response data is null!");
    }
  } catch (error) {
    console.warn(error);
    return null;
  }
};
