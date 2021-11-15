import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { clientModel } from 'app/models/clientModel';
import { userModel } from 'app/models/users';
import { ClienteService } from 'app/services/client/cliente.service';
import { UserService } from 'app/services/user/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  list: clientModel[];
  cliente: clientModel;

  put: Boolean;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private clientService: ClienteService, private toastr: ToastrService) {
    this.form = this.formBuilder.group({
      id1: 0,
      cedula:['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      nombre: ['', [Validators.required]],
      nombre2: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      apellido1: ['', [Validators.required, Validators.maxLength(16)]],
      apellido2: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      dia_nacimiento: ['', [Validators.required, Validators.maxLength(16)]],
      Peso: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      PesoActual: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      IMC: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      Calorias: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      Pais: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      Cintura: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      Cuello: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      Cadera: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      Musculo: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      Muslo: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      Grasa: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      CaloriasDiarias: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      username: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
    });
  }

  ngOnInit(): void {
    this.clientService.obtenerCliente().subscribe(data => {
      console.log(data);
      this.cliente = data;
      this.form.patchValue({
        nombre: this.cliente.first_name_patient,
        nombre2: this.cliente.second_name_patient,
        apellido1: this.cliente.first_last_name_patient,
        apellido2: this.cliente.second_last_name_patient,
        dia_nacimiento: this.cliente.birth_date_patient,
        Peso: this.cliente.weight_patient,
        PesoActual: this.cliente.actual_weight_patient,
        IMC: this.cliente.imc_patient,
        Calorias: this.cliente.calories_patient,
        Pais: this.cliente.country_patient,
        Cintura: this.cliente.waist_patient,
        Cuello: this.cliente.neck_patient,
        Cadera: this.cliente.hip_patient,
        Muslo: this.cliente.thigh_patient,
        Musculo: this.cliente.muscle_patient,
        Grasa: this.cliente.fat_patient,
        CaloriasDiarias: this.cliente.calories_patient,
        cedula:this.cliente.id_patient,
      
      })
    })
    this.put=false;
  }
  guardarCliente(){
    console.log(this.put);
    if(this.put===true){
      this.editar();
    }else{
      this.agregar();
    }
  }
  agregar() {
    const cliente: clientModel = {
      id_patient:this.form.get('cedula').value,
      first_name_patient: this.form.get('nombre').value,
      second_name_patient: this.form.get('nombre2').value,
      first_last_name_patient: this.form.get('apellido1').value,
      second_last_name_patient: this.form.get('apellido2').value,
      birth_date_patient: this.form.get('dia_nacimiento').value,
      weight_patient: this.form.get('Peso').value,
      actual_weight_patient: this.form.get('PesoActual').value,
      imc_patient: this.form.get('IMC').value,
      calories_patient: this.form.get('Calorias').value,
      country_patient: this.form.get('Pais').value,
      waist_patient: this.form.get('Cintura').value,
      neck_patient: this.form.get('Cuello').value,
	    hip_patient: this.form.get('Cadera').value,
      thigh_patient: this.form.get('Muslo').value,
      fat_patient: this.form.get('Grasa').value,
      muscle_patient: this.form.get('Musculo').value,
      id_nutritionist_patient:0,
    }
    const user: userModel = {
      username: this.form.get('username').value,
      password: this.form.get('password').value,
      email: this.form.get('email').value,
      user_owner:this.form.get('cedula').value,
      usertype: 2,
    }
    this.userService.guardarProducto(user).subscribe(data => {
      this.toastr.success('Tarjeta Guardada', 'Agregada Exitosamente');
      console.log(user);
      this.form.reset();
    });
    this.clientService.guardarCliente(cliente).subscribe(data => {
      this.toastr.success('Tarjeta Guardada', 'Agregada Exitosamente');
      this.form.reset();
    });

    console.log(this.form);
    console.log(cliente);
  }
  editar() {
    const cliente: clientModel = {
      id_patient:this.form.get('cedula').value,
      first_name_patient: this.form.get('nombre').value,
      second_name_patient: this.form.get('nombre2').value,
      first_last_name_patient: this.form.get('apellido1').value,
      second_last_name_patient: this.form.get('apellido2').value,
      birth_date_patient: this.form.get('dia_nacimiento').value,
      weight_patient: this.form.get('Peso').value,
      actual_weight_patient: this.form.get('PesoActual').value,
      imc_patient: this.form.get('IMC').value,
      calories_patient: this.form.get('Calorias').value,
      country_patient: this.form.get('Pais').value,
      waist_patient: this.form.get('Cintura').value,
      neck_patient: this.form.get('Cuello').value,
	    hip_patient: this.form.get('Cadera').value,
      thigh_patient: this.form.get('Muslo').value,
      fat_patient: this.form.get('Grasa').value,
      muscle_patient: this.form.get('Musculo').value,
    }
    this.clientService.actualizarCliente(cliente).subscribe(data => {
      this.toastr.success('Cliente Actualizado', 'Agregada Exitosamente');
      this.form.reset();
    });

    console.log(this.form);
    console.log(cliente);
  }

}
