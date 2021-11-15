import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { planesModel } from 'app/models/planesModel';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  myAppUrl: 'http://localhost:55974/api/plan';
  list: planesModel[];
  private actualizarForm = new BehaviorSubject<planesModel>({} as any);

  constructor(private http: HttpClient) { }
  guardarPlan(plan: planesModel): Observable<planesModel> {
    console.log(plan);
    return this.http.post<planesModel>('http://localhost:55974/api/plan', plan);

  }

  obtenerPlanes() {
    this.http.get('http://localhost:55974/api/plan').toPromise().then(data => {
      this.list = data as planesModel[];
      console.log(data);
    }
    );
  }
  actualizar(producto){
    this.actualizarForm.next(producto);
  }
  actualizarPlan(producto: planesModel): Observable<planesModel>{
    return this.http.put<planesModel>('http://localhost:55974/api/plan',producto);
  }
  obtenerPlan(): Observable<planesModel>{
    return this.actualizarForm.asObservable();
  }
  eliminarPlan(id: number): Observable<planesModel>{
    return this.http.delete<planesModel>('http://localhost:55974/api/plan/'+ id);
  }
  getHeroes(): Promise<planesModel[]> {
    return this.http.get('http://localhost:55974/api/plan')
               .toPromise()
               .then(response => this.list= response as planesModel[]);         
  }
}
