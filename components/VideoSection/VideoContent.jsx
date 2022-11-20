import Container from "../../layout/Container";
import { Row, Col } from "antd";
import VideoCard from "./VideoCard";

const videos = [
  {
    id: "1",
    title: "Гражданство в Турции",
    image: "/images/video_section/img1.jpg",
  },
  {
    id: "2",
    title: "Гражданство в Турции",
    image: "/images/video_section/img2.jpg",
  },
  {
    id: "3",
    title: "Гражданство в Турции",
    image: "/images/video_section/img3.jpg",
  },
  {
    id: "4",
    title: "Гражданство в Турции",
    image: "/images/video_section/img4.jpg",
  },
];

export default function BlogContent() {
  return (
    <div className="content">
      <Container>
        <Row justify={"center"} gutter={[15]}>
          {videos.map((video) => (
            <Col key={video.id} span={6}>
              <VideoCard {...video} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
