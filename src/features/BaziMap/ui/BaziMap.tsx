import { Bazi, IBaziItem } from '@entities/Bazi';
import styles from './BaziMap.module.css';

interface IProps {
  data: IBaziItem[];
  itemClass?: string;
  itemVariant?: 'small' | 'large';
}

export const BaziMap = ({ data, itemVariant = 'large', itemClass = '' }: IProps) => {
  return (
    <>
      {data.map((i) => (
        <Bazi data={i} className={itemClass} itemVariant={itemVariant} />
      ))}
    </>
  );
};
