import { Component, OnInit } from '@angular/core';
import { PlanService } from 'app/services/planes/plan.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-planes',
  templateUrl: './lista-planes.component.html',
  styleUrls: ['./lista-planes.component.css']
})
export class ListaPlanesComponent implements OnInit {

  enableEdit = false;
  enableEditIndex = null;
  constructor(public employeeService: PlanService, public toastr: ToastrService) { }
  ngOnInit(): void {
    this.employeeService.obtenerPlanes();
  }
  eliminarTarjeta(id) {
    if (confirm('Desea eliminar la tarjeta?')) {
      const index = this.employeeService.list.indexOf(id);
      this.employeeService.list.splice(index, 1);
      this.employeeService.eliminarPlan(id).subscribe(data => {
        this.toastr.warning('Eliminar Exitoso', 'Tarjeta Eliminada');

        this.employeeService.obtenerPlanes();
      })
    }
  }
  editar(tarjeta) {
    this.employeeService.actualizar(tarjeta);
  //   this.employee.put=true;
  //   console.log(this.employee.put); 
}
  enableEditMethod(e, i) {
    this.enableEdit = true;
    this.enableEditIndex = i;
    console.log(i, e);
  }
}
