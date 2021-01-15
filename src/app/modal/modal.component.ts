import { Component, OnInit, OnDestroy } from '@angular/core';

// モーダルダイアログを閉じるためのイベントを管理するサービス
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit, OnDestroy {
  constructor(
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  /**
   * 終了処理
   */
  ngOnDestroy() {
    // モーダルダイアログが閉じたタイミングで出力される
    console.log('destroyed');
  }

  /**
   * クリックイベント
   */
  public onClick($event: any) {
    this.notifyCloseModal();
  }

  /**
   * モーダルダイアログを閉じる
   */
  private notifyCloseModal() {
    this.modalService.requestCloseModal();
  }
}