import { BaziMap } from '@features/BaziMap';
import styles from './BaziCalculator.module.css';
import { Edit } from '@icons/Edit';
import { Select } from '@ui/Select/ui/Select';
import { Input } from '@ui/Input';
import { Textarea } from '@ui/Textarea';
import { Button } from '@ui/Button/ui/Button';
import { Share } from '@icons/Share';
import { Save } from '@icons/Save';
import { MOCK_CLIENT_BAZI, MOCK_CLIENT_BAZI_OTHERS, MOCK_CLIENT_SMALL_BAZI } from '../mocks';
import { YearCell } from '@entities/YearCell';
import { Bazi } from '@entities/Bazi';
import { LeftBazi } from '@entities/LeftBazi/ui/LeftBazi.tsx';
import { BottomBazi } from '@features/BottomBazi/ui/BottomBazi.tsx';
import { YearCells } from '@features/YearCells';

const o = Array.from(Array(90), (_, i) => i + 1);

export const BaziCalculator = () => {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <LeftBazi data={MOCK_CLIENT_BAZI} />
        <div className={styles.userInfo}>
          <div className={styles.userInfoHeader}>
            <h4>Personal info: </h4>
            <Edit />
          </div>
          <div className={styles.userForm}>
            <Select
              label="Gender"
              noLabel
              options={[{ value: 'male', label: 'Мужчина' }]}
              style={{ color: '#000' }}
            />

            <div className={styles.formDate}>
              <Input label="Hour" labelInto placeholder="Hour" className={styles.input} />
              <Input label="Day" labelInto placeholder="Day" className={styles.input} />
              <Input label="Month" labelInto placeholder="Month" className={styles.input} />
              <Input label="Year" labelInto placeholder="Year" className={styles.input} />
            </div>
            <Button text={'Save'} />
            <div className={styles.share}>
              <span>Share: </span>
              <Share />
              <Save />
            </div>
          </div>
        </div>
        <div style={{ gridColumn: 'span 2' }}>
          <BottomBazi subData={MOCK_CLIENT_SMALL_BAZI} data={MOCK_CLIENT_BAZI_OTHERS} />
          <YearCells data={o} />
        </div>
      </div>
    </div>
  );
};
