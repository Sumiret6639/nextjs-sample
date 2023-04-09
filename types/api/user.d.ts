import { IResponse } from "./index";

export interface ILoginData {
  account: string;
  password: string;
}

export interface IRefreshTokenData {
  token: string;
  refresh_token: string;
}

export interface ILoginResponse extends IResponse {
  data: {
    user_name: string;
    token: string;
    refresh_token: string;
  };
}

export interface IRefreshTokenResponse extends IResponse {
  data: {
    token: string;
    refresh_token: string;
  };
}
