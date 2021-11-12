import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { productoModel } from 'app/models/productoModel';
import { HttpClient } from '@angular/common/http'; 
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  myAppUrl: 'http://localhost:15451/api/Client';
  list: productoModel[];
  private actualizarForm = new BehaviorSubject<productoModel>({} as any);

  constructor(private http: HttpClient) { }
  guardarProducto(producto: productoModel): Observable<productoModel> {
    return this.http.post<productoModel>('http://localhost:15451/api/Client', producto);

  }

  obtenerProductos() {
    this.http.get('http://localhost:15451/api/Client').toPromise().then(data => {
      this.list = data as productoModel[];
    }
    );
  }
  actualizar(producto){
    this.actualizarForm.next(producto);
  }
  actualizarProducto(producto: productoModel): Observable<productoModel>{
    return this.http.put<productoModel>('http://localhost:15451/api/Client',producto);
  }
  obtenerProducto(): Observable<productoModel>{
    return this.actualizarForm.asObservable();
  }
  eliminarProducto(id: number): Observable<productoModel>{
    return this.http.delete<productoModel>('http://localhost:15451/api/Client/'+ id);
  }
}
