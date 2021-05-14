import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionsNewFormComponent } from './prescriptions-new-form.component';

describe('PrescriptionsNewFormComponent', () => {
  let component: PrescriptionsNewFormComponent;
  let fixture: ComponentFixture<PrescriptionsNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionsNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionsNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
