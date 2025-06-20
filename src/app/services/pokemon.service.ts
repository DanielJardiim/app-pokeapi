import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private api = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemons(limit = 20, offset = 0): Observable<any> {
    return this.http.get<any>(
      `${this.api}/pokemon?limit=${limit}&offset=${offset}`
    );
  }

  getPokemon(name: string): Observable<any> {
    return this.http.get<any>(`${this.api}/pokemon/${name}`);
  }
}
