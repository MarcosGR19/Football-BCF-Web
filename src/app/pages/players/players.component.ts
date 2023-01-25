import { ThemeService } from './../../shared/services/theme.service';
import { Player } from './../../shared/models/player.interface';
import { PlayersService } from './../../shared/services/players.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit{
  constructor (private themeService:ThemeService, private playersService:PlayersService){};

  public isDark:boolean = false;

  public players:Player[]=[];
  public players2022:Player[]=[];
  public players2021:Player[]=[];
  public players2020:Player[]=[];
  public players2019:Player[]=[];
  public playersPrev:Player[]=[];

  ngOnInit(){
    this.playersService.getJugadores().subscribe((res:any)=>{
      this.players = res;
      this.players2022 = this.players.filter((item)=> item.signUp.season==="22/23");
      this.players2021 = this.players.filter((item)=> item.signUp.season==="21/22");
      this.players2020 = this.players.filter((item)=> item.signUp.season==="20/21");
      this.players2019 = this.players.filter((item)=> item.signUp.season==="19/20" && item.signUp.michuPlayer==true);
      this.playersPrev = this.players.filter((item)=> item.signUp.michuPlayer==false);
    });

    this.themeService.obs().subscribe((isDark:boolean)=>{
      this.isDark = isDark;
    })

  }
  
}
