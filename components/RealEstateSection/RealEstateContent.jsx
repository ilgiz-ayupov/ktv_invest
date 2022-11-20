import Container from "../../layout/Container";
import { Row, Col } from "antd";
import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/components/RealEstateSection/RealEstateContent.module.scss";

export default function RealEstateContent() {
  return (
    <Container>
      <article className={styles.article}>
        <Row>
          <Col span={12}>
            <div className={styles.article__content}>
              <h3 className={styles.article__title}>
                Гражданство за инвестиции или как получить гражданство.
              </h3>
              <Link className={styles.article__link} href="/">
                Читать далее
              </Link>
            </div>
          </Col>
          <Col span={12}>
            <Image
              className={styles.article__image}
              src="/images/real_estate_section/article_img.jpg"
              alt="real estate image"
              width={636}
              height={168}
            />
          </Col>
        </Row>
      </article>
    </Container>
  );
}
