import { Row, Col, Button, Input } from "antd";
import Container from "../layout/Container";
import Image from "next/image";

import styles from "../styles/components/FreeConsultationForm.module.scss";

export default function FreeConsultationForm() {
  return (
    <Container>
      <div className={styles.consultation}>
        <Row>
          <Col span={12}>
            <div className={styles.consultation__left}>
              <div className={styles.consultation__header}>
                <h3 className={styles.consultation__title}>
                  бесплатная консультация
                </h3>
                <p className={styles.consultation__desc}>
                  Закажите консультацию у опытных специалистов по недвижимости
                </p>
              </div>
              <div className={styles.person}>
                <h3 className={styles.person__name}>Андрей Китаев</h3>
                <p className={styles.person__desc}>Менеджер-консультант</p>
                <p className={styles.person__langs}>
                  <span>Языки:</span> Русский, Английский, Турецкий{" "}
                </p>
              </div>
              <form className={styles.form}>
                <Row align={"bottom"} gutter={[10, 20]}>
                  <Col span={12}>
                    <label
                      className={styles.form__label}
                      htmlFor="consultation__name"
                    >
                      Имя
                    </label>
                    <Input
                      className={styles.form__input}
                      id="consultation__name"
                      placeholder="Тимур Уваров"
                    />
                  </Col>
                  <Col span={12}>
                    <label
                      className={styles.form__label}
                      htmlFor="consultation__phone"
                    >
                      Телефон
                    </label>
                    <Input
                      className={styles.form__input}
                      id="consultation__phone"
                      placeholder="+92 1234567"
                    />
                  </Col>
                  <Col span={12}>
                    <label
                      className={styles.form__label}
                      htmlFor="consultation__email"
                    >
                      Email
                    </label>
                    <Input
                      className={styles.form__input}
                      id="consultation__email"
                      placeholder="client@client.ru"
                    />
                  </Col>
                  <Col span={12}>
                    <Button className={styles.form__btn}>
                      Заказать звонок
                    </Button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles.consultation__right}>
              <Image
                className={styles.consultation__image}
                src="/images/free_consultation_form/man.jpg"
                alt="man"
                width={660}
                height={468}
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
