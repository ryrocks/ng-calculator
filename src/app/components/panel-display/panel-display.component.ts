import { Component, OnInit } from '@angular/core';
import { NgArithmeticOperationsService } from 'ng-arithmetic-operations';

@Component({
  selector: 'app-panel-display',
  templateUrl: './panel-display.component.html',
  styleUrls: ['./panel-display.component.scss']
})
export class PanelDisplayComponent implements OnInit {
  displayNum: string = '0';

  constructor(private _ngAOService: NgArithmeticOperationsService) { }

  ngOnInit() {
    this._ngAOService.sumData.subscribe(n => this.displayNum = n);
  }

}
