import { Usuario } from "./usuario";


export class Incidente {
    idIncidente: number = 0;
    descripcion: string = '';
    tipoIncidente: string = '';
    usuario: Usuario = new Usuario()
}
