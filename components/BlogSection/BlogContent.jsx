import Container from "../../layout/Container";
import { Row, Col } from "antd";
import BlogCard from "./BlogCard";

const articles = [
  {
    id: "1",
    title: "Как получить гражданство Турции?",
  },
  {
    id: "2",
    title: "Как получить гражданство Турции?",
  },
  {
    id: "3",
    title: "Как получить гражданство Турции?",
  },
  {
    id: "4",
    title: "Как получить гражданство Турции?",
  },
];

export default function BlogContent() {
  return (
    <div className="content">
      <Container>
        <Row justify={"center"} gutter={[15]}>
          {articles.map((article) => (
            <Col key={article.id} span={6}>
              <BlogCard {...article} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
