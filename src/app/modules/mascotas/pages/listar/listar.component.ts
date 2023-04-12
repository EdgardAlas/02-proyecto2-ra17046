import Swal from 'sweetalert2';
import { IMascota } from './../../interface/mascotas.interface';
import { Component, OnInit } from '@angular/core';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  mascotas: IMascota[] = [];
  parametroBuscar = '';

  constructor(private mascotasService: MascotasService) {}

  ngOnInit(): void {
    this.loadMascotas();
  }

  buscar() {
    this.mascotasService
      .buscarMascota(this.parametroBuscar)
      .subscribe((data) => {
        this.mascotas = data;
      });
  }

  onDelete() {
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
        this.loadMascotas();
      }
    });
  }

  async loadMascotas() {
    // this.mascotasService.mascotas.subscribe((data) => {
    //   this.mascotas = data;
    // });

    const data = await this.mascotasService.obtenerAll();
    this.mascotas = data;
  }
}
