import { Coin } from './../../../../typings/Coin.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss'],
})
export class CoinComponent implements OnInit {
  @Input() coin: Coin = null;

  constructor() {}

  ngOnInit(): void {}
}
