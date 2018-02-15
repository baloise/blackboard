import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {EntryService} from '../entry.service';
import * as EntryActionTypes from './entry-overview.actions';
import {LoadEntriesSuccessAction} from './entry-overview.actions';

@Injectable()
export class EntryOverviewEffects {

    constructor(private actions$: Actions, private entryService: EntryService) {
    }

    @Effect()
    loadEntries: Observable<Action> = this.actions$
        .ofType(EntryActionTypes.LOAD_ENTRIES)
        .switchMap(() =>
            this.entryService.getEntries()
                .map(entries => new LoadEntriesSuccessAction(entries))
        );
}
