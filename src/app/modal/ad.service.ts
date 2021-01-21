import { Injectable } from '@angular/core';

import { ModalAreaComponent } from './modal.area/modal.area.component';
import { ModalMenuComponent } from './modal.menu/modal.menu.component';
import { ModalMakerComponent } from './modal.maker/modal.maker.component';

import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(ModalAreaComponent),

      new AdItem(ModalMenuComponent),

      new AdItem(ModalMakerComponent),
    ];
  }

  
}
