import { Component, OnInit } from '@angular/core';
import { areasLeft } from '../../area/left/areas';
import { areasRight } from '../../area/right/areas';
import { serviceMenu } from '../../service.menu/service-menu';
import { reviewList } from '../../reviewList';
import { sagyouzisseki } from '../../sagyouzisseki';
import { kensakuZyouken } from '../../kensaku-zyouken';

@Component({
  selector: 'app-contents-main',
  templateUrl: './contents.main.component.html',
  styleUrls: ['./contents.main.component.css'],
})

export class ContentsMainComponent {
// export class ContentsMainComponent implements OnInit{
  areasL = areasLeft;
  areasR = areasRight;
  serviceMenu = serviceMenu;
  reviewList = reviewList;
  v:any;
  reviewIndex = 0;
  current: any;
  sagyouzisseki = sagyouzisseki;
  kensakuZyouken = kensakuZyouken;
  isAreaSelect = true;
  
  constructor() {}

  ngOnInit(): void {}

  setStar() {
    const array = [];
    const STAR = 5
    for(let i = 0; i < STAR; i++) {
      array.push(i);
    }
    return array;
  }

  reviewStar(star: any) {
    const array = [];
    for(let i = 0; i < star; i++) {
      array.push(i);
    }
    return array;
  }

  reviewListView() {
    this.v = this.reviewList;
    return this.v;
  }

  onClickNext() {
    const index = this.reviewIndex + 4;
    const list = this.reviewList;
    this.current = list[index];
  }

  onClickAreaSelect() {
    if(this.isAreaSelect) {
      this.isAreaSelect = false;
    } else {
      this.isAreaSelect = true;
    }
  }
}