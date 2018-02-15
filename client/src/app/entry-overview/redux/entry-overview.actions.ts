import {Action} from '@ngrx/store';

export const LOAD_ENTRIES = '[Entry] Load';
export const LOAD_ENTRIES_SUCCESS = '[Entry] Load Success';
export const LOAD_ENTRIES_FAIL = '[Entry] Load Fail';

export class LoadEntriesAction implements Action {
    readonly type = LOAD_ENTRIES;

    constructor() {
    }
}

export class LoadEntriesSuccessAction implements Action {
    readonly type = LOAD_ENTRIES_SUCCESS;

    constructor(public payload: any) {
    }
}

export class LoadEntriesFailAction implements Action {
    readonly type = LOAD_ENTRIES_FAIL;

    constructor(public payload) {
    }
}

export type EntryActions = LoadEntriesAction | LoadEntriesSuccessAction | LoadEntriesFailAction;