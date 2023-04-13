import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { API_PETS } from '@constants/routes/routes';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  pets = API_PETS;

  @Input()
  obj!: IMascota;

  constructor(
    private mascotaService: MascotasService,
    private router: Router
  ) {}

  @Output() delete = new EventEmitter();

  eliminarMascota(id: number) {
    Swal.fire({
      title: '¿Está seguro de eliminar la mascota?',
      text: 'No podrá recuperar la información',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.mascotaService.eliminarMascota(id).subscribe((data) => {
          this.delete.emit();
        });
      }
    });

    console.log(id);
  }
}
