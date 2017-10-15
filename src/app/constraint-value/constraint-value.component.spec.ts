import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstraintValueComponent } from './constraint-value.component';

describe('ConstraintValueComponent', () => {
  let component: ConstraintValueComponent;
  let fixture: ComponentFixture<ConstraintValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstraintValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstraintValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
