import { Component } from '@angular/core';
import { from } from 'rxjs';
import { maker } from '../../link-list/after-maker/maker';

@Component({
  selector: 'app-modal-maker',
  templateUrl: './modal.maker.component.html',
  styleUrls: ['./modal.maker.component.css']
})

export class ModalMakerComponent {
  maker = maker;
  makerIndex: any;
  haikiIndex: any;
  syasyuIndex: any;
  haikiSelected: any;
  syasyuSelected: any;
  itemSelected: any;

  onChangeMaker() {
    this.haikiSelected = this.maker[this.makerIndex].haiki;
  }

  onChangeHaiki() {
    this.syasyuSelected = this.haikiSelected[this.haikiIndex].syasyu;
  }

   onChangeSyasyu() {
    this.itemSelected = this.syasyuSelected[this.syasyuIndex].name;
    console.log(this.itemSelected);
  }
}
