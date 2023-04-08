import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from '@modules/home/home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HttpClientModule } from '@angular/common/http';
import { CoinComponent } from './coin/coin.component';

@NgModule({
  declarations: [HomeComponent, DetalleComponent, CoinComponent],
  imports: [CommonModule, HttpClientModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
