import Link from "next/link";
import { Fragment } from "react";
import type { TMenuItem } from "~/types/api";

import styles from "./menu.module.scss";
type TMenuList = TMenuItem[];

const EmptyList = () => (
  <li className="text-subheading fs-4">載入中，請稍候...</li>
);

const LinkItem = ({ item }: { item: TMenuItem }) => (
  <li className={`${styles.menu_item}`}>
    <Link href={item.path} passHref>
      <a className={styles.link_button}>{item.name}</a>
    </Link>
  </li>
);

const Menu = ({ menuList }: { menuList: TMenuList }) => {
  return (
    <ul className="d-flex flex-wrap justify-content-between">
      {Boolean(menuList.length) ? (
        menuList.map((item, key) => (
          <Fragment key={key}>
            <LinkItem item={item} />
          </Fragment>
        ))
      ) : (
        <EmptyList />
      )}
    </ul>
  );
};

export default Menu;
