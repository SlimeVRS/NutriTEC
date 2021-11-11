import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPacienteComponent } from './plan-paciente.component';

describe('PlanPacienteComponent', () => {
  let component: PlanPacienteComponent;
  let fixture: ComponentFixture<PlanPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
