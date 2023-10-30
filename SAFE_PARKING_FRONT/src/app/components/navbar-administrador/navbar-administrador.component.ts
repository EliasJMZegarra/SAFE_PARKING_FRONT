import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-navbar-administrador',
  templateUrl: './navbar-administrador.component.html',
  styleUrls: ['./navbar-administrador.component.css']
})
export class NavbarAdministradorComponent {
  constructor(public route: ActivatedRoute, private router: Router) {}
}
