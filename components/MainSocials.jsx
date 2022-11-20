import WhatsAppIcon from "../icons/socials/WhatsApp";
import TelegramIcon from "../icons/socials/Telegram";
import ChatIcon from "../icons/socials/Chat";
import ViberIcon from "../icons/socials/Viber";

import { Tooltip } from "antd";
import Link from "next/link";

import styles from "../styles/components/Socials.module.scss";

export default function MainSocials() {
  return (
    <ul className={styles.menu}>
      <li className={styles.menu__item}>
        <Tooltip title="WhatsApp">
          <Link href="/">
            <WhatsAppIcon width={20} height={20} />
          </Link>
        </Tooltip>
      </li>
      <li className={styles.menu__item}>
        <Tooltip title="Telegram">
          <Link href="/">
            <TelegramIcon width={20} height={20} />
          </Link>
        </Tooltip>
      </li>
      <li className={styles.menu__item}>
        <Tooltip title="?">
          <Link href="/">
            <ChatIcon width={20} height={20} />
          </Link>
        </Tooltip>
      </li>
      <li className={styles.menu__item}>
        <Tooltip title="Viber">
          <Link href="/">
            <ViberIcon width={20} height={20} />
          </Link>
        </Tooltip>
      </li>
    </ul>
  );
}
