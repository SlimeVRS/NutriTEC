import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { recetaModel } from 'app/models/receta';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  myAppUrl: 'http://localhost:55974/api/recipe';
  list: recetaModel[];
  private actualizarForm = new BehaviorSubject<recetaModel>({} as any);

  constructor(private http: HttpClient) { }
  guardarProducto(producto: recetaModel): Observable<recetaModel> {
    console.log(producto);
    return this.http.post<recetaModel>('http://localhost:55974/api/recipe', producto);

  }

  obtenerProductos() {
    this.http.get('http://localhost:55974/api/recipe').toPromise().then(data => {
      this.list = data as recetaModel[];
      console.log(data);
    }
    );
  }
  obtenerProductosbyID() {
    this.http.get('http://localhost:55974/api/food/unchecked/1').toPromise().then(data => {
      this.list = data as recetaModel[];
      console.log(data);
    }
    );
  }
  actualizar(producto){
    this.actualizarForm.next(producto);
  }
  actualizarProducto(producto: recetaModel): Observable<recetaModel>{
    return this.http.put<recetaModel>('http://localhost:55974/api/recipe',producto);
  }
  obtenerProducto(): Observable<recetaModel>{
    return this.actualizarForm.asObservable();
  }
  eliminarProducto(id: number): Observable<recetaModel>{
    return this.http.delete<recetaModel>('http://localhost:55974/api/recipe/'+ id);
  }
  getHeroes(): Promise<recetaModel[]> {
    return this.http.get('http://localhost:55974/api/recipe')
               .toPromise()
               .then(response => this.list= response as recetaModel[]);         
  }
}
