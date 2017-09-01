import { Component, Input, OnInit } from '@angular/core';

import { Film } from '../../view-models/film';

@Component({
  selector: 'app-film-panel',
  templateUrl: './film-panel.component.html',
  styleUrls: ['./film-panel.component.css']
})
export class FilmPanelComponent implements OnInit {

  @Input() film: Film;
  @Input() index = 1;

  constructor() { }

  ngOnInit() {
  }

}
