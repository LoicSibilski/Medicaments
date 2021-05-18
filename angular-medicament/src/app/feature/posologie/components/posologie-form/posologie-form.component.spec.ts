import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosologieFormComponent } from './posologie-form.component';

describe('PosologieFormComponent', () => {
  let component: PosologieFormComponent;
  let fixture: ComponentFixture<PosologieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosologieFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosologieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
