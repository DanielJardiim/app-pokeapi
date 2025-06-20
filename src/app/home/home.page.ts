import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

import { PokemonService } from '../services/pokemon.service';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonButtons,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    IonButtons,
    RouterModule,
    IonIcon,
  ],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  offset = 0;
  limit = 20;
  loading = false;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.loading = true;
    this.pokemonService
      .getPokemons(this.limit, this.offset)
      .subscribe((res) => {
        const requests: Observable<any>[] = res.results.map((p: any) =>
          this.pokemonService.getPokemon(p.name)
        );
        forkJoin(requests).subscribe((details: any[]) => {
          this.pokemons.push(...details);
          this.loading = false;
        });
      });
  }

  nextPage() {
    this.offset += this.limit;
    this.loadPokemons();
  }

  goToDetails(name: string) {
    this.router.navigate(['/details', name]);
  }
}
