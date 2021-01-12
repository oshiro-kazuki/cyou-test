import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from './contents.component';
import { ContentsMainComponent } from './contents.main/contents.main.component';

const routes: Routes = [
  {
    path: 'contents', component: ContentsComponent,
    children: [
      {path: '', component: ContentsMainComponent}
    ]
  }
];

@NgModule({
  declarations: [
    ContentsComponent,
    ContentsMainComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ContentsModule { }