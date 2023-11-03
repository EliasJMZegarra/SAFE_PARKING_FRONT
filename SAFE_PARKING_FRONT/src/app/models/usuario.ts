import { Membresia } from './membresia';
export class Usuario {
  idUsuario: number = 0;
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  username: string = '';
  password: string = '';
  genero: string = '';
  dni: number = 0;
  imagen: string = '';
  fechaNacimiento: Date = new Date(Date.now());
  telefono: number = 0;
  membresia: Membresia = new Membresia();
  enabled: boolean = true;
}
