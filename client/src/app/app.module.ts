import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {reducers} from './app.state.reducers';
import {EntryOverviewListComponent} from './entry-overview/entry-overview-list/entry-overview-list.component';
import {EntryOverviewPageComponent} from './entry-overview/entry-overview.page.component';
import {EntryService} from './entry-overview/entry.service';
import {EntryOverviewEffects} from './entry-overview/redux/entry-overview.effetcs';

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
