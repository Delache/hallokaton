import { MonsterChoiceComponent } from './pages/monster-choice/monster-choice.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMoviesComponent } from './pages/fightPage/list-movies/list-movies.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'monsterChoice', component: MonsterChoiceComponent },
  { path: 'listMovies', component: ListMoviesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
