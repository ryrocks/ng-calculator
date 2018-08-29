import { Component, OnInit } from '@angular/core';
import { NgArithmeticOperationsService, NGAO  } from 'ng-arithmetic-operations';

@Component({
  selector: 'app-panel-buttons',
  templateUrl: './panel-buttons.component.html',
  styleUrls: ['./panel-buttons.component.scss']
})
export class PanelButtonsComponent implements OnInit {

  constructor(
    private _ngAOService: NgArithmeticOperationsService
  ) { }

  ngOnInit() {
    
  }

  onButtonClick(value: string) {
    this._ngAOService.inputValue(value);
  }

  onResetClick() {
    this._ngAOService.resetValue();
    NGAO.reset();
  }
  
}
