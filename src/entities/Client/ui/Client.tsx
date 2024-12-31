import styles from './Client.module.css';
import { ArrowRight } from '@icons/ArrowRight.tsx';
import { Button } from '@ui/Button/ui/Button.tsx';

interface IProps {
  data: any;
  onBack: () => void;
  onSelect: () => void;
}

export const Client = ({ data, onBack, onSelect }: IProps) => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <ArrowRight onClick={onBack} style={{ cursor: 'pointer' }} />
        <h4>{data?.name}</h4>
      </div>
      <div className={styles.form}>
        <div className={styles.item}>
          <span>Name</span>
          <p>{data?.name}</p>
        </div>
        <div className={styles.item}>
          <span>Gender</span>
          <p>{data?.gender}</p>
        </div>
        <div className={styles.item}>
          <span>Date of birth</span>
          <p>{data?.date_of_birth}</p>
        </div>
        <div className={styles.item}>
          <span>Country</span>
          <p>{data?.country}</p>
        </div>
        <div className={styles.item}>
          <span>Email</span>
          <p>{data?.email}</p>
        </div>
        <div className={styles.item}>
          <span>Phone</span>
          <p>{data?.phone}</p>
        </div>
        <div className={styles.item}>
          <span>Address</span>
          <p>{data?.address}</p>
        </div>
        <div className={styles.item}>
          <span>Remarks</span>
          <p>{data?.remarks}</p>
        </div>
      </div>
      <div className={styles.button}>
        <Button onClick={onSelect} text={'Attach to client'} />
      </div>
    </div>
  );
};
