import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { planesModel } from 'app/models/planesModel';
import { productoModel } from 'app/models/productoModel';
import { PlanService } from 'app/services/planes/plan.service';
import { ProductoService } from 'app/services/productos/producto.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registro-consumo',
  templateUrl: './registro-consumo.component.html',
  styleUrls: ['./registro-consumo.component.css']
})
export class RegistroConsumoComponent implements OnInit {
  form: FormGroup;
  formCalorias: FormGroup;

  arrayProductos: any[];
  productos: any[];
  cantidadCalorias = 0;
  plan : planesModel;

  calorias: any[];
  arrayCalorias: any[];

  constructor(private toastr: ToastrService, private formBuilder: FormBuilder, private productoService: ProductoService,private planService: PlanService, private fb: FormBuilder) {
    this.form = this.formBuilder.group({
      desayuno: ['', [Validators.required]],
      id_plan: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      meriendaTarde: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      calorias: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      merienda: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      almuerzo: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      cena: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],


    });
  }

  ngOnInit(): void {
    this.arrayProductos = [];
    this.productos = [];
    this.calorias = [];
    this.arrayCalorias = [];

    this.form = this.fb.group({
      meriendaTarde: [],
      calorias: [],
      id_plan: [],
      desayuno: [],
      merienda: [],
      almuerzo: [],
      cena: [],
    });
    this.planService.obtenerPlan().subscribe(data => {
      console.log(data);
      this.plan = data;
      this.form.patchValue({
        id_plan: this.plan.name_plan,
        desayuno: this.plan.breakfast,
        merienda: this.plan.morning_snack,
        almuerzo: this.plan.lunch,
        meriendaTarde: this.plan.afternoon_snack,
        cena: this.plan.dinner,
      
      })
    })
    this.productoService.obtenerProducto().subscribe(data => {
      console.log(data);
    });
    this.obtenerProductos();
    this.productoService.obtenerProductos();
    this.planService.obtenerPlanes();
  }
  agregar(){
    const empleado: planesModel = {
     
      name_plan : this.form.get('id_plan').value,
      breakfast :  this.form.get('desayuno').value.toString(),
      morning_snack : this.form.get('merienda').value.toString(),
      lunch : this.form.get('almuerzo').value.toString(),
      afternoon_snack : this.form.get('meriendaTarde').value.toString(),
      dinner : this.form.get('cena').value.toString(),
      id_patient_nutritionist:0,
      
    }
    
    this.planService.guardarPlan(empleado).subscribe(data=>{
      this.toastr.success('Tarjeta Guardada', 'Agregada Exitosamente');
      console.log(data);
      
    })
  }
  obtenerProductos() {
    this.productoService.obtenerProductos();
    this.productoService.getHeroes().then(data => {
      this.productos as productoModel[];
      this.productos = data as productoModel[];
      for (let movie of this.productos) {
        var nombreMovie = movie.description_food;
        this.arrayProductos.push(nombreMovie);
      }
      console.log(this.arrayProductos);
      for (let producto of this.productos) {
        var nombreMovie = producto.energy_food;
        this.arrayCalorias.push(nombreMovie);
      }
      console.log(this.arrayCalorias);
    });
  }
  entrelazador() {
    var calorias = (document.getElementById("desayuno")) as HTMLSelectElement;
    this.actualizarCalorias(calorias);
    calorias = (document.getElementById("merienda")) as HTMLSelectElement;
    this.actualizarCalorias(calorias);
    calorias = (document.getElementById("almuerzo")) as HTMLSelectElement;
    this.actualizarCalorias(calorias);
    calorias = (document.getElementById("meriendaTarde")) as HTMLSelectElement;
    this.actualizarCalorias(calorias);
    calorias = (document.getElementById("cena")) as HTMLSelectElement;
    this.actualizarCalorias(calorias);
    console.log("CACA "+ this.form.get('desayuno').value );
  }
  actualizarCalorias(calorias) {
    var controlContent = calorias.textContent;
    console.log(controlContent);
    var largoPalabra = this.WordCount(controlContent);
    for (var i = 0; i < largoPalabra; i++) {
      for (var j = 0; j < this.arrayProductos.length; j++) {
        var temporal = controlContent.split(',')[i];
        var temporal1 = temporal.trim();
        var temporalArray = this.arrayProductos[j];
        if (temporal1 === temporalArray) {
          this.cantidadCalorias += this.arrayCalorias[j];
        }
      }

    }
    console.log(this.cantidadCalorias);
    var comidaIndividual = controlContent.split(',')[0];
    console.log(comidaIndividual);

    this.productoService.obtenerProductos();
    //  this.form.get('calorias').patchValue('yaasdf');

    this.form.get('calorias').setValue(this.cantidadCalorias);

    // this.obtenerProductos();
  }
  WordCount(str) {
    var totalSoFar = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] === ",") {
        totalSoFar += 1;
      }
      // console.log(totalSoFar);
    }
    return totalSoFar + 1; // you need to return something.

  }

}
