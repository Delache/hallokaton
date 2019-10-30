import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMonstersComponent } from './list-monsters/list-monsters.component';
import { MonsterComponent } from './monster/monster.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayersNameFormsComponent } from './players-name-forms/players-name-forms.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersNameFormsComponent,
    MovieComponent,
    MonsterComponent,
    ListMonstersComponent

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
    PlayersNameFormsComponent,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
