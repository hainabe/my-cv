import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  urlPT = 'assets/img/portugal_640.png';
  urlUK = 'assets/img/united_kingdom_640.png';
  urlGE = 'assets/img/germany_640.png';
  urlJP = 'assets/img/japan_640.png';

  constructor() {
  }

  ngOnInit() {
  }

}
