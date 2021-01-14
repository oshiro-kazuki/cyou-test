import { Component, OnInit, OnDestroy } from '@angular/core';

// モーダルダイアログを閉じるためのイベントを管理するサービス
import { ModalService } from '../../service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './area.modal.component.html',
  styleUrls: ['./area.modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  /**
   * コンストラクタ
   */
  constructor(
    private modalService: ModalService
  ) {}

  /**
   * 初期処理
   */
  ngOnInit() {}

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