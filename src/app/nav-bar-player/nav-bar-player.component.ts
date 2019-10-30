import { RecupPlayerNameService } from './../services/recup-player-name.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-player',
  templateUrl: './nav-bar-player.component.html',
  styleUrls: ['./nav-bar-player.component.scss']
})
export class NavBarPlayerComponent implements OnInit {
player1: string;
player2: string;
  constructor(private name: RecupPlayerNameService) { }

  ngOnInit() {
this.player1 = this.name.player1;
this.player2 = this.name.player2;
  }

}
