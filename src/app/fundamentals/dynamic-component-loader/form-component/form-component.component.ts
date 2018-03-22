import { PersonFormComponent } from './../person/person-form';
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PersonTypeService } from './../util/person-type.service';
import { LegalPersonComponent } from '../legal-person/legal-person.component';
import { Person } from './../person/person.model';
import { PersonService } from '../person/person.service';
import { PersonDirective } from './../person/person.directive';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  @ViewChild(PersonDirective) personForm: PersonDirective;

  person: Person = new Person();
  name: string;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private route: ActivatedRoute,
    private personTypeService: PersonTypeService,
    private personService: PersonService
  ) { }

  ngOnInit() {
  }

  findPerson() {
    this.personService.get(this.name).subscribe(
      ( person: Person ) => {
        this.person = person;
        if ( this.person ) {
          this.loadForm();
        }
      });
  }

  private loadForm() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.personTypeService.get(this.person.type).component);
    const viewContainerRef = this.personForm.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(factory);
    (<PersonFormComponent>componentRef.instance).person = this.person;
  }

}
