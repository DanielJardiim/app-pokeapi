import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonBackButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { PokemonService } from '../services/pokemon.service';
import { Router, RouterModule } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonBackButton,
    IonButtons,
  ],
})
export class FavoritesPage implements OnInit {
  favorites: any[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    // remove foco de qualquer botão da página anterior
    setTimeout(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }, 50);

    this.loadFavorites();
  }

  loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    const requests: Observable<any>[] = favorites.map((name: string) =>
      this.pokemonService.getPokemon(name)
    );

    forkJoin(requests).subscribe((results) => {
      this.favorites = results;
    });
  }

  goToDetails(name: string) {
    this.router.navigate(['/details', name]);
  }
}
