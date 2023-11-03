import { Localizacion } from "./localizacion";
import { Usuario } from "./usuario";


export class Estacionamiento {
    idEstacionamiento: number = 0;
    tipoEstacionamiento: string = '';
    disponibilidad: string = '';
    foto: string = '';
    promedioValoracion: number = 0;
    capacidad: number = 0;
    fechaRegistro: Date = new Date(Date.now());
    precio: number = 0;
    usuario: Usuario = new Usuario();
    localizacion: Localizacion = new Localizacion();
    
  }
  