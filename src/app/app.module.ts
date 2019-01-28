import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Ng7AccordionLibModule} from 'ng7-accordion-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng7AccordionLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
