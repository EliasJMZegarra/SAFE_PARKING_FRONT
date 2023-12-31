import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { ActivatedRoute } from '@angular/router';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-creaedita-vehiculos',
  templateUrl: './creaedita-vehiculos.component.html',
  styleUrls: ['./creaedita-vehiculos.component.css'],
  template: ` <color-sketch (onChange)="handleChange($event)"></color-sketch> `,
})
export class CreaeditaVehiculosComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  vehiculo: Vehiculo = new Vehiculo();
  mensaje: string = '';
  colorSeleccionado: string = '#ffffff'; // Color predeterminado

  categorias: { value: string; viewValue: string }[] = [
    { value: 'automóvil', viewValue: 'Automovil' },
    { value: 'motocicleta', viewValue: 'Motocicleta' },
    { value: 'camioneta', viewValue: 'Camioneta' },
    { value: 'Camion', viewValue: 'camion' },
  ];
  imageSelected: string | ArrayBuffer | null = null;
  imagenCortada: string = '';

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
      colorVehiculo: [this.colorSeleccionado, Validators.required],
      marcaVehiculo: ['', Validators.required],
      tamanioVehiculo: ['', Validators.required],
      tarjetaPropiedadVehiculo: ['', Validators.required],
      imagenVehiculo: ['', Validators.required],
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
      this.vehiculo.imagenVehiculo = this.imagenCortada; // Guardar la imagen en el objeto vehículo

      // Save vehicle and update list
      this.vS.insert(this.vehiculo).subscribe((data) => {
        this.vS.list().subscribe((data) => {
          this.vS.setList(data);
        });
      });

      // Navigate and log success
      this.router.navigate(['listar_vehiculos']);
      console.log('Vehicle created successfully.');
    } else {
      // Handle incomplete form
      this.mensaje = '¡Completa todos los campos!';
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      if (file.type.startsWith('image')) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageSelected = reader.result;

          if (typeof this.imageSelected === 'string') {
            this.imagenCortada = this.imageSelected.substring(0, 50);
            console.log('Partial image data:', this.imagenCortada);
          } else {
            console.log('Image has not loaded as a string');
          }
        };
        reader.readAsDataURL(file);
      } else {
        console.log('The selected file is not an image.');
      }
    }
  }

  obtenerConntrolCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control not found for the field ${nombreCampo}`);
    }
    return control;
  }
  colorcito(event: any) {
    this.colorSeleccionado = event.color.hex; // Actualiza el color seleccionado
    this.form.get('colorVehiculo')?.setValue(this.colorSeleccionado); // Actualiza el valor en el formulario
  }
}
