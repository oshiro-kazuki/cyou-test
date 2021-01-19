import { Component, OnInit, OnDestroy, AfterViewInit, ViewContainerRef, ViewChild } from '@angular/core';
import { from, Subscription } from 'rxjs/';

// モーダルダイアログを閉じるためのイベントを管理するサービス
import { ModalService } from '../service/modal.service';
import { ModalHeaderComponent } from './modal.header/modal.header.component';
import { ModalFooterComponent } from './modal.footer/modal.footer.component';
import { ModalAreaComponent } from './modal.area/modal.area.component';
import { ModalMenuComponent } from './modal.menu/modal.menu.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('inner', { read: ViewContainerRef }) vcr: any;
  private subscription: any = Subscription;
  public display = 'none';
  modalHeader = ModalHeaderComponent;
  modalFooter = ModalFooterComponent;
  modalArea = ModalAreaComponent;
  modalMenu = ModalMenuComponent;

  constructor(private modal: ModalService) { }

  ngAfterViewInit() {
    this.modal.vcr = this.vcr;
  }

  ngOnInit() {
    this.subscription = this.modal.content$.subscribe(
      value => {
        if (value) {
          this.display = '';
        } else {
          this.display = 'none';
        }
      });
  }

  containerClick($event: any) {
    $event.stopPropagation();
  }

  close() {
    this.modal.close();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}