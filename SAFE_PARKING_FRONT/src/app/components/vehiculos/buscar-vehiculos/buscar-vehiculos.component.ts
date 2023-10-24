import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-vehiculos',
  templateUrl: './buscar-vehiculos.component.html',
  styleUrls: ['./buscar-vehiculos.component.css'],
})
export class BuscarVehiculosComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  vehiculo: Vehiculo = new Vehiculo();
  idVehiculo: number = 0;

  constructor(
    private vehiculoService: VehiculoService,
    public route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    this.vehiculoService.getById(this.idVehiculo).subscribe(
      (data: Vehiculo) => {
        this.vehiculo = data;
      },
      (error) => {
        console.error('Error al obtener el vehículo por ID:', error);
      }
    );
  }
}
