import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { productoModel } from 'app/models/productoModel';
import { recetaModel } from 'app/models/receta';
import { CuentaActivaService } from 'app/services/almacen/cuenta-activa.service';
import { ProductoService } from 'app/services/productos/producto.service';
import { RecetaService } from 'app/services/recetas/receta.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-gestion-recetas',
  templateUrl: './gestion-recetas.component.html',
  styleUrls: ['./gestion-recetas.component.css']
})
export class GestionRecetasComponent implements OnInit {
  form:FormGroup;

  constructor(private toastr: ToastrService,private asignarPaciente:CuentaActivaService,private recetaService:RecetaService,private formBuilder: FormBuilder, private productoService:ProductoService) {
    this.form = this.formBuilder.group({
     
      directoresx: ['', [Validators.required]],
      RecetaNombre: ['', [Validators.required]],
    
    });
  }
  productos:any[];
  productosArray:any[];
  productosForm:FormGroup;
  ngOnInit(): void {
    this.productosArray=[];
    this.productos=[];
    this.form = this.formBuilder.group({
      RecetaNombre: []
    });
    this.productosForm = this.formBuilder.group({
      directoresx: []
    });

   
    this.productoService.obtenerProductos();
    this.obtenerProductos();
  }
  agregar(){
    const empleado: recetaModel = {
      name_recipe : this.form.get('RecetaNombre').value,
      ingredients :  this.productosForm.get('directoresx').value.toString(),
      id_patient_recipe : this.asignarPaciente.IdCuenta,
    }
    this.recetaService.guardarProducto(empleado).subscribe(data=>{
      
      this.toastr.success('Tarjeta Guardada', 'Agregada Exitosamente');
      console.log(data.ingredients);
      
    })
  }
  obtenerProductos() {
    this.productoService.obtenerProductos();
    this.productoService.getHeroes().then(data => {
      this.productos as productoModel[];
      this.productos = data as productoModel[];
      for (let director of this.productos) {
        var nombredirector = director.description_food;
        this.productosArray.push(nombredirector);
      }
      //  this.populateArray(this.filas,this.columnas);
      console.log(this.productosArray);
    });
  }
}
