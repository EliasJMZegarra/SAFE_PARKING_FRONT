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

@Component({
  selector: 'app-creaedita-usuario',
  templateUrl: './creaedita-usuario.component.html',
  styleUrls: ['./creaedita-usuario.component.css'],
})
export class CreaeditaUsuarioComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  usuario: Usuario = new Usuario();
  mensaje: String = '';
  membershipId: number | null = null;
  maxFecha: Date = moment().add(-1, 'days').toDate();
  generos: { value: string; viewValue: string }[] = [
    { value: 'Hombre', viewValue: 'Hombre' },
    { value: 'Mujer', viewValue: 'Mujer' },
    { value: 'No decirlo', viewValue: 'No decirlo' },
  ];
  estados: { value: string; viewValue: string }[] = [
    { value: 'true', viewValue: 'Activo' },
    { value: 'false', viewValue: 'NoActivo' },
  ];

  constructor(
    private uS: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.membershipId = parseInt(params.get('id') ?? '1');
    });

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
      idMembresia: [
        this.membershipId,
        [Validators.required, Validators.min(1)],
      ],
      enabled: ['', Validators.required],
    });
  }

  registrar() {
    if (this.form.valid) {
      this.usuario.nombre = this.form.value.nombre;
      this.usuario.apellido = this.form.value.apellido;
      this.usuario.correo = this.form.value.correo;
      this.usuario.username = this.form.value.username;
      this.usuario.password = this.form.value.password;
      this.usuario.genero = this.form.value.genero;
      this.usuario.dni = parseInt(this.form.value.dni);
      this.usuario.imagen = this.form.value.imagen;
      this.usuario.fechaNacimiento = this.form.value.fechaNacimiento;
      this.usuario.telefono = this.form.value.telefono;
      this.usuario.enabled = this.form.value.enabled;
      this.usuario.idMembresia = this.form.value.idMembresia;

      this.uS.insert(this.usuario).subscribe((data) => {
        this.uS.list().subscribe((data) => {
          this.uS.setList(data);
        });
      });

      this.router.navigate(['']);
    } else {
      this.mensaje = 'completa todos los campos!!';
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
