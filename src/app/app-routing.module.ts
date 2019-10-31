import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarPlayerComponent } from './nav-bar-player/nav-bar-player.component';
import { HomeComponent } from './pages/home/home.component';
import { MonsterChoiceComponent } from './pages/monster-choice/monster-choice.component';
import { FinalscoreComponent } from './pages/finalscore/finalscore.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'monsterChoice', component: MonsterChoiceComponent },
  { path: 'moviesList', component: MoviesListComponent },
  { path: 'navBarPlayer', component: NavBarPlayerComponent },
  { path: 'finalScore', component: FinalscoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
