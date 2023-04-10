import { IResponse } from "./index";

export type TMenuItem = {
  name: string;
  path: string;
};

export type TBulletinItem = {
  title: string;
  content: string;
  post_time: string;
};

export interface IListResponse extends IResponse {
  data: TlistItem;
}

export interface IBulletinResponse extends IResponse {
  data: TBulletinItem[];
}
