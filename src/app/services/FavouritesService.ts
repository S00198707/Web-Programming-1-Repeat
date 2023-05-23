import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
    private favorites: Game[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    private favoritesSubject = new BehaviorSubject<Game[]>(this.favorites);
    constructor() { }
  
    addFavorite(game: Game): void {
        this.favorites.push(game);
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
        this.favoritesSubject.next(this.favorites);
      }

      removeFavorite(game: Game): void {
        const index = this.favorites.findIndex(fav => fav.id === game.id);
        if (index !== -1) {
          this.favorites.splice(index, 1);
          localStorage.setItem('favorites', JSON.stringify(this.favorites));
          this.favoritesSubject.next(this.favorites);
        }
      }
    
      isFavorite(game: Game): boolean {
        return this.favorites.some(fav => fav.id === game.id);
      }
    
      getFavorites(): BehaviorSubject<Game[]> {
        return this.favoritesSubject;
      }
    }