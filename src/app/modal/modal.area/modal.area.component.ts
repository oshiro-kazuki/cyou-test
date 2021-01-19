import { Component } from '@angular/core';

import { zenkoku } from '../../area/zenkoku';

@Component({
  selector: 'app-modal-area',
  templateUrl: './modal.area.component.html',
  styleUrls: ['./modal.area.component.css']
})

export class ModalAreaComponent {
  zenkoku = zenkoku;
  isCurrent = false;
}