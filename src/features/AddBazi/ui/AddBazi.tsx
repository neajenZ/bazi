import styles from './AddBazi.module.css';
import { Button } from '@ui/Button/ui/Button.tsx';
import { Share } from '@icons/Share.tsx';
import { Save } from '@icons/Save.tsx';
import { useGlobalStore } from '@providers/StoreProvider/ui/StoreProvider.tsx';
import { Link } from 'react-router-dom';

interface IProps {
  onAdd: (val: 'choice') => void;
}

export const AddBazi = ({ onAdd }: IProps) => {
  const { isAuth } = useGlobalStore();

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainData}>
        <header>
          <img src="/add-bazi-head.png" alt="" />
          <div className={styles.center}>
            <h4>2024</h4>
            <p>Lunar moon cycle</p>
            <p>12th October</p>
          </div>
          <div className={styles.right}>
            <p>Start of winter 12th 22:13</p>
            <p>Start of winter 12th 22:13</p>
          </div>
        </header>

        <div className={styles.body}>
          <div className={styles.item}>
            <div className={styles.head}>
              <span>非</span>
              <span>Hour</span>
            </div>
            <img src="/image%203%20(2).png" alt="" />
          </div>
          <div className={styles.item}>
            <div className={styles.head}>
              <span>非</span>
              <span>Hour</span>
            </div>
            <img src="/image%203%20(2).png" alt="" />
          </div>
          <div className={styles.item}>
            <div className={styles.head}>
              <span>非</span>
              <span>Hour</span>
            </div>
            <img src="/image%203%20(2).png" alt="" />
          </div>
          <div className={styles.item}>
            <div className={styles.head}>
              <span>非</span>
              <span>Hour</span>
            </div>
            <img src="/image%203%20(2).png" alt="" />
          </div>
          <div className={styles.item}>
            <div className={styles.head}>
              <span>非</span>
              <span>Hour</span>
            </div>
            <img src="/image%203%20(2).png" alt="" />
          </div>
          <div className={styles.item}>
            <div className={styles.head}>
              <span>非</span>
              <span>Hour</span>
            </div>
            <img src="/image%203%20(2).png" alt="" />
          </div>
          <div className={styles.item}>
            <div className={styles.head}>
              <span>非</span>
              <span>Hour</span>
            </div>
            <img src="/image%203%20(2).png" alt="" />
          </div>
          <div className={styles.item}>
            <div className={styles.head}>
              <span>非</span>
              <span>Hour</span>
            </div>
            <img src="/image%203%20(2).png" alt="" />
          </div>
        </div>
      </div>

      {isAuth ? (
        <>
          <div className={styles.buttons}>
            <Button text={'Add BaZi'} onClick={() => onAdd('choice')} />
            <button className={styles.saveBtn}>Save</button>
          </div>
        </>
      ) : (
        <div className={styles.noAuthorized}>
          <p>Login or register to have possible work with clients</p>
          <div className={styles.buttons}>
            <Link to={'/auth?type=login'}>Auth</Link>
            <div className={styles.breakLine}></div>
            <Link to={'/auth?type=reg'}>Register</Link>
          </div>
        </div>
      )}
      <div className={styles.share}>
        <span>Share:</span>
        <Share />
        <Save />
      </div>
    </div>
  );
};
