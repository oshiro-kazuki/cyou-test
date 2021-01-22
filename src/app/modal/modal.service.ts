import { Injectable } from '@angular/core';

// import { ModalComponent } from './modal.component';
import { ModalAreaComponent } from './modal.area/modal.area.component';
import { ModalMenuComponent } from './modal.menu/modal.menu.component';
import { ModalMakerComponent } from './modal.maker/modal.maker.component';
import { AdItem } from './ad-item';
import { from } from 'rxjs';
import { ModalComponent } from './modal.component';

@Injectable()
export class ModalService {
  ads!: AdItem[];
  isView = false;

  constructor(
    // private modal: ModalComponent,
  ){}

  setAds() {
    return [
      new AdItem(ModalAreaComponent),
      new AdItem(ModalMenuComponent),
      new AdItem(ModalMakerComponent),
    ];
  }

  open() {
    this.isView = true;
  }

  close() {
    this.isView = false;
  }
}
