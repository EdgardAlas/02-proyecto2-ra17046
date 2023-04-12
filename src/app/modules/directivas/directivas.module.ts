import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivasRoutingModule } from './directivas-routing.module';
import { NgIfComponent } from '@modules/directivas/pages/ng-if/ng-if.component';
import { NgForComponent } from './pages/ng-for/ng-for.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { BindingComponent } from './pages/binding/binding.component';
import { NgStyleComponent } from './pages/ng-style/ng-style.component';
import { NgClassComponent } from './pages/ng-class/ng-class.component';
import { NgModelComponent } from './pages/ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pages/pipes/pipes.component';

@NgModule({
  declarations: [
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    BindingComponent,
    NgStyleComponent,
    NgClassComponent,
    NgModelComponent,
    PipesComponent,
  ],
  imports: [CommonModule, DirectivasRoutingModule, FormsModule],
})
export class DirectivasModule {}
