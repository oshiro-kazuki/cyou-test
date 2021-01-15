import { Component } from '@angular/core';
import { menuList } from '../link-list/menulist';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'バイクの整備・メンテナンス店を探すなら【グーバイク】';
  
  menuList =  menuList;
  viewList: any;

  onClickView(list: any) {
    if(!this.viewList) {
      this.viewList = list;
    } else {
      this.viewList = null;
    }
  }

}