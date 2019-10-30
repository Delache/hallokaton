import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlayersNameFormsComponent } from 'src/app/players-name-forms/players-name-forms.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PlayersNameFormsComponent, {
      width: '500px',
    });
  }
}
