import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { clientModel } from 'app/models/clientModel';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  myAppUrl: 'http://localhost:55974/api/patient';
  list: clientModel[];
  private actualizarForm = new BehaviorSubject<clientModel>({} as any);

  constructor(private http: HttpClient) { }
  guardarCliente(cliente: clientModel): Observable<clientModel> {
    return this.http.post<clientModel>('http://localhost:55974/api/patient', cliente);

  }

  obtenerClientes() {
    this.http.get('http://localhost:55974/api/patient').toPromise().then(data => {
      this.list = data as clientModel[];
    }
    );
  }
  actualizar(cliente){
    this.actualizarForm.next(cliente);
  }
  actualizarCliente(cliente: clientModel): Observable<clientModel>{
    return this.http.put<clientModel>('http://localhost:55974/api/patient',cliente);
  }
  obtenerCliente(): Observable<clientModel>{
    return this.actualizarForm.asObservable();
  }
  eliminarCliente(id: number): Observable<clientModel>{
    return this.http.delete<clientModel>('http://localhost:55974/api/patient/'+ id);
  }
  getHeroes(): Promise<clientModel[]> {
    return this.http.get('http://localhost:55974/api/patient')
               .toPromise()
               .then(response => this.list= response as clientModel[]);         
  }

}
