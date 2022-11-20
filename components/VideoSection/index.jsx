import VideoHeader from "./VideoHeader";
import VideoContent from "./VideoContent";
import styles from "../../styles/components/VideoSection/VideoSection.module.scss";

export default function BlogSection() {
  return (
    <section className={styles.video}>
      <VideoHeader />
      <VideoContent />
    </section>
  );
}
