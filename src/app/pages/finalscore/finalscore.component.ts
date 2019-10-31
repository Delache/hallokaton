import { Component, OnInit } from '@angular/core';
import { RecupPlayerNameService } from 'src/app/services/recup-player-name.service';

@Component({
  selector: 'app-finalscore',
  templateUrl: './finalscore.component.html',
  styleUrls: ['./finalscore.component.scss']
})
export class FinalscoreComponent implements OnInit {

  player1: string;
  player2: string;

  constructor(private name: RecupPlayerNameService) { }

  ngOnInit() {
  this.player1 = this.name.player1;
  this.player2 = this.name.player2;
}
}
