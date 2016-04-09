import { Injectable } from 'angular2/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavigationService {
    private sidebarLeftToggledSource = new Subject();
    sidebarLeftToggled$ = this.sidebarLeftToggledSource.asObservable();
    
    toggleSidebarLeft() {
        this.sidebarLeftToggledSource.next({});
    }
}