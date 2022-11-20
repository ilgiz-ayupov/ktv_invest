import DollarIcon from "../icons/currency/Dollar";
import EuroIcon from "../icons/currency/Euro";
import TurkishLiraIcon from "../icons/currency/TurkishLira";
import PoundSterlingIcon from "../icons/currency/PoundSterling";
import RubleIcon from "../icons/currency/Ruble";

import Link from "next/link";

import styles from "../styles/components/Currencies.module.scss";
import { Tooltip } from "antd";

export default function Currencies() {
  return (
    <ul className={styles.menu}>
      <li className={styles.menu__item}>
        <Tooltip title="USD">
          <Link href="/" className={styles.menu__box}>
            <DollarIcon width={9} height={14} />
          </Link>
        </Tooltip>
      </li>
      <li className={styles.menu__item}>
        <Tooltip title="EUR">
          <Link href="/" className={styles.menu__box}>
            <EuroIcon width={9} height={14} />
          </Link>
        </Tooltip>
      </li>
      <li className={styles.menu__item}>
        <Tooltip title="TRY">
          <Link href="/" className={styles.menu__box}>
            <TurkishLiraIcon width={9} height={14} />
          </Link>
        </Tooltip>
      </li>
      <li className={styles.menu__item}>
        <Tooltip title="GBR">
          <Link href="/" className={styles.menu__box}>
            <PoundSterlingIcon width={9} height={14} />
          </Link>
        </Tooltip>
      </li>
      <li className={styles.menu__item}>
        <Tooltip title="RUB">
          <Link href="/" className={styles.menu__box}>
            <RubleIcon width={9} height={14} />
          </Link>
        </Tooltip>
      </li>
    </ul>
  );
}
