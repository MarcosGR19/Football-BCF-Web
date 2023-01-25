import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavtabComponent } from './shared/components/navtab/navtab.component';
import { CloudsComponent } from './shared/components/clouds/clouds.component';
import { PlayersComponent } from './pages/players/players.component';
import { PlayerstatsComponent } from './pages/playerstats/playerstats.component';
import { PlayercardComponent } from './pages/players/components/playercard/playercard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavtabComponent,
    CloudsComponent,
    PlayersComponent,
    PlayerstatsComponent,
    PlayercardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
