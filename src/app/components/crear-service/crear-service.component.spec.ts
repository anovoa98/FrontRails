import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearServiceComponent } from './crear-service.component';

describe('CrearServiceComponent', () => {
  let component: CrearServiceComponent;
  let fixture: ComponentFixture<CrearServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
