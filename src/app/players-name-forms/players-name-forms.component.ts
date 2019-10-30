import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-name-forms',
  templateUrl: './players-name-forms.component.html',
  styleUrls: ['./players-name-forms.component.scss']
})
export class PlayersNameFormsComponent implements OnInit {
  player1: string;
  player2: string;
  constructor() {}

  ngOnInit() {}
}
