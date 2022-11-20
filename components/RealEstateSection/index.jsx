import RealEstateHeader from "./RealEstateHeader";
import RealEstateContent from "./RealEstateContent";

import styles from "../../styles/components/RealEstateSection/RealEstateSection.module.scss";

export default function RealEstateSection() {
  return (
    <section className={styles.real_estate}>
      <RealEstateHeader />
      <RealEstateContent />
    </section>
  );
}
