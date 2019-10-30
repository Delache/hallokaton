import { MovieComponent } from './movie/movie.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PlayersNameFormsComponent } from './players-name-forms/players-name-forms.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MonsterComponent } from './monster/monster.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersNameFormsComponent,
    MovieComponent,
    MonsterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  entryComponents: [
    PlayersNameFormsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
