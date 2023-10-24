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
  // Obtener todos los vehículos
  list() {
    return this.http.get<Vehiculo[]>(`${this.url}/Listar`);
  }
  // Obtener un vehículo por ID
  getById(id: number) {
    return this.http.get<Vehiculo>(`${this.url}/ListarporID/${id}`);
  }
  // Actualizar un vehículo
  update(vehiculo: Vehiculo) {
    return this.http.put(`${this.url}/Modificar`, vehiculo);
  }
  // Eliminar un vehículo
  delete(id: number) {
    return this.http.delete(`${this.url}/Eliminar/${id}`);
  }
  // Crear un nuevo vehículo
  insert(de: Vehiculo) {
    return this.http.post(`${this.url}/Registrar`, de);
  }

  setList(listaNueva: Vehiculo[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
