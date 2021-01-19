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
  makerSelected: any = [];
  haikiSelected: any = [];

  isMaker = true;

  onMakerSelected(e: any) {
    const a =  Array.from(e);
    console.log(a);

  }

  onHaikiSelected(e: any) {
    this.haikiSelected = e;
    console.log(this.haikiSelected )
  }

}