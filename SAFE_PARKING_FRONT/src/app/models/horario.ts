import { Time } from '@angular/common';

export class Horario {
  idHorario: number = 0;
  horaApertura: string = '';
  horaCierre: string = '';
  fecha: Date = new Date(Date.now());
}
