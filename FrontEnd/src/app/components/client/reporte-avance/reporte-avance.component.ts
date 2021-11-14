import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reporte-avance',
  templateUrl: './reporte-avance.component.html',
  styleUrls: ['./reporte-avance.component.css']
})
export class ReporteAvanceComponent implements OnInit {
  form:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
