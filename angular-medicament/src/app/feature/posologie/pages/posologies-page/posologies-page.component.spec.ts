import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosologiesPageComponent } from './posologies-page.component';

describe('PosologiesPageComponent', () => {
  let component: PosologiesPageComponent;
  let fixture: ComponentFixture<PosologiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosologiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosologiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
