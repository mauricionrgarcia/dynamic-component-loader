import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalPersonComponent } from './physical-person.component';

describe('PhysicalPersonComponent', () => {
  let component: PhysicalPersonComponent;
  let fixture: ComponentFixture<PhysicalPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
