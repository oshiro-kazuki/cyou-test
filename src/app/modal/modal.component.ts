import { Component, OnInit, OnDestroy, ViewChild, Input, ComponentFactoryResolver } from '@angular/core';
import { from } from 'rxjs/';

import { ModalDirevtive } from './modal.directive';
import { ModalHeaderComponent } from './modal.header/modal.header.component';
import { ModalFooterComponent } from './modal.footer/modal.footer.component';
import { AdItem } from './ad-item';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit, OnDestroy {
  // コンポーネントをabsへ格納
  @Input() ads!: AdItem[];

  currentAdIndex = -1;
  @ViewChild(ModalDirevtive, {static: true}) adHost!: ModalDirevtive;
  interval: any;

  index: any;
  adItem: any;

  modalHeader = ModalHeaderComponent;
  modalFooter = ModalFooterComponent;
  
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  // click(i:any) {
  //   this.adItem = this.ads[i];
  //   console.log(this.ads)
  // }

  loadComponent() {
    
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    // ビューコンテナーへアクセスする
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent<any>(componentFactory);
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

  close(){};

}