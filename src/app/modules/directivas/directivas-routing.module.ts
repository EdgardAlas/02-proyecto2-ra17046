import { NgModelComponent } from './pages/ng-model/ng-model.component';
import { NgClassComponent } from './pages/ng-class/ng-class.component';
import { NgStyleComponent } from './pages/ng-style/ng-style.component';
import { BindingComponent } from './pages/binding/binding.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { NgForComponent } from './pages/ng-for/ng-for.component';
import { HomeComponent } from '@modules/home/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgIfComponent } from '@modules/directivas/pages/ng-if/ng-if.component';
import { PipesComponent } from '@modules/directivas/pages/pipes/pipes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'HOME',
  },
  {
    path: 'ngIf',
    component: NgIfComponent,
    title: 'NGIF',
  },
  {
    path: 'ngFor',
    component: NgForComponent,
    title: 'NGFOR',
  },
  {
    path: 'ngSwitch',
    component: NgSwitchComponent,
    title: 'NGSWITCH',
  },
  {
    path: 'binding',
    component: BindingComponent,
    title: 'BINDING',
  },
  {
    path: 'ngStyle',
    component: NgStyleComponent,
    title: 'NGSTYLE',
  },
  {
    path: 'ngClass',
    component: NgClassComponent,
    title: 'NGClASS',
  },
  {
    path: 'ngModel',
    component: NgModelComponent,
    title: 'NGMODEL',
  },
  {
    path: 'pipes',
    component: PipesComponent,
    title: 'PIPES',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivasRoutingModule {}
