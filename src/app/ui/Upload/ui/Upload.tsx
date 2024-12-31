import styles from './Upload.module.css';
import { ChangeEvent, ReactElement, ReactNode } from 'react';
import { AddPicture } from '@icons/AddPicture.tsx';

interface IProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  as: ReactNode | ReactElement;
}

export const Upload = ({ onChange, as }: IProps) => {
  return (
    <>
      <label htmlFor={'file_input'} className={styles.body}>
        <div className={styles.loadImageBody}>
          <input id={'file_input'} onChange={onChange} type="file" />
          <label className={styles.withIcon} htmlFor={'file_input'}>
            <AddPicture />
            Add a photo
          </label>
        </div>
      </label>
    </>
  );
};
