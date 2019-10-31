
import { RecupMonstersService } from './../services/recup-monsters.service';
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
avatar1;
avatar2;
selector1;
selector2;
  constructor(private name: RecupPlayerNameService, private monster: RecupMonstersService) { }

  ngOnInit() {
this.player1 = this.name.player1;
this.player2 = this.name.player2;
this.avatar1 = this.monster.monsterOne;
this.avatar2 = this.monster.monsterTwo;
this.selector1 = this.monster.selector1;
this.selector2 = this.monster.selector2;

}
}
