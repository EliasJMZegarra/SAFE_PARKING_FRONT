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

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },

  { path: 'listar_vehiculos', component: ListarVehiculosComponent },
  { path: 'registrar_vehiculos', component: CreaeditaVehiculosComponent },
  { path: 'buscar_vehiculos', component: BuscarVehiculosComponent },

  {
    path: 'registrar_licalizaciones',
    component: CreaeditaLocalizacionesComponent,
  },

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
