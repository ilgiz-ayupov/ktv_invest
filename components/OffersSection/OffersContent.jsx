import Container from "../../layout/Container";
import { Row, Col } from "antd";
import ProductCard from "../ProductCard";

const products = [
  {
    id: "231231645",
    status: "Готов",
    title: "Вилла Евро Ремонт",
    image: "/images/offers_section/img1.jpg",
    type: "Вилла",
    price: "от $125 000",
    location: "Турция / Стамбул / Бююкчекмедже / Султанхамет",
  },
  {
    id: "123",
    status: "Сдача 07.2024",
    title: "Отель 5 звёзд",
    image: "/images/offers_section/img2.jpg",
    type: "Отель",
    price: "от $125 000",
    location: "Турция / Стамбул / Бююкчекмедже / Султанхамет",
  },
  {
    id: "456",
    status: "Сдача 07.2024",
    title: "3+1 Квартира в Stambul city",
    image: "/images/offers_section/img3.jpg",
    type: "Квартира",
    price: "от $125 000",
    location: "Турция / Стамбул / Бююкчекмедже / Султанхамет",
  },
  {
    id: "789",
    status: "Сдача 07.2024",
    title: "Магазин в Antalia Mall",
    image: "/images/offers_section/img4.jpg",
    type: "Магазин",
    price: "от $125 000",
    location: "Турция / Стамбул / Бююкчекмедже / Султанхамет",
  },
];

export default function OffersContent() {
  return (
    <div className="content">
      <Container>
        <Row justify={"center"} gutter={[15]}>
          {products.map((product) => (
            <Col key={product.id} span={6}>
              <ProductCard {...product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
