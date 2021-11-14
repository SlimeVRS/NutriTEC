import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-plan-paciente',
  templateUrl: './plan-paciente.component.html',
  styleUrls: ['./plan-paciente.component.css']
})
export class PlanPacienteComponent implements OnInit {

  constructor() { }
  form1: FormGroup;
  ngOnInit(): void {
  }

}
