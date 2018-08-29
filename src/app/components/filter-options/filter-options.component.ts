import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.css']
})
export class FilterOptionsComponent implements OnInit {
  @Input() list: any;
  AlphabetOrder= 'Largest -> smallest'
  constructor() { }

  ngOnInit() {
    console.log(this.list)
  }
  switchAlphabeticalButton() {
    if (this.AlphabetOrder === 'Largest -> smallest') {
      this.AlphabetOrder = 'smallest -> Largest'
    } else {
      this.AlphabetOrder = 'Largest -> smallest'
    }
    this.list.reverse()
    console.log(this.list)
  }

}
