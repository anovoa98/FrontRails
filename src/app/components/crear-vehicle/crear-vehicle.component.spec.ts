import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVehicleComponent } from './crear-vehicle.component';

describe('CrearVehicleComponent', () => {
  let component: CrearVehicleComponent;
  let fixture: ComponentFixture<CrearVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
