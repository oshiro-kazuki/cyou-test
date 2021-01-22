import { Component, OnInit } from '@angular/core';

import { areasLeft } from '../../link-list/area/left/areas';
import { areasRight } from '../../link-list/area/right/areas';
import { serviceMenu } from '../../link-list/service-menu';
import { reviewList } from '../../link-list/reviewList';
import { sagyouzisseki } from '../../link-list/sagyouzisseki';
import { kensakuZyouken } from '../../link-list/kensaku-zyouken';
import { ModalComponent } from '../../modal/modal.component';
import { ModalService } from '../../modal/modal.service';
import { AdItem } from '../../modal/ad-item';

@Component({
  selector: 'app-contents-main',
  templateUrl: './contents.main.component.html',
  styleUrls: ['./contents.main.component.css'],
})

export class ContentsMainComponent implements OnInit {
  areasL = areasLeft;
  areasR = areasRight;
  serviceMenu = serviceMenu;
  reviewList = reviewList;
  sagyouzisseki = sagyouzisseki;
  kensakuZyouken = kensakuZyouken;
  // modal = ModalComponent;
  modal!: AdItem[];

  constructor(
    private modalService: ModalService,
  ) {}

  ngOnInit() {
    this.modal = this.modalService.setAds();
  }

  // 新着レビュー
  // レビューリストの空星設定
  setStar() {
    const array = [];
    const STAR = 5
    for (let i = 0; i < STAR; i++) {
      array.push(i);
    }
    return array;
  }

  reviewStar(star: any) {
    const array = [];
    for (let i = 0; i < star; i++) {
      array.push(i);
    }
    return array;
  }

  revMin = 0
  revMax = 3;
  revSlide = 0;

  revMaxlength() {
    const len = this.reviewList.length -1;
    return len;
  }

  onClickReviewPrev() {
    if(this.revMin === 0) return;

    this.revSlide += 900;
    this.revMin -= 4;
    this.revMax -= 4;
  }
  
  onClickReviewNext(){
    if(this.revMax === this.revMaxlength()) return;

    this.revSlide -= 900;
    this.revMin += 4;
    this.revMax += 4;
  }

  // 作業実績
  sagMin = 0
  sagMax = 3;
  sagSlide = 0;

  sagMaxlength() {
    const len = this.sagyouzisseki.length -1;
    return len;
  }

  onClickSagyouPrev() {
    if(this.sagMin === 0) return;

    this.sagSlide += 900;
    this.sagMin -= 4;
    this.sagMax -= 4;
  }

  onClickSagyouNext() {
    if(this.sagMax === this.sagMaxlength()) return;

    this.sagSlide -= 900;
    this.sagMin += 4;
    this.sagMax += 4;
  }

  modalOpen(index: any) {
    this.modalService.setIndex(index);
  }
  
  isAreaSelect = true;
  onClickAreaSelect() {
    if (this.isAreaSelect) {
      this.isAreaSelect = false;
    } else {
      this.isAreaSelect = true;
    }
  }
  
}