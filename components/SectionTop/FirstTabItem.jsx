import { Row, Col, Select, Input, Button, Tooltip } from "antd";
import Arrow from "../../icons/Arrow";
import SearchIcon from "../../icons/Search";

import styles from "../../styles/components/SectionTop/TabItem.module.scss";

export default function FirstTabItem() {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => e.preventDefault}
      method="GET"
    >
      <Row align={"middle"} gutter={[10]} justify={"space-between"}>
        <Col span={5}>
          <label className={styles.form__label} htmlFor="type">
            Тип
          </label>
          <Select
            id="type"
            className={styles.form__select}
            placeholder="Квартиры"
          />
        </Col>
        <Col span={5}>
          <label className={styles.form__label}>Город</label>
          <Select className={styles.form__select} placeholder="Все" />
        </Col>
        <Col span={5}>
          <label className={styles.form__label}>Район</label>
          <Select className={styles.form__select} placeholder="Все" />
        </Col>
        <Col span={4}>
          <label className={styles.form__label} htmlFor="price">
            Цена
          </label>
          <Input placeholder="1000" />
        </Col>
        <Col span={2}>
          <label className={styles.form__label}>Комнаты</label>
          <Select className={styles.form__select} placeholder="1" />
        </Col>
        <Col span={2}>
          <label className={styles.form__label}>ID</label>
          <Input placeholder="11111" />
        </Col>
        <Col span={1}>
          <Tooltip title="Поиск">
            <Button id="searchBtn" icon={<SearchIcon />} />
          </Tooltip>
        </Col>
      </Row>
    </form>
  );
}
