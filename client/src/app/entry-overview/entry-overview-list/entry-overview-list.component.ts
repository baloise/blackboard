import {Component, Input} from '@angular/core';
import {Entry} from "../../model/entry.model";

@Component({
    selector: 'entry-overview-list',
    templateUrl: './entry-overview-list.component.html'
})
export class EntryOverviewListComponent {

    @Input() entries: Entry[];

}
