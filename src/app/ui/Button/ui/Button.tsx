import { ComponentProps, ReactElement, ReactNode } from 'react';
import styles from './Button.module.css';

interface IProps extends ComponentProps<'button'> {
  text: string;
  icon?: ReactElement | ReactNode;
}

export const Button = ({ text, icon, className = '', ...props }: IProps) => (
  <button className={`${styles.btn} ${className} ${icon ? styles.withIcon : ''}`} {...props}>
    {icon && icon}
    {text}
  </button>
);
