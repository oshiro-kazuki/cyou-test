import { Component, OnInit } from '@angular/core';
import { ModalAreaComponent } from '../modal.area/modal.area.component';

@Component({
  selector: 'app-modal-footer',
  templateUrl: './modal.footer.component.html',
  styleUrls: ['./modal.footer.component.css']
})
export class ModalFooterComponent implements OnInit {
  isChecked = true;

  constructor(
    // private modalAreaComponent: ModalAreaComponent
  ) {}

  ngOnInit() {}

  

}