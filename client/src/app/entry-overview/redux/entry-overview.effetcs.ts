import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import {EntryService} from "../entry.service";
import * as EntryActionTypes from "./entry-overview.actions";
import {LoadEntriesSuccessAction} from "./entry-overview.actions";
import "rxjs/add/operator/switchMap";

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