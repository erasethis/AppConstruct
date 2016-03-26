import { Injectable } from 'angular2/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidebarService {
    private sidebarToggledSource = new Subject<boolean>();
    name: string = 'unassigned';
    sidebarToggled$ = this.sidebarToggledSource.asObservable();
    toggleSidebar(collapsed: boolean) {
        this.sidebarToggledSource.next(collapsed);
    }
}