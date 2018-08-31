import { Component, OnInit } from '@angular/core';
import { NgArithmeticOperationsService, ErrorMsg } from 'ng-arithmetic-operations';

@Component({
  selector: 'app-panel-display',
  templateUrl: './panel-display.component.html',
  styleUrls: ['./panel-display.component.scss']
})
export class PanelDisplayComponent implements OnInit {
  displayNum: string = '0';
  errorMsg: ErrorMsg = <ErrorMsg>{};

  constructor(private _ngAOService: NgArithmeticOperationsService) { }

  ngOnInit() {
    this.getErrorMsg();
    this.getExpression();
    
  }

  getExpression() {
    this._ngAOService.getExpression().subscribe(n => this.displayNum = n);
  }

  getErrorMsg() {
    this._ngAOService.getErrorMsg().subscribe(m => this.errorMsg = m);
  }

}
