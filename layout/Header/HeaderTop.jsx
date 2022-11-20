import { Row, Col } from "antd";

import Container from "../Container";
import MainSocials from "../../components/MainSocials";
import Contacts from "../../components/Contacts";
import DropdownLanguage from "../../components/DropdownLanguage";
import Currencies from "../../components/Currencies";
import Auth from "../../components/Auth";

import styles from "../../styles/layout/Header/HeaderTop.module.scss";

export default function HeaderTop() {
  return (
    <div className={styles.header__top}>
      <Container>
        <Row align={"middle"} justify={"space-between"}>
          <Col>
            <MainSocials />
          </Col>

          <Col>
            <Contacts />
          </Col>

          <Col>
            <DropdownLanguage />
          </Col>

          <Col>
            <Currencies />
          </Col>

          <Col>
            <Auth />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
