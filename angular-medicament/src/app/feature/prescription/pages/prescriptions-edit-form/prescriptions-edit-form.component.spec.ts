import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionsEditFormComponent } from './prescriptions-edit-form.component';

describe('PrescriptionsEditFormComponent', () => {
  let component: PrescriptionsEditFormComponent;
  let fixture: ComponentFixture<PrescriptionsEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionsEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
