import { action, makeAutoObservable, runInAction } from 'mobx';
import type { ICompass, INote } from './model.ts';
import { MutableRefObject } from 'react';

type IImage = {
  image: File;
  compasses: ICompass[];
  notes: INote[];
};

class CompassStore {
  type: 'map' | 'image' = 'map';
  mainImage: IImage | null = null;
  mainImageRef: MutableRefObject<HTMLDivElement | null> = { current: null };
  sidebarVisible: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  changeType = (value: 'map' | 'image') => {
    this.type = value;
  };

  setMainImage = (value: File) => {
    runInAction(() => {
      this.type = 'image';
      this.mainImage = {
        compasses: [],
        notes: [],
        image: value,
      };
    });
  };

  addNoteOnImage = (val: INote) => {
    this.mainImage?.notes.push(val);
  };

  deleteNoteOnImage = (val: string) => {
    this.mainImage?.notes.filter((i) => i.id !== val);
  };

  addCompassOnImage = (val: ICompass) => {
    runInAction(() => {
      this.mainImage?.compasses.push(val);
      this.changeSidebarVisible(false)
    })
  };

  deleteCompassOnImage = (value: string) => {
    const idOfItem = this.mainImage?.compasses.findIndex((i) => i.id == value);

    typeof idOfItem === 'number' && idOfItem >= 0 && this.mainImage?.compasses.splice(idOfItem, 1);
  };

  changeSidebarVisible = (value: boolean) => {
    this.sidebarVisible = value
  }

  changeCompassOnImage = (id: string, position: { x: number; y: number; rotation: number }) => {
    const compass = this.mainImage!.compasses.find((i) => i.id === id);
    if (compass) {
      compass.x = position.x;
      compass.y = position.y;
      compass.rotation = position.rotation;
    }
  };
}

export const compassPageStore = new CompassStore();
export type IStoreType = typeof compassPageStore;
