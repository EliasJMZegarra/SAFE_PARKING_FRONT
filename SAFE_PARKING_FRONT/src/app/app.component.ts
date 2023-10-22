import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public route: ActivatedRoute, private router: Router) {}
  title = 'SAFE_PARKING_FRONT';
}
