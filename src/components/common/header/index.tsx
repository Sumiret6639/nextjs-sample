import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { useAppSelector, useAppDispatch } from "~/hooks/useAppStore";
import {
  updateIsLogin,
  updateToken,
  updateRefreshToken,
  updateInfo,
} from "~/slice/userDataSlice";

const Header: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  // 取得使用者資訊
  const userData = useAppSelector((state) => state.userData);
  const isLogin = userData.isLogin;
  const { userName } = userData.info;

  // 測試登入使用
  const signIn = () => {
    dispatch(updateIsLogin(true));
    dispatch(updateToken("測試token"));
    dispatch(updateRefreshToken("測試refresh token"));
    // 更新使用者資訊
    dispatch(
      updateInfo({
        userName: "測試使用者",
      })
    );
  };

  const signOut = async () => {
    // 動態引入bootstrap
    try {
      const bootstrap = await import("bootstrap");
      const myDropdown = document.getElementById("navbarDropdown");
      const dropdown = new bootstrap.Dropdown(myDropdown);
      dropdown.hide();
    } catch (error) {
      console.log(error);
    }

    dispatch(updateIsLogin(false));
  };

  // 實驗＃路由（/#/path123） 時使用
  // useEffect(() => {
  //   const onHashChangeStart = (url) => {
  //     console.log(`Path changing to ${url}`);
  //   };

  //   router.events.on("hashChangeStart", onHashChangeStart);

  //   return () => {
  //     router.events.off("hashChangeStart", onHashChangeStart);
  //   };
  // }, [router.events]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Link href="/home" passHref>
          <a className="navbar-brand text-white">Refactor-react-example</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav w-100 me-auto mb-2 mb-lg-0">
            <li className="nav-item me-4">
              <Link href="/" passHref>
                <a className="nav-link text-white">連結一</a>
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link href="/" passHref>
                <a className="nav-link text-white">連結二</a>
              </Link>
            </li>

            {/*未/登入帳號角色資訊 */}
            <li className="nav-item dropdown d-flex align-items-center ms-auto">
              {isLogin ? (
                <a
                  className="nav-link text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi-icon bi-person"></i>
                  {userName || "使用者名稱"}
                </a>
              ) : (
                <div className="d-flex align-items-center">
                  <Link href="/register" passHref>
                    <a className="nav-link text-white">註冊</a>
                  </Link>
                  <span className="text-white">/</span>
                  <Link href="/login" passHref>
                    <a className="nav-link text-white" onClick={signIn}>
                      登入
                    </a>
                  </Link>
                </div>
              )}

              {/* 登入帳戶資訊下拉選單 */}
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdown"
              >
                <li>
                  <Link href="/account" passHref>
                    <a className="dropdown-item" href="#">
                      帳戶資訊
                    </a>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item" onClick={signOut}>
                    登出
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
