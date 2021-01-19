import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from './contents.component';
import { ContentsMainComponent } from './contents.main/contents.main.component';
import { HttpClientModule } from '@angular/common/http';

import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../service/modal.service';
import { ModalAreaComponent } from '../modal/modal.area/modal.area.component';

const routes: Routes = [
  {
    path: 'contents', component: ContentsComponent,
    children: [
      {
        path: '', component: ContentsMainComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [
    ContentsComponent,
    ContentsMainComponent,
    ModalComponent,
    ModalAreaComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
  ],
  providers: [ModalService],
  bootstrap: [],
  entryComponents: [
    ModalAreaComponent,
  ]
})
export class ContentsModule { }