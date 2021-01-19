import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ModalService } from '../../service/modal.service'

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal.header.component.html',
  styleUrls: ['./modal.header.component.css']
})
export class ModalHeaderComponent implements OnInit {

  constructor(private modal: ModalService) {}
  
  isModalOpen = this.modal.isModalOpen;

  modalOpneArea() {
    this.modal.modalArea();
  }

  // modalOpneMenu() {
  //   this.modal.modalmenu();
  // }
  // modalOpneMaker() {
  //   this.modal.modalArea();
  // }

  ngOnInit() {}

}