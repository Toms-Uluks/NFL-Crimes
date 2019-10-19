import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.css']
})
export class FilterOptionsComponent implements OnInit {
  @Input() list: any;
  AlphabetOrder= 'LARGEST -> smallest'
  constructor() { }

  ngOnInit() {
    console.log(this.list)
  }
  switchAlphabeticalButton() {
    if (this.AlphabetOrder === 'LARGEST -> smallest') {
      this.AlphabetOrder = 'smallest -> LARGEST'
    } else {
      this.AlphabetOrder = 'LARGEST -> smallest'
    }
    this.list.reverse()
    console.log(this.list)
  }

}
