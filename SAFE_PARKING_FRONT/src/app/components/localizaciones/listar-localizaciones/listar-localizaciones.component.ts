import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { LocalizacionService } from 'src/app/services/localizacion.service';
import * as L from 'leaflet';
import { Localizacion } from 'src/app/models/localizacion';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

@Component({
  selector: 'app-listar-localizaciones',
  templateUrl: './listar-localizaciones.component.html',
  styleUrls: ['./listar-localizaciones.component.css'],
})
export class ListarLocalizacionesComponent implements OnInit {
  dataSource: MatTableDataSource<Localizacion> = new MatTableDataSource();
  displayedColumns: string[] = [
    'idLocalizacion',
    'direccion',
    'distrito',
    'region',
    'referencia',
    'latitud',
    'longitud',
    'Modificar',
  ];

  editarLocalizacion: Localizacion | null = null;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  map!: L.Map;
  marker: L.Marker | null = null;

  constructor(
    private localizacionService: LocalizacionService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarLocalizaciones();
  }

  cargarLocalizaciones(): void {
    this.localizacionService.list().subscribe(
      (data) => {
        this.dataSource.data = data;
        const primeraFila = this.dataSource.data[6]; // Cambia el índice si deseas acceder a otra fila

        // Initialize the map after loading data
        this.initializeMap(primeraFila.latitud, primeraFila.longitud);
      },
      (error) => {
        console.error('Error al obtener datos:', error);
        // You can display an error message to the user
      }
    );
  }

  initializeMap(long: number, lat: number) {
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

    this.map = L.map('map').setView([long, lat], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      this.map
    );
  }
  eliminar(idLocalizacion: number) {
    this.localizacionService.delete(idLocalizacion).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        (loc) => loc.idLocalizacion !== idLocalizacion
      );
    });
  }

  modificar(localizacion: Localizacion) {
    this.editarLocalizacion = localizacion;
  }
}
