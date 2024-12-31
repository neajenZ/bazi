import { BaziMap } from '@features/BaziMap';
import styles from './ClientBazi.module.css';
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


export const ClientBazi = () => {
  const o = Array.from(Array(window.innerWidth <= 480 ? 48 : 90), (_, i) => i + 1);

  const mock1 = (arr: any[]) => {
    if (window.innerWidth <= 480) return arr.slice(0, 8)
    return arr
  }

  const mock2 = (arr: any[]) => {
    if (window.innerWidth <= 480) return arr.slice(0, 4)
    return arr
  }


  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.leftBazi}>
          <BaziMap data={MOCK_CLIENT_BAZI} />
        </div>
        {/*<div className={styles.userInfo}>*/}
        {/*  <div className={styles.userInfoHeader}>*/}
        {/*    <h4>Personal info: </h4>*/}
        {/*    <Edit />*/}
        {/*  </div>*/}
        {/*  <div className={styles.userForm}>*/}
        {/*    <Select*/}
        {/*      label="Gender"*/}
        {/*      noLabel*/}
        {/*      options={[{ value: 'male', label: 'Мужчина' }]}*/}
        {/*      style={{ color: '#000' }}*/}
        {/*    />*/}
        {/*    <div className={styles.formDate}>*/}
        {/*      <Input label="Hour" labelInto placeholder="Hour" className={styles.input} />*/}
        {/*      <Input label="Day" labelInto placeholder="Day" className={styles.input} />*/}
        {/*      <Input label="Month" labelInto placeholder="Month" className={styles.input} />*/}
        {/*      <Input label="Year" labelInto placeholder="Year" className={styles.input} />*/}
        {/*    </div>*/}
        {/*    <Input noLabel label="" placeholder="Name" className={styles.input} />*/}
        {/*    <Textarea label="" noLabel placeholder="Remarks" className={styles.input} />*/}
        {/*    <Button text="Save" />*/}
        {/*    <div className={styles.share}>*/}
        {/*      <span>Share: </span>*/}
        {/*      <Share />*/}
        {/*      <Save />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div style={{ gridColumn: 'span 2' }}>
          <div className={styles.otherBazi}>
            {mock1(MOCK_CLIENT_BAZI_OTHERS).map((i) => (
              <Bazi
                data={i}
                className={styles.bazi}
                classFooter={styles.baziSmallFooter}
                itemVariant="large"
              />
            ))}
            {/* <BaziMap itemClass={styles.bazi} data={MOCK_CLIENT_BAZI_OTHERS} /> */}
          </div>
          <div className={styles.secondRowBazi}>
            {mock2(MOCK_CLIENT_SMALL_BAZI).map((i) => (
              <Bazi
                data={i}
                className={styles.bazi}
                classFooter={styles.baziSmallFooter}
                itemVariant={'small'}
              />
            ))}
            {/* <BaziMap itemVariant="small" itemClass={styles.bazi} data={MOCK_CLIENT_SMALL_BAZI} /> */}
          </div>
          <div className={styles.secondRowBazi}>
            {o.map((i) => (
              <YearCell />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
