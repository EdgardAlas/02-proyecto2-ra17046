import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  fecha = new Date();
  texto = 'Ejemplo de pipes de texto';
  objeto = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
  };

  promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 2000);
  });

  constructor() {}

  ngOnInit(): void {}
}
