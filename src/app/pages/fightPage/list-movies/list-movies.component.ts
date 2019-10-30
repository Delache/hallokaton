import { RecupMonstersService } from './../../../services/recup-monsters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  result: any
  constructor(private service: RecupMonstersService) { }

  ngOnInit() {
  }

  askToAPI() {
    this.service.getAllMovies()
    .subscribe((response: any)=> {
      this.result = response.movies
      console.log(this.result)
    })
  }

}
