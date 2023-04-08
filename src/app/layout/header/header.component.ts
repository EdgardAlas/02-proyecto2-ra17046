import { Component, OnInit } from '@angular/core';
import { LOGO } from '@constants/routes/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logo = LOGO;

  constructor() {}

  ngOnInit(): void {}
}
