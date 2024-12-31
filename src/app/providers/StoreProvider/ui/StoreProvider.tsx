import { createContext, ReactNode, useContext, useMemo } from 'react';
import type { IStoreType } from '../store';

const StoreContent = createContext<IStoreType | null>(null);

export const useGlobalStore = () => {
  const context = useContext(StoreContent);
  if (!context) {
    throw new Error('useGlobalStore must be used within a StoreProvider');
  }
  return context;
};

type ProviderProps = {
  children: ReactNode;
  store: IStoreType;
};

export const StoreProvider = ({ children, store }: ProviderProps) => {
  const returnValue = useMemo(() => store, [store]);

  return <StoreContent.Provider value={returnValue}>{children}</StoreContent.Provider>;
};
