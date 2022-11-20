import InvestorsHeader from "./InvestorsHeader";
import InvestorsContent from "./InvestorsContent";

import styles from "../../styles/components/InvestorsSection/InvestorsSection.module.scss";

export default function InvestorsSection() {
  return (
    <section className={styles.investors}>
      <InvestorsHeader />
      <InvestorsContent />
    </section>
  );
}
