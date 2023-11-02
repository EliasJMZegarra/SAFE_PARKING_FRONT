import { CreaeditaUsuarioComponent } from './components/usuarios/creaedita-usuario/creaedita-usuario.component';
import { CreaeditaMembresiaComponent } from './components/membresia/creaedita-membresia/creaedita-membresia.component';
import { BuscarMembresiaComponent } from './components/membresia/buscar-membresia/buscar-membresia.component';
import { HomeAdministradorComponent } from './components/home-administrador/home-administrador.component';
import { MembresiaComponent } from './components/membresia/membresia.component';
import { LocalizacionesComponent } from './components/localizaciones/localizaciones.component';
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
import { CreaeditaHorarioComponent } from './components/horario/creaedita-horario/creaedita-horario.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeArrendadorComponent } from './components/home-arrendador/home-arrendador.component';
import { HomeConductorComponent } from './components/home-conductor/home-conductor.component';
import { NgModule } from '@angular/core';
import { ModificarLocalizacionesComponent } from './components/localizaciones/modificar-localizaciones/modificar-localizaciones.component';
import { ModificarHorarioComponent } from './components/horario/modificar-horario/modificar-horario.component';
import { HorarioComponent } from './components/horario/horario.component';
import { ListarHorarioComponent } from './components/horario/listar-horario/listar-horario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ListarUsuarioComponent } from './components/usuarios/listar-usuario/listar-usuario.component';

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
        path: 'modificar_localizaciones/ediciones/:type',
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
    path: 'horarios',
    component: HorarioComponent,
    children: [
      {
        path: 'registrar_horarios',
        component: CreaeditaHorarioComponent,
      },
      {
        path: 'listar_horarios',
        component: ListarHorarioComponent,
      },

      {
        path: 'modificar_horarios',
        component: ModificarHorarioComponent,
      },
      {
        path: 'modificar_horarios/ediciones/:id',
        component: CreaeditaHorarioComponent,
      },
    ],
  },

  // usuarios
  {
    path: 'usuarios',
    component: UsuariosComponent,
    children: [
      {
        path: 'registrar_usuarios',
        component: CreaeditaUsuarioComponent,
      },
      {
        path: 'listar_usuarios',
        component: ListarUsuarioComponent,
      },
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
export class AppRoutingModule {}
