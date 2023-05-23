import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-gamedetails',
  templateUrl: './gamedetails.component.html',
  styleUrls: ['./gamedetails.component.scss']
})
export class GamedetailsComponent implements OnInit, OnDestroy {
GRating = 0;
gameId:string;
game: Game;
routeSub: Subscription;
gameSub: Subscription;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.routeSub=this.ActivatedRoute.params.subscribe((params: Params) => {
      this.gameId =params['id'];
      this.getGameDetails(this.gameId);
    });
  }
  
  getGameDetails(id: string): void {
    this.gameSub = this.httpService
      .getGameDetails(id)
      .subscribe((gameResp: Game) => {
        this.game = gameResp;

setTimeout(() =>{
  this.GRating = this.game.metacritic;

}, 750);

});
  }

  //ratings and colour equilevents
  getGameColor(value: number): string{
    if (value > 75) {
      return '#5ee432';//green
    } else if (value > 50) {//orange
      return '#fffa50';
    } else if (value > 30) {//yellowish
      return '#f7aa38';
    } else {//bad 
      return '#ef4655';
    }
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

