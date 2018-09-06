import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  urlCarrenet = '/assets/img/carrenet-logo_200-200.png';
  urlLNE = '/assets/img/lne-marianne-logo_200-200.jpg';
  urlCoty = '/assets/img/coty-logo_200-200.jpg';

  constructor() {
  }

  ngOnInit() {
  }

}
