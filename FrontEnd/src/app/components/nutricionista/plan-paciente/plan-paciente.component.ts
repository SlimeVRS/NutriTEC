import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { clientModel } from 'app/models/clientModel';
import { productoModel } from 'app/models/productoModel';
import { ClienteService } from 'app/services/client/cliente.service';
import { ProductoService } from 'app/services/productos/producto.service';

@Component({
  selector: 'app-plan-paciente',
  templateUrl: './plan-paciente.component.html',
  styleUrls: ['./plan-paciente.component.css']
})
export class PlanPacienteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private productoService:ClienteService) { }
  productosForm: FormGroup;
  productos:any[];
  productosArray:any[];
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
