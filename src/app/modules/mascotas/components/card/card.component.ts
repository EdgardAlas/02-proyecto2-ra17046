import { Component, Input, OnInit } from '@angular/core';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  obj!: IMascota;

  constructor() {}
}
