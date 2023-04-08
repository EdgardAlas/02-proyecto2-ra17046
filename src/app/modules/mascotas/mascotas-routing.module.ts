import { MascotaComponent } from './pages/mascota/mascota.component';
import { ListarComponent } from './pages/listar/listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent,
    title: 'Listar mascotas',
  },
  {
    path: ':id',
    component: MascotaComponent,
    title: 'Mascota',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MascotasRoutingModule {}
