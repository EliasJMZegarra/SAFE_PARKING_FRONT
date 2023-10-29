import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MatCardModule } from '@angular/material/card';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

import { LoginService } from './services/login.service';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { HomeConductorComponent } from './components/home-conductor/home-conductor.component';
import { HomeArrendadorComponent } from './components/home-arrendador/home-arrendador.component';

import { ListarVehiculosComponent } from './components/vehiculos/listar-vehiculos/listar-vehiculos.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreaeditaVehiculosComponent } from './components/vehiculos/creaedita-vehiculos/creaedita-vehiculos.component';
import { BuscarVehiculosComponent } from './components/vehiculos/buscar-vehiculos/buscar-vehiculos.component';
import { LocalizacionesComponent } from './components/localizaciones/localizaciones.component';
import { CreaeditaLocalizacionesComponent } from './components/localizaciones/creaedita-localizaciones/creaedita-localizaciones.component';
import { ListarLocalizacionesComponent } from './components/localizaciones/listar-localizaciones/listar-localizaciones.component';
import { BuscarLocalizacionesComponent } from './components/localizaciones/buscar-localizaciones/buscar-localizaciones.component';
import { MembresiaComponent } from './components/membresia/membresia.component';
import { CreaeditaMembresiaComponent } from './components/membresia/creaedita-membresia/creaedita-membresia.component';
import { ListarMembresiaComponent } from './components/membresia/listar-membresia/listar-membresia.component';
import { BuscarMembresiaComponent } from './components/membresia/buscar-membresia/buscar-membresia.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CreaeditaUsuarioComponent } from './components/usuarios/creaedita-usuario/creaedita-usuario.component';
import { AppRoutingModule } from './app-routing.module';
import { HorarioComponent } from './components/horario/horario.component';
import { CreaeditaHorarioComponent } from './components/horario/creaedita-horario/creaedita-horario.component';
import { ListarHorarioComponent } from './components/horario/listar-horario/listar-horario.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker'; //Necesario en el CMD ->   npm install  --save ngx-material-timepicker
import { HomeAdministradorComponent } from './components/home-administrador/home-administrador.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignUpComponent,
    SignInComponent,
    VehiculosComponent,
    HomeConductorComponent,
    HomeAdministradorComponent,
    ListarVehiculosComponent,
    HomeArrendadorComponent,
    HomeComponent,
    CreaeditaVehiculosComponent,
    BuscarVehiculosComponent,
    LocalizacionesComponent,
    CreaeditaLocalizacionesComponent,
    ListarLocalizacionesComponent,
    BuscarLocalizacionesComponent,
    MembresiaComponent,
    CreaeditaMembresiaComponent,
    ListarMembresiaComponent,
    BuscarMembresiaComponent,
    UsuariosComponent,
    CreaeditaUsuarioComponent,
    FooterComponent,
    LocalizacionesComponent,
    HorarioComponent,
    CreaeditaHorarioComponent,
    ListarHorarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    CommonModule,
    JwtModule,
    HttpClientModule,
    RouterModule,
    NgxMaterialTimepickerModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
