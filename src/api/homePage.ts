import Api from "./axios";
import type { IListResponse, IBulletinResponse } from "~/types/api";

export const postHomePageList = async () => {
  try {
    const response = await Api.get("/HomePage/List");

    if (response !== null) {
      const { result }: { result: IListResponse } = response;
      const { data: resultData } = result;

      return resultData;
    } else {
      throw Error("axios response data is undefined!");
    }
  } catch (error) {
    console.warn(error);
    return null;
  }
};

export const postHomePageBulletin = async () => {
  try {
    const response = await Api.get("/HomePage/Bulletin");

    if (response !== null) {
      const { result }: { result: IBulletinResponse } = response;
      const { data: resultData } = result;

      return resultData;
    } else {
      throw Error("axios response data is undefined!");
    }
  } catch (error) {
    console.warn(error);
    return null;
  }
};
