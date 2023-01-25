import { ThemeService } from './../../shared/services/theme.service';
import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  @Input() public isDark:boolean = false;

  constructor (private themeService:ThemeService){}
  ngOnInit(){
    this.themeService.obs().subscribe((isDark:boolean)=>{
      this.isDark = isDark;
    })
  }

}
