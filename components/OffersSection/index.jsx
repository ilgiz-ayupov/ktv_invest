import OffersHeader from "./OffersHeader";
import OffersContent from "./OffersContent";

import styles from "../../styles/components/OffersSection/OffersSection.module.scss";

export default function OffersSection() {
  return (
    <section className={styles.offers}>
      <OffersHeader />
      <OffersContent />
    </section>
  );
}
