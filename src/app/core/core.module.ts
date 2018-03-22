import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRountingModule } from './../app-routing-module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    AppRountingModule
  ],
  declarations: [ NavbarComponent ],
  exports: [ NavbarComponent ]
})
export class CoreModule { }
