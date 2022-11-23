import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamePageComponent } from './game-page/game-page.component';
import { ScorePageComponent } from './score-page/score-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: "game-page", component: GamePageComponent },
  { path: "", component: WelcomePageComponent },
  { path: "score-page", component: ScorePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
