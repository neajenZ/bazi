import { Delete } from '@icons/Delete';
import styles from './ClientMapNote.module.css';

interface IProps {
  title: string;
  data: any[];
}

// Перенести во features
export const ClientMapNote = ({ title, data }: IProps) => {
  return (
    <div className={styles.body}>
      <h4>{title}</h4>

      <div className={styles.list}>
        {data.map((i) => (
          <div key={i.title} className={styles.item}>
            <div>
              <h3 className={styles.itemTitle}>{i.title}</h3>
              <p className={styles.itemDesc}>{i.description}</p>
            </div>
            <Delete />
          </div>
        ))}
      </div>
    </div>
  );
};
