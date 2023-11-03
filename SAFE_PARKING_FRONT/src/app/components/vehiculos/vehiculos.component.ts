import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css'],
})
export class VehiculosComponent {
  constructor(public route: ActivatedRoute) {}
  selectedImage: string | ArrayBuffer | null = null;
  savedImage: string = ''; // Variable para almacenar la imagen como string

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  insertImage(): void {
    // Aquí podrías realizar alguna acción adicional al insertar la imagen, si es necesario
    console.log('Imagen insertada:', this.selectedImage);
  }

  guardarImagen(): void {
    // Guardar la imagen en formato de cadena cuando se hace clic en el botón "Guardar"
    if (this.selectedImage) {
      this.savedImage = this.selectedImage as string;
      console.log('Imagen guardada como cadena:', this.savedImage);
      // Aquí podrías realizar cualquier acción adicional con this.savedImage
    } else {
      console.log('No hay ninguna imagen seleccionada para guardar.');
    }
  }
}
