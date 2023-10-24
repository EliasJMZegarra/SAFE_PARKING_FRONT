import { Vehiculo } from './../../../models/vehiculo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { VehiculoService } from 'src/app/services/vehiculo.service';
import { ActivatedRoute } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

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
    'Modificar',
  ];

  editarVehiculo: Vehiculo | null = null; // Variable para realizar un seguimiento de la fila en edición
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private vS: VehiculoService, public route: ActivatedRoute) {}
  ngOnInit(): void {
    this.vS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  modificar(vehiculo: Vehiculo) {
    this.editarVehiculo = vehiculo; // Establece la fila actual como editable
  }

  cancelarEdicion() {
    this.editarVehiculo = null; // Cancela la edición
  }

  guardarEdicion(vehiculo: Vehiculo) {
    // Lógica para guardar la edición (puedes llamar a tu servicio de modificación aquí)
    this.vS.update(vehiculo).subscribe(() => {
      this.editarVehiculo = null; // Termina la edición
    });
  }
  eliminar(idVehiculo: number) {
    this.vS.delete(idVehiculo).subscribe(() => {
      this.vS.list().subscribe((data) => {
        this.vS.setList(data);
      });
    });
  }
}
