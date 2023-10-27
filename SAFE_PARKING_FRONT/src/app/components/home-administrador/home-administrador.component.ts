import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-administrador',
  templateUrl: './home-administrador.component.html',
  styleUrls: ['./home-administrador.component.css'],
})
export class HomeAdministradorComponent {
  constructor(public route: ActivatedRoute) {}
}
