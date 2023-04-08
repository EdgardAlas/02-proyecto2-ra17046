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
    this.activeRoute.params
      .pipe(switchMap(({ id }) => this.mascotasService.buscarMascotaPorId(id)))
      .subscribe((data) => {
        this.mascota = data;
      });
  }

  regresar() {
    this.router.navigate(['/mascotas/listar']);
  }
}
