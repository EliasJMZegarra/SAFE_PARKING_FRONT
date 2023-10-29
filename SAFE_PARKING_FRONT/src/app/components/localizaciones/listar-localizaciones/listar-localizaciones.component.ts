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
        this.initializeMap();

        // Initialize the map after loading data
      },
      (error) => {
        console.error('Error al obtener datos:', error);
        // You can display an error message to the user
      }
    );
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
