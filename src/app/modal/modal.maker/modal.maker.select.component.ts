import { Component } from '@angular/core';

import { maker } from '../../link-list/after-maker/maker';

@Component({
    selector: 'app-modal-maker',
    template: `
    <select >
      <option *ngFor="let i of maker" value="{{i.maker}}">
          {{i.maker}}
      </option>
    </select>`,
})

export class ModalMakerSelectComponent {
    maker = null;

    setMaker() {
        this.maker;
    }
}
  