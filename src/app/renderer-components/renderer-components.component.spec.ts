import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendererComponentsComponent } from './renderer-components.component';

describe('RendererComponentsComponent', () => {
  let component: RendererComponentsComponent;
  let fixture: ComponentFixture<RendererComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendererComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendererComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
