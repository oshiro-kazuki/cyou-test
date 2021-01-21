import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { select } from './select';
// import { ModalComponent } from '../modal.component';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal.header.component.html',
  styleUrls: ['./modal.header.component.css']
})
export class ModalHeaderComponent implements OnInit {

  select = select;

  constructor(
    // private modal: ModalComponent
  ) {}

  ngOnInit() {}

  selected() {
    // this.modal.click();
  }
}