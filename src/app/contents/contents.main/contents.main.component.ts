import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// モーダルダイアログとして表示するコンポーネント
import { ModalComponent } from '../../modal/modal.component';
// モーダルダイアログを閉じるためのイベントを管理するサービス
import { ModalService } from '../../service/modal.service';

import { areasLeft } from '../../area/left/areas';
import { areasRight } from '../../area/right/areas';
import { serviceMenu } from '../../link-list/service-menu';
import { reviewList } from '../../link-list/reviewList';
import { sagyouzisseki } from '../../link-list/sagyouzisseki';
import { kensakuZyouken } from '../../link-list/kensaku-zyouken';
import { createHostListener } from '@angular/compiler/src/core';
import { menuList } from 'src/app/link-list/menulist';

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

  // モーダルダイアログが閉じた際のイベントをキャッチするための subscription
  private subscription!: Subscription;
  // ngComponentOutlet にセットするためのプロパティ
  public modal: any = null;

  constructor(
    private modalService: ModalService,
  ) { }

  ngOnInit() {
    // モーダルダイアログを閉じた際のイベントを処理する
    this.subscription = this.modalService.closeEventObservable$.subscribe(
      () => {
        // プロパティ modal に null をセットすることでコンポーネントを破棄する
        // このタイミングで ModalComponent では ngOnDestroy が走る
        this.modal = null;
      }
    );
  }

  /*終了処理 */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /*クリックイベント */
  public onClick($event: any) {
    this.setModal();
  }

  /*モーダルダイアログを表示する*/
  private setModal() {
    this.modal = ModalComponent;
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
  
  isAreaSelect = true;
  onClickAreaSelect() {
    if (this.isAreaSelect) {
      this.isAreaSelect = false;
    } else {
      this.isAreaSelect = true;
    }
  }
}