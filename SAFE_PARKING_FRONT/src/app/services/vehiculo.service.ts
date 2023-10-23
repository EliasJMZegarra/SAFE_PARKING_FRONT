import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Vehiculo } from '../models/vehiculo';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base_datos; // ruta de la base de datos

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  private url = `${base_url}/vehiculos`;
  private listaCambio = new Subject<Vehiculo[]>();
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Vehiculo[]>(`${this.url}/Listar`);
  }
  setList(listaNueva: Vehiculo[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  insert(de: Vehiculo) {
    return this.http.post(`${this.url}/Registrar`, de);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
