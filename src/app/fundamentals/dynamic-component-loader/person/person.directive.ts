import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPerson]',
})
export class PersonDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
