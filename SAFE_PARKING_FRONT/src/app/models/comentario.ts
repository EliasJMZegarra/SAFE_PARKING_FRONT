import { ReservaEstacionamiento } from "./reservaEstacionamiento";

export class Comentario {
    idComentario: number = 0;
    contenido: string = '';
    valoracion: number = 0;
    fechaCreacion: Date = new Date(Date.now());
    reservaEstacionamiento: ReservaEstacionamiento = new ReservaEstacionamiento();
}
