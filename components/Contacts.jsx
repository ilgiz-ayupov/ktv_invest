import Link from "next/link";
import Image from "next/image";

import styles from "../styles/components/Contacts.module.scss";

export default function Contacts() {
  return (
    <ul className={styles.menu}>
      <li className={styles.menu__item}>
        <Image
          src="/images/country/Turkey.png"
          width={20}
          height={20}
          alt="Turkey Icon"
        />
        <Link className={styles.menu__link} href="tel:+902523137852">
          +90 252 3137852
        </Link>
      </li>
      <li className={styles.menu__item}>
        <Image
          src="/images/country/Russia.png"
          width={20}
          height={20}
          alt="Russia Icon"
        />
        <Link className={styles.menu__link} href="tel:+7(347)919-57-63">
          +7(347)919-57-63
        </Link>
      </li>
      <li className={styles.menu__item}>
        <Image
          src="/images/country/Russia.png"
          width={20}
          height={20}
          alt="Russia Icon"
        />
        <Link className={styles.menu__link} href="tel:+7(351)346-64-72">
          +7(351)346-64-72
        </Link>
      </li>
    </ul>
  );
}
