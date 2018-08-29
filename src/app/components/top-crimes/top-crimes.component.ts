import { Component, OnInit } from '@angular/core';
import { NFLServiceService } from '../../services/nfl-service.service';

@Component({
  selector: 'app-top-crimes',
  templateUrl: './top-crimes.component.html',
  styleUrls: ['./top-crimes.component.css']
})
export class TopCrimesComponent implements OnInit {
  TopCrimes: Object;
  constructor(
    private api: NFLServiceService
  ) { }

  ngOnInit() {
    this.api.GetTopCrimes().subscribe(
      data => { 
        this.TopCrimes = data;
      })
  }

}
