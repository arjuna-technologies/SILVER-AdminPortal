import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFailureDialogComponent } from './login-failure-dialog.component';

describe('LoginFailureDialogComponent', () => {
  let component: LoginFailureDialogComponent;
  let fixture: ComponentFixture<LoginFailureDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFailureDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFailureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
