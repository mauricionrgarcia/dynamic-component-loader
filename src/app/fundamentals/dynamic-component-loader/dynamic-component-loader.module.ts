import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PersonTypeService } from './util/person-type.service';
import { DynamicComponentLoaderService } from './dynamic-component-loader.service';

import { FormComponentComponent } from './form-component/form-component.component';
import { PersonComponent } from './person/person.component';
import { PhysicalPersonComponent } from './physical-person/physical-person.component';
import { LegalPersonComponent } from './legal-person/legal-person.component';
import { PersonService } from './person/person.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FormComponentComponent,
    LegalPersonComponent,
    PhysicalPersonComponent,
    PersonComponent
  ],
  exports: [
    FormComponentComponent,
    LegalPersonComponent,
    PhysicalPersonComponent,
    PersonComponent
  ],
  entryComponents: [
    LegalPersonComponent,
    PhysicalPersonComponent,
  ],
  providers: [
    DynamicComponentLoaderService,
    PersonTypeService,
    PersonService
  ]
})
export class DynamicComponentLoaderModule { }
