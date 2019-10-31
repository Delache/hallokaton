import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecupPlayerNameService {

player1: string;
player2: string;

  constructor() { }
  recupName1(name) {
    this.player1 = name;
    console.log(this.player1);
  }
  recupName2(name) {
    this.player2 = name;
    console.log(this.player2);
  }


  

}
