import Link from "next/link";

import styles from "../styles/components/Auth.module.scss";

export default function Auth() {
  return (
    <div className={styles.auth}>
      <Link className={styles.auth__link} href="/register">
        Регистрация
      </Link>
      <span className={styles.auth__devider}>/</span>
      <Link className={styles.auth__link} href="/login">
        Вход
      </Link>
    </div>
  );
}
