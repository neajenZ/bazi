import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { Burger } from '@icons/Burger.tsx';
import { useState } from 'react';
import { links } from '../constants.ts'

export const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false)
  const navigate = useNavigate();


  return (
    <header className={styles.body}>
      <div className="container">
        <div className={`${styles.wrapper}`}>
          <div className={styles.mobileMenu}>
            <button className={`${styles.burgetBtn}`} onClick={() => setOpenMenu(!isOpenMenu)}>
              <Burger className={isOpenMenu ? `${styles.active} active-mobile-btn` : ''} />
            </button>
            {isOpenMenu && (
              <div className={styles.mobileMenuBody}>
                <div className={styles.wrapper}>
                  {links.map(({ path, label }) => (
                    <Link to={path} onClick={() => setOpenMenu(false)}>
                      {label}
                    </Link>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setOpenMenu(false);
                    navigate('/auth');
                  }}
                  className={styles.loginBtn}
                >
                  Log In
                </button>
              </div>
            )}
          </div>
          <img src="/logo.png" alt="" />
          <nav className={styles.nav}>
            {links.map(({ path, label }) => (
              <Link to={path}>{label}</Link>
            ))}
          </nav>

          <button onClick={() => navigate('/auth')} className={styles.loginBtn}>
            Log In
          </button>
        </div>
      </div>

    </header>
  );
};
