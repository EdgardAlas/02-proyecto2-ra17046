import Swal from 'sweetalert2';
import { IMascota } from './../../interface/mascotas.interface';
import { Component, OnInit, inject } from '@angular/core';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  mascotas: IMascota[] = [];
  parametroBuscar = '';

  mascotasP: any[] = [];
  datosM: string[] = [];
  datos: any[] = ['Usuario1', 30, true, "{'salario': 200}"];

  constructor(
    private mascotasService: MascotasService,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadMascotas();
    this.mostar();
  }

  mostar() {
    this.datos.forEach((element) => {
      console.log('El foreach', element);
    });

    console.log('**************');

    for (const key in this.datos) {
      console.log('llaves', key);
    }

    for (const iterator of this.datos) {
      console.log(iterator);
    }
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
        // Swal.fire('Eliminado!', 'La mascota ha sido eliminada.', 'success');
        this.toastService.success(
          'Eliminado!',
          'La mascota ha sido eliminada.'
        );

        this.loadMascotas();
      }
    });
  }

  async loadMascotas() {
    // this.mascotasService.mascotas.subscribe((data) => {
    //   this.mascotas = data;
    // });

    const data = await this.mascotasService.obtenerAll();
    data.forEach((element) => {
      this.mascotasP.push(element);
      this.datosM.push(JSON.stringify(element));
    });

    console.log(this.mascotasP);
    console.log(this.datosM);
    let jsonArray = JSON.parse(this.datosM[0]);
    console.log(jsonArray);

    for (const key in jsonArray) {
      console.log('llaves', key, jsonArray[key]);
    }
    this.mascotas = data;
  }
}
