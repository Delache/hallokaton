import { RecupMonstersService } from "../../services/recup-monsters.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movies-list",
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.scss"]
})
export class MoviesListComponent implements OnInit {
  result: {};
  posterUrl: string;

  constructor(private service: RecupMonstersService) {}

  ngOnInit() {}

  array = [];
  askToAPI() {
    const randID = Math.floor(Math.random() * 82) + 1;
    this.service.getById(randID).subscribe((maCarteRandom: any) => {
      this.result = maCarteRandom.movie;
      this.array.push(this.result);

      return this.array;
    });
  }

  // this.service.getAllMovies()
  // .subscribe((response: any)=> {
  //   this.result = response.movies
  //   console.log(this.result)
  // })
}
