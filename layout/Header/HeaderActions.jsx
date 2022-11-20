import { Tooltip } from "antd";
import StarIcon from "../../icons/Star";
import ScalesIcon from "../../icons/Scales";

import Link from "next/link";

import styles from "../../styles/layout/Header/HeaderActions.module.scss";

export default function HeaderActions() {
  return (
    <div className={styles.actions}>
      <div className={styles.actions__item}>
        <Tooltip title="Избранное">
          <Link className={styles.actions__btn} href="/favorites">
            <StarIcon />
          </Link>
        </Tooltip>
      </div>
      <div className={styles.actions__item}>
        <Tooltip title="Сравнить">
          <Link className={styles.actions__btn} href="/compare">
            <ScalesIcon />
          </Link>
        </Tooltip>
      </div>
      <div className={styles.actions__item}>
        <Link href="/" className={styles.actions__call}>
          Заказать звонок
        </Link>
      </div>
    </div>
  );
}
