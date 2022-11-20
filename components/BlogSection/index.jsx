import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import styles from "../../styles/components/BlogSection/BlogSection.module.scss";

export default function BlogSection() {
  return (
    <section className={styles.blog}>
      <BlogHeader />
      <BlogContent />
    </section>
  );
}
