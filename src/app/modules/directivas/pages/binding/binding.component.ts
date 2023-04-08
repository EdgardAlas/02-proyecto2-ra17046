import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
})
export class BindingComponent {
  habilitar = false;
  clases = 'btn btn-dange';
  txtPlaceholder = 'Su nombre';
  txtType = 'radio';
  isChecked = true;

  constructor() {}

  cambiarPropiedad() {
    this.habilitar = !this.habilitar;
    this.txtPlaceholder = 'Desabilitado';
    this.txtType = 'checkbox';
    this.isChecked = !this.isChecked;
    this.clases = 'btn btn-primary';
  }
}
