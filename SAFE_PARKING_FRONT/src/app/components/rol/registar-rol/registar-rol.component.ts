import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Rol } from 'src/app/models/rol';
import { Usuario } from 'src/app/models/usuario';
import { RolService } from 'src/app/services/rol.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registar-rol',
  templateUrl: './registar-rol.component.html',
  styleUrls: ['./registar-rol.component.css'],
})
export class RegistarRolComponent {
  form: FormGroup = new FormGroup({});
  rol: Rol = new Rol();
  mensaje: string = '';
  listaUsuarios: Usuario[] = [];

  constructor(
    private rS: RolService,
    private uS: UsuarioService,
    private router: Router, //Para Navegar
    private formBuilder: FormBuilder //private route: ActivatedRoute //Para editar
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombreRol: ['', Validators.required],
      usuario: ['', Validators.required],
    });

    this.uS.list().subscribe((data) => {
      this.listaUsuarios = data;
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.rol.nombreRol = this.form.value.nombreRol;
      this.rol.usuario.idUsuario = this.form.value.usuario; //dessert.idDessert -> Se utiliza el ID por que desde la BD se maneja con ello

      //Pasamos un objeto del tipo Ingredient por que en el Service fue declarado asi
      this.rS.insert(this.rol).subscribe((data) => {
        this.rS.list().subscribe((data) => {
          this.rS.setList(data);
        });
      });

      this.router.navigate(['']); //Esta ruta la sacamos del ROUTING MODULE
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }
  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }
}
