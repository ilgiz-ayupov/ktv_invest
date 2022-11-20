import DiscountHeader from "./DiscountHeader";
import DiscountContent from "./DiscountContent";
import styles from "../../styles/components/DiscountSection/DiscountSection.module.scss";

export default function DiscountSection() {
  return (
    <section className={styles.discount}>
      <DiscountHeader />
      <DiscountContent />
    </section>
  );
}
