import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro-consumo',
  templateUrl: './registro-consumo.component.html',
  styleUrls: ['./registro-consumo.component.css']
})
export class RegistroConsumoComponent implements OnInit {

  constructor() { }
  form: FormGroup;
  ngOnInit(): void {
  }

}
