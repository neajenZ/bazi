import styles from './ClientWindow.module.css';
import { Edit } from '@icons/Edit.tsx';
import { Delete } from '@icons/Delete.tsx';
import { Dispatch, SetStateAction } from 'react';
import { Button } from '@ui/Button/ui/Button';

interface IProps {
  activeTab: 'bazi' | 'maps' | 'days';
  onChangeTab: Dispatch<SetStateAction<'bazi' | 'maps' | 'days'>>;
}

export const ClientWindow = ({ activeTab, onChangeTab }: IProps) => {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.mainData}>
          <div className={styles.header}>
            <Edit />
            <span>Larry Machigo</span>
            <Delete />
          </div>
          <div className={styles.properties}>
            <div className={styles.property}>
              <span>Name</span>
              <div>Maghzym</div>
            </div>
            <div className={styles.property}>
              <span>Gender</span>
              <div>Male</div>
            </div>
            <div className={styles.property}>
              <span>Date of birth</span>
              <div>25.04.2002</div>
            </div>
            <div className={styles.property}>
              <span>Country</span>
              <div>Kazakh Eli</div>
            </div>
            <div className={styles.property}>
              <span>Email</span>
              <div>Maghzym.aiash@gmail.com</div>
            </div>
            <div className={styles.property}>
              <span>Phone</span>
              <div>Maghzym</div>
            </div>
            <div className={styles.property}>
              <span>Address</span>
              <div>Kazakhstan, Astana, Mangilik el 2123 </div>
            </div>
            <div className={styles.property}>
              <span>Remarks</span>
              <div>Maghzym</div>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => onChangeTab('days')} className={styles.btn}>
            View Days / Maps
          </button>
          {activeTab === 'bazi' ? (
            <Button style={{ width: '50%' }} text="Attach to client" />
          ) : (
            <button className={styles.btn} onClick={() => onChangeTab('bazi')}>
              View BaZi
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
