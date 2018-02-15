import {Action} from '@ngrx/store';
import {Entry} from "../../model/entry.model";

export const LOAD_ENTRIES = '[Entry] Load';

export class LoadEntriesAction implements Action {
    type = LOAD_ENTRIES;

    constructor(public payload: Entry[]) {
    }
}

export type EntryActions = LoadEntriesAction;