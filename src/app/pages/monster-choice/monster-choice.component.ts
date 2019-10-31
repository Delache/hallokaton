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
  selectMonster1 = false;
  selectMontser2 = false;
  monsterOne;
  monsterTwo;
  constructor(private service: RecupMonstersService, private recupMonsters: RecupMonstersService ) { }

  ngOnInit() {
    this.service.getAllMonsters()
    .subscribe((result: any) => {
      this.monsters = result.monsters; });
  }
  // getAvatarPlayer1() {
  //  this.recupMonsters.getFirstMonster(this.monsters.picture);
  //   this.recupMonsters.getSelector1(this.selectMonster1);
  //   console.log('Player1');
  // }
  // getAvatarPlayer2() {
  //   this.recupMonsters.getSecondtMonster(this.monsterTwo);
  //   console.log('Player2');
  // }

}
