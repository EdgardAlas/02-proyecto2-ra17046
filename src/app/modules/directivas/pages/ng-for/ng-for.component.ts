import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent implements OnInit {
  personas = [
    {
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 20,
    },
    {
      nombre: 'Maria',
      apellido: 'Gomez',
      edad: 25,
    },
    {
      nombre: 'Pedro',
      apellido: 'Gonzalez',
      edad: 30,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
