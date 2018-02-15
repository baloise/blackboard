import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {BlackboardApplicationState, getEntries} from '../app.state.reducers';
import {Entry} from '../model/entry.model';
import {LoadEntriesAction} from './redux/entry-overview.actions';

@Component({
    selector: 'bb-entry-overview',
    templateUrl: './entry-overview.page.component.html'
})
export class EntryOverviewPageComponent implements OnInit {

    private entries: Observable<Entry[]>;

    constructor(private store: Store<BlackboardApplicationState>) {
    }

    ngOnInit(): void {
        this.store.dispatch(new LoadEntriesAction());
        this.entries = this.store.select(getEntries);
    }

}
