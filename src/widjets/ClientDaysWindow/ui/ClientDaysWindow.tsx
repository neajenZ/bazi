import { Edit } from '@icons/Edit';
import styles from './ClientDaysWindow.module.css';
import { Delete } from '@icons/Delete';
import { Share } from '@icons/Share';
import { Save } from '@icons/Save';

export const ClientDaysWindow = () => {
  return (
    <div className={styles.background}>
      <div className={styles.body}>
        <div className={styles.header}>
          <Edit />
          <span>Larry Machigo</span>
          <Delete />
        </div>

        <div className={styles.form}>
          <div className={styles.formHeader}>
            <h4>Name</h4>
            <span>18.09.2024</span>
          </div>

          <div className={styles.formBody}>
            <span className={styles.supTitle}>Remarks</span>
            <p>
              выфввввввв ввв
              вввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввыфыыыыыыыыыыыыыыыыыыыыыыыыыы
            </p>
          </div>
        </div>

        <div className={styles.wholeDate}>
          <div className={styles.left}>
            <div>
              <span className={styles.supTitle}>Time</span>
              <h4>23:25</h4>
            </div>
            <div>
              <span className={styles.supTitle}>Day</span>
              <h4>12</h4>
            </div>
            <div>
              <span className={styles.supTitle}>Month</span>
              <h4>Февраль</h4>
            </div>
          </div>
          <div>
            <span className={styles.supTitle}>Year</span>
            <h4>2026</h4>
          </div>
        </div>
      </div>
      <div className={styles.share}>
        <span>Share:</span>
        <Share />
        <Save />
      </div>
    </div>
  );
};
