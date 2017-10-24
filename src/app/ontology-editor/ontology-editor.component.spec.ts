import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OntologyEditorComponent } from './ontology-editor.component';

describe('OntologyEditorComponent', () => {
  let component: OntologyEditorComponent;
  let fixture: ComponentFixture<OntologyEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OntologyEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OntologyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
