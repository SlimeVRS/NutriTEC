import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nutricionistaModel } from 'app/models/nutricionistaModel';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutricionistaService {
  myAppUrl: 'http://localhost:55974/api/nutritionist';
  list: nutricionistaModel[];
  private actualizarForm = new BehaviorSubject<nutricionistaModel>({} as any);

  constructor(private http: HttpClient) { }
  guardarProducto(producto: nutricionistaModel): Observable<nutricionistaModel> {
    return this.http.post<nutricionistaModel>('http://localhost:55974/api/nutritionist', producto);

  }

  obtenerProductos() {
    this.http.get('http://localhost:55974/api/nutritionist').toPromise().then(data => {
      this.list = data as nutricionistaModel[];
      console.log(data);
    }
    );
  }
  obtenerProductosbyID() {
    this.http.get('http://localhost:55974/api/food/unchecked/1').toPromise().then(data => {
      this.list = data as nutricionistaModel[];
      console.log(data);
    }
    );
  }
  actualizar(producto){
    this.actualizarForm.next(producto);
  }
  actualizarProducto(producto: nutricionistaModel): Observable<nutricionistaModel>{
    return this.http.put<nutricionistaModel>('http://localhost:55974/api/nutritionist',producto);
  }
  obtenerProducto(): Observable<nutricionistaModel>{
    return this.actualizarForm.asObservable();
  }
  eliminarProducto(id: number): Observable<nutricionistaModel>{
    return this.http.delete<nutricionistaModel>('http://localhost:55974/api/nutritionist/'+ id);
  }
  getHeroes(): Promise<nutricionistaModel[]> {
    return this.http.get('http://localhost:55974/api/nutritionist')
               .toPromise()
               .then(response => this.list= response as nutricionistaModel[]);         
  }
}
