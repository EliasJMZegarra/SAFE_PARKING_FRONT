import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Membresia } from 'src/app/models/membresia';
import { MembresiaService } from 'src/app/services/membresia.service';

@Component({
  selector: 'app-creaedita-membresia',
  templateUrl: './creaedita-membresia.component.html',
  styleUrls: ['./creaedita-membresia.component.css']
})
export class CreaeditaMembresiaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  membresia: Membresia = new Membresia()
  mensaje: string = ""
  minFecha: Date = moment().add(-0, 'days').toDate();

  /*tipos: { value: string, viewValue: string }[] = [{ value: 'dulce', viewValue: 'Dulce' }
    , { value: 'salado', viewValue: 'Salado' }]*/ //PARA USAR UN SELECT
  constructor(private mS:MembresiaService, private router: Router, private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tipoMembresia: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      precio: ['', Validators.required]
    })
  }
  registrar() {
    if (this.form.valid) {
      this.membresia.tipoMembresia = this.form.value.tipoMembresia;
      this.membresia.fechaInicio = this.form.value.fechaInicio;
      this.membresia.fechaFin = this.form.value.fechaFin
      this.membresia.precio= this.form.value.precio

      this.mS.insert(this.membresia).subscribe(data => {
        this.mS.list().subscribe(data => {
          this.mS.setList(data);
        })
      })
      this.router.navigate(['listar_membresias']);

    } else {
      this.mensaje = "Complete todos los campos!!!"
    }
  }

  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo)
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }

}
