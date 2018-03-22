import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PersonTypeService } from './util/person-type.service';
import { DynamicComponentLoaderService } from './dynamic-component-loader.service';

import { FormComponentComponent } from './form-component/form-component.component';
import { PhysicalPersonComponent } from './physical-person/physical-person.component';
import { LegalPersonComponent } from './legal-person/legal-person.component';
import { PersonService } from './person/person.service';
import { PersonDirective } from './person/person.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FormComponentComponent,
    LegalPersonComponent,
    PhysicalPersonComponent,
    PersonDirective
  ],
  exports: [
    FormComponentComponent,
    LegalPersonComponent,
    PhysicalPersonComponent
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
