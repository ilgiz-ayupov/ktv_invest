import Container from "../../layout/Container";
import Divider from "../Divider";
import Arrow from "../../icons/Arrow";
import { Row, Col } from "antd";

import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/components/RealEstateSection/RealEstateHeader.module.scss";

export default function RealEstateHeader() {
  return (
    <header className={styles.header}>
      <Container>
        <Row className={styles.header__top} wrap={false} align={"middle"}>
          <h2 className={styles.header__title}>
            <span>Каталог недвижимости</span>
          </h2>
          <Divider />
          <Link className={styles.header__more} href="/">
            <Arrow width={12} height={6} />
          </Link>
        </Row>
        <Row>
          <Col span={12}>
            <p className={styles.header__desc}>
              KTV invest - эффективное агенство премиальной недвижимости в
              Стамбуле. Подбирая для Вас квадратные метры премиум-класса, мы
              помогаем Вам выйти на новый уровень жизни. Четкая стратегия
              подбора и работы KTV invest с объектами коммерческой и жилой
              недвижимости премиум-сегмента заставляет конкурентов завидовать, а
              жизнь наших клиентов делает в разы счастливей.
            </p>
          </Col>
          <Col span={12}>
            <div className={styles.categories}>
              <div className={styles.categories__row}>
                <div className={styles.categories__card}>
                  <Link href="/" className={styles.categories__link}>
                    <Image
                      className={styles.categories__image}
                      src="/images/real_estate_section/img1.jpg"
                      width={204}
                      height={140}
                      alt="category image"
                    />
                    <h3 className={styles.categories__title}>
                      Участок под строительство
                    </h3>
                  </Link>
                </div>
                <div className={styles.categories__card}>
                  <Link href="/" className={styles.categories__link}>
                    <Image
                      className={styles.categories__image}
                      src="/images/real_estate_section/img2.jpg"
                      width={204}
                      height={140}
                      alt="category image"
                    />
                    <h3 className={styles.categories__title}>
                      Участок под сельское хозяйство
                    </h3>
                  </Link>
                </div>
              </div>
              <div className={styles.categories__row}>
                <div className={styles.categories__card}>
                  <Link href="/" className={styles.categories__link}>
                    <Image
                      className={styles.categories__image}
                      src="/images/real_estate_section/img3.jpg"
                      width={204}
                      height={140}
                      alt="category image"
                    />
                    <h3 className={styles.categories__title}>Офисы</h3>
                  </Link>
                </div>
                <div className={styles.categories__card}>
                  <Link href="/" className={styles.categories__link}>
                    <Image
                      className={styles.categories__image}
                      src="/images/real_estate_section/img4.jpg"
                      width={204}
                      height={140}
                      alt="category image"
                    />
                    <h3 className={styles.categories__title}>
                      Магазины и бутики
                    </h3>
                  </Link>
                </div>
                <div className={styles.categories__card}>
                  <Link href="/" className={styles.categories__link}>
                    <Image
                      className={styles.categories__image}
                      src="/images/real_estate_section/img5.jpg"
                      width={204}
                      height={140}
                      alt="category image"
                    />
                    <h3 className={styles.categories__title}>Отели</h3>
                  </Link>
                </div>
              </div>
              <div className={styles.categories__row}>
                <div className={styles.categories__card}>
                  <Link href="/" className={styles.categories__link}>
                    <Image
                      className={styles.categories__image}
                      src="/images/real_estate_section/img6.jpg"
                      width={204}
                      height={140}
                      alt="category image"
                    />
                    <h3 className={styles.categories__title}>Квартиры</h3>
                  </Link>
                </div>
                <div className={styles.categories__card}>
                  <Link href="/" className={styles.categories__link}>
                    <Image
                      className={styles.categories__image}
                      src="/images/real_estate_section/img7.jpg"
                      width={204}
                      height={140}
                      alt="category image"
                    />
                    <h3 className={styles.categories__title}>Пентхаусы</h3>
                  </Link>
                </div>
                <div className={styles.categories__card}>
                  <Link href="/" className={styles.categories__link}>
                    <Image
                      className={styles.categories__image}
                      src="/images/real_estate_section/img8.jpg"
                      width={204}
                      height={140}
                      alt="category image"
                    />
                    <h3 className={styles.categories__title}>Дуплекс</h3>
                  </Link>
                </div>
                <div className={styles.categories__card}>
                  <Link href="/" className={styles.categories__link}>
                    <Image
                      className={styles.categories__image}
                      src="/images/real_estate_section/img9.jpg"
                      width={204}
                      height={140}
                      alt="category image"
                    />
                    <h3 className={styles.categories__title}>Виллы</h3>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
