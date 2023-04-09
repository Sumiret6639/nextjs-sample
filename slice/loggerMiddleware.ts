import { Middleware } from "redux";
import { RootState } from "app/store";

export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    let result = next(action);
    return result;
  };
