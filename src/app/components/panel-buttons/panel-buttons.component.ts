import { Component, OnInit } from '@angular/core';
import { NgArithmeticOperationsService, NGAO  } from 'ng-arithmetic-operations/dist';

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

  onButtonClick(key: string) {
    this._ngAOService.inputKey(key);
  }

  onResetClick() {
    this._ngAOService.resetValue();
    NGAO.reset();
  }
  
}
