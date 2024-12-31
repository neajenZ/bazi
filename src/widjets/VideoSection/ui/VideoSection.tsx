import { ArrowLink } from '../../../app/icons/ArrowLink';
import { Browser } from '../../../app/icons/Browser';
import { LabelSection } from '../../../app/ui/LabelSection';
import styles from './VideoSection.module.css';

export const VideoSection = () => {
  return (
    <div className={styles.body}>
      <div className="container">
        <div className={styles.wrapper}>
          <video className={styles.video} controls src="" />
          <div className={styles.right}>
            <LabelSection variant="left" text="Bazi basics" />

            <div className={styles.buttons}>
              <div className={styles.btn}>
                <button>
                  <Browser />
                  <span>www.website.com</span>
                </button>
                <button>
                  <ArrowLink />
                </button>
              </div>
              <div className={styles.btn}>
                <button>
                  <Browser />
                  <span>www.website.com</span>
                </button>
                <button>
                  <ArrowLink />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
