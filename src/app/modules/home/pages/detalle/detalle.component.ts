import { Component, OnInit } from '@angular/core';
import { MODULO1, MODULO2, MODULO3 } from '@constants/routes/constants';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  modulo1 = MODULO1;
  modulo2 = MODULO2;
  modulo3 = MODULO3;

  constructor() {}

  ngOnInit(): void {}
}
