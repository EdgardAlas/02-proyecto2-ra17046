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
    this.mascotasService.mascotas.subscribe((data) => {
      this.mascotas = data;
    });
  }

  buscar() {
    this.mascotasService
      .buscarMascota(this.parametroBuscar)
      .subscribe((data) => {
        this.mascotas = data;
      });
  }
}
