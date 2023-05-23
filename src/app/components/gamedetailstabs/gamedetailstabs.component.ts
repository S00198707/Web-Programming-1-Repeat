import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models';

@Component({
  selector: 'app-gamedetailstabs',
  templateUrl: './gamedetailstabs.component.html',
  styleUrls: ['./gamedetailstabs.component.scss']
})
export class GamedetailstabsComponent implements OnInit {
@Input() game: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
