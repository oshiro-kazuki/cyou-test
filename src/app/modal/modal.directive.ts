import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adHost]',
})

export class ModalDirevtive {
  constructor(
    public viewContainerRef: ViewContainerRef,
  ) {}
}