import { makeAutoObservable } from 'mobx';

class GlobalStore {
  isAuth: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  changeCompassOnImage = (value: boolean) => {
    this.isAuth = value;
  };
}

export const globalStore = new GlobalStore();
export type IStoreType = typeof globalStore;
