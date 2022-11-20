import StarIcon from "../icons/Star";
import ScalesIcon from "../icons/Scales";
import View3DIcon from "../icons/View3D";
import PlayIcon from "../icons/Play";

import { Row, Col, Button, Tooltip } from "antd";
import Image from "next/image";

import styles from "../styles/components/ProductCard.module.scss";

export default function ProductCard({
  id,
  status,
  title,
  type,
  image,
  price,
  location,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <Image
          className={styles.top__img}
          src={image}
          alt={title}
          width={289}
          height={163}
        />
        <div className={styles.top__type}>{type}</div>
        <div className={styles.actions}>
          <div className={styles.actions__item}>
            <Tooltip title="Избранное">
              <Button className={styles.top__btn}>
                <StarIcon />
              </Button>
            </Tooltip>
          </div>
          <div className={styles.actions__item}>
            <Tooltip title="Сравнить">
              <Button className={styles.top__btn}>
                <ScalesIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className={styles.views}>
          <div className={styles.views__item}>
            <Tooltip title="3D Просмотр">
              <Button className={styles.top__btn}>
                <View3DIcon />
              </Button>
            </Tooltip>
          </div>
          <div className={styles.views__item}>
            <Tooltip title="Просмотр">
              <Button className={styles.top__btn}>
                <PlayIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.categories__item} data-color={"red"}>
            <span className={styles.categories__text}>Гражданство</span>
          </div>
          <div className={styles.categories__item} data-color={"green"}>
            <span className={styles.categories__text}>Скидка 15%</span>
          </div>
        </div>
      </div>
      <div className={styles.card__content}>
        <h2 className={styles.card__title}>{title}</h2>
        <Row className={styles.payment} align={"middle"}>
          <Col span={12}>
            <p className={styles.payment__price}>{price}</p>
          </Col>
          <Col span={12}>
            <p className={styles.payment__condition}>Ипотека: 11 мес.</p>
          </Col>
        </Row>
        <Row
          className={styles.characteristics}
          align={"middle"}
          justify={"space-between"}
        >
          <Col flex={1}>
            <p className={styles.characteristics__item}>
              <Image
                className={styles.characteristics__icon}
                src="/images/offers_section/icon1.svg"
                width={16}
                height={16}
                alt="icon"
              />
              <span className={styles.characteristics__text}>3+1</span>
            </p>
            <p className={styles.characteristics__item}>
              <Image
                className={styles.characteristics__icon}
                src="/images/offers_section/icon2.svg"
                width={16}
                height={16}
                alt="icon"
              />
              <span className={styles.characteristics__text}>от 105 м2</span>
            </p>
          </Col>
          <Col flex={1}>
            <p className={styles.characteristics__item}>
              <Image
                className={styles.characteristics__icon}
                src="/images/offers_section/icon3.svg"
                width={16}
                height={16}
                alt="icon"
              />
              <span className={styles.characteristics__text}>3</span>
            </p>
            <p className={styles.characteristics__item}>
              <Image
                className={styles.characteristics__icon}
                src="/images/offers_section/icon4.svg"
                width={16}
                height={16}
                alt="icon"
              />
              <span className={styles.characteristics__text}>от 2</span>
            </p>
          </Col>
          <Col flex={1}>
            <p className={styles.characteristics__item}>
              <Image
                className={styles.characteristics__icon}
                src="/images/offers_section/icon5.svg"
                width={16}
                height={16}
                alt="icon"
              />
              <span className={styles.characteristics__text}>1</span>
            </p>
            <p className={styles.characteristics__item}>
              <Image
                className={styles.characteristics__icon}
                src="/images/offers_section/icon6.svg"
                width={16}
                height={16}
                alt="icon"
              />
              <span className={styles.characteristics__text}>от 600 м2</span>
            </p>
          </Col>
        </Row>
        <Row
          className={styles.location}
          align={"middle"}
          justify={"space-between"}
        >
          <Image
            className={styles.location__icon}
            src="/images/offers_section/location.svg"
            width={11}
            height={13}
            alt="location icon"
          />
          <span className={styles.location__text}>
            {location}
          </span>
        </Row>
        <Row align={"middle"} justify={"space-between"}>
          <Col span={12}>
            <button className={styles.card__status} type="button">
              {status}
            </button>
          </Col>
          <Col span={12}>
            <span className={styles.card__id}>ID: {id}</span>
          </Col>
        </Row>
      </div>
    </div>
  );
}
