import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponentComponent } from './fundamentals/dynamic-component-loader/form-component/form-component.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'dynamic-component-loader', component: FormComponentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRountingModule { }
