import { Injectable } from '@angular/core';

import { ModalAreaComponent } from './modal.area/modal.area.component';
import { ModalMenuComponent } from './modal.menu/modal.menu.component';
import { ModalMakerComponent } from './modal.maker/modal.maker.component';
import { AdItem } from './ad-item';
import { ModalComponent } from './modal.component';
import { BehaviorSubject, from } from 'rxjs';

@Injectable()
export class ModalService {
  modal!: AdItem[];
  isView = false;
  index = 0;
  private valueSubject = new BehaviorSubject<any>('initial');

  constructor(
    // private modalCompo: ModalComponent,
  ){}

  setAds() {
    return [
      new AdItem(ModalAreaComponent),
      new AdItem(ModalMenuComponent),
      new AdItem(ModalMakerComponent),
    ];
  }

  valueChanges(){
    return this.valueSubject.asObservable();
  }

  getIsView() :boolean {
    return this.isView;
  }

  open() {
    this.isView = true;
  }

  getIndex() {
    return this.index;
  }
  
  setIndex(index: any) {
    this.index = index;
    this.valueSubject.next(index);
    console.log(index);
    this.open();
  }


  close() {
    this.isView = false;
  }
}
