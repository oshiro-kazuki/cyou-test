import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { select } from './select';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal.header.component.html',
  styleUrls: ['./modal.header.component.css']
})
export class ModalHeaderComponent implements OnInit {

  select = select;

  constructor(
    private modalService: ModalService,
  ) {}

  ngOnInit() {}

  click(index: any) {
    this.modalService.setIndex(index);
  }

}