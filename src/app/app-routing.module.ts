import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentsModule } from './contents/contents.module';

const routes: Routes = [
  {path: '', redirectTo: 'contents', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ContentsModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
