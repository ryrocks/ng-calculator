import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NgArithmeticOperationsModule, NgArithmeticOperationsService } from 'ng-arithmetic-operations';
import { PanelDisplayComponent } from './components/panel-display/panel-display.component';
import { PanelButtonsComponent } from './components/panel-buttons/panel-buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelDisplayComponent,
    PanelButtonsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgArithmeticOperationsModule,
    MatButtonModule, 
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [NgArithmeticOperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
