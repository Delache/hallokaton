import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavBarPlayerComponent } from './nav-bar-player/nav-bar-player.component';
import { ListMoviesComponent } from './pages/fightPage/list-movies/list-movies.component';
import { HomeComponent } from './pages/home/home.component';
import { MonsterChoiceComponent } from './pages/monster-choice/monster-choice.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'monsterChoice', component: MonsterChoiceComponent },

  { path: 'listMovies', component: ListMoviesComponent },


  { path: 'navBarPlayer', component: NavBarPlayerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
