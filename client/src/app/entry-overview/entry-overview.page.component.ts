import {Component, OnInit} from '@angular/core';
import {Entry} from "../model/entry.model";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {LoadEntriesAction} from "./redux/entry-overview.actions";
import {BlackboardApplicationState, getEntries} from "../app.state.reducers";

@Component({
  selector: 'entry-overview',
  templateUrl: './entry-overview.page.component.html',
  styleUrls: ['././entry-overview.page.component.css']
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
