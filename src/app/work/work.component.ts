import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  urlCV = '/assets/img/gab.jpg';
  urlWW = '/assets/img/w-logo.jpg';

  constructor() {
  }

  ngOnInit() {
  }

}
