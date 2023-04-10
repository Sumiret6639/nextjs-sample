// 命名：I/T + [api name] + response
export interface IBasicResponse {
  status: number;
  error: string | null;
  result: T;
}

export interface IResponse {
  isSuccess: boolean;
  message: string;
  data?: unknown; //不一定會有，其他型別待確認
}

export * from "./user";
export * from "./homePage";
