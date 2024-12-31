import styles from './Bazi.module.css';
import { IBaziItem } from '@entities/Bazi';

interface IProps {
  data: IBaziItem;
  className?: string;
  classFooter?: string;
  classHeader?: string;
  itemVariant?: 'small' | 'large';
}

export const Bazi = ({
  data,
  classFooter = '',
  classHeader = '',
  className,
  itemVariant,
}: IProps) => {
  return (
    <div className={`${styles.body} ${className} `}>
      {itemVariant === 'large' && (
        <div className={`${styles.header} ${classHeader}`}>
          {data.head.map((i) => (
            <p key={i}>{i}</p>
          ))}
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.mainDataHead}>
          {data.mainData.map((i) => (
            <div className={styles.mainDataItem} key={i[0]}>
              {i.map((v) => (
                <p key={v}>{v}</p>
              ))}
            </div>
          ))}
        </div>
        {itemVariant === 'large' && <img src="/image%203%20(2).png" alt="" />}
      </div>
      <div className={`${styles.footer} ${classFooter}`}>
        <p>{data.type}</p>
      </div>
    </div>
  );
};
