import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-home-arrendador',
  templateUrl: './home-arrendador.component.html',
  styleUrls: ['./home-arrendador.component.css']
})
export class HomeArrendadorComponent {
   constructor(public route: ActivatedRoute, private router: Router) {}
  ngOnInit() {}
}
