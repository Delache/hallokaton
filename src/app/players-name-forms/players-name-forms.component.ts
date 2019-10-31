import { RecupPlayerNameService } from './../services/recup-player-name.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-players-name-forms',
  templateUrl: './players-name-forms.component.html',
  styleUrls: ['./players-name-forms.component.scss']
})
export class PlayersNameFormsComponent implements OnInit {
  player1: string;
  player2: string;


  constructor(public dialogRef: MatDialogRef<PlayersNameFormsComponent>, private recupPlayerName: RecupPlayerNameService) {}

  ngOnInit() {}

  closeDialog() {
    this.recupPlayerName.recupName1(this.player1);
    this.recupPlayerName.recupName2(this.player2);
    this.dialogRef.close();
  }
}
