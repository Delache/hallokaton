import { RecupMonstersService } from './../services/recup-monsters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-monsters',
  templateUrl: './list-monsters.component.html',
  styleUrls: ['./list-monsters.component.scss']
})
export class ListMonstersComponent implements OnInit {
  result: any;
  constructor(private service: RecupMonstersService) { }

  ngOnInit() {
  }

  askToAPI() {
    this.service.getAllMonsters()
    .subscribe((response: any) => {
      this.result = response.monsters;
      console.log(this.result);
    })
  }

}
