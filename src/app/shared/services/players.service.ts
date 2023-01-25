import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http:HttpClient) { }

  getJugadores(){
    return this.http.get("http://localhost:3000/players");
  }

  getPlayer(id:number){
    return this.http.get("http://localhost:3000/players/"+id);
  }
}
