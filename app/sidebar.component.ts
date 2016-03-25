import { Component, Input } from 'angular2/core';
import { SidebarService } from './sidebar.service';

@Component({
    selector: "x-sidebar",
    template: `
        <div (collapse)="onCollapse($event)" [ngClass]="{collapsed: collapsed}">
            {{event | json}}
        </div>
        `,
    providers: [SidebarService]
})

export class Sidebar {
    collapsed: boolean = false;
    event: any;
    constructor(private sidebarService: SidebarService) { }
    onCollapse = function (e) {
        alert('EVENT');
      this.event = e;
    };
}