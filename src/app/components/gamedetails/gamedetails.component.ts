import { Component,EventEmitter, Output , Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { GameService } from 'src/app/services/gameservice';
import { FavoritesService } from 'src/app/services/FavouritesService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gamedetails',
  templateUrl: './gamedetails.component.html',
  styleUrls: ['./gamedetails.component.scss']
})
export class GamedetailsComponent implements OnInit, OnDestroy {
  GRating = 0;
  gameId: string;
  routeSub: Subscription;
  gameSub: Subscription;
  favorites: Game[] = [];
 @Input() game: Game;
  isFavorite: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.gameId = params['id'];
      this.getGameDetails(this.gameId);
      this.isFavorite = this.favorites.some((favorite: Game) => favorite.id === this.gameId);

    });
    this.favoritesService.getFavorites().subscribe((favorites: Game[]) => {
      this.favorites = favorites;
      this.isFavorite = this.favorites.some((favorite: Game) => favorite.id === this.gameId);
    });
  }


  getGameDetails(id: string): void {
    this.gameSub = this.httpService.getGameDetails(id).subscribe((gameResp: Game) => {
      this.game = gameResp;

      setTimeout(() => {
        this.GRating = this.game.metacritic;
      }, 750);
    });
  }

  // ratings and colour equivalents
  getGameColor(value: number): string {
    if (value > 75) {
      return '#5ee432'; // green
    } else if (value > 50) {
      return '#fffa50'; // orange
    } else if (value > 30) {
      return '#f7aa38'; // yellowish
    } else {
      return '#ef4655'; // bad
    }
  }
  addToFavorites(event: any) {
    event.stopPropagation();
    this.favoritesService.addFavorite(this.game);
  }

  removeFromFavorites(): void {
    this.favoritesService.removeFavorite(this.game);
    this.isFavorite = false;
  }

  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
  
}
