import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css'],
})
export class ListarVehiculosComponent implements OnInit {
  dataSource: MatTableDataSource<Vehiculo> = new MatTableDataSource();
  displayedColumns: string[] = [
    'codigo',
    'placa',
    'categoria',
    'color',
    'marca',
    'tamanio',
    'tarjeta de propiedad',
  ];
  constructor(private vS: VehiculoService, public route: ActivatedRoute) {}
  ngOnInit(): void {
    this.vS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
