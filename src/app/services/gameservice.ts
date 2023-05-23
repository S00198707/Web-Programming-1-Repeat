import { Injectable } from '@angular/core';
import { Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GameService {

   favoriteGames: Game[] = [];

  constructor() { }

  getFavoriteGames(): Game[] {
    return this.favoriteGames;
  }

  addToFavorites(game: Game) {
    if (!this.favoriteGames.includes(game)) {
      this.favoriteGames.push(game);
    }
  }

  removeFavoriteGame(game: Game) {
    const index = this.favoriteGames.findIndex(g => g.id === game.id);
    if (index !== -1) {
      this.favoriteGames.splice(index, 1);
    }
  }

}
