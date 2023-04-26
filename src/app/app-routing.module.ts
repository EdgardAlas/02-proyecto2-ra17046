import { API_PETS } from './constants/routes/routes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { NotFoundComponent } from '@modules/not-found/not-found.component';
import { FormularioComponent } from '@shared/formulario/formulario.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'directivas',
        loadChildren: () =>
          import('@modules/directivas/directivas.module').then(
            (m) => m.DirectivasModule
          ),
      },
      {
        path: API_PETS,
        loadChildren: () =>
          import('@modules/mascotas/mascotas.module').then(
            (m) => m.MascotasModule
          ),
      },
      {
        path: 'formulario',
        component: FormularioComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
