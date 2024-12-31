import { LabelSection } from '../../../app/ui/LabelSection';
import styles from './AboutMe.module.css';

export const AboutMe = () => {
  return (
    <div className={styles.body}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <img src="/time.png" alt="" />
          </div>
          <div className={styles.right}>
            <LabelSection variant="left" text="About me" />
            <h3>
              <span>Something that inspires me</span> every day
            </h3>
            <p>
              A vibrant city filled with cultural diversity and endless opportunities. From stunning
              architecture to cozy local cafes, it’s a place where tradition meets modernity. A
              vibrant city filled with cultural diversity and endless opportunities. From stunning
              architecture to cozy local cafes, it’s a place where tradition meets modernity.
              Perfect for travelers seeking unique experiences and unforgettable memories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
