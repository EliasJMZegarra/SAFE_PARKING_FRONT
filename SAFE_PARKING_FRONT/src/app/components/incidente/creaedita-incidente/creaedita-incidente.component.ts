import { Usuario } from './../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as moment from 'moment';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Incidente } from 'src/app/models/incidente';
import { IncidenteService } from 'src/app/services/incidente.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-creaedita-incidente',
  templateUrl: './creaedita-incidente.component.html',
  styleUrls: ['./creaedita-incidente.component.css']
})
export class CreaeditaIncidenteComponent {
  form: FormGroup = new FormGroup({});
  incidente: Incidente = new Incidente();
  mensaje: string = '';
  listaUsuarios: Usuario[] = [];
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private iS: IncidenteService,
    private uS: UsuarioService,
    private router: Router,
    private formBuilder: FormBuilder,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      idIncidente: [''],
      descripcion: ['', Validators.required],
      tipoIncidente: ['', Validators.required],
      usuario: ['', Validators.required],
    });
    this.uS.list().subscribe((data) => {
      this.listaUsuarios = data;
    });
  }
  registrar() {
    if (this.form.valid) {
      this.incidente.idIncidente = this.form.value.idIncidente;
      this.incidente.descripcion = this.form.value.descripcion;
      this.incidente.tipoIncidente = this.form.value.tipoIncidente;
      this.incidente.usuario.idUsuario = this.form.value.usuario;
      if (this.edicion) {
        this.iS.update(this.incidente).subscribe(() => {
          this.iS.list().subscribe((data) => {
            this.iS.setList(data);
          });
        });
      } else {
      this.iS.insert(this.incidente).subscribe((data) => {
        this.iS.list().subscribe((data) => {
          this.iS.setList(data);
        });
      });}
      this.router.navigate(['incidentes/listar_admin_incidentes']);
    } else {
      this.mensaje = 'Complete todos los campos!!!';
    }
  }

  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }
  init() {
    if (this.edicion) {
      this.iS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idIncidente: new FormControl(data.idIncidente),
          descripcion: new FormControl(data.descripcion),
          tipoIncidente: new FormControl(data.tipoIncidente),
          usuario:new FormControl(data.usuario),
        
        });
      });
    }
  }
}
