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

  list() {
    return this.http.get<Usuario[]>(this.url);
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
  update(id: any, m_customer: Usuario) {
    const endpoint = `${base_url}/Modificar`;
    return this.http.put<Usuario>(endpoint, m_customer);
  }

  eliminar(id: number) {
    const endpoint = `${base_url}/Eliminar/${id}`;
    return this.http.delete<Usuario>(endpoint);
  }
  uploadImage(file: File) {
    // TODO: Implement this function to upload the image to a server.
    return new Promise((resolve, reject) => {
      resolve('');
    });
  }
}
