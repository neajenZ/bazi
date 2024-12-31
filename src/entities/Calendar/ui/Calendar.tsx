import { Table } from '@entities/Calendar/ui/DataGrid.tsx';
import { Header } from '@entities/Calendar/ui/Header.tsx';
import styles from './Calendar.module.css';

export const Calendar = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Table />
    </div>
  );
};
