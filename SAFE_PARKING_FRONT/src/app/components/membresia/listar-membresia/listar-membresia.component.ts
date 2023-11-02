import { Component, OnInit } from '@angular/core';
import { Membresia } from 'src/app/models/membresia';
import { MembresiaService } from 'src/app/services/membresia.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listar-membresia',
  templateUrl: './listar-membresia.component.html',
  styleUrls: ['./listar-membresia.component.css'],
})
export class ListarMembresiaComponent implements OnInit {
  memberships: Membresia[] = [];
  constructor(
    private membershipService: MembresiaService,
    private router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.membershipService.list().subscribe((memberships) => {
      this.memberships = memberships;
    });
  }
  editMembership(membership: Membresia) {
    // Redireccionar al usuario al apartado de registro de usuario, pasando el ID de la membresía como parámetro.
    this.router.navigate([`registrar_usuario`]);
  }
}
