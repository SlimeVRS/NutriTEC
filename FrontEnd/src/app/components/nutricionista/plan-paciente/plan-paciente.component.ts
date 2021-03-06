import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { asignacionPlanModel } from 'app/models/asignacionPlanModel';
import { clientModel } from 'app/models/clientModel';
import { planesModel } from 'app/models/planesModel';
import { productoModel } from 'app/models/productoModel';
import { ClienteService } from 'app/services/client/cliente.service';
import { MeasureService } from 'app/services/measures/measure.service';
import { PlanService } from 'app/services/planes/plan.service';
import { ProductoService } from 'app/services/productos/producto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-plan-paciente',
  templateUrl: './plan-paciente.component.html',
  styleUrls: ['./plan-paciente.component.css']
})
export class PlanPacienteComponent implements OnInit {

  constructor(private asignarPlan:MeasureService,private formBuilder: FormBuilder, private productoService:ClienteService,public planesService: PlanService, public toastr: ToastrService) { }
  productosForm: FormGroup;
  productos:any[];
  productosArray:any[];
  planes:any[];
  planesArray:any[];
  planesForm:FormGroup;
  ngOnInit(): void {
    this.productosArray=[];
    this.productos=[];
    this.productosForm = this.formBuilder.group({
      directoresx: []
    });
    this.planesService.obtenerPlanes();
    this.planesArray=[];
    this.planes=[];
    this.planesForm = this.formBuilder.group({
      planesControl: []
    });
    this.planesService.obtenerPlanes();
    this.obtenerPlanes();
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
  obtenerPlanes() {
    this.planesService.obtenerPlanes();
    this.planesService.getHeroes().then(data => {
      this.planes as planesModel[];
      this.planes = data as planesModel[];
      for (let director of this.planes) {
        var nombredirector = director.id_plan;
        this.planesArray.push(nombredirector);
        this.planesArray.push(director.name_plan);
      }
      //  this.populateArray(this.filas,this.columnas);
      console.log(this.planesArray);
    });
  }
  getValueDate() {
    var hora = (document.getElementById("clientes")) as HTMLSelectElement;
    var selF = hora.selectedIndex;
    var optF = hora.options[selF];
    var valorFilas = (<HTMLSelectElement><unknown>optF).textContent;
    return valorFilas;
    
  }
  getValueDate2() {
    var hora = (document.getElementById("planes")) as HTMLSelectElement;
    var selF = hora.selectedIndex;
    var optF = hora.options[selF];
    var valorFilas = (<HTMLSelectElement><unknown>optF).textContent;
    return valorFilas;
    
  }
  agregar() {
    const cliente: asignacionPlanModel = {
      id_patient_nutritionist: parseInt(this.getValueDate()),
      id_plan:  parseInt(this.getValueDate2()),
    }
    this.asignarPlan.guardarAsignacionPlan(cliente).subscribe(data => {
      console.log(data);
      this.toastr.success('Producto Guardado', 'Enviado Exitosamente');
    });
    console.log(cliente);
  }

}
