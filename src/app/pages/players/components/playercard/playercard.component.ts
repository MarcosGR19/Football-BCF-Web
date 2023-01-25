import { ThemeService } from './../../../../shared/services/theme.service';
import { Player } from './../../../../shared/models/player.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playercard',
  templateUrl: './playercard.component.html',
  styleUrls: ['./playercard.component.scss']
})
export class PlayercardComponent implements OnInit{
  @Input() players:Player[]=[];
  @Input() public isDark:boolean = false;

  constructor (private themeService:ThemeService){}
  ngOnInit(){
    this.themeService.obs().subscribe((isDark:boolean)=>{
      this.isDark = isDark;
    })
  }
}
