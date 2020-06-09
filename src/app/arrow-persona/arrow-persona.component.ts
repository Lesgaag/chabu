import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-persona',
  templateUrl: './arrow-persona.component.html',
  styleUrls: ['./arrow-persona.component.css']
})
export class ArrowPersonaComponent implements OnInit {

  // add this data to a json file
  val = '';
  movieTitle = 'The Lost World: Jurassic Park';
  directorName = 'Steven Spielberg';
  yearOfTheatre = '1997';
  summary = 'The summary of the specific movie';

  constructor() { }

  ngOnInit() {
  }

}
