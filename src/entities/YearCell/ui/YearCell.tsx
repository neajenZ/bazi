import styles from './YearCell.module.css';

export const YearCell = () => {
  return (
    <div className={styles.body}>
      <span>2031</span>
      <div>
        <span className={styles.blueChar}>癸</span>未
      </div>
    </div>
  );
};
