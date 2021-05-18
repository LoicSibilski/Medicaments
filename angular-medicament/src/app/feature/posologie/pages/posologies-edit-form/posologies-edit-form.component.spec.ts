import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosologiesEditFormComponent } from './posologies-edit-form.component';

describe('PosologiesEditFormComponent', () => {
  let component: PosologiesEditFormComponent;
  let fixture: ComponentFixture<PosologiesEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosologiesEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosologiesEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
