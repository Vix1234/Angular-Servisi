import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NalogComponent } from './nalog/nalog.component';
import { NoviNalogComponent } from './novi-nalog/novi-nalog.component';

@NgModule({
  declarations: [
    AppComponent,
    NalogComponent,
    NoviNalogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
