import Head from "next/head";
import { useEffect, useState } from "react";
import { useAppSelector } from "hooks/useAppStore";

import Menu from "./menu";
import Bulletin from "./bulletin";
import { postHomePageList, postHomePageBulletin } from "api";
import { TMenuItem, TBulletinItem } from "types/api";

const Home = () => {
  const userInfo = useAppSelector((state) => state.userData.info);
  const { userName } = userInfo;

  const [menuList, setMenuList] = useState<TMenuItem[]>([]);
  const [bulletinList, setBulletinList] = useState<TBulletinItem[]>([]);

  useEffect(() => {
    const loadFunc = async () => {
      // API示範用
      const menuData = await postHomePageList();
      if (menuData) {
        const { body_data: bodyData } = menuData;
        setMenuList(bodyData);
      }
      const bulletinData = await postHomePageBulletin();
      if (bulletinData) {
        setBulletinList(bulletinData);
      }
    };

    // loadFunc();
  }, []);

  return (
    <>
      <Head>
        <title>首頁</title>
        <meta name="description" content="首頁" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-5">
        <h1 className="mb-4">
          <span>{userName || "使用者名稱"}</span>
          ，您好
        </h1>
        <div className="row">
          <div className="col-6">
            <Menu menuList={menuList} />
          </div>
          <div className="col-6">
            <Bulletin bulletinList={bulletinList} />
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
