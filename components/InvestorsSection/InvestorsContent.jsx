import Container from "../../layout/Container";
import { Row, Col } from "antd";

import Image from "next/image";

import styles from "../../styles/components/InvestorsSection/InvestorsContent.module.scss";

export default function InvestorsContent() {
  const cards = [
    {
      key: "1",
      title: "Алания",
      info: "1234 объектов",
      img: "/images/investors_section/img1.jpg",
    },
    {
      key: "2",
      title: "Анталия",
      info: "1234 объектов",
      img: "/images/investors_section/img2.jpg",
    },
    {
      key: "3",
      title: "Бодрум",
      info: "1234 объектов",
      img: "/images/investors_section/img3.jpg",
    },
    {
      key: "4",
      title: "Бурса",
      info: "1234 объектов",
      img: "/images/investors_section/img4.jpg",
    },
    {
      key: "5",
      title: "Измир",
      info: "1234 объектов",
      img: "/images/investors_section/img5.jpg",
    },
    {
      key: "6",
      title: "Кемер",
      info: "1234 объектов",
      img: "/images/investors_section/img6.jpg",
    },
    {
      key: "7",
      title: "Мармарис",
      info: "1234 объектов",
      img: "/images/investors_section/img7.jpg",
    },
    {
      key: "8",
      title: "Мерсин",
      info: "1234 объектов",
      img: "/images/investors_section/img8.jpg",
    },
    {
      key: "9",
      title: "Станбул",
      info: "1234 объектов",
      img: "/images/investors_section/img9.jpg",
    },
    {
      key: "10",
      title: "Сакарья",
      info: "1234 объектов",
      img: "/images/investors_section/img10.jpg",
    },
    {
      key: "11",
      title: "Фетхие",
      info: "1234 объектов",
      img: "/images/investors_section/img11.jpg",
    },
  ];

  return (
    <div className={styles.content}>
      <Container>
        <Row justify={"center"} align={"middle"} gutter={[20, 20]}>
          {cards.map((card) => (
            <Col key={card.key} span={6}>
              <div className={styles.card}>
                <Image
                  className={styles.card__img}
                  src={card.img}
                  alt={card.title}
                  width={306}
                  height={160}
                />
                <div className={styles.card__content}>
                  <h3 className={styles.card__title}>{card.title}</h3>
                  <p className={styles.card__info}>{card.info}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
