import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

import { MainPageComponent } from './dbz/dbz.module';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    MainPageComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
