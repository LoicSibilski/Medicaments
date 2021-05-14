import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionsDetailComponent } from './prescriptions-detail.component';

describe('PrescriptionsDetailComponent', () => {
  let component: PrescriptionsDetailComponent;
  let fixture: ComponentFixture<PrescriptionsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
