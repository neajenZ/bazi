import { Share } from '@icons/Share';
import styles from './ClientMapsWindow.module.css';
import { Close } from '@icons/Close';
import { ClientMapNote } from '@entities/ClientMapNote/ui/ClientMapNote';
import { AddCompass } from '@icons/AddCompass';
import { AddNote } from '@icons/AddNote';

export const ClientMapsWindow = () => {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h4>Map</h4>
          <div>
            <Share />
            <Close />
          </div>
        </div>
        <div className={styles.widjets}>
          <ClientMapNote
            data={[
              { title: '12:38', description: 'Hello' },
              { title: '12:38', description: 'Hello' },
              { title: '12:38', description: 'Hello' },
              { title: '12:38', description: 'Hello' },
            ]}
            title="Compass"
          />
          <ClientMapNote
            data={[
              { title: '12:38', description: 'Hello' },
              { title: '12:38', description: 'Hello' },
              { title: '12:38', description: 'Hello' },
            ]}
            title="Note"
          />
        </div>
        <div className={styles.actions}>
          <button>
            <AddCompass /> Add a compass
          </button>
          <button className={styles.note}>
            <AddNote /> Add a note
          </button>
        </div>
      </div>
    </div>
  );
};
