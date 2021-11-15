import { Component, OnInit } from '@angular/core';
import { productoModel } from 'app/models/productoModel';
import { ProductoService } from 'app/services/productos/producto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {

 
  enableEdit = false;
  enableEditIndex = null;
  constructor(public productoService: ProductoService, public toastr: ToastrService) { }
  ngOnInit(): void {
    this.productoService.obtenerProductosbyID();
  }
  eliminarProducto(producto) {
    if (confirm('Desea eliminar el producto?')) {
      // this.productoService.actualizar(producto);
      const cliente: productoModel = {
        id_food:  producto.id_food,
        description_food: producto.description_food,
        portion_food: producto.portion_food,
        fat_food: producto.fat_food,
        vitamins_food: producto.vitamins_food,
        calcium_food: producto.calcium_food,
        sodium_food: producto.sodium_food,
        carbs_food: producto.carbs_food,
        energy_food: producto.energy_food,
        protein_food: producto.protein_food,
        food_state: 2,
        iron_food: producto.iron_food,
      }
      this.productoService.actualizarProducto(cliente).subscribe(data => {
        this.toastr.success('Cliente Actualizado', 'Agregada Exitosamente');
        window.location.reload();
      });
    }
  }
  editar(producto) {
  
    if (confirm('Desea aprobar el producto?')) {
      // this.productoService.actualizar(producto);
      const cliente: productoModel = {
        id_food:  producto.id_food,
        description_food: producto.description_food,
        portion_food: producto.portion_food,
        fat_food: producto.fat_food,
        vitamins_food: producto.vitamins_food,
        calcium_food: producto.calcium_food,
        sodium_food: producto.sodium_food,
        carbs_food: producto.carbs_food,
        energy_food: producto.energy_food,
        protein_food: producto.protein_food,
        food_state: 0,
        iron_food: producto.iron_food,
      }
      this.productoService.actualizarProducto(cliente).subscribe(data => {
        this.toastr.success('Cliente Actualizado', 'Agregada Exitosamente');
        window.location.reload();
      });
    }
    // this.employee.put=true;
    // console.log(this.employee.put);
  }
  enableEditMethod(e, i) {
    this.enableEdit = true;
    this.enableEditIndex = i;
    console.log(i, e);
  }

}
