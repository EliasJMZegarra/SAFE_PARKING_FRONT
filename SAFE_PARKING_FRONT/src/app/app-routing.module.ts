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

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },

  // vehiculos
  { path: 'listar_vehiculos', component: ListarVehiculosComponent },
  { path: 'registrar_vehiculos', component: CreaeditaVehiculosComponent },
  { path: 'buscar_vehiculos', component: BuscarVehiculosComponent },
  // localizaciones
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
  // membresias
  { path: 'listar_membresias', component: ListarMembresiaComponent },
  { path: 'registrar_membresias', component: CreaeditaMembresiaComponent },
  { path: 'buscar_membresias', component: BuscarMembresiaComponent },
  // usuarios
  {
    path: 'registrar_usuario/:id',
    component: CreaeditaUsuarioComponent,
  },

  // apartados

  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'home-condutor', component: HomeConductorComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'home-arrendador', component: HomeArrendadorComponent },
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
