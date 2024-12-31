import { AppStore } from '../../../app/icons/AppStore';
import { GoogleStore } from '../../../app/icons/GoogleStore';
import styles from './Apps.module.css';

export const Apps = () => {
  return (
    <div className={styles.body}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.right}>
            <h3>Ассистент для расчёта Ба-цзы, анализа энергии и жизненного пути</h3>
            <p>
              Откройте тайны своей судьбы и энергии с помощью приложения для расчёта Ба-цзы! Наше
              приложение помогает глубже понять себя, выявить сильные и слабые стороны, а также
              гармонизировать вашу жизнь через древнюю китайскую метафизику.
            </p>
            <div className={styles.buttons}>
              <button>
                <AppStore />
                <span>Скачать App store</span>
              </button>
              <button className={styles.googleBtn}>
                <GoogleStore />
                <span>Скачать Google play</span>
              </button>
            </div>
          </div>
          <div className={styles.left}>
            <img src="/IPhone.png" alt="" />
            <div className={styles.imgBorder}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
