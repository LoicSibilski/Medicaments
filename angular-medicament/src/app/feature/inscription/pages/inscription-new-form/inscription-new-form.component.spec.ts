import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionNewFormComponent } from './inscription-new-form.component';

describe('InscriptionNewFormComponent', () => {
  let component: InscriptionNewFormComponent;
  let fixture: ComponentFixture<InscriptionNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
