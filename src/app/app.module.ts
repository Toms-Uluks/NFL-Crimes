import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopCrimesComponent } from './components/top-crimes/top-crimes.component';
import { TopPlayersForCrimeComponent } from './components/top-players-for-crime/top-players-for-crime.component';
import { TopTeamsForCrimeComponent } from './components/top-teams-for-crime/top-teams-for-crime.component';
import { NFLServiceService } from './services/nfl-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterOptionsComponent } from './components/filter-options/filter-options.component';

@NgModule({
  declarations: [
    AppComponent,
    TopCrimesComponent,
    TopPlayersForCrimeComponent,
    TopTeamsForCrimeComponent,
    FilterOptionsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
