import { RecupMonstersService } from '../../services/recup-monsters.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FinalscoreComponent } from '../finalscore/finalscore.component';

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

  decks: any [] = [{}, {}, {}];
  decks2: any [] = [{}, {}, {}];

  constructor(private service: RecupMonstersService, public dialogTwo: MatDialog) {}

  ngOnInit() { }

  askToAPI1(i: number){
    const randID1 = Math.floor(Math.random() * 82) + 1;
    this.service.getById(randID1).subscribe((maCarteRandom: any) => {
      this.decks[i] = maCarteRandom.movie;
  });

  }

  askToAPI2( j: number){
    const randID1 = Math.floor(Math.random() * 82) + 1;
    this.service.getById(randID1).subscribe((maCarteRandom: any) => {
      this.decks2[j] = maCarteRandom.movie;
  });

}
openSurvive(): void {
  const dialogRef = this.dialogTwo.open(FinalscoreComponent, {
    width: '500px',
  });
}
}
