import styles from './Intro.module.css';

export const Intro = () => {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <h1>
          Sound <br />
          Heaven
        </h1>
        <p>
          A vibrant city filled with cultural diversity and endless opportunities. From stunning
          architecture to cozy local cafes, it’s a place where tradition meets modernity.
        </p>
      </div>
    </div>
  );
};
