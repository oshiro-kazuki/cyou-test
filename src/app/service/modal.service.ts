import { Injectable, Directive, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class ModalService {
  public vcr!: ViewContainerRef;
  private currentComponent: any = null;

  private contentSource: Subject<boolean> = new Subject<boolean>();
  public content$= this.contentSource.asObservable();

  constructor(private resolver: ComponentFactoryResolver) { }

  isModalOpen = false;
  // isModalSelect: any;
  isModalSelect = false;

  modalArea() {
    // this.isModalSelect = 2;
    this.isModalSelect = true;
  }

  // modalMenu() {
  //   this.isModalSelect = 3;
  // }

  // modalmMker() {
  //   this.isModalSelect = 4;
  // }

  open(data: any): void {
    if (!data) {
      return;
    }
    
    this.modalOpen();

    const factory = this.resolver.resolveComponentFactory(data);
    const component = this.vcr.createComponent(factory);

    // if other modal container is created
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = component;
    this.contentSource.next(true);
  }

  close(): void {
    this.modalOpen();
    if (this.currentComponent) {
      this.currentComponent.destroy();
      this.contentSource.next(false);
    }
  }

  modalOpen() {
    this.isModalOpen ? this.isModalOpen = true : this.isModalOpen = false
  }
}