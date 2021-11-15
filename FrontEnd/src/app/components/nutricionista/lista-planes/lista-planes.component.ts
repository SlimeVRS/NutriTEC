import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { planesModel } from 'app/models/planesModel';
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
  planes:any[];
  planesArray:any[];
  planesForm:FormGroup;
  constructor(public planesService: PlanService, public toastr: ToastrService,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.planesService.obtenerPlanes();
    this.planesArray=[];
    this.planes=[];
    this.planesForm = this.formBuilder.group({
      planesControl: []
    });
    this.planesService.obtenerPlanes();
    this.obtenerPlanes();
  }
  obtenerPlanes() {
    this.planesService.obtenerPlanes();
    this.planesService.getHeroes().then(data => {
      this.planes as planesModel[];
      this.planes = data as planesModel[];
      for (let director of this.planes) {
        var nombredirector = director.name_plan;
        this.planesArray.push(nombredirector);
      }
      //  this.populateArray(this.filas,this.columnas);
      console.log(this.planesArray);
    });
  }
  
}
