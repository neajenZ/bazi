import { createContext, ReactNode, useContext, useMemo } from 'react';
import type { IStoreType } from '../store';

const CompassPageContext = createContext<IStoreType | null>(null);

export const useCompassPageStore = () => {
  const context = useContext(CompassPageContext);
  if (!context) {
    throw new Error('useCompassPageStore must be used within a CompassPageProvider');
  }
  return context;
};

type ProviderProps = {
  children: ReactNode;
  store: IStoreType;
};

export const CompassPageProvider = ({ children, store }: ProviderProps) => {
  const returnValue = useMemo(() => store, [store]);

  return <CompassPageContext.Provider value={returnValue}>{children}</CompassPageContext.Provider>;
};
