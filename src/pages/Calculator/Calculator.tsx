import { BaziCalculator } from '@widjets/BaziCalendar';
import styles from '@pages/Calendar/Calendar.module.css';

const CalculatorPage = () => {
  return (
    <div className={styles.background}>
      <div className={styles.window}>
        <BaziCalculator />
      </div>
    </div>
  );
};

export default CalculatorPage;
