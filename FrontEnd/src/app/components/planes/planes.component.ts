import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  form:FormGroup;
  formCalorias:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.form = this.formBuilder.group({
      elecciones: ['', [Validators.required]],
      id_plan: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      calorias: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
    });
  }
  
  ngOnInit(): void {
   
  }
  elecciones = new FormControl();
  eleccionesLista: string[]=['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  actualizarCalorias(){
    
  //  this.form.get('calorias').patchValue('yaasdf');
    this.form.get('calorias').setValue("ss");
    
  }
}
