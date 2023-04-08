import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss'],
})
export class NgStyleComponent {
  size = 14;
  bandera = true;
  colorEstado = '#f00';
  message = 1;

  constructor() {}

  get color() {
    return '#00f';
  }
}
