import styles from './BottomBazi.module.css'
import { Bazi, IBaziItem } from '@entities/Bazi';
import { MOCK_CLIENT_SMALL_BAZI } from '@widjets/BaziCalendar/mocks.ts';
import { useMemo } from 'react';

interface IProps {
  data: IBaziItem[],
  subData: IBaziItem[]
}

export const BottomBazi = ({data, subData}: IProps) => {

  const subDataMemo = useMemo(() => {
    if (subData) {
      if (window.innerWidth <= 480) {
        return subData.slice(0, 4)
      }
      return subData
    }
  }, [subData])

  const dataMemo = useMemo(() => {
    if (data) {
      if (window.innerWidth <= 480) {
        return data.slice(0, 8)
      }
      return data
    }
  }, [data])

  return (
    <>
      <div className={styles.wrapper}>
        {
          dataMemo?.map((i) => (
            <Bazi
              data={i}
              className={styles.bazi}
              classFooter={styles.baziSmallFooter}
              itemVariant="large"
            />
          ))
        }
      </div>
      <div className={styles.secondRowBazi}>
        {subDataMemo?.map((i) => (
          <Bazi
            data={i}
            className={styles.bazi}
            classFooter={styles.baziSmallFooter}
            itemVariant={'small'}
          />
        ))}
      </div>
    </>

  )
}