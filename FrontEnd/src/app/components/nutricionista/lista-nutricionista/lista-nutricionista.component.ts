import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { clientModel } from 'app/models/clientModel';
import { ClienteService } from 'app/services/client/cliente.service';

@Component({
  selector: 'app-lista-nutricionista',
  templateUrl: './lista-nutricionista.component.html',
  styleUrls: ['./lista-nutricionista.component.css']
})
export class ListaNutricionistaComponent implements OnInit {
  productosForm: FormGroup;
  productos:any[];
  productosArray:any[];
  constructor(private formBuilder: FormBuilder, private productoService:ClienteService) { }

  ngOnInit(): void {
    this.productosArray=[];
    this.productos=[];
    this.productosForm = this.formBuilder.group({
      directoresx: []
    });
    this.productoService.obtenerClientes();
    this.obtenerProductos();
  }
  obtenerProductos() {
    this.productoService.obtenerClientes();
    this.productoService.getHeroes().then(data => {
      this.productos as clientModel[];
      this.productos = data as clientModel[];
      for (let director of this.productos) {
        var nombredirector = director.id_patient;
        this.productosArray.push(nombredirector);
      }
      //  this.populateArray(this.filas,this.columnas);
      console.log(this.productosArray);
    });
  }

}
