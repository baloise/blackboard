import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";
import {Entry} from "../model/entry.model";

@Injectable()
export class EntryService {

    constructor(private http: Http) {
    }

    getEntries(): Observable<Entry[]> {
        return this.http.get('api/entry/')
            .map(res => res.json());
    }
}