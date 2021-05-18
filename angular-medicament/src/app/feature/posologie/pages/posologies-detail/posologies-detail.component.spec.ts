import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosologiesDetailComponent } from './posologies-detail.component';

describe('PosologiesDetailComponent', () => {
  let component: PosologiesDetailComponent;
  let fixture: ComponentFixture<PosologiesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosologiesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosologiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
