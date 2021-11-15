import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userModel } from 'app/models/users';
import { UserService } from 'app/services/user/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder, private userService: UserService, private toastr: ToastrService) { }
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
      console.log(  this.id_delUsuario);
    });
  }

}
