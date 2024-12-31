import { useState } from 'react';
import { Avatar } from '../../app/icons/Avatar';
import { Login } from '../../widjets/Login';
import styles from './Auth.module.css';
import { Register } from '../../widjets/Register';
import { RecoverPass } from '../../widjets/RecoverPass';

const AuthPage = () => {
  const [typeAuth, setTypeAuth] = useState<'login' | 'register' | 'recover'>('login');

  return (
    <div className={styles.background}>
      <div className="container">
        <div className={styles.window}>
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <Avatar />
              <div className={styles.variants}>
              <span
                className={`${typeAuth === 'login' ? styles.activeTab : ''}`}
                onClick={() => setTypeAuth('login')}
              >
                Log In
              </span>
                <div></div>
                <span
                  className={`${typeAuth === 'register' ? styles.activeTab : ''}`}
                  onClick={() => setTypeAuth('register')}
                >
                Register
              </span>
              </div>
            </div>
            <div className={styles.form}>
              {typeAuth === 'login' ? (
                <Login />
              ) : typeAuth === 'register' ? (
                <Register />
              ) : (
                <RecoverPass />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
