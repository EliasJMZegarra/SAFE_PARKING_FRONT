import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creaedita-vehiculos',
  templateUrl: './creaedita-vehiculos.component.html',
  styleUrls: ['./creaedita-vehiculos.component.css'],
})
export class CreaeditaVehiculosComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  vehiculo: Vehiculo = new Vehiculo();
  mensaje: String = '';
  categorias: { value: string; viewValue: String }[] = [
    { value: 'automóvil', viewValue: 'Automovil' },
    { value: 'motocicleta', viewValue: 'Motocicleta' },
    { value: 'camioneta', viewValue: 'Camioneta' },
    { value: 'Camion', viewValue: 'camion' },
  ];

  constructor(
    private vS: VehiculoService,
    private router: Router,
    private formBuilder: FormBuilder,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      placaVehiculo: ['', Validators.required],
      categoriaVehiculo: ['', Validators.required],
      colorVehiculo: ['', Validators.required],
      marcaVehiculo: ['', Validators.required],
      tamanioVehiculo: ['', Validators.required],
      tarjetaPropiedadVehiculo: ['', Validators.required],
    });
  }
  registrar() {
    if (this.form.valid) {
      this.vehiculo.placaVehiculo = this.form.value.placaVehiculo;
      this.vehiculo.categoriaVehiculo = this.form.value.categoriaVehiculo;
      this.vehiculo.colorVehiculo = this.form.value.colorVehiculo;
      this.vehiculo.marcaVehiculo = this.form.value.marcaVehiculo;
      this.vehiculo.tamanioVehiculo = this.form.value.tamanioVehiculo;
      this.vehiculo.tarjetaPropiedadVehiculo =
        this.form.value.tarjetaPropiedadVehiculo;

      this.vS.insert(this.vehiculo).subscribe((data) => {
        this.vS.list().subscribe((data) => {
          this.vS.setList(data);
        });
      });
      this.router.navigate(['listar_vehiculos']);
    } else {
      this.mensaje = 'completa todos los campos!!';
    }
  }

  obtenerConntrolCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`control no encontrado por el campo $(nombreCampo)`);
    }
    return control;
  }
}
