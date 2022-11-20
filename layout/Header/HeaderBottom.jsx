import { Row, Col } from "antd";
import styles from "../../styles/layout/Header/HeaderBottom.module.scss";
import Container from "../Container";
import Logo from "../Logo";
import HeaderMenu from "./HeaderMenu";
import HeaderActions from "./HeaderActions";

export default function HeaderBottom() {
  return (
    <div className={styles.header__bottom}>
      <Container>
        <Row
          align={"middle"}
          justify={"space-between"}
          wrap={false}
          gutter={[20]}
        >
          <Col span={4}>
            <Logo />
          </Col>
          <Col span={15}>
            <HeaderMenu />
          </Col>
          <Col span={5}>
            <HeaderActions />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
