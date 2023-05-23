import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { GamedetailsComponent } from './components/gamedetails/gamedetails.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
