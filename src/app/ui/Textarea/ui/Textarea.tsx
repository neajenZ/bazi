import { ComponentProps } from 'react';
import styles from './Textarea.module.css';

interface IProps extends ComponentProps<'textarea'> {
  label: string;
  noLabel?: boolean;
  variant?: 'outlined' | 'filled';
}

export const Textarea = ({ label, noLabel = false, variant = 'filled', ...props }: IProps) => {
  return (
    <div className={styles.body}>
      {!noLabel && <label htmlFor="">{label}</label>}
      <textarea placeholder={label || props.placeholder} {...props} />
    </div>
  );
};
