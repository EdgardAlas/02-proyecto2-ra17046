import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss'],
})
export class NgClassComponent {
  tema = 'Uso de ngClass';
  alerta = 'alert-danger';
  propiedad = { danger: false };
  message = 5;
  constructor() {}
}
