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
  
  modal = ModalComponent;
  ads!: AdItem[];

  constructor(
    private modalService: ModalService,
  ) {}

  ngOnInit() {
    this.ads = this.modalService.setAds();
  }

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

  indexR0 = true;
  indexR1 = false;
  minR = 0;
  maxR = 3;

  onClickReviewPrev() {
    if (this.indexR1) {
      this.indexR0 = true;
      this.indexR1 = false;
    }

    this.minR -= 4;
    this.maxR -= 4;
    if (this.minR <= 0) {
      this.minR = 0;
      this.maxR = 3;
    }
  }

  onClickReviewNext() {
    if (this.indexR0) {
      this.indexR0 = false;
      this.indexR1 = true;
    }

    this.minR += 4;
    this.maxR += 4;
    if (this.maxR >= this.reviewList.length - 1) {
      this.maxR = this.reviewList.length - 1;
      this.minR = this.reviewList.length - 4;
    }
  }

  indexS0 = true;
  indexS1 = false;
  minS = 0;
  maxS = 3;

  onClickSagyouPrev() {
    if (this.indexS1) {
      this.indexS0 = true;
      this.indexS1 = false;
    }

    this.minS -= 4;
    this.maxS -= 4;
    if (this.minS <= 0) {
      this.minS = 0;
      this.maxS = 3;
    }
  }

  onClickSagyouNext() {
    if (this.indexS0) {
      this.indexS0 = false;
      this.indexS1 = true;
    }

    this.minS += 4;
    this.maxS += 4;
    if (this.maxS >= this.reviewList.length - 1) {
      this.maxS = this.reviewList.length - 1;
      this.minS = this.reviewList.length - 4;
    }
  }

  modalOpen() {
    this.modalService.open();
    console.log(this.modalService.isView);
    alert('click');
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