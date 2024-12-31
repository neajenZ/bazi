import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';

import { StoreProvider } from '@providers/StoreProvider/ui/StoreProvider.tsx';
import { globalStore } from '@providers/StoreProvider/store.ts';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider store={globalStore}>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
);
