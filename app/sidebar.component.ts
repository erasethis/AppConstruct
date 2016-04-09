import { Component, Input } from 'angular2/core';
import { NavigationService } from './navigation.service';

@Component({
    selector: "x-sidebar",
    templateUrl: 'app/sidebar.component.html',
    styleUrls: ['app/sidebar.component.css']
})
export class SidebarComponent {
    collapsed: boolean = true;
    items: SidebarItemComponent[] = [];
    constructor (private _navigationService: NavigationService) { 
        _navigationService.sidebarLeftToggled$.subscribe(data => {
             this.collapsed = !this.collapsed;
        });
    }
    addItem(item: SidebarItemComponent) {
        this.items.push(item);
    }
}

@Component({
    selector: 'x-sidebar-item',
    template: '<div>{{name}}</div>'
})
export class SidebarItemComponent {
    @Input() name: string;
    @Input() icon: string;
    constructor(sidebar: SidebarComponent) {
        sidebar.addItem(this);
    }
}