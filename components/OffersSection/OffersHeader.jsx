import { Row } from "antd";
import Container from "../../layout/Container";
import Divider from "../Divider";
import Link from "next/link";
import Arrow from "../../icons/Arrow";

import styles from "../../styles/components/OffersSection/OffersHeader.module.scss";

export default function OffersHeader() {
  return (
    <header>
      <Container>
        <Row className={styles.header__top} wrap={false} align={"middle"}>
          <h2 className={styles.header__title}>
            <span>Горячие предложения</span>
          </h2>
          <Divider />
          <Link className={styles.header__more} href="/">
            <Arrow width={12} height={6} />
          </Link>
        </Row>
      </Container>
    </header>
  );
}
