import { RecupMonstersService } from './../../../services/recup-monsters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  result: {};
  posterUrl: string;

  constructor(private service: RecupMonstersService) { }

  ngOnInit() {
  }


  Array=[]
  askToAPI() {
    const randID = Math.floor(Math.random()*80) +1;
    this.service.getById(randID)
    .subscribe((maCarteRandom) => {
      this.result = maCarteRandom;
      this.Array.push(this.result)

      console.log(this.Array)
      })
  }
// this.service.getAllMovies()
    // .subscribe((response: any)=> {
    //   this.result = response.movies
    //   console.log(this.result)
 // })

}
