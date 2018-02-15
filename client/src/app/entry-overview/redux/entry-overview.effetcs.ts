import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import {of} from "rxjs/observable/of";
import {EntryService} from "../entry.service";
import {LoadEntriesAction} from "./entry-overview.actions";
import * as EntryActionTypes from "./entry-overview.actions";

@Injectable()
export class EntryOverviewEffects {

    constructor(private actions$: Actions, private entryService: EntryService) {
    }

    @Effect()
    loadEntries: Observable<Action> = this.actions$
        .ofType(EntryActionTypes.LOAD_ENTRIES)
        .switchMap(() =>
            this.entryService.getEntries()
                .flatMap(entries => of(new LoadEntriesAction(entries)))
        );
}