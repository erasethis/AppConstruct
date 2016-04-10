import { Injectable } from 'angular2/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavigationService {
    private sideMenuToggledSource = new Subject();
    private contextMenuToggledSource = new Subject();
    sideMenuToggled$ = this.sideMenuToggledSource.asObservable();   
    contextMenuToggled$ = this.contextMenuToggledSource.asObservable(); 
      
    toggleSideMenu() {
        this.sideMenuToggledSource.next({});
    }
    toggleContextMenu() {
        this.contextMenuToggledSource.next({});
    }
}