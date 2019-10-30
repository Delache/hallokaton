import { Monster } from './../../models/monster';
import { RecupMonstersService } from './../../services/recup-monsters.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-monster-choice',
  templateUrl: './monster-choice.component.html',
  styleUrls: ['./monster-choice.component.scss']
})
export class MonsterChoiceComponent implements OnInit {
  monsters: Monster;
  constructor(private service: RecupMonstersService) { }

  ngOnInit() {
    this.service.getAllMonsters()
    .subscribe((result: any) => {
      this.monsters = result.monsters; });
  }
  getAvatarPlayer1() {
    console.log('Player1');
  }
  getAvatarPlayer2() {
    console.log('Player2');
  }
}
