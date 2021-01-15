import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal.component';
import { ModalHeaderComponent } from './modal.header/modal.header.component';

const routes: Routes = [
  {
    path: 'modal', component: ModalComponent,
  }
];

@NgModule({
  declarations: [
    ModalComponent,
    ModalHeaderComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ContentsModule { }