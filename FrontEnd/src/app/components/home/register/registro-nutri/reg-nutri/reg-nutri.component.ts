import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nutricionistaModel } from 'app/models/nutricionistaModel';
import { userModel } from 'app/models/users';
import { ClienteService } from 'app/services/client/cliente.service';
import { NutricionistaService } from 'app/services/nutricionista/nutricionista.service';
import { UserService } from 'app/services/user/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-reg-nutri',
  templateUrl: './reg-nutri.component.html',
  styleUrls: ['./reg-nutri.component.css']
})
export class RegNutriComponent implements OnInit {
  form: FormGroup;
  list: nutricionistaModel[];
  cliente: nutricionistaModel;

  put: Boolean;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private clientService: NutricionistaService, private toastr: ToastrService) {
    this.form = this.formBuilder.group({
      id1: 0,
      cedula: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      nombre: ['', [Validators.required]],
      nombre2: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      apellido1: ['', [Validators.required, Validators.maxLength(16)]],
      apellido2: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      dia_nacimiento: ['', [Validators.required, Validators.maxLength(16)]],
      Peso: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      IMC: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      CodigoNutri: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      Cedula: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      Direccion: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      NutriCard: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      TipoCobro: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      usuario: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
    });
  }

  ngOnInit(): void {
    this.clientService.obtenerProducto().subscribe(data => {
      console.log(data);
      this.cliente = data;
      this.form.patchValue({
        nombre: this.cliente.first_name_nutritionist,
        nombre2: this.cliente.second_name_nutritionist,
        apellido1: this.cliente.first_last_name_nutritionist,
        apellido2: this.cliente.second_last_name_nutritionist,
        Cedula: this.cliente.id_nutritionist,
        dia_nacimiento: this.cliente.birth_date_nutritionist,
        Peso: this.cliente.weight_nutritionist,
        IMC: this.cliente.imc_nutritionist,
        Direccion: this.cliente.direction_nutritionist,
        NutriCard: this.cliente.card_nutritionist,
        TipoCobro: this.cliente.payment_nutritionist,
        CodigoNutri: this.cliente.code_nutritionist,
        foto: this.cliente.pfp_nutritionist,

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
    const cliente: nutricionistaModel = {
      id_nutritionist: this.form.get('Cedula').value,
      first_name_nutritionist: this.form.get('nombre').value,
      second_name_nutritionist: this.form.get('nombre2').value,
      first_last_name_nutritionist: this.form.get('apellido1').value,
      second_last_name_nutritionist: this.form.get('apellido2').value,
      birth_date_nutritionist: this.form.get('dia_nacimiento').value,
      weight_nutritionist: this.form.get('Peso').value,
      imc_nutritionist: this.form.get('IMC').value,
      card_nutritionist: this.form.get('NutriCard').value,
      direction_nutritionist: this.form.get('Direccion').value,
      code_nutritionist: this.form.get('CodigoNutri').value,
      pfp_nutritionist: "foto",
      payment_nutritionist: this.form.get('TipoCobro').value,

    }
    const user: userModel = {
      username: this.form.get('usuario').value,
      password: this.form.get('password').value,
      email: this.form.get('email').value,
      user_owner:this.form.get('cedula').value,
      usertype: 1,
    }
    this.userService.guardarProducto(user).subscribe(data => {
      console.log(user);
      this.toastr.success('Tarjeta Guardada', 'Agregada Exitosamente');
      this.form.reset();
    });
    this.clientService.guardarProducto(cliente).subscribe(data => {
      this.toastr.success('Tarjeta Guardada', 'Agregada Exitosamente');
      this.form.reset();
    });

    console.log(this.form);
    console.log(cliente);
  }
  editar() {
    const cliente: nutricionistaModel = {
      id_nutritionist: this.form.get('Cedula').value,
      first_name_nutritionist: this.form.get('nombre').value,
      second_name_nutritionist: this.form.get('nombre2').value,
      first_last_name_nutritionist: this.form.get('apellido1').value,
      second_last_name_nutritionist: this.form.get('apellido2').value,
      birth_date_nutritionist: this.form.get('dia_nacimiento').value,
      weight_nutritionist: this.form.get('Peso').value,
      imc_nutritionist: this.form.get('IMC').value,
      card_nutritionist: this.form.get('NutriCard').value,
      direction_nutritionist: this.form.get('Direccion').value,
      code_nutritionist: this.form.get('CodigoNutri').value,
      pfp_nutritionist: this.form.get('foto').value,
      payment_nutritionist: this.form.get('TipoCobro').value,

    }
    this.clientService.actualizarProducto(cliente).subscribe(data => {
      this.toastr.success('Cliente Actualizado', 'Agregada Exitosamente');
      this.form.reset();
    });

    console.log(this.form);
    console.log(cliente);
  }
}
