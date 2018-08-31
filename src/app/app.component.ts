import { Component, OnInit } from '@angular/core';
import { NgArithmeticOperationsService } from 'ng-arithmetic-operations/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-calculator';

  n1: number = 1;
  n2: number = 2;

  constructor(private _ngAOService: NgArithmeticOperationsService) {
    
  }

  ngOnInit() {
    // console.log('AAAA', this._ngAOService.add(this.n1, this.n2));
    // console.log('AAAA', this._ngAOService.minus(this.n1, this.n2));

  }
}
