import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NFLServiceService {

  constructor(
    public http : HttpClient
  ) { }


  GetTopCrimes() {
    return this.http.get(environment.api + 'crime');
  }

  GetTopPlayersForCrime(crimeID) {
    const url = 'crime/topPlayers/' + crimeID;
    
    return this.http.get(environment.api + url);
  }

  GetTopTeamsForCrime(crimeID) {
    const url = 'crime/topTeams/' + crimeID;
    
    return this.http.get(environment.api + url);
  }

  GetCrimeTimeLine(crimeID) {
    const url = 'crime/timeline/' + crimeID;

    return this.http.get(environment.api + url)
  }
}
