import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecupPlayerNameService {

player1: string;
player2: string;
score1: number;
score2: number;


  constructor() { }
  recupName1(name) {
    this.player1 = name;
    console.log(this.player1);
  }
  recupName2(name) {
    this.player2 = name;
    console.log(this.player2);
  }
 recupScore1(data) {
   this.score1 = data;
   console.log(this.score1);
 }
 recupScore2(data) {
  this.score2 = data;
  console.log(this.score2);
}



}
