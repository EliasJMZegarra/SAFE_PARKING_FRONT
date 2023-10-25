import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-localizaciones',
  templateUrl: './localizaciones.component.html',
  styleUrls: ['./localizaciones.component.css'],
})
export class LocalizacionesComponent {
  constructor(public route: ActivatedRoute) {}
}
