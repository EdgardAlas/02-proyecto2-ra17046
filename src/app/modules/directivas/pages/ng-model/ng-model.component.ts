import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss'],
})
export class NgModelComponent {
  titulo = 'Directiva NgModel';
  nombre = '';
  nombre2 = '';

  constructor() {}

  formatNombre() {
    this.nombre = this.nombre.toLowerCase();
    this.nombre2 = this.nombre.toUpperCase();
  }
}
