import { Component, Input } from 'angular2/core';
import { ShellService } from './shell.service';

@Component({
    selector: "x-sidebar",
    templateUrl: 'app/sidebar.component.html',
    styleUrls: ['app/sidebar.component.css']
})
export class SidebarComponent {
    collapsed: boolean = true;
    items: SidebarItemComponent[] = [];
    constructor (private shellService: ShellService) { 
        shellService.sidebarToggled$.subscribe(data => {
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