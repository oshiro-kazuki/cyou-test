import { Component, OnInit } from '@angular/core';
import { areasLeft } from '../../area/left/areas';
import { areasRight } from '../../area/right/areas';

@Component({
  selector: 'app-contents-main',
  templateUrl: './contents.main.component.html',
  styleUrls: ['./contents.main.component.css']
})

export class ContentsMainComponent {
// export class ContentsMainComponent implements OnInit{
  areasL = areasLeft;
  areasR = areasRight;
  
  constructor() {}

  ngOnInit(): void {}
}