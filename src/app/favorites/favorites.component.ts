import { Component, Input,OnInit } from '@angular/core';
import { Game } from 'src/app/models';
import { FavoritesService } from '../services/FavouritesService';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
  
})

export class FavoritesComponent implements OnInit{
 @Input() favoriteGames: Game[];

 constructor(private favoritesService: FavoritesService) {
  this.favoriteGames = this.favoritesService.getFavorites().value;
}
  ngOnInit(): void {
  }

  removeFavorite(game: Game): void {
    this.favoritesService.removeFavorite(game);
  }
}