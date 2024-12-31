import styles from './YearCells.module.css'
import { Bazi } from '@entities/Bazi';
import { YearCell } from '@entities/YearCell';
import { useMemo } from 'react';

interface IProps {
  data: any[]
}

export const YearCells = ({ data }: IProps) => {

  const dataMemo = useMemo(() => {
    if (data) {
      if (window.innerWidth <= 480) {
        return data.slice(0, 48)
      }
      return data
    }
  }, [data])

  return (
    <div className={styles.wrapper}>
      {
        dataMemo?.map((i) => (
          <YearCell key={i} />
        ))
      }
    </div>
  )
}