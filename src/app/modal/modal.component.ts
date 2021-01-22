import { Component, OnInit, OnDestroy, ViewChild, Input, ComponentFactoryResolver } from '@angular/core';
import { from, observable, Observable,of } from 'rxjs/';

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
  @ViewChild(ModalDirevtive, { static: true }) adHost!: ModalDirevtive;
  modalHeader = ModalHeaderComponent;
  modalFooter = ModalFooterComponent;
  index = 0;
  // isView = false;
  // testObservable:Observable<number>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    public modalService: ModalService,
  ) {
    // this.loadComponent();
    this.modalService.valueChanges().subscribe(value => {
      this.loadComponent();
    })
  }

  ngOnInit() {
  
  }

  ngOnDestroy() {}

  // ngAfterViewChecked(){
  //   this.loadComponent();
  // }

  //コンポーネントを読み込む
  loadComponent() {
    if (this.ads == null) return;
    const adItem = this.ads[this.modalService.getIndex()];
    console.log(this.modalService.getIndex());
    //各コンポーネントのインスタンスを作成
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    // ビューコンテナーへアクセスする
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    //ロードされたコンポーネントへの参照を返す
    viewContainerRef.createComponent<any>(componentFactory);

  }

  // setIndex(index: any) {
  //   this.index = index;
  //   this.loadComponent();
  // }

  close() {
    this.modalService.close();
    this.ngOnDestroy();
  };
}