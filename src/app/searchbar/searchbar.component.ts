import { Component,Output, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from '../models';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Output() gameSelected = new EventEmitter<Game>();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this.router.navigate(['search',form.value.search])
  }
  onGameSelected(game: Game) {
    this.gameSelected.emit(game);
  }

}
