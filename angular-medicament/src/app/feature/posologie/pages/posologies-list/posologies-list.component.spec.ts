import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosologiesListComponent } from './posologies-list.component';

describe('PosologiesListComponent', () => {
  let component: PosologiesListComponent;
  let fixture: ComponentFixture<PosologiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosologiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosologiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
