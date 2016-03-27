import { Component } from 'angular2/core';
import { SidebarService } from './sidebar.service';

@Component({
    selector: "x-sidebar",
    templateUrl: 'app/sidebar.component.html',
    styleUrls: ['app/sidebar.component.css']
})

export class Sidebar {
    collapsed: boolean = false;
    constructor (private sidebarService: SidebarService) { 
        sidebarService.sidebarToggled$.subscribe(data => {
             this.collapsed = !this.collapsed;
        });
    }
}