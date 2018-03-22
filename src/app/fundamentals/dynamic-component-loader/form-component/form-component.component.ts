import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef   } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PersonTypeService } from './../util/person-type.service';
import { LegalPersonComponent } from '../legal-person/legal-person.component';
import { Person } from './../person/person.model';
import { PersonService } from '../person/person.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
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
        this.loadForm();
      });
  }

  private loadForm() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.personTypeService.get(this.person.type).component);
    this.viewContainerRef.clear();
    const ref = this.viewContainerRef.createComponent(factory);
    // ref.changeDetectorRef.detectChanges();
}

}
