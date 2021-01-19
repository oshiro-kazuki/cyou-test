import { Component } from '@angular/core';
import { from } from 'rxjs';
import { menuList } from '../link-list/menulist';
import { pankuzu } from '../link-list/pankuzu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'バイクの整備・メンテナンス店を探すなら【グーバイク】';
  
  menuList =  menuList;
  viewList: any;

  pankuzu = pankuzu;

  onClickView(list: any) {
    if(!this.viewList) {
      this.viewList = list;
    } else {
      this.viewList = null;
    }
  }

}