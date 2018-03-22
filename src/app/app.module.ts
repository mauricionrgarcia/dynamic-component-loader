import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AppRountingModule } from './app-routing-module';

import { FundamentalsModule } from './fundamentals/fundamentals.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRountingModule,
    FundamentalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
