import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { medidasModel } from 'app/models/medidas';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeasureService {
  myAppUrl: 'http://localhost:55974/api/nutritionist';
  list: medidasModel[];
  private actualizarForm = new BehaviorSubject<medidasModel>({} as any);

  constructor(private http: HttpClient) { }
  guardarProducto(producto: medidasModel): Observable<medidasModel> {
    return this.http.post<medidasModel>('http://localhost:55974/api/nutritionist', producto);

  }

  obtenerProductos() {
    this.http.get('http://localhost:55974/api/nutritionist').toPromise().then(data => {
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
    return this.http.put<medidasModel>('http://localhost:55974/api/nutritionist',producto);
  }
  obtenerProducto(): Observable<medidasModel>{
    return this.actualizarForm.asObservable();
  }
  eliminarProducto(id: number): Observable<medidasModel>{
    return this.http.delete<medidasModel>('http://localhost:55974/api/nutritionist/'+ id);
  }
  getHeroes(): Promise<medidasModel[]> {
    return this.http.get('http://localhost:55974/api/nutritionist')
               .toPromise()
               .then(response => this.list= response as medidasModel[]);         
  }
}
