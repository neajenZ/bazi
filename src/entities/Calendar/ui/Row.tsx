import styles from './Calendar.module.css';

interface RowProps {
  type: string;
  value: string;
}

export const Row = ({ type, value }: RowProps) => {
  return (
    <div className={styles.row}>
      <div>{type}</div>
      <div>{value}</div>
    </div>
  );
};
