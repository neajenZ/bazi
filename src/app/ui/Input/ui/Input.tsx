import { ComponentProps } from 'react';
import styles from './Input.module.css';

interface IProps extends ComponentProps<'input'> {
  label: string;
  noLabel?: boolean;
  labelInto?: boolean;
  variant?: 'outlined' | 'filled';
}

export const Input = ({
  label,
  noLabel = false,
  labelInto = false,
  variant = 'filled',
  className = '',
  ...props
}: IProps) => {
  return (
    <div className={`${styles.body} ${labelInto ? styles.labelInto : ''}`}>
      {variant === 'filled' && !noLabel && <label htmlFor="">{label}</label>}
      <input
        type="text"
        className={`${variant === 'outlined' ? styles.outlined : ''} ${className}`}
        placeholder={label || props.placeholder}
        {...props}
      />
    </div>
  );
};
