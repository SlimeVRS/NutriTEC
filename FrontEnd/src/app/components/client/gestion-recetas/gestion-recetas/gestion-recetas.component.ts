import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-gestion-recetas',
  templateUrl: './gestion-recetas.component.html',
  styleUrls: ['./gestion-recetas.component.css']
})
export class GestionRecetasComponent implements OnInit {
  form:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
