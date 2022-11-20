import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/components/VideoSection/VideoCard.module.scss";

export default function VideoCard({ title, image }) {
  return (
    <div className={styles.card}>
      <Link className={styles.card__link} href="/">
        <div className={styles.card__top}>
          <Image
            className={styles.card__image}
            src={image}
            alt={title}
            width={290}
            height={165}
          />
        </div>
        <div className={styles.card__content}>
          <h3 className={styles.card__title}>{title}</h3>
        </div>
      </Link>
    </div>
  );
}
