import { Component } from '@angular/core';

import { ModalService } from '../../service/modal.service';
import { zenkoku } from '../../area/zenkoku';
import { from } from 'rxjs';

@Component({
  selector: 'app-modal-area',
  templateUrl: './modal.area.component.html',
  styleUrls: ['./modal.area.component.css']
})

export class ModalAreaComponent {
  zenkoku = zenkoku;
  isCurrent = false;
  // isModalSelect = true;
  isModalSelect = this.modalService.isModalSelect;

  constructor(
    private modalService: ModalService,
  ) {}
}