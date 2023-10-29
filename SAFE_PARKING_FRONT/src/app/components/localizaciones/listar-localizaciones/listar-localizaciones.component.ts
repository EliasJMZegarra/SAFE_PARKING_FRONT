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
        // Initialize the map after loading data
      },
      (error) => {
        console.error('Error al obtener datos:', error);
        // You can display an error message to the user
      }
    );
  }

  initializeMapForLocation(element: Localizacion): void {
    const mapId = `map_${element.idLocalizacion}`;
    const mapElement = document.getElementById(mapId);
    if (mapElement) {
      const map = L.map(mapId).setView([element.latitud, element.longitud], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
        map
      );
      const marker = L.marker([element.latitud, element.longitud]).addTo(map);
      marker.bindPopup(element.direccion).openPopup();
    }
  }
}
