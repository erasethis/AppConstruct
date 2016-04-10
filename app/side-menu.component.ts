import { Component, Input } from 'angular2/core';
import { NavigationService } from './navigation.service';

@Component({
    selector: "side-menu",
    templateUrl: 'app/side-menu.component.html',
    styleUrls: ['app/side-menu.component.css']
})
export class SideMenuComponent {
    collapsed: boolean = true;
    items: SideMenuItemComponent[] = [];
    constructor (private _navigationService: NavigationService) { 
        _navigationService.sideMenuToggled$.subscribe(data => {
             this.collapsed = !this.collapsed;
        });
    }
    addItem(item: SideMenuItemComponent) {
        this.items.push(item);
    }
}

@Component({
    selector: 'side-menu-item',
    template: '<div>{{name}}</div>'
})
export class SideMenuItemComponent {
    @Input() name: string;
    @Input() icon: string;
    constructor(sidebar: SideMenuComponent) {
        sidebar.addItem(this);
    }
}