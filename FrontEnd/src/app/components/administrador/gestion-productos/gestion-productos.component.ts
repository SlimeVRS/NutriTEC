import { Component, OnInit } from '@angular/core';
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
    this.productoService.obtenerProductos();
  }
  eliminarProducto(id) {
    if (confirm('Desea eliminar el producto?')) {
      const index = this.productoService.list.indexOf(id);
      this.productoService.list.splice(index, 1);
      this.productoService.eliminarProducto(id).subscribe(data => {
        this.toastr.warning('Eliminar Exitoso', 'Producto Eliminada');
        this.productoService.obtenerProductos();
      })
    }
  }
  editar(producto) {
    this.productoService.actualizar(producto);
    // this.employee.put=true;
    // console.log(this.employee.put);
  }
  enableEditMethod(e, i) {
    this.enableEdit = true;
    this.enableEditIndex = i;
    console.log(i, e);
  }

}
