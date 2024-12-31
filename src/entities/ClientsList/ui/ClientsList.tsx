import { Search } from '@icons/Search';
import styles from './ClientsList.module.css';
import { ArrowRight } from '@icons/ArrowRight.tsx';

interface IProps {
  onSelect?: () => void;
}

export const ClientsList = ({ onSelect }: IProps) => {
  return (
    <div className={styles.body} onClick={onSelect}>
      <div className={styles.searchBody}>
        <Search />
        <input placeholder="Search" type="text" />
      </div>

      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.left}>
            <span>20.10.2002</span>
            <h4>Ayash Maghzym</h4>
          </div>
          <div className={styles.right}>
            <ArrowRight />
          </div>
        </div>
      </div>
      <button>Attach to client</button>
    </div>
  );
};
