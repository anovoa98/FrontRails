import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOwnerComponent } from './crear-owner.component';

describe('CrearOwnerComponent', () => {
  let component: CrearOwnerComponent;
  let fixture: ComponentFixture<CrearOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
