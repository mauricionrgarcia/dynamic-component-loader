import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef   } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PersonTypeService } from './../util/person-type.service';
import { LegalPersonComponent } from '../legal-person/legal-person.component';
import { PersonService } from './person.service';
import { Person } from './person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

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
//    const factory = this.componentFactoryResolver.resolveComponentFactory(LegalPersonComponent);
//    const ref = this.viewContainerRef.createComponent(factory);
//    ref.changeDetectorRef.detectChanges();
  }

  findPerson() {
    this.personService.get(this.name).subscribe(
      ( person: Person ) => {
        this.person = person;
        console.log(person);
        this.loadForm();
      });
  }

  private loadForm() {

    const factory = this.componentFactoryResolver.resolveComponentFactory(this.personTypeService.get(this.person.type).component);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

}
