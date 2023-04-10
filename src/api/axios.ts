import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import type { EnhancedStore } from "@reduxjs/toolkit";
import { RootState } from "~/app/store";

import { httpErrorHandler } from "./errorHandlers";
import type { IBasicResponse } from "~/types/api";

interface IPostArg {
  path: string;
  data: object | null;
  auth?: boolean;
}

// app.js建立時，會注入store
let store: EnhancedStore | null = null;

export const injectStore = (_store: EnhancedStore) => {
  store = _store;
};

const baseURL = process.env.NEXT_PUBLIC_API_URL || "/";

class ApiInstance {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL,
    });

    this.instance.interceptors.response.use(
      (response: AxiosResponse<IBasicResponse>) => {
        return Promise.resolve(response);
      },
      (error) => {
        if (<AxiosError>error) {
          const { response }: { response: AxiosResponse } = error;
          const { status } = response;

          if (store !== null) {
            httpErrorHandler(status, store);
          }
        }

        return Promise.reject(error);
      }
    );
  }

  async post({ path, data, auth = true }: IPostArg) {
    try {
      if (store === null) throw "no store";

      // 取得store中的state
      const rootState: RootState = store.getState();

      // 取得 store 裡的 token, refreshToken
      const { userData } = rootState;
      const { token } = userData;

      if (auth && token !== null) {
        this.instance.defaults.headers.common["Authorization"] = token;
      } else {
        delete this.instance.defaults.headers.common["Authorization"];
      }

      const clarifiedPath = path.replace(/[^ -~]/g, "");

      const response = await this.instance.post<IBasicResponse>(
        clarifiedPath,
        data
      );

      const { data: responseData } = response;

      return responseData;
    } catch (error) {
      console.warn(error);
      return null;
    }
  }

  async get(path: string) {
    try {
      const clarifiedPath = path.replace(/[^ -~]/g, "");
      const response = await this.instance.get<IBasicResponse>(clarifiedPath);

      return response.data;
    } catch (error) {
      console.warn(error);
      return null;
    }
  }
}

const Api = new ApiInstance();
export default Api;
