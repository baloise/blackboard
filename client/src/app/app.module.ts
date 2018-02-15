import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EntryOverviewPageComponent} from "./entry-overview/entry-overview.page.component";
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.state.reducers';
import {EntryService} from "./entry-overview/entry.service";

@NgModule({
  declarations: [
    AppComponent,
    EntryOverviewPageComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [
      EntryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
