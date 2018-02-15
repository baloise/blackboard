import {Entry} from "../../model/entry.model";
import {EntryActions} from "./entry-overview.actions";
import * as EntryActionTypes from "./entry-overview.actions";

export interface EntryState {
    entries: Entry[]
}

const initialState: EntryState = {
    entries: [],
};

export function reducer(state = initialState, action: EntryActions) {
    switch (action.type) {
        case EntryActionTypes.LOAD_ENTRIES:
            const entries: Entry[] = action.payload;

            return Object.assign({}, state, {
                entries: entries,
            });
        default:
            return state;
    }
}