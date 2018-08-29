import { Component, OnInit } from '@angular/core';
import { NFLServiceService } from '../../services/nfl-service.service';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crime-time-line',
  templateUrl: './crime-time-line.component.html',
  styleUrls: ['./crime-time-line.component.css']
})
export class CrimeTimeLineComponent implements OnInit {
  crimeTimeLine: Object;
  chart = [];
  constructor(
    private router: Router,
    private api: NFLServiceService
  ) { }

  ngOnInit() {
    this.api.GetCrimeTimeLine(this.router.url.replace('/crime-timeline/', ''))
      .subscribe(data => {
        this.crimeTimeLine = data;
        console.log(data)
        this.chart = new Chart('canvas', {
        });
      })
  }

}
