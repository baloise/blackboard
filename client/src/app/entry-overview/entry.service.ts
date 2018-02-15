import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";
import {Entry} from "../model/entry.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EntryService {

    constructor(private http: HttpClient) {
    }

    getEntries(): Observable<Entry[]> {
        return this.http.get<Entry[]>('api/entry/');
    }
}