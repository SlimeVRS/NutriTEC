import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { administradorModel } from 'app/models/administradorModel';
import { userModel } from 'app/models/users';
import { AdministradorService } from 'app/services/admin/administrador.service';
import { UserService } from 'app/services/user/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-reg-admin',
  templateUrl: './reg-admin.component.html',
  styleUrls: ['./reg-admin.component.css']
})
export class RegAdminComponent implements OnInit {
  form: FormGroup;
 
  list: administradorModel[];
  cliente: administradorModel;

  put: Boolean;

  constructor(private formBuilder: FormBuilder,private userService:UserService, private adminService: AdministradorService, private toastr: ToastrService) {
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
      Phone: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      usuario: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
   
    });
  }

  ngOnInit(): void {
    this.adminService.obtenerCliente().subscribe(data => {
      console.log(data);
      this.cliente = data;
      this.form.patchValue({
        cedula: this.cliente.id_admin,
        nombre: this.cliente.first_name_admin,
        nombre2: this.cliente.second_name_admin,
        apellido1: this.cliente.first_last_name_admin,
        apellido2: this.cliente.second_last_name_admin,
        Phone: this.cliente.phone_admin,
        

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
    const cliente: administradorModel = {
      id_admin: this.form.get('cedula').value,
      first_name_admin: this.form.get('nombre').value,
      second_name_admin: this.form.get('nombre2').value,
      first_last_name_admin: this.form.get('apellido1').value,
      second_last_name_admin: this.form.get('apellido2').value,
      phone_admin: this.form.get('Phone').value,
  

    }
    const user: userModel = {
      username: this.form.get('usuario').value,
      password: this.form.get('password').value,
      email: this.form.get('email').value,
      usertype: 0,
    }
    this.userService.guardarProducto(user).subscribe(data => {
      this.toastr.success('Tarjeta Guardada', 'Agregada Exitosamente');
      this.form.reset();
    });
    this.adminService.guardarCliente(cliente).subscribe(data => {
      this.toastr.success('Tarjeta Guardada', 'Agregada Exitosamente');
      this.form.reset();
    });

    console.log(this.form);
    console.log(cliente);
  }
  editar() {
    const cliente: administradorModel = {
      id_admin: this.form.get('Cedula').value,
      first_name_admin: this.form.get('nombre').value,
      second_name_admin: this.form.get('nombre2').value,
      first_last_name_admin: this.form.get('apellido1').value,
      second_last_name_admin: this.form.get('apellido2').value,
      phone_admin: this.form.get('dia_nacimiento').value,

    }
    this.adminService.actualizarCliente(cliente).subscribe(data => {
      this.toastr.success('Cliente Actualizado', 'Agregada Exitosamente');
      this.form.reset();
    });

    console.log(this.form);
    console.log(cliente);
  }
}
