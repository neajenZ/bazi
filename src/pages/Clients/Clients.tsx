import { ClientsList } from '@entities/ClientsList';
import { ClientWindow } from '@features/ClientWindow';
import styles from './Clients.module.css';
import { useState } from 'react';
import { ClientBazi } from '@widjets/ClientBazi/ui/ClientBazi';
import { ClientList } from '@widjets/ClientList';
import { ClientMapsWindow } from '@widjets/ClientMapsWindow';
import { ClientDaysWindow } from '@widjets/ClientDaysWindow';

const ClientsPage = () => {
  const [activeTab, setActiveTab] = useState<'bazi' | 'maps' | 'days'>('bazi');

  return (
    <div className={styles.background}>

      <div
        className={`${styles.window} ${activeTab === 'bazi' || activeTab === 'days' || activeTab === 'maps' ? styles.baziWrapper : ''}`}
      >
        <ClientsList />
        <ClientWindow activeTab={activeTab} onChangeTab={setActiveTab} />
        {activeTab === 'bazi' ? (
          <ClientBazi />
        ) : activeTab === 'days' || activeTab === 'maps' ? (
          <ClientList onChangeTab={setActiveTab} activeTab={activeTab} />
        ) : null}
        {activeTab === 'bazi' ? null : activeTab === 'maps' ? (
          <ClientMapsWindow />
        ) : activeTab === 'days' ? (
          <ClientDaysWindow />
        ) : null}
      </div>
    </div>
  );
};

export default ClientsPage;
