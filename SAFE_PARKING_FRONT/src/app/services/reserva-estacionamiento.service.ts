import { Injectable } from '@angular/core';
import { ReservaEstacionamiento } from '../models/reservaEstacionamiento';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const base_url = environment.base_datos; // ruta de la base de datos

@Injectable({
  providedIn: 'root'
})
export class ReservaEstacionamientoService {

  private url = `${base_url}/ReservaEstacionamientos`;
  private listaCambio = new Subject<ReservaEstacionamiento[]>();
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<ReservaEstacionamiento[]>(`${this.url}/Listar`);
  }
  listId(id: number) {
    return this.http.get<ReservaEstacionamiento>(`${this.url}/ListarporID/${id}`);
  }
  update(vehiculo: ReservaEstacionamiento) {
    return this.http.put(`${this.url}/Modificar`, vehiculo);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/Eliminar/${id}`);
  }
  insert(lc: ReservaEstacionamiento) {
    return this.http.post(`${this.url}/Registrar`, lc);
  }

  setList(listaNueva: ReservaEstacionamiento[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }


  /*Añadir funciones de queries - Serian 3*/

  

}
