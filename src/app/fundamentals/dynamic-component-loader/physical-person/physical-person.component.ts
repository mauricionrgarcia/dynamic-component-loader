import { Component, OnInit } from '@angular/core';

import { PersonFormComponent } from './../person/person-form';
import { Person } from './../person/person.model';

@Component({
  selector: 'app-physical-person',
  templateUrl: './physical-person.component.html',
  styleUrls: ['./physical-person.component.css']
})
export class PhysicalPersonComponent implements OnInit, PersonFormComponent {

  person: Person;

  constructor() { }

  ngOnInit() {
  }

}
