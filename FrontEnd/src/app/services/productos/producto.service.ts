import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { productoModel } from 'app/models/productoModel';
import { HttpClient } from '@angular/common/http'; 
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  myAppUrl: 'http://localhost:55974/api/food';
  list: productoModel[];
  private actualizarForm = new BehaviorSubject<productoModel>({} as any);

  constructor(private http: HttpClient) { }
  guardarProducto(producto: productoModel): Observable<productoModel> {
    return this.http.post<productoModel>('http://localhost:55974/api/food', producto);

  }

  obtenerProductos() {
    this.http.get('http://localhost:55974/api/food').toPromise().then(data => {
      this.list = data as productoModel[];
      console.log(data);
    }
    );
  }
  obtenerProductosbyID() {
    this.http.get('http://localhost:55974/api/food/unchecked/1').toPromise().then(data => {
      this.list = data as productoModel[];
      console.log(data);
    }
    );
  }
  actualizar(producto){
    this.actualizarForm.next(producto);
  }
  actualizarProducto(producto: productoModel): Observable<productoModel>{
    return this.http.put<productoModel>('http://localhost:55974/api/food',producto);
  }
  obtenerProducto(): Observable<productoModel>{
    return this.actualizarForm.asObservable();
  }
  eliminarProducto(id: number): Observable<productoModel>{
    return this.http.delete<productoModel>('http://localhost:55974/api/food/'+ id);
  }
  getHeroes(): Promise<productoModel[]> {
    return this.http.get('http://localhost:55974/api/food')
               .toPromise()
               .then(response => this.list= response as productoModel[]);         
  }
}
