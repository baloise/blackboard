import * as entryOverviewReducer from './entry-overview/redux/entry-overview.reducer'
import {createSelector} from "@ngrx/store";

export interface BlackboardApplicationState {
    entryOverview: entryOverviewReducer.EntryState;
}

export const reducers = {
    entryOverview: entryOverviewReducer.reducer,
};

export const getEntries = createSelector((state: BlackboardApplicationState) =>
    state.entryOverview, entryOverviewReducer.getEntries);