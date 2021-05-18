import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosologiesNewFormComponent } from './posologies-new-form.component';

describe('PosologiesNewFormComponent', () => {
  let component: PosologiesNewFormComponent;
  let fixture: ComponentFixture<PosologiesNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosologiesNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosologiesNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
