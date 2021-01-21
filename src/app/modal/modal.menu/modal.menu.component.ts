import { Component } from '@angular/core';

import { afterMenu } from '../../link-list/after-menu';

@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal.menu.component.html',
  styleUrls: ['./modal.menu.component.css']
})

export class ModalMenuComponent {
  afterMenu = afterMenu;
}