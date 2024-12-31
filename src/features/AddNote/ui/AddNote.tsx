import { Input } from '@ui/Input';
import styles from './AddNote.module.css';
import { Textarea } from '@ui/Textarea';
import { Button } from '@ui/Button/ui/Button';

export const AddNote = () => {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <h4>Add a note</h4>

        <div className={styles.form}>
          <Input noLabel label="Title" />
          <Textarea noLabel label="Description" />
          <Button text="Add" />
        </div>
      </div>
    </div>
  );
};
