import { LabelSection } from '../../../app/ui/LabelSection';
import styles from './AboutMaster.module.css';

export const AboutMaster = () => {
  return (
    <div className={styles.body}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <img src="/about-master-image.png" alt="" />
            <div className={styles.imgBorder}></div>
          </div>
          <div className={styles.right}>
            <h3>
              <span>About Master</span> <br /> Benson Yeo
            </h3>
            <p>
              In my past decade, I had been in pursue of learning my destiny or I should said,
              searching for a meaning in life! It started with bad luck, bad luck and bad luck! I
              was ambition in doing business but I lost all my saving and investment for trusting
              others and the only person to blame is myself but trust me, it is a lesson worth
              learning!
            </p>
          </div>
          <LabelSection className={styles.label} text="About the master" />
        </div>
      </div>
    </div>
  );
};
