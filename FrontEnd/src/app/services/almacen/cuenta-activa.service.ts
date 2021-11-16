import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuentaActivaService {

  tipoCuentaActiva: number;
  IdCuenta: number;

  
  
  constructor() { }
  storeTipodeCuentaActiva(tipoCuentaActiva: number){
    this.tipoCuentaActiva=tipoCuentaActiva;
  }
  storeIddeCuentaActiva(IdCuentaActiva: number){
    this.IdCuenta=IdCuentaActiva;
  }
 
}
