import styles from './LeftBazi.module.css'
import { Bazi, IBaziItem } from '@entities/Bazi';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  data: IBaziItem[]
}

export const LeftBazi = ({ data, className, ...props }: IProps) => {
  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      {data.map((i) => (
        <Bazi itemVariant={'large'} key={i.type} data={i} />
      ))}
    </div>
  );
}