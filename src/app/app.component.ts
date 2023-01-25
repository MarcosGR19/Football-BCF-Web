import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'FootballBurgosCFWeb';

  public isDark!:boolean;
  themeAsign(isDark:boolean){
    this.isDark=isDark;
  }
}
