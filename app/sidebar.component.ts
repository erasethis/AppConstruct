import { Component } from 'angular2/core';
import { ShellService } from './shell.service';

@Component({
    selector: "x-sidebar",
    templateUrl: 'app/sidebar.component.html',
    styleUrls: ['app/sidebar.component.css']
})

export class Sidebar {
    collapsed: boolean = false;
    constructor (private shellService: ShellService) { 
        shellService.sidebarToggled$.subscribe(data => {
             this.collapsed = !this.collapsed;
        });
    }
}