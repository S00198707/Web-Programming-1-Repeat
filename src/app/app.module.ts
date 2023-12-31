import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { GaugeModule } from 'angular-gauge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MainComponent } from './components/main/main.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptors';
import { GamedetailsComponent } from './components/gamedetails/gamedetails.component';
import { GamedetailstabsComponent } from './components/gamedetailstabs/gamedetailstabs.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { GameService } from './services/gameservice';
import { FavoritesService } from './services/FavouritesService';
import { Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { AdminComponent } from './admin-panel/admin-panel.component';

const appRoutes: Routes = [
  { path: '', component: GamedetailsComponent },
  { path: 'favorites', component: FavoritesComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    MainComponent,
    AdminComponent,
    LoginuserComponent,
    RegisteruserComponent,
    GamedetailsComponent,
    GamedetailstabsComponent,
    FavoritesComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    GaugeModule.forRoot(),
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,

  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,
    useClass: HttpHeadersInterceptor,
    multi: true,
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    },
    GameService,
    FavoritesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
