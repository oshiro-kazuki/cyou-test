import { Component } from '@angular/core';
import { menuList } from '../menulist';
import { hanbaiten } from '../hanbaiten';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'バイクの整備・メンテナンス店を探すなら【グーバイク】';
  
  menuList = menuList;
  hanbaiten = hanbaiten;
  viewList: any;

  onClickView(list: string) {
    if(!this.viewList) {
      this.viewList = list;
    } else {
      this.viewList = null;
    }
  }
}