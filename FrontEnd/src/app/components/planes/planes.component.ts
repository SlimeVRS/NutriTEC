import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { productoModel } from 'app/models/productoModel';
import { ProductoService } from 'app/services/productos/producto.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  form:FormGroup;
  formCalorias:FormGroup;

  arrayProductos:any[];
  productos:any[];

  calorias:any[];
  arrayCalorias:any[];

  constructor(private formBuilder:FormBuilder, private productoService:ProductoService,private fb: FormBuilder) { 
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
    this.arrayProductos=[];
    this.productos=[];
    this.calorias=[];
    this.arrayCalorias=[];

    this.form = this.fb.group({
      meriendaTarde: [],
      calorias: [],
      id_plan:[],
      desayuno:[],
      merienda:[],
      almuerzo:[],
      cena:[],
    });
    this.productoService.obtenerProducto().subscribe(data => {
      console.log(data);
    });
    this.obtenerProductos();
    this.productoService.obtenerProductos();
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
      for (let movie of this.productos) {
        var nombreMovie = movie.carbs_food;
        this.arrayCalorias.push(nombreMovie);
      }
      console.log(this.arrayCalorias);
    });
  }

  // elecciones = new FormControl();
  // eleccionesLista: string[]=['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  actualizarCalorias(){
    var hora = (document.getElementById("merienda")) as HTMLSelectElement;
     var valorFilas=hora.textContent
     var selF = hora.selectedIndex;
    // var optF = hora.options[selF];
    // var valorFilas = (<HTMLSelectElement><unknown>optF).textContent;
    console.log(valorFilas);
    this.productoService.obtenerProductos()
  //  this.form.get('calorias').patchValue('yaasdf');
  
    // this.form.get('calorias').setValue("ss");
    
    // this.obtenerProductos();
  }
}
