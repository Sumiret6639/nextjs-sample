import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppSelector } from "../hooks/useAppStore";

// 不需要權限驗證的路由
const nonAuthPaths = ["/login", "/register", "/teach"];

const Auth = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;
  const isLogin = useAppSelector((state) => state.userData.isLogin);
  console.log(pathname);
  // 路由權限驗證
  useEffect(() => {
    if (isLogin) {
      if (pathname === "/login" || pathname === "/") {
        router.push("/home");
      }
    } else {
      if (!nonAuthPaths.includes(pathname)) {
        router.push("/login");
      }
    }
  }, [router, pathname, isLogin]);

  return children;
};

export default Auth;
