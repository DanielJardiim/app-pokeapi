import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonIcon,
  ],
})
export class DetailsPage implements OnInit {
  pokemon: any;
  loading = true;
  isFav = false;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    // remove foco de qualquer botão da página anterior
    setTimeout(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }, 50);

    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.pokemonService.getPokemon(name).subscribe((res) => {
        this.pokemon = res;
        this.isFav = this.favoritesService.isFavorite(this.pokemon.name);
        this.loading = false;
      });
    }
  }

  toggleFavorite(name: string) {
    this.favoritesService.toggleFavorite(name);
    this.isFav = this.favoritesService.isFavorite(name);
  }

  get types(): string {
    return this.pokemon?.types?.map((t: any) => t.type.name).join(', ') || '';
  }

  get abilities(): string {
    return (
      this.pokemon?.abilities?.map((a: any) => a.ability.name).join(', ') || ''
    );
  }
}
