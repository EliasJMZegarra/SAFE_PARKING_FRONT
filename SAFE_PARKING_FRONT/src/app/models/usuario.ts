export class Usuario {
  idUsuario?: number;
  nombre?: string;
  apellido?: string;
  correo?: string;
  username?: string;
  password?: string;
  genero?: string;
  dni?: number;
  imagen?: string;
  fechaNacimiento: Date = new Date(Date.now());
  telefono?: number;
  enabled?: boolean;
  id_membresia: number = 0;
}
