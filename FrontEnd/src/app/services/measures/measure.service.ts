import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { asignacionPlanModel } from 'app/models/asignacionPlanModel';
import { listaPacienteNutricionistaModel } from 'app/models/listadepacienteModel';
import { medidasModel } from 'app/models/medidas';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeasureService {
  myAppUrl: 'http://localhost:55974/api/patient/mymeasures';
  list: medidasModel[];
  private actualizarForm = new BehaviorSubject<medidasModel>({} as any);

  constructor(private http: HttpClient) { }

  guardarProducto(producto: medidasModel): Observable<medidasModel> {
    return this.http.post<medidasModel>('http://localhost:55974/api/patient/mymeasures', producto);
  }

  guardarAsignacionPlan(producto: asignacionPlanModel): Observable<asignacionPlanModel> {
    return this.http.post<asignacionPlanModel>('http://localhost:55974/api/plan/addnewrecipe', producto);
  }
  guardarAsignacionPacienteANutricionista(producto: listaPacienteNutricionistaModel): Observable<listaPacienteNutricionistaModel> {
    return this.http.post<listaPacienteNutricionistaModel>('http://localhost:55974/api/patient/addnutritionist', producto);
  }

  obtenerProductos() {
    this.http.get('http://localhost:55974/api/patient/mymeasures').toPromise().then(data => {
      this.list = data as medidasModel[];
      console.log(data);
    }
    );
  }
  obtenerProductosbyID() {
    this.http.get('http://localhost:55974/api/food/unchecked/1').toPromise().then(data => {
      this.list = data as medidasModel[];
      console.log(data);
    }
    );
  }
  actualizar(producto){
    this.actualizarForm.next(producto);
  }
  actualizarProducto(producto: medidasModel): Observable<medidasModel>{
    return this.http.put<medidasModel>('http://localhost:55974/api/patient/mymeasures',producto);
  }
  obtenerProducto(): Observable<medidasModel>{
    return this.actualizarForm.asObservable();
  }
  eliminarProducto(id: number): Observable<medidasModel>{
    return this.http.delete<medidasModel>('http://localhost:55974/api/patient/mymeasures/'+ id);
  }
  getHeroes(): Promise<medidasModel[]> {
    return this.http.get('http://localhost:55974/api/patient/mymeasures')
               .toPromise()
               .then(response => this.list= response as medidasModel[]);         
  }
}
