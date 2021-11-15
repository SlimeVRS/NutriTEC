import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { medidasModel } from 'app/models/medidas';
import { MeasureService } from 'app/services/measures/measure.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.component.html',
  styleUrls: ['./medidas.component.css']
})
export class MedidasComponent implements OnInit {
  form: FormGroup;
  list: medidasModel[];
  cliente: medidasModel;

  put: Boolean;

  constructor(private formBuilder: FormBuilder, private userService: MeasureService, private toastr: ToastrService) {
    this.form = this.formBuilder.group({
     
      cedula: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      Pmusculo: ['', [Validators.required]],
      Mcadera: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      Mcuello: ['', [Validators.required, Validators.maxLength(16)]],
      Mcintura: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      dia_medidas: ['', [Validators.required, Validators.maxLength(16)]],
      Pgrasa: ['', [Validators.required, Validators.maxLength(16)]],
      peso: ['', [Validators.required, Validators.maxLength(16)]],
    });
  }

  ngOnInit(): void {
    this.userService.obtenerProducto().subscribe(data => {
      console.log(data);
      this.cliente = data;
      this.form.patchValue({
        cedula: this.cliente.id_patient,
        Pmusculo: this.cliente.muscle_patient,
        Mcadera: this.cliente.hip_patient,
        Mcuello: this.cliente.neck_patient,
        Mcintura: this.cliente.waist_patient,
        dia_medidas: this.cliente.date_patient,
        Pgrasa: this.cliente.fat_patient,
      })
    })
    this.put = false;
  }
  guardarCliente() {
    console.log(this.put);
    if (this.put === true) {
      this.editar();
    } else {
      this.agregar();
    }
  }
  agregar() {
    const cliente: medidasModel = {
      id_patient: this.form.get('cedula').value,
      muscle_patient: this.form.get('Pmusculo').value,
      hip_patient: this.form.get('Mcadera').value,
      neck_patient: this.form.get('Mcuello').value,
      waist_patient: this.form.get('Mcintura').value,
      date_patient: this.form.get('dia_medidas').value,
      fat_patient: this.form.get('Pgrasa').value,
      weight_patient:this.form.get('peso').value,
     
    }
    
    this.userService.guardarProducto(cliente).subscribe(data => {
      this.toastr.success('Tarjeta Guardada', 'Agregada Exitosamente');
      this.form.reset();
    });

    console.log(this.form);
    console.log(cliente);
  }
  editar() {
    const cliente: medidasModel = {
      id_patient: this.form.get('cedula').value,
      muscle_patient: this.form.get('Pmusculo').value,
      hip_patient: this.form.get('Mcadera').value,
      neck_patient: this.form.get('Mcuello').value,
      waist_patient: this.form.get('Mcintura').value,
      date_patient: this.form.get('dia_medidas').value,
      fat_patient: this.form.get('Pgrasa').value,
      weight_patient:this.form.get('peso').value,

    }
    this.userService.actualizarProducto(cliente).subscribe(data => {
      this.toastr.success('Cliente Actualizado', 'Agregada Exitosamente');
      this.form.reset();
    });

    console.log(this.form);
    console.log(cliente);
  }

}
