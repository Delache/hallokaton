import { Component, OnInit } from '@angular/core';
import { RecupPlayerNameService } from 'src/app/services/recup-player-name.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-finalscore',
  templateUrl: './finalscore.component.html',
  styleUrls: ['./finalscore.component.scss']
})
export class FinalscoreComponent implements OnInit {

  player1: string;
  player2: string;
  score1: number;
  score2: number;
  alive1: string;
  dead1: string;

  constructor(public dialogRef: MatDialogRef<FinalscoreComponent>, private name: RecupPlayerNameService) { }

  ngOnInit() {
    this.player1 = this.name.player1;
    this.player2 = this.name.player2;
    this.score1 = this.name.score1;
    this.score2 = this.name.score2;
    if (this.score1 > this.score2) {
      this.alive1 = 'alive';
      this.dead1 = 'dead';
    } else {
      this.alive1 = 'dead';
      this.dead1 = 'alive';
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
