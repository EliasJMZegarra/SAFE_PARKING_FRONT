import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as moment from 'moment';
import { Membresia } from 'src/app/models/membresia';
import { MembresiaService } from 'src/app/services/membresia.service';

@Component({
  selector: 'app-creaedita-usuario',
  templateUrl: './creaedita-usuario.component.html',
  styleUrls: ['./creaedita-usuario.component.css'],
})
export class CreaeditaUsuarioComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  d: Membresia = new Membresia();

  usuario: Usuario = new Usuario();
  mensaje: String = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  membershipType: number = 0;
  listarMembresias: Membresia[] = [];

  generos: { value: string; viewValue: string }[] = [
    { value: 'Hombre', viewValue: 'Hombre' },
    { value: 'Mujer', viewValue: 'Mujer' },
    { value: 'No decirlo', viewValue: 'No decirlo' },
  ];
  estados: { value: boolean; viewValue: string }[] = [
    { value: true, viewValue: 'Activo' },
    { value: false, viewValue: 'NoActivo' },
  ];

  constructor(
    private uS: UsuarioService,
    private formBuilder: FormBuilder,
    private router: Router,
    private mS: MembresiaService // Asumiendo que tienes un servicio para Membresia
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      genero: ['', Validators.required],
      dni: ['', Validators.required],
      imagen: ['', Validators.required],
      fechaNacimiento: ['', [Validators.required]],
      telefono: ['', Validators.required],
      membresia: ['', [Validators.required]],
      enabled: ['', Validators.required],
    });
    this.mS.list().subscribe((data) => {
      this.listarMembresias = data;
    });
  }

  registrar() {
    if (this.form.valid) {
      // Copiar los valores del formulario al objeto Usuario
      this.usuario.nombre = this.form.value.nombre;
      this.usuario.apellido = this.form.value.apellido;
      this.usuario.correo = this.form.value.correo;
      this.usuario.username = this.form.value.username;
      this.usuario.password = this.form.value.password;
      this.usuario.genero = this.form.value.genero;
      this.usuario.dni = this.form.value.dni;
      this.usuario.imagen = this.form.value.imagen;
      this.usuario.fechaNacimiento = this.form.value.fechaNacimiento;
      this.usuario.telefono = this.form.value.telefono;
      this.usuario.enabled = this.form.value.enabled;
      this.usuario.membresia.idMembresia = this.form.value.membresia;

      this.uS.insert(this.usuario).subscribe((data) => {
        this.uS.listar().subscribe((data) => {
          this.uS.setList(data);
        });
      });
      this.router.navigate(['usuarios/listar_usuarios']);
    } else {
      this.mensaje = '¡Completa todos los campos!';
    }
  }

  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`control no encontrado por el campo $(nombreCampo)`);
    }
    return control;
  }
}
