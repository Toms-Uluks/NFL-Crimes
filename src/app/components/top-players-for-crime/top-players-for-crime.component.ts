import { Component, OnInit } from '@angular/core';
import { NFLServiceService } from '../../services/nfl-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-players-for-crime',
  templateUrl: './top-players-for-crime.component.html',
  styleUrls: ['./top-players-for-crime.component.css']
})
export class TopPlayersForCrimeComponent implements OnInit {
  TopCrimes: Object;
  constructor(
    private router: Router,
    private api: NFLServiceService
  ) { }

  ngOnInit() {
    this.api.GetTopPlayersForCrime(this.router.url.substring(16)).subscribe(
      data => { 
        this.TopCrimes = data
      })

  }

}
