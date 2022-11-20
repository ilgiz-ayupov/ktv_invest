import styles from "../../styles/components/SectionTop/TabButton.module.scss";

export default function TabButton({ children }) {
  return <button className={styles.tab_btn}>{children}</button>;
}
