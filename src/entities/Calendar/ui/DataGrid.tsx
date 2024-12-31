import styles from './Calendar.module.css';

export const Table = () => {
  // Данные из изображения
  const rows = [
    { age: 8, type: 'Young', values: ['2031', '2031', '2031', '2031'] },
    { age: 7, type: 'Young', values: ['2031', '2031', '2031', '2031'] },
    { age: 6, type: 'Young', values: ['2031', '2031', '2031', '2031'] },
    { age: 5, type: 'Young', values: ['2031', '2031', '2031', '2031'] },
    { age: 4, type: 'Young', values: ['2031', '2031', '2031', '2031'] },
    { age: 3, type: 'Nurture', values: ['2031', '2031', '2031', '2031'] },
    { age: 2, type: 'Nurture', values: ['2031', '2031', '2031', '2031'] },
    { age: 1, type: 'Nurture', values: ['2031', '2031', '2031', '2031'] },
  ];

  return (
    <div className={styles.table}>
      {rows.map((row, index) => (
        <div key={index} className={styles.row}>
          <div className={styles.age}>{row.age}</div>
          <div className={styles.type}>{row.type}</div>
          {row.values.map((value, idx) => (
            <div key={idx} className={styles.value}>
              {value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
