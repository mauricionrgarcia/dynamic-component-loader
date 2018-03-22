import { DynamicComponentLoaderModule } from './dynamic-component-loader/dynamic-component-loader.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    DynamicComponentLoaderModule
  ],
  declarations: [ ],
  exports: [ ]
})
export class FundamentalsModule { }
