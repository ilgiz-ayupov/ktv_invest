import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/components/BlogSection/BlogCard.module.scss";

export default function BlogCard({ title }) {
  return (
    <div className={styles.card}>
      <Link className={styles.card__link} href="/">
        <div className={styles.card__top}>
          <Image
            className={styles.card__image}
            src="/images/blog_section/img1.jpg"
            alt="blog image"
            width={290}
            height={160}
          />
        </div>
        <div className={styles.card__content}>
          <h3 className={styles.card__title}>{title}</h3>
          <div className={styles.card__tags}>
            <div className={styles.card__tag}>Блог</div>
            <div className={styles.card__tag}>Полезные советы</div>
          </div>
          <div className={styles.card__bottom}>
            <div className={styles.card__views}>
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 6.00098C16 6.00098 13 0.500977 8 0.500977C3 0.500977 0 6.00098 0 6.00098C0 6.00098 3 11.501 8 11.501C13 11.501 16 6.00098 16 6.00098ZM1.173 6.00098C1.65651 5.2661 2.21264 4.58166 2.833 3.95798C4.12 2.66898 5.88 1.50098 8 1.50098C10.12 1.50098 11.879 2.66898 13.168 3.95798C13.7884 4.58166 14.3445 5.2661 14.828 6.00098C14.77 6.08798 14.706 6.18398 14.633 6.28898C14.298 6.76898 13.803 7.40898 13.168 8.04398C11.879 9.33298 10.119 10.501 8 10.501C5.88 10.501 4.121 9.33298 2.832 8.04398C2.21165 7.42029 1.65552 6.73585 1.172 6.00098H1.173Z"
                  fill="black"
                />
                <path
                  d="M8 3.50098C7.33696 3.50098 6.70107 3.76437 6.23223 4.23321C5.76339 4.70205 5.5 5.33794 5.5 6.00098C5.5 6.66402 5.76339 7.2999 6.23223 7.76874C6.70107 8.23758 7.33696 8.50098 8 8.50098C8.66304 8.50098 9.29893 8.23758 9.76777 7.76874C10.2366 7.2999 10.5 6.66402 10.5 6.00098C10.5 5.33794 10.2366 4.70205 9.76777 4.23321C9.29893 3.76437 8.66304 3.50098 8 3.50098ZM4.5 6.00098C4.5 5.07272 4.86875 4.18248 5.52513 3.5261C6.1815 2.86973 7.07174 2.50098 8 2.50098C8.92826 2.50098 9.8185 2.86973 10.4749 3.5261C11.1313 4.18248 11.5 5.07272 11.5 6.00098C11.5 6.92923 11.1313 7.81947 10.4749 8.47585C9.8185 9.13223 8.92826 9.50098 8 9.50098C7.07174 9.50098 6.1815 9.13223 5.52513 8.47585C4.86875 7.81947 4.5 6.92923 4.5 6.00098Z"
                  fill="black"
                />
              </svg>
              <span>125</span>
            </div>
            <div className={styles.card__published}>
              <span className={styles.card__time}>09:12</span>
              <span className={styles.card__divider}>/</span>
              <span className={styles.card__date}>09.09.2022</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
