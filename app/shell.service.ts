import { Injectable } from 'angular2/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShellService {
    private sidebarToggledSource = new Subject();
    sidebarToggled$ = this.sidebarToggledSource.asObservable();
    
    toggleSidebar(collapsed: boolean) {
        this.sidebarToggledSource.next({});
    }
}