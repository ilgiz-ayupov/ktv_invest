import Image from "next/image";

import TabsMenu from "./TabsMenu";

import styles from "../../styles/components/SectionTop/SectionTop.module.scss";

export default function SectionTop() {
  return (
    <section className={styles.section}>
      <Image
        className={styles.section__bg}
        src="/images/section_top/bg.jpg"
        height={848}
        width={1920}
      />
      <div className={styles.section__content}>
        <h1 className={styles.section__title}>
          Профессионалы по недвижимости в Турции
        </h1>
        <TabsMenu />
      </div>
    </section>
  );
}
