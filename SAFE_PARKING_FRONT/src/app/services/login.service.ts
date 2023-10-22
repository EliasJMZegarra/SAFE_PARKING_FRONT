import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import * as jwt from 'jsonwebtoken';
import { environment } from 'src/environments/environment';

const base_url = environment.base_datos + '/usuario';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  authSubjet = new BehaviorSubject(false);
  auth_SERVER: String = 'http://localhost:8080';
  private token: string = '';

  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  login(username: string, password: string): Observable<any> {
    const body = {
      username,
      password,
    };

    return this.http.post<any>(this.auth_SERVER + '/authenticate', body);
  }
}
