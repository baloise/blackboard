import {Entry} from '../../model/entry.model';
import * as EntryActionTypes from './entry-overview.actions';
import {EntryActions} from './entry-overview.actions';

export interface EntryState {
    entries: Entry[];
}

const initialState: EntryState = {
    entries: []
};

export function reducer(state = initialState, action: EntryActions) {
    switch (action.type) {
        case EntryActionTypes.LOAD_ENTRIES_SUCCESS:
            const entries: Entry[] = action.payload;

            return Object.assign({}, state, {
                entries: entries,
            });
        default:
            return state;
    }
}

export const getEntries = (state: EntryState) => state.entries;
