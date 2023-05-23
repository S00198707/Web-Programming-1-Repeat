import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { GamedetailsComponent } from './components/gamedetails/gamedetails.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AdminComponent } from './admin-panel/admin-panel.component';
const routes: Routes = [

  {
    path: 'login',
    component: LoginuserComponent
  },

{
  path:'main',
  component: MainComponent,
},
{
  path:'search/:game-search',
  component: MainComponent,
},
{
path: 'gamedetails/:id',
component: GamedetailsComponent,
},
{
  path: '',
  component: RegisteruserComponent,
  },
  { path: 'favorites', component: FavoritesComponent },

  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
