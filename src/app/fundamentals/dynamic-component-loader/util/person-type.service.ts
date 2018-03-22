import { OnInit, Injectable } from '@angular/core';
import { PersonEnum } from './person.enum';
import { LegalPersonComponent } from '../legal-person/legal-person.component';
import { PhysicalPersonComponent } from '../physical-person/physical-person.component';

interface PersonForm {
  id: number;
  name: string;
  type: PersonEnum;
  component;
}

@Injectable()
export class PersonTypeService implements OnInit {

  static componentsMap: Map<PersonEnum, PersonForm> ;

  constructor() {
    this.loadComponent();
  }

  ngOnInit() {

  }

  public get(type: PersonEnum) {
    return PersonTypeService.componentsMap.get(type);
  }

  private loadComponent() {
      PersonTypeService.componentsMap = new Map<PersonEnum, PersonForm>();
      PersonTypeService.componentsMap.set(PersonEnum.LEGAL, {
        id: 1,
        name: 'Legal Person',
        type: PersonEnum.LEGAL,
        component: LegalPersonComponent
      } );

      PersonTypeService.componentsMap.set(PersonEnum.PHYSICAL, {
        id: 1,
        name: 'Phisical Person',
        type: PersonEnum.PHYSICAL,
        component: PhysicalPersonComponent
      } );
  }
}
