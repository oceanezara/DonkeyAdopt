import { Component, OnInit } from '@angular/core';
import { LISTS } from '../mock-donkeys';

@Component({
  selector: 'app-app-list-donkey',
  templateUrl: './app-list-donkey.component.html',
  styleUrls: ['./app-list-donkey.component.scss'],
})
export class AppListDonkeyComponent implements OnInit {
  lists = LISTS;

  constructor() {}

  ngOnInit(): void {}
}
