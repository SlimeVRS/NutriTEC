import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { administradorModel } from 'app/models/administradorModel';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  myAppUrl: 'http://localhost:55974/api/admin';
  list: administradorModel[];
  private actualizarForm = new BehaviorSubject<administradorModel>({} as any);

  constructor(private http: HttpClient) { }
  guardarCliente(cliente: administradorModel): Observable<administradorModel> {
    return this.http.post<administradorModel>('http://localhost:55974/api/admin', cliente);

  }

  obtenerClientes() {
    this.http.get('http://localhost:55974/api/admin').toPromise().then(data => {
      this.list = data as administradorModel[];
    }
    );
  }
  actualizar(cliente){
    this.actualizarForm.next(cliente);
  }
  actualizarCliente(cliente: administradorModel): Observable<administradorModel>{
    return this.http.put<administradorModel>('http://localhost:55974/api/admin',cliente);
  }
  obtenerCliente(): Observable<administradorModel>{
    return this.actualizarForm.asObservable();
  }
  eliminarCliente(id: number): Observable<administradorModel>{
    return this.http.delete<administradorModel>('http://localhost:55974/api/admin/'+ id);
  }
  getHeroes(): Promise<administradorModel[]> {
    return this.http.get('http://localhost:55974/api/admin')
               .toPromise()
               .then(response => this.list= response as administradorModel[]);         
  }

}
