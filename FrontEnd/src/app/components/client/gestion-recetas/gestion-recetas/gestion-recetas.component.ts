import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { productoModel } from 'app/models/productoModel';
import { ProductoService } from 'app/services/productos/producto.service';
@Component({
  selector: 'app-gestion-recetas',
  templateUrl: './gestion-recetas.component.html',
  styleUrls: ['./gestion-recetas.component.css']
})
export class GestionRecetasComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder: FormBuilder, private productoService:ProductoService) { }
  productos:any[];
  productosArray:any[];
  productosForm:FormGroup;
  ngOnInit(): void {
    this.productosArray=[];
    this.productos=[];
    this.productosForm = this.formBuilder.group({
      directoresx: []
    });
    this.form = this.formBuilder.group({
      RecetaNombre: []
    });
    this.productoService.obtenerProductos();
    this.obtenerProductos();
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
