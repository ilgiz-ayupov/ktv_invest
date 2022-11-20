import { Dropdown, Space } from "antd";
import Arrow from "../icons/Arrow";
import Link from "next/link";

import styles from "../styles/components/DropdownLanguage.module.scss";

const items = [
  {
    label: <Link className={styles.dropdown__link} href="/ru">Русский</Link>,
    key: "ru",
  },
  {
    label: <Link className={styles.dropdown__link} href="/en">English</Link>,
    key: "en",
  },
];

export default function DropdownLanguage() {
  return (
    <Dropdown
      id="lang-dropdown"
      className={styles.dropdown}
      menu={{ items }}
      trigger={["click"]}
    >
      <Space className={styles.dropdown__space}>
        Русский
        <Arrow width={8} height={4} stroke={"white"} />
      </Space>
    </Dropdown>
  );
}
