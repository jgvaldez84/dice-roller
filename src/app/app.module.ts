import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RollADieComponent } from './roll-a-die/roll-a-die.component';

@NgModule({
  declarations: [
    AppComponent,
    RollADieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
