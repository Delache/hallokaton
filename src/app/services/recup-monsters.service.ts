import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RecupMonstersService {
  monsterOne;
  monsterTwo;
  selector1;
  selector2;

  static URL = "https://hackathon-wild-hackoween.herokuapp.com";

  constructor(private http: HttpClient) {}

  getAllMonsters() {
    return this.http.get(RecupMonstersService.URL + "/monsters");
  }

  getAllMovies() {
    return this.http.get(RecupMonstersService.URL + "/movies");
  }
  getFirstMonster(data) {
    this.monsterOne = data;
    console.log(this.monsterOne);
  }
  getSecondtMonster(data) {
    this.monsterTwo = data;
    console.log(this.monsterTwo);
  }
//   getSelector1(data) {
// this.selector1 = data;
//   }
//   getSelector2(data) {
//     this.selector2 = data;
//       }
}
