import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRutasComponent } from './app-rutas.component';

describe('AppRutasComponent', () => {
  let component: AppRutasComponent;
  let fixture: ComponentFixture<AppRutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
