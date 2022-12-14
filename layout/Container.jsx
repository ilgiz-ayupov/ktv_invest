import styles from "../styles/layout/Container.module.scss";

export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
