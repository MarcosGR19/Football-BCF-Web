import { PlayerstatsComponent } from './pages/playerstats/playerstats.component';
import { PlayersComponent } from './pages/players/players.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"jugadores", component:PlayersComponent},
  {path:"jugadores/:id", component:PlayerstatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  @Input() public isDark:boolean = false;
}
