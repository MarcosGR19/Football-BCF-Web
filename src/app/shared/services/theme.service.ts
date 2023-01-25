import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  next(value:boolean){
    this.themeSubject.next(value)
  }

  obs(){
    return this.themeSubject;
  }
}
