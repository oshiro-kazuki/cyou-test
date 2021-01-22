import { Component, OnInit, OnDestroy, ViewChild, Input, ComponentFactoryResolver } from '@angular/core';
import { from } from 'rxjs/';

import { ModalDirevtive } from './modal.directive';
import { ModalHeaderComponent } from './modal.header/modal.header.component';
import { ModalFooterComponent } from './modal.footer/modal.footer.component';
import { AdItem } from './ad-item';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit, OnDestroy {
  // コンポーネントをabsへ格納
  @Input() ads!: AdItem[];
  adItem: any;
  @ViewChild(ModalDirevtive, {static: true}) adHost!: ModalDirevtive;
  modalHeader = ModalHeaderComponent;
  modalFooter = ModalFooterComponent;
  isView = true;
  // isView = this.modalService.isView;
  index = 0;
  
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private modalService: ModalService,
    ) {
      
    }
    
    ngOnInit() {
    // this.isView = this.modalService.isView;
    // this.loadComponent();
    console.log(this.isView)
  }

  ngOnDestroy() {}

  //コンポーネントを読み込む
  loadComponent() {
    const adItem = this.ads[this.index];
    //各コンポーネントのインスタンスを作成
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    // ビューコンテナーへアクセスする
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    //ロードされたコンポーネントへの参照を返す
    viewContainerRef.createComponent<any>(componentFactory);
  }

  click(index: any){
    this.index = index;
    this.loadComponent();
  }

  close(){
    this.modalService.close();
    this.ngOnDestroy();
  };
  
}