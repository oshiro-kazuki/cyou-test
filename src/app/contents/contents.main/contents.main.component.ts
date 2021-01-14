import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// モーダルダイアログとして表示するコンポーネント
import { ModalComponent } from '../../modal/area.modal/area.modal.component';
// モーダルダイアログを閉じるためのイベントを管理するサービス
import { ModalService } from '../../service/modal.service';

import { areasLeft } from '../../area/left/areas';
import { areasRight } from '../../area/right/areas';
import { serviceMenu } from '../../service-menu';
import { reviewList } from '../../reviewList';
import { sagyouzisseki } from '../../sagyouzisseki';
import { kensakuZyouken } from '../../kensaku-zyouken';

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
  v:any;
  reviewIndex = 0;
  current: any;
  sagyouzisseki = sagyouzisseki;
  kensakuZyouken = kensakuZyouken;
  isAreaSelect = true;


  // モーダルダイアログが閉じた際のイベントをキャッチするための subscription
  private subscription!: Subscription;
  // ngComponentOutlet にセットするためのプロパティ
  public modal: any = null;
  
  constructor(
    private modalService: ModalService,
  ) {}

  ngOnInit(){
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