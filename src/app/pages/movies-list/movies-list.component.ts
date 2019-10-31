import { RecupMonstersService } from '../../services/recup-monsters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  result: {};
  posterUrl: string;
  randID1: number;
  randID2: number;


  // decks: any[][] = [[{},{},{}],[{},{},{}]];
  decks: any [] = [{}, {}, {}];
  decks2: any [] = [{}, {}, {}];

  constructor(private service: RecupMonstersService) {}

  ngOnInit() { }


  // askToAPI1() {
  //   const randID1 = Math.floor(Math.random() * 82) + 1;
  //   this.service.getById(randID1).subscribe((maCarteRandom: any) => {
  //     this.result = maCarteRandom.movie;
  //   });
  // }
  // askToAPI2() {
  //   const randID1 = Math.floor(Math.random() * 82) + 1;
  //   this.service.getById(randID1).subscribe((maCarteRandom: any) => {
  //     this.result = maCarteRandom.movie;
  // });
  // }

  askToAPI1(i: number){
    const randID1 = Math.floor(Math.random() * 82) + 1;
    this.service.getById(randID1).subscribe((maCarteRandom: any) => {
      // this.decks[i][j] = maCarteRandom.movie;
      this.decks[i] = maCarteRandom.movie;
  });

  }

  askToAPI2( j: number){
    const randID1 = Math.floor(Math.random() * 82) + 1;
    this.service.getById(randID1).subscribe((maCarteRandom: any) => {
      // this.decks[i][j] = maCarteRandom.movie;
      this.decks2[j] = maCarteRandom.movie;
  });

}
  // this.service.getAllMovies()
  // .subscribe((response: any)=> {
  //   this.result = response.movies
  //   console.log(this.result)
  // })
}
