import { Component, Input } from 'angular2/core';
import { NavigationService } from './navigation.service';

@Component({
    selector: "context-menu",
    templateUrl: 'app/context-menu.component.html',
    styleUrls: ['app/context-menu.component.css']
})
export class ContextMenuComponent {
    collapsed: boolean = true;
    constructor (private _navigationService: NavigationService) { 
        _navigationService.contextMenuToggled$.subscribe(data => {
             this.collapsed = !this.collapsed;
        });
    }
}
