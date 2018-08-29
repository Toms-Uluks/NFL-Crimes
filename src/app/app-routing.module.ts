import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopCrimesComponent } from './components/top-crimes/top-crimes.component';
import { TopPlayersForCrimeComponent } from './components/top-players-for-crime/top-players-for-crime.component';
import { TopTeamsForCrimeComponent } from './components/top-teams-for-crime/top-teams-for-crime.component';

const nflRoutes: Routes = [
  {
      path: 'top-crimes', 
      component: TopCrimesComponent
  },
  {
      path: 'top-player-for',
      component: TopCrimesComponent,
  },
  {
    path: 'top-player-for/:id',
    component: TopPlayersForCrimeComponent,
    pathMatch: 'full'
  },
  {
      path: 'top-team-for',
      component: TopCrimesComponent,
  }, 
  {
    path: 'top-team-for/:id',
    component: TopTeamsForCrimeComponent,
    pathMatch: 'full'
  }, 
]

@NgModule({
    imports: [ RouterModule.forRoot(nflRoutes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
