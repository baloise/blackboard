import {Component, Input} from '@angular/core';
import {Entry} from '../../model/entry.model';

@Component({
    selector: 'bb-entry-overview-list',
    templateUrl: './entry-overview-list.component.html'
})
export class EntryOverviewListComponent {

    @Input()
    entries: Entry[];

}
