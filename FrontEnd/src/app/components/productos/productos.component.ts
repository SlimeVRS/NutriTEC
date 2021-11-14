import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productoModel } from 'app/models/productoModel';
import { ProductoService } from 'app/services/productos/producto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  form:FormGroup;
 
  list: productoModel[];
  cliente: productoModel;
  put: Boolean;

  constructor(private formBuilder: FormBuilder, private clientService: ProductoService, private toastr: ToastrService) {
    this.form = this.formBuilder.group({
     
      id_food: ['', [Validators.required]],
      description_food: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      portion_food: ['', [Validators.required, Validators.maxLength(16),Validators.minLength(1)]],
      fat_food: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      vitamins_food: ['', [Validators.required, Validators.maxLength(16),Validators.minLength(1)]],
      calcium_food: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      sodium_food: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      carbs_food: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      energy_food: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      protein_food: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      food_state: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      iron_food: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
    });
  }

  ngOnInit(): void {
    this.clientService.obtenerProducto().subscribe(data => {
      console.log(data);
      this.cliente = data;
      this.form.patchValue({
        id_food: this.cliente.id_food,
        description_food: this.cliente.description_food,
        portion_food: this.cliente.portion_food,
        fat_food: this.cliente.fat_food,
        vitamins_food: this.cliente.vitamins_food,
        calcium_food: this.cliente.calcium_food,
        sodium_food: this.cliente.sodium_food,
        carbs_food: this.cliente.carbs_food,
        energy_food: this.cliente.energy_food,
        protein_food: this.cliente.protein_food,
        food_state: this.cliente.food_state,
        iron_food:this.cliente.iron_food,
      })
    })
    this.put=false;
  }
  guardarProducto(){
    console.log(this.put);
    if(this.put===true){
      this.editar();
    }else{
      this.agregar();
    }
  }
  agregar() {
    const cliente: productoModel = {
      id_food: this.form.get('id_food').value,
      description_food: this.form.get('description_food').value,
      portion_food: this.form.get('portion_food').value,
      fat_food: this.form.get('fat_food').value,
      vitamins_food: this.form.get('vitamins_food').value,
      calcium_food: this.form.get('calcium_food').value,
      sodium_food: this.form.get('sodium_food').value,
      carbs_food: this.form.get('carbs_food').value,
      energy_food: this.form.get('energy_food').value,
      protein_food: this.form.get('protein_food').value,
      food_state: this.form.get('food_state').value,
      iron_food: this.form.get('iron_food').value,
    }
    this.clientService.guardarProducto(cliente).subscribe(data => {
      this.toastr.success('Producto Guardado', 'Enviado Exitosamente');
      this.form.reset();
    });

    console.log(this.form);
    console.log(cliente);
  }
  editar() {
    const cliente: productoModel = {
      id_food: this.form.get('id_food').value,
      description_food: this.form.get('description_food').value,
      portion_food: this.form.get('portion_food').value,
      fat_food: this.form.get('fat_food').value,
      vitamins_food: this.form.get('vitamins_food').value,
      calcium_food: this.form.get('calcium_food').value,
      sodium_food: this.form.get('sodium_food').value,
      carbs_food: this.form.get('carbs_food').value,
      energy_food: this.form.get('energy_food').value,
      protein_food: this.form.get('protein_food').value,
      food_state: this.form.get('food_state').value,
      iron_food: this.form.get('iron_food').value,
    }
    this.clientService.actualizarProducto(cliente).subscribe(data => {
      this.toastr.success('Cliente Actualizado', 'Agregada Exitosamente');
      this.form.reset();
    });

    console.log(this.form);
    console.log(cliente);
  }


}
