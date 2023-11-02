import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { Subject } from 'rxjs';

const base_url = environment.base_datos;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = `${base_url}/usuarios`;
  private listaCambio = new Subject<Usuario[]>();

  constructor(private http: HttpClient) {}

  insert(m_usuario: Usuario) {
    const endpoint = this.url + `/Registrar`;
    console.log(m_usuario);
    return this.http.post<Usuario>(endpoint, m_usuario);
  }

  listar() {
    return this.http.get<Usuario[]>(`${this.url}/Listar`);
  }
  setList(listaNueva: Usuario[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  getUserByID(id: Number) {
    const endpoint = `${base_url}/ListarporID/${id}`;
    return this.http.get<Usuario>(endpoint);
  }
  update(usuario: Usuario) {
    return this.http.put(`${this.url}/Modificar`, usuario);
  }
  eliminar(id: number) {
    const endpoint = `${base_url}/Eliminar/${id}`;
    return this.http.delete<Usuario>(endpoint);
  }
}
