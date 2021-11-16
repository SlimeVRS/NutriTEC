import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'app/services/client/cliente.service';
import { MeasureService } from 'app/services/measures/measure.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tablapacientes',
  templateUrl: './tablapacientes.component.html',
  styleUrls: ['./tablapacientes.component.css']
})
export class TablapacientesComponent implements OnInit {

  enableEdit = false;
  enableEditIndex = null;
  constructor(public asignarPaciente:MeasureService, private toastr:ToastrService,
    public clientService:ClienteService) { }
  ngOnInit(): void {
    this.clientService.obtenerClientes();
  }
  eliminarTarjeta(id){
    if(confirm('Desea eliminar la tarjeta?')){
    const index = this.clientService.list.indexOf(id);
     this.clientService.list.splice(index,1);
      this.clientService.eliminarCliente(id).subscribe(data=>{
         this.toastr.warning('Eliminar Exitoso', 'Tarjeta Eliminada');
 
         this.clientService.obtenerClientes();
      })
    }
   }
   editar(tarjeta){
     this.asignarPaciente.actualizar(tarjeta);
    //  this.cliente.put=true;
   }
   enableEditMethod(e, i) {
     this.enableEdit = true;
     this.enableEditIndex = i;
     console.log(i, e);
   }


}
