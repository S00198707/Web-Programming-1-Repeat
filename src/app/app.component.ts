import { Component, OnInit } from '@angular/core';
import { Game } from './models';
import { Router } from '@angular/router';
import { FavoritesService } from './services/FavouritesService';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedGame: Game;
  favoriteGames: Game[] = [];
  isAdmin = false;
  authService: AuthService;
  title='videogames-project'
  constructor(public favoritesService: FavoritesService, private router: Router) {
    this.favoriteGames = [];
  }

  ngOnInit(): void {
    
  }


  onGameSelected(game: Game) {
    this.selectedGame = game;
  }

  onAddToFavorites(game: Game) {
    if (!this.favoriteGames.find(favorite => favorite.id === game.id)) {
      this.favoriteGames.push(game);
      console.log(`Added "${game.name}" to favorites.`);
    } else {
      console.log(`"${game.name}" is already in favorites.`);
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}



  

