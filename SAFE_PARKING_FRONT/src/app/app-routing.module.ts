import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { HomeConductorComponent } from './components/home-conductor/home-conductor.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarVehiculosComponent } from './components/vehiculos/listar-vehiculos/listar-vehiculos.component';
import { HomeArrendadorComponent } from './components/home-arrendador/home-arrendador.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreaeditaVehiculosComponent } from './components/vehiculos/creaedita-vehiculos/creaedita-vehiculos.component';
import { BuscarVehiculosComponent } from './components/vehiculos/buscar-vehiculos/buscar-vehiculos.component';
import { CreaeditaLocalizacionesComponent } from './components/localizaciones/creaedita-localizaciones/creaedita-localizaciones.component';
import { ListarLocalizacionesComponent } from './components/localizaciones/listar-localizaciones/listar-localizaciones.component';
import { BuscarLocalizacionesComponent } from './components/localizaciones/buscar-localizaciones/buscar-localizaciones.component';
import { ListarMembresiaComponent } from './components/membresia/listar-membresia/listar-membresia.component';
import { CreaeditaUsuarioComponent } from './components/usuarios/creaedita-usuario/creaedita-usuario.component';
import { CreaeditaMembresiaComponent } from './components/membresia/creaedita-membresia/creaedita-membresia.component';
import { BuscarMembresiaComponent } from './components/membresia/buscar-membresia/buscar-membresia.component';
import { HomeAdministradorComponent } from './components/home-administrador/home-administrador.component';
import { Membresia } from './models/membresia';
import { MembresiaComponent } from './components/membresia/membresia.component';
import { LocalizacionesComponent } from './components/localizaciones/localizaciones.component';
import { MembresiaService } from './services/membresia.service';

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
        path: 'buscar_vehiculos',
        component: ListarVehiculosComponent,
      },
    ],
  },

  // membresias
  {
    path: 'membresias',
    component: MembresiaService,
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

  // usuarios
  {
    path: 'registrar_usuario/:id',
    component: CreaeditaUsuarioComponent,
  },
  { path: 'footer', component: FooterComponent },
  // apartados

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
