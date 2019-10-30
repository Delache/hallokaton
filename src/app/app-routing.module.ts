import { MonsterChoiceComponent } from './pages/monster-choice/monster-choice.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarPlayerComponent } from './nav-bar-player/nav-bar-player.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'monsterChoice', component: MonsterChoiceComponent },
  { path: 'navBarPlayer', component: NavBarPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
