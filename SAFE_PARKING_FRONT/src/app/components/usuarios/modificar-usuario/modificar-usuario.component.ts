import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css'],
})
export class ModificarUsuarioComponent implements OnInit {
  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource();
  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'apellido',
    'correo',
    'username',
    'password',
    'genero',
    'dni',
    'imagen',
    'fechaNacimiento',
    'telefono',
    'membresia',
    'activo',
  ];

  editarUsuario: Usuario | null = null; // Variable para realizar un seguimiento de la fila en edición
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private uS: UsuarioService, public route: ActivatedRoute) {}
  ngOnInit(): void {
    this.uS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  modificar(usuario: Usuario) {
    this.editarUsuario = usuario; // Establece la fila actual como editable
  }

  cancelarEdicion() {
    this.editarUsuario = null; // Cancela la edición
  }

  guardarEdicion(usuario: Usuario) {
    // Lógica para guardar la edición (puedes llamar a tu servicio de modificación aquí)
    this.uS.update(usuario).subscribe(() => {
      this.editarUsuario = null; // Termina la edición
    });
  }
  eliminar(idUsuario: number) {
    this.uS.delete(idUsuario).subscribe(() => {
      this.uS.list().subscribe((data) => {
        this.uS.setList(data);
      });
    });
  }
}
