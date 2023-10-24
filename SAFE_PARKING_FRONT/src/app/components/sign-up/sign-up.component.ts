import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  loading = false;
  constructor(private authService: LoginService, private router: Router, public route: ActivatedRoute) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        if (response && response.token) {
          this.authService.saveToken(response.token);
          // Redirige al usuario a la página principal o cualquier otra página
          this.router.navigate(['/sign-in']); // Cambia '/home' por la ruta de la página a la que deseas redirigir
        } else {
          console.error('Fallo la autenticación');
        }
      },
      (error) => {
        console.error('Error en la solicitud: ', error);
      }
    );
  }
}
