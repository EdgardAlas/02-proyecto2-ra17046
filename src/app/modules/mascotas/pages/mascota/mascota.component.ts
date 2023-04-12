import { API_PETS } from './../../../../constants/routes/routes';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import { IMascota } from './../../interface/mascotas.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss'],
})
export class MascotaComponent implements OnInit {
  mascota!: IMascota;

  constructor(
    private activeRoute: ActivatedRoute,
    private mascotasService: MascotasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.activeRoute.params
    //   .pipe(switchMap(({ id }) => this.mascotasService.buscarMascotaPorId(id)))
    //   .subscribe((data) => {
    //     this.mascota = data;
    //   });

    // this.activeRoute.params
    //   .pipe(
    //     switchMap(
    //       async ({ id }) =>
    //         await this.mascotasService.buscarMascotaPromesaPorId(id)
    //     )
    //   )
    //   .subscribe((data) => {
    //     this.mascota = data;
    //   });

    this.getmascotaPorId();
  }

  async getmascotaPorId() {
    const id = this.activeRoute.snapshot.params['id'];
    this.mascota = await this.mascotasService.buscarMascotaPromesaPorId(id);
  }

  regresar() {
    this.router.navigate([`/${API_PETS}/listar`]);
  }
}
