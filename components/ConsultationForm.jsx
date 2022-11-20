import Container from "../layout/Container";
import { Col, Input, Row, Button } from "antd";
import Image from "next/image";
import styles from "../styles/components/ConsultationForm.module.scss";

export default function ConsultationForm() {
  return (
    <Container>
      <div className={styles.block}>
        <h3 className={styles.block__title}>
          Нужна помощь? Поможет косультант
        </h3>
        <form className={styles.form}>
          <Row align={"bottom"} gutter={[10]}>
            <Col span={5}>
              <label className={styles.form__label}>Имя</label>
              <Input
                className={styles.form__input}
                placeholder="Тимур Уваров"
              />
            </Col>
            <Col span={5}>
              <label className={styles.form__label}>Телефон</label>
              <Input className={styles.form__input} placeholder="+92 1234567" />
            </Col>
            <Col span={5}>
              <label className={styles.form__label}>Email</label>
              <Input
                className={styles.form__input}
                placeholder="client@client.ru"
              />
            </Col>
            <Col span={4}>
              <Button className={styles.form__btn}>
                Заказать звонок
              </Button>
            </Col>
          </Row>
        </form>
        <Image
          className={styles.block__image}
          src="/images/consultation_form/women.png"
          alt="women"
          width={138}
          height={240}
        />
      </div>
    </Container>
  );
}
