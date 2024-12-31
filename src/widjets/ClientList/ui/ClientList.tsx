import { Button } from '@ui/Button/ui/Button';
import styles from './ClientList.module.css';
import { ArrowRight } from '@icons/ArrowRight';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  activeTab: 'bazi' | 'days' | 'maps';
  onChangeTab: Dispatch<SetStateAction<'maps' | 'days' | 'bazi'>>;
}

export const ClientList = ({ activeTab, onChangeTab }: IProps) => {
  return (
    <div className={styles.body}>
      <div className={styles.buttons}>
        <button
          onClick={() => onChangeTab('days')}
          className={`${activeTab === 'days' ? styles.active : ''}`}
        >
          View Days
        </button>
        <button
          onClick={() => onChangeTab('maps')}
          className={`${activeTab === 'maps' ? styles.active : ''}`}
        >
          View Maps
        </button>
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

      <Button text="Attach to client" />
    </div>
  );
};
