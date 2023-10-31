import { Estacionamiento } from "./estacionamiento";
import { Horario } from "./horario";

export class HorarioEstacionamiento {
    idHorarioEstacionamiento: number = 0;
    estacionamiento: Estacionamiento = new Estacionamiento();
    horario: Horario = new Horario();
  }
