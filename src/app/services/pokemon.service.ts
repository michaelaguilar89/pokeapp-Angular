import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipokemon } from '../models/ipokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url='https://pokeapi.co/api/v2/pokemon/${pokemonId}';
  
  constructor(private http:HttpClient) { }

  getPokemon(pokemonId:string):Observable<Ipokemon>{
    return this.http.get<Ipokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`) 
  }
}
