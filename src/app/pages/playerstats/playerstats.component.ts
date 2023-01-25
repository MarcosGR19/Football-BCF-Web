import { ThemeService } from './../../shared/services/theme.service';
import { Player } from './../../shared/models/player.interface';
import { ComicsService } from './../../../../../Ejercicios Sergio/7.proyectoComics/front/src/app/services/comics.service';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from './../../shared/services/players.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playerstats',
  templateUrl: './playerstats.component.html',
  styleUrls: ['./playerstats.component.scss']
})
export class PlayerstatsComponent implements OnInit{
  public isDark:boolean = false;

  constructor (private playerService:PlayersService, private activatedRoute:ActivatedRoute, private themeService:ThemeService) {}

  public id?:number;
  public player?:Player;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.id= Number(params.get('id'));
    })

    this.playerService.getPlayer(this.id!).subscribe((res:any)=>{
      this.player=res;
    })

    this.themeService.obs().subscribe((isDark:boolean)=>{
      this.isDark = isDark;
    })
  }

  
}
