import { Component } from '@angular/core';

import { zenkoku } from '../../link-list/area/zenkoku';
import { from } from 'rxjs';

@Component({
  selector: 'app-modal-area',
  templateUrl: './modal.area.component.html',
  styleUrls: ['./modal.area.component.css']
})

export class ModalAreaComponent {
  zenkoku = zenkoku;

  constructor() {}
}