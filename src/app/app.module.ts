import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgArithmeticOperationsModule } from 'ng-arithmetic-operations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgArithmeticOperationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
