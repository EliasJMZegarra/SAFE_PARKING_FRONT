import { HomeArrendadorComponent } from './components/home-arrendador/home-arrendador.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { HomeConductorComponent } from './components/home-conductor/home-conductor.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarVehiculosComponent } from './components/vehiculos/listar-vehiculos/listar-vehiculos.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'listar_vehiculos', component: ListarVehiculosComponent },

  {
    path: 'vehiculos',
    component: VehiculosComponent,
  },
  { path: 'home-condutor', component: HomeConductorComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'home-arrendador', component: HomeArrendadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
