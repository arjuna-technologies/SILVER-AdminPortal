import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstraintValuesComponent } from './constraint-values.component';

describe('RendererComponentsComponent', () => {
  let component: ConstraintValuesComponent;
  let fixture: ComponentFixture<ConstraintValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstraintValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstraintValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
