import { Component, OnInit } from '@angular/core';
import { PersonFormComponent } from './../person/person-form';
import { Person } from '../person/person.model';

@Component({
  selector: 'app-legal-person',
  templateUrl: './legal-person.component.html',
  styleUrls: ['./legal-person.component.css']
})
export class LegalPersonComponent implements OnInit, PersonFormComponent {

  person: Person;

  constructor() { }

  ngOnInit() {
  }

}
