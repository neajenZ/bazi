import { Delete } from '@icons/Delete';
import styles from './CompassData.module.css';
import { Button } from '@ui/Button/ui/Button';
import { AddCompass } from '@icons/AddCompass';
import { AddNote } from '@icons/AddNote';
import { useCompassPageStore } from '@providers/CompassPageProvider/ui/StoreProvider.tsx';
import { ICompass } from '@providers/CompassPageProvider/model.ts';
import { observer } from 'mobx-react-lite';

export const CompassData = observer(() => {
  const { addCompassOnImage, mainImageRef } = useCompassPageStore();

  const handleAddCompass = () => {
    if (!mainImageRef.current) return;

    const relativeImg = mainImageRef.current.querySelector('img#relative-img')
    if (!relativeImg) return;

    const initialPositionX = relativeImg.clientWidth / 2;
    const initialPositionY = relativeImg.clientHeight / 2;

    const newCompass: ICompass = {
      id: Date.now().toString(),
      rotation: 0,
      path: '/compass.png',
      x: initialPositionX,
      y: initialPositionY,
    };

    addCompassOnImage(newCompass);
  };

  return (
    <>
      <div className={styles.dataItem}>
        <h4>Compass</h4>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <div className={styles.left}>
              <p>12:38</p>
              <p>1 compass</p>
            </div>
            <Delete />
          </div>
          <div className={styles.item}>
            <div className={styles.left}>
              <p>12:38</p>
              <p>2 compass</p>
            </div>
            <Delete />
          </div>
        </div>
      </div>
      <div className={styles.dataItem}>
        <h4>Note</h4>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <div className={styles.left}>
              <p>12:38</p>
              <p>1 compass</p>
            </div>
            <Delete />
          </div>
          <div className={styles.item}>
            <div className={styles.left}>
              <p>12:38</p>
              <p>1 compass</p>
            </div>
            <Delete />
          </div>
        </div>
      </div>

      <div className={styles.buttons}>
        <Button text="Add a compass" onClick={handleAddCompass} icon={<AddCompass />} />
        <Button text="Add a note" icon={<AddNote />} />
      </div>

      <div className={styles.saveBtn}>
        <Button text="Save" className={styles.saveBtn} />
      </div>
    </>
  );
});
