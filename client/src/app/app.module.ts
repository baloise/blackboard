import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EntryOverviewPageComponent} from "./entry-overview/entry-overview.page.component";
import {StoreModule} from '@ngrx/store';
import {reducers} from './app.state.reducers';
import {EntryService} from "./entry-overview/entry.service";
import {EntryOverviewListComponent} from "./entry-overview/entry-overview-list/entry-overview-list.component";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {EntryOverviewEffects} from "./entry-overview/redux/entry-overview.effetcs";

@NgModule({
    declarations: [
        AppComponent,
        EntryOverviewPageComponent,
        EntryOverviewListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        EffectsModule.forRoot([
           EntryOverviewEffects
        ]),
        StoreModule.forRoot(reducers),
    ],
    providers: [
        EntryService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
