import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userModel } from 'app/models/users';
import { CuentaActivaService } from 'app/services/almacen/cuenta-activa.service';
import { UserService } from 'app/services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router,private formBuilder: FormBuilder, private cuentaActivaService: CuentaActivaService, private userService: UserService, private toastr: ToastrService) { }
  form2: FormGroup;
  productos:any[];
  productosArray:any[];
  tipoUsuario;
  id_delUsuario;
 


  
  ngOnInit(): void {
    this.productosArray=[];
    

  
    this.form2 = this.formBuilder.group({
      myUser: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
     
    });
    this.userService.obtenerProductos();
  }
  agregar() {
    this.productos=[];
    var username = this.form2.get('myUser').value;
    var password =this.form2.get('password').value;
    if(username === "" && password===""){
      console.log("ACA"+username + password)
    }else{
      this.obtenerProductos(username,password);
    }
    
   
    // this.modelInfo= this.userService.obtenerInfoLogin(username,password);
    // console.log(this.modelInfo);

  }
  obtenerProductos(username,password) {
   
    this.userService.obtenerProductos();
    this.userService.getHeroes2(username,password).then(data => {
      this.productos as userModel[];
      this.productos = data as userModel[];
      console.log(data);
      var nombredirector = this.productos[Object.keys(this.productos)[4]];
      var nombredirector5 = this.productos[Object.keys(this.productos)[5]];
      this.tipoUsuario=nombredirector;
      this.id_delUsuario=nombredirector5;
      console.log(nombredirector);
      this.cuentaActivaService.storeIddeCuentaActiva(this.id_delUsuario);
      this.cuentaActivaService.storeTipodeCuentaActiva(this.tipoUsuario);
      console.log(this.id_delUsuario);
      if(this.tipoUsuario===0){// 0 admin 1 nutri 2 paciente
        this.router.navigate(['./administrador']); 

      }
      if(this.tipoUsuario===1){// 0 admin 1 nutri 2 paciente
        this.router.navigate(['./nutricionista']); 

      }
      if(this.tipoUsuario===2){// 0 admin 1 nutri 2 paciente
        this.router.navigate(['./client']); 

      }
    });
  }

}
