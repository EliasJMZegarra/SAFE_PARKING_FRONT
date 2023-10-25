import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Localizacion } from 'src/app/models/localizacion ';
import { LocalizacionService } from 'src/app/services/localizacion.service';
import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
@Component({
  selector: 'app-creaedita-localizaciones',
  templateUrl: './creaedita-localizaciones.component.html',
  styleUrls: ['./creaedita-localizaciones.component.css'],
})
export class CreaeditaLocalizacionesComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  localizacion: Localizacion = new Localizacion();
  mensaje: String = '';
  map!: L.Map;
  marker: L.Marker | null = null;

  constructor(
    private lS: LocalizacionService,
    private router: Router,
    private formBuilder: FormBuilder,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      direccion: ['', Validators.required],
      distrito: ['', Validators.required],
      region: ['', Validators.required],
      referencia: ['', Validators.required],
      latitud: ['', Validators.required],
      longitud: ['', Validators.required],
    });
    this.initializeMap();
  }
  registrar() {
    if (this.form.valid) {
      this.localizacion.direccion = this.form.value.direccion;
      this.localizacion.distrito = this.form.value.distrito;
      this.localizacion.region = this.form.value.region;
      this.localizacion.referencia = this.form.value.referencia;
      this.localizacion.latitud = this.form.value.latitud;
      this.localizacion.longitud = this.form.value.longitud;

      this.lS.insert(this.localizacion).subscribe((data) => {
        this.lS.list().subscribe((data) => {
          this.lS.setList(data);
        });
      });
      this.router.navigate(['']);
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

  initializeMap() {
    //iconos personalizados
    var iconDefault = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
    });
    L.Marker.prototype.options.icon = iconDefault;

    this.map = L.map('map').setView([-12.04318, -77.02824], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      this.map
    );

    // Escuchar el evento 'click' en el mapa y agregar un marcador
    this.map.on('click', (e) => {
      if (this.marker) {
        // Si ya hay un marcador, quitarlo del mapa
        this.map.removeLayer(this.marker);
      }
      this.addMarker(e.latlng);
    });
  }

  addMarker(latlng: L.LatLng) {
    // Agregar el nuevo marcador en la posición del clic
    this.marker = L.marker(latlng).addTo(this.map);

    // Obtener una referencia a los controles de latitud y longitud
    const latitudControl = this.form.get('latitud');
    const longitudControl = this.form.get('longitud');

    if (latitudControl && longitudControl) {
      // Actualizar los valores de los controles
      latitudControl.setValue(latlng.lat.toString());
      longitudControl.setValue(latlng.lng.toString());
    }
  }
}
