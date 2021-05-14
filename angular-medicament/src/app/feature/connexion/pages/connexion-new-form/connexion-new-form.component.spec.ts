import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionNewFormComponent } from './connexion-new-form.component';

describe('ConnexionNewFormComponent', () => {
  let component: ConnexionNewFormComponent;
  let fixture: ComponentFixture<ConnexionNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
