import SeaViewHeader from "./SeaViewHeader";
import SeaViewContent from "./SeaViewContent";
import styles from "../../styles/components/SeaViewSection/SeaViewSection.module.scss";

export default function DiscountSection() {
  return (
    <section className={styles.sea_view}>
      <SeaViewHeader />
      <SeaViewContent />
    </section>
  );
}
