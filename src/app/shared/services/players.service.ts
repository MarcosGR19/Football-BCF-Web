import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http:HttpClient) { }

  getJugadores(){
    return this.http.get("https://bcf-backend.vercel.app/players");
  }

  getPlayer(id:number){
    return this.http.get("https://bcf-backend.vercel.app/players/"+id);
  }
}
