import styles from './Calendar.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.column}>Hour</div>
      <div className={styles.column}>Day</div>
      <div className={styles.column}>Month</div>
      <div className={styles.column}>Year</div>
    </div>
  );
};
