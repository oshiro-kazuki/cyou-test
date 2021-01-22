import { Component } from '@angular/core';
import { from } from 'rxjs';
import { menuList } from '../link-list/header-menu-list/menulist';
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
    !this.viewList ? this.viewList = list : this.viewList = null;
  }

}