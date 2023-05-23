import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/models';
import { FavoritesService } from 'src/app/services/FavouritesService';
@Component({
  selector: 'app-gamedetailstabs',
  templateUrl: './gamedetailstabs.component.html',
  styleUrls: ['./gamedetailstabs.component.scss']
})


export class GamedetailstabsComponent implements OnInit {
   @Input() game: Game;

  constructor(private favoritesService: FavoritesService) {}
  
  ngOnInit(): void {

  }

  addToFavorites() {
    console.log("Add to Favorites button clicked");
    this.favoritesService.addFavorite(this.game);
  }
  
}
