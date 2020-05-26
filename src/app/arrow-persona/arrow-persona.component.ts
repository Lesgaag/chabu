import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-persona',
  templateUrl: './arrow-persona.component.html',
  styleUrls: ['./arrow-persona.component.css']
})
export class ArrowPersonaComponent implements OnInit {
  val = '';
  firstName = 'Leslie';
  lastName = 'van der Gaag';
  sign = 'vissen';
  age = '30';

  constructor() { }

  ngOnInit() {
  }

}
