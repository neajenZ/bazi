import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { Telegram } from '../../../app/icons/Telegram';
import { Instagram } from '../../../app/icons/Instagram';
import { Facebook } from '../../../app/icons/Facebook';
import { Youtube } from '../../../app/icons/Youtube';

export const Footer = () => {
  return (
    <header className={styles.body}>
      <div className="container">
        <div className={styles.wrapper}>
          <img src="/logo.png" alt="" />
          <nav className={styles.nav}>
            <Link to="/">Main</Link>
            <Link to="/calculator">About me</Link>
            <Link to="/calendar">About the master</Link>
            <Link to="/compass">Bazi basics</Link>
            <Link to="/clients">Consultation</Link>
            <Link to="/consultation">Privacy policy</Link>
          </nav>

          <button className={styles.socials}>
            <a href="">
              <Telegram />
            </a>
            <a href="">
              <Instagram />
            </a>
            <a href="">
              <Facebook />
            </a>
            <a href="">
              <Youtube />
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};
