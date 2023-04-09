import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect, FC } from "react";
import { useAppDispatch } from "hooks/useAppStore";
import { useForm } from "react-hook-form";

import {
  updateIsLogin,
  updateToken,
  updateRefreshToken,
  updateInfo,
} from "slice/userDataSlice";
import { postUserLogin } from "api";

import Input from "components/common/input";
import ForgetModal from "./forgetModal";

import Styles from "./login.module.scss";

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // 是否記住此帳號
  const [isRemember, setIsRemember] = useState(false);

  // 取得記住的帳號（應該要統一透過Redux-tookit存取，這裡簡單帶過先直接用）
  const rememberUser = localStorage.getItem("rememberUser");

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      account: rememberUser || "",
      password: "",
    },
  });

  const accountRegister = register("account", {
    required: true,
    minLength: 6,
    maxLength: 12,
    pattern: /^[A-Za-z0-9]+$/i,
  });

  const passwordRegister = register("password", {
    required: true,
    minLength: 6,
    maxLength: 12,
    pattern: /^[A-Za-z0-9@$&*]+$/i,
  });

  const sendLogin = async (account: string, password: string) => {
    const postData = {
      account,
      password,
    };

    const responseData = await postUserLogin(postData);

    if (responseData === null) return;

    const { data: resultData } = responseData;
    const { user_name, token, refresh_token } = resultData;

    // 更新登入狀態
    dispatch(updateIsLogin(true));

    // 更新token,refreshToken
    dispatch(updateToken(token));
    dispatch(updateRefreshToken(refresh_token));
    // 更新使用者資訊
    dispatch(
      updateInfo({
        userName: user_name,
      })
    );

    router.push("/home");
  };

  const onSubmit = (e) => {
    sendLogin(e.account, e.password);
  };

  const handleRememberUser = (e) => {
    const currentValue = getValues("account");

    setIsRemember(e.target.checked);

    if (e.target.checked && currentValue) {
      localStorage.setItem("rememberUser", currentValue);
    } else {
      localStorage.removeItem("rememberUser");
    }
  };

  // 記住帳號
  useEffect(() => {
    if (rememberUser) {
      setIsRemember(true);
    }
  }, [rememberUser]);

  return (
    <>
      <main className={Styles.main}>
        <div>
          <h1 className="text-center mb-3">登入系統</h1>

          {/* 帳號 */}
          <div className="mb-4">
            <label className="d-flex mb-2" htmlFor="account">
              <h4>帳號</h4>
              {/* 帳號錯誤訊息 */}
              {errors?.account && (
                <div className="text-danger ms-auto">
                  請輸入6-12碼英數字帳號
                </div>
              )}
            </label>
            <Input
              id="account"
              placeholder="請輸入帳號"
              className={`${errors?.account ? "is-invalid" : ""}`}
              formRegister={accountRegister}
            />
          </div>

          {/* 密碼 */}
          <div className="mb-4">
            <label htmlFor="password" className="mb-2 d-flex">
              <h4>密碼</h4>
              {/* 密碼錯誤訊息 */}
              {errors?.password && (
                <div className="text-danger ms-auto">
                  請輸入6-12碼英數特殊符號之密碼
                </div>
              )}
            </label>
            <Input
              id="password"
              placeholder="請輸入密碼"
              className={`${errors?.password ? "is-invalid" : ""}`}
              formRegister={passwordRegister}
            />
          </div>

          {/* 登入按鍵 */}
          <button
            className="w-100 btn btn-primary btn-lg mb-4"
            onClick={handleSubmit(onSubmit)}
          >
            登入
          </button>

          {/* 記住帳號、忘記密碼、尚無帳戶 */}
          <div className="d-flex align-items-center">
            <div className="form-check mb-0">
              <input
                id="keep-account"
                type="checkbox"
                className="form-check-input"
                checked={isRemember}
                onChange={handleRememberUser}
              />
              <label className="form-check-label fs-6" htmlFor="keep-account">
                記住此帳號
              </label>
            </div>

            <button
              id="btn-to-forgot"
              className="btn btn-link btn-sm lh-1 ms-2"
              data-bs-toggle="modal"
              data-bs-target="#forgetModal"
            >
              忘記帳號 / 密碼
            </button>

            <label className="form-check-label fs-6">還沒有帳戶？</label>

            <Link href="/register" passHref>
              <a className="btn btn-link btn-sm">註冊</a>
            </Link>
          </div>
        </div>
      </main>

      {/* 忘記帳號/密碼 */}
      <ForgetModal />
    </>
  );
};

export default Login;
