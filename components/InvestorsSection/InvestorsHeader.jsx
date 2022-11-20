import Container from "../../layout/Container";
import Divider from "../Divider";
import { Col, Row } from "antd";

import Link from "next/link";
import styles from "../../styles/components/InvestorsSection/InvestorsHeader.module.scss";
import { StyleRegistry } from "styled-jsx";

export default function InvestorsHeader() {
  return (
    <header className={styles.header}>
      <Container>
        <Row className={styles.header__top} wrap={false} align={"middle"}>
          <h2 className={styles.header__title}>Инвесторам</h2>
          <Divider />
        </Row>
        <Row align={"top"} justify={"space-between"}>
          <Col span={10}>
            <p className={styles.header__desc}>
              Мы предлагаем проверенные стратегии инвестирования в зарубежную
              недвижимость. Стратегию подбираем под бюджет, уровень риска и
              уровень доходности
            </p>
          </Col>
          <Col span={12}>
            <Row align={"top"} gutter={[20, 20]}>
              <Col span={12}>
                <article className={styles.article}>
                  <Link className={styles.article__link} href="/">
                    <div className={styles.article__top}>
                      <svg
                        width="104"
                        height="4"
                        viewBox="0 0 104 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="60"
                          height="4"
                          rx="2"
                          transform="matrix(-1 0 0 1 104 0)"
                          fill="#E0BB7F"
                        />
                        <rect
                          width="20"
                          height="4"
                          rx="2"
                          transform="matrix(-1 0 0 1 34 0)"
                          fill="#E0BB7F"
                        />
                        <rect
                          width="4"
                          height="4"
                          rx="2"
                          transform="matrix(-1 0 0 1 4 0)"
                          fill="#E0BB7F"
                        />
                      </svg>
                    </div>
                    <h3 className={styles.article__title}>ВНЖ за инвестицию</h3>
                  </Link>
                </article>
              </Col>
              <Col span={12}>
                <article className={styles.article}>
                  <Link className={styles.article__link} href="/">
                    <div className={styles.article__top}>
                      <svg
                        className={styles.article__top}
                        width="104"
                        height="4"
                        viewBox="0 0 104 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="60"
                          height="4"
                          rx="2"
                          transform="matrix(-1 0 0 1 104 0)"
                          fill="#E0BB7F"
                        />
                        <rect
                          width="20"
                          height="4"
                          rx="2"
                          transform="matrix(-1 0 0 1 34 0)"
                          fill="#E0BB7F"
                        />
                        <rect
                          width="4"
                          height="4"
                          rx="2"
                          transform="matrix(-1 0 0 1 4 0)"
                          fill="#E0BB7F"
                        />
                      </svg>
                    </div>
                    <h3 className={styles.article__title}>
                      Гарантированное гражданство
                    </h3>
                  </Link>
                </article>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
