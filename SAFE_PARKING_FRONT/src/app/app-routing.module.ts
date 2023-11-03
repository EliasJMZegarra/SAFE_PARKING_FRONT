import { CantReservasPorUsuarioComponent } from './components/reportes/cant-reservas-por-usuario/cant-reservas-por-usuario.component';
import { CreaeditaUsuarioComponent } from './components/usuarios/creaedita-usuario/creaedita-usuario.component';
import { CreaeditaMembresiaComponent } from './components/membresia/creaedita-membresia/creaedita-membresia.component';
import { BuscarMembresiaComponent } from './components/membresia/buscar-membresia/buscar-membresia.component';
import { HomeAdministradorComponent } from './components/home-administrador/home-administrador.component';
import { MembresiaComponent } from './components/membresia/membresia.component';
import { LocalizacionesComponent } from './components/localizaciones/localizaciones.component';
import { MembresiaService } from './services/membresia.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { CreaeditaLocalizacionesComponent } from './components/localizaciones/creaedita-localizaciones/creaedita-localizaciones.component';
import { ListarLocalizacionesComponent } from './components/localizaciones/listar-localizaciones/listar-localizaciones.component';
import { BuscarLocalizacionesComponent } from './components/localizaciones/buscar-localizaciones/buscar-localizaciones.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { CreaeditaVehiculosComponent } from './components/vehiculos/creaedita-vehiculos/creaedita-vehiculos.component';
import { BuscarVehiculosComponent } from './components/vehiculos/buscar-vehiculos/buscar-vehiculos.component';
import { ListarVehiculosComponent } from './components/vehiculos/listar-vehiculos/listar-vehiculos.component';
import { ListarMembresiaComponent } from './components/membresia/listar-membresia/listar-membresia.component';
import { ListarHorarioComponent } from './components/horario/listar-horario/listar-horario.component';
import { CreaeditaHorarioComponent } from './components/horario/creaedita-horario/creaedita-horario.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeArrendadorComponent } from './components/home-arrendador/home-arrendador.component';
import { HomeConductorComponent } from './components/home-conductor/home-conductor.component';
import { NgModule } from '@angular/core';
import { ModificarLocalizacionesComponent } from './components/localizaciones/modificar-localizaciones/modificar-localizaciones.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { CantIncidentesPorRolComponent } from './components/reportes/cant-incidentes-por-rol/cant-incidentes-por-rol.component';
import { CantReservasPorFechaComponent } from './components/reportes/cant-reservas-por-fecha/cant-reservas-por-fecha.component';
import { CantReservasPorTipoPagoComponent } from './components/reportes/cant-reservas-por-tipo-pago/cant-reservas-por-tipo-pago.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },

  // localizaciones
  {
    path: 'localizaciones',
    component: LocalizacionesComponent,
    children: [
      {
        path: 'registrar_localizaciones',
        component: CreaeditaLocalizacionesComponent,
      },
      {
        path: 'listar_localizaciones',
        component: ListarLocalizacionesComponent,
      },
      {
        path: 'buscar_localizaciones',
        component: BuscarLocalizacionesComponent,
      },
      {
        path: 'modificar_localizaciones',
        component: ModificarLocalizacionesComponent,
      },
      {
        path: 'modificar_localizaciones/ediciones/:id',
        component: CreaeditaLocalizacionesComponent,
      },
    ],
  },

  // vehiculos
  {
    path: 'vehiculos',
    component: VehiculosComponent,
    children: [
      {
        path: 'registrar_vehiculos',
        component: CreaeditaVehiculosComponent,
      },
      {
        path: 'buscar_vehiculos',
        component: BuscarVehiculosComponent,
      },
      {
        path: 'listar_vehiculos',
        component: ListarVehiculosComponent,
      },
    ],
  },

  // membresias
  {
    path: 'membresia',
    component: MembresiaComponent,
    children: [
      {
        path: 'registrar_membresias',
        component: CreaeditaMembresiaComponent,
      },
      {
        path: 'listar_membresias',
        component: ListarMembresiaComponent,
      },
      {
        path: 'buscar_membresias',
        component: BuscarMembresiaComponent,
      },
    ],
  },
  //Horarios
  {
    path: 'listar_horario',
    component: ListarHorarioComponent,
    children: [
      { path: 'edicion/:id', component: CreaeditaHorarioComponent },
      { path: 'registrar_horario', component: CreaeditaHorarioComponent },
    ],
  },

  // usuarios
  {
    path: 'registrar_usuario/:id',
    component: CreaeditaUsuarioComponent,
  },

  //Reportes - Queries
  {
    path: 'reportes',
    component: ReportesComponent,
    children: [
      {
        path: 'cant-incidentes-por-rol',
        component: CantIncidentesPorRolComponent,
      },
      {
        path: 'cant-reservas-por-fecha',
        component: CantReservasPorFechaComponent,
      },
      {
        path: 'cant-reservas-por-tipoPago',
        component: CantReservasPorTipoPagoComponent,
      },
      {
        path: 'cant-reservas-por-usuario',
        component: CantReservasPorUsuarioComponent,
      }
    ],
  },

  // apartados
  { path: 'footer', component: FooterComponent },

  { path: 'vehiculos', component: VehiculosComponent },

  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'home-arrendador', component: HomeArrendadorComponent },
      {
        path: 'home-condutor',
        component: HomeConductorComponent,
      },
      {
        path: 'home_administrador',
        component: HomeAdministradorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
