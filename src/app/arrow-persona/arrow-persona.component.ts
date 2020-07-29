import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-persona',
  templateUrl: './arrow-persona.component.html',
  styleUrls: ['./arrow-persona.component.css']
})
export class ArrowPersonaComponent implements OnInit {

  // add this data to a json file
  movieTitle = 'The Lost World: Jurassic Park';
  directorName = 'Steven Spielberg';
  yearOfTheatre = '1997';
  summary = 'The summary of the specific movie';
  // create components within this component that links to correct quiz
  linkQuiz = '/question-component';

  constructor() { }

  ngOnInit() {
  }

}
