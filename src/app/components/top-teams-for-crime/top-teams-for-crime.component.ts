import { Component, OnInit } from '@angular/core';
import { NFLServiceService } from '../../services/nfl-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-teams-for-crime',
  templateUrl: './top-teams-for-crime.component.html',
  styleUrls: ['./top-teams-for-crime.component.css']
})
export class TopTeamsForCrimeComponent implements OnInit {
  TopCrimes: Object;
  constructor(
    private router: Router,
    private api: NFLServiceService
  ) { }

  ngOnInit() {
    this.api.GetTopTeamsForCrime(this.router.url.substring(14)).subscribe(
      data => { 
        this.TopCrimes = data
      })
  }
}
