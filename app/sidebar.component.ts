import { Component } from 'angular2/core';
import { SidebarService } from './sidebar.service';

@Component({
    selector: "x-sidebar",
    template: `
        <div>
        </div>
        `,
    providers: [SidebarService]
})

export class Sidebar {
    collapsed: boolean = false;
    constructor (private sidebarService: SidebarService) { 
        console.log('sidebar, service.name= ' + sidebarService.name);
        sidebarService.sidebarToggled$.subscribe(data => {
             this.collapsed = !this.collapsed
             console.log('event caught');
        });
    }
}