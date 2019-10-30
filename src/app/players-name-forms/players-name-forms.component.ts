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

  constructor(public dialogRef: MatDialogRef<PlayersNameFormsComponent>) {}

  ngOnInit() {}
  closeDialog() {
    this.dialogRef.close();

  }
}
