
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userModel } from 'app/models/users';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myAppUrl: 'http://localhost:55974/api/user';
  list: userModel[];
  data2: userModel[];
  usuarioActivo;
  usertype;
  private actualizarForm = new BehaviorSubject<userModel>({} as any);

  constructor(private http: HttpClient) { }
  guardarProducto(producto: userModel): Observable<userModel> {
    return this.http.post<userModel>('http://localhost:55974/api/user', producto);

  }

  obtenerProductos() {
    this.http.get('http://localhost:55974/api/user').toPromise().then(data => {
      this.list = data as userModel[];
      console.log(data);
    }
    );
  }
  obtenerInfoLogin(usuario, password) {
    this.http.get('http://localhost:55974/api/user/'+usuario+'/'+password).toPromise().then(data => {
      this.list = data as userModel[];
      return this.list;
    }
   
    
    ); return this.list;
  }
  obtenerProductosbyID() {
    this.http.get('http://localhost:55974/api/food/unchecked/1').toPromise().then(data => {
      this.list = data as userModel[];
      console.log(data);
    }
    );
  }
  actualizar(producto){
    this.actualizarForm.next(producto);
  }
  actualizarProducto(producto: userModel): Observable<userModel>{
    return this.http.put<userModel>('http://localhost:55974/api/user',producto);
  }
  obtenerProducto(): Observable<userModel>{
    return this.actualizarForm.asObservable();
  }
  eliminarProducto(id: number): Observable<userModel>{
    return this.http.delete<userModel>('http://localhost:55974/api/user/'+ id);
  }
  getHeroes(): Promise<userModel[]> {
    return this.http.get('http://localhost:55974/api/user')
               .toPromise()
               .then(response => this.list= response as userModel[]);         
  }
  getHeroes2(usuario, password): Promise<userModel[]> {
    return this.http.get('http://localhost:55974/api/user/'+usuario+'/'+password)
               .toPromise()
               .then(response => this.list = response as userModel[]);         
  }
}
