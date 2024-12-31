import { Input } from '../../../app/ui/Input';
import { Select } from '../../../app/ui/Select/ui/Select';
import { Textarea } from '../../../app/ui/Textarea';
import styles from './Feedback.module.css';

export const Feedback = () => {
  return (
    <div className={styles.body}>
      <img src="/form-image.jpg" alt="" />
      <div className={styles.right}>
        <h3>Consultation</h3>
        <div className={styles.form}>
          <Input label="Name" />
          <Input label="Email" />
          <div className={styles.full}>
            <Select
              options={[{ label: 'Пункт 1', value: 'Пункт 1' }]}
              label="Сhoose the reason for the feedback"
            />
          </div>
          <div className={styles.full}>
            <Textarea label="Description" />
          </div>
        </div>
        <button className={styles.sendBtn}>To send</button>
      </div>
    </div>
  );
};
