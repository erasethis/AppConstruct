import { Component } from 'angular2/core';
import { NavigationBar } from './navigation-bar.component';
import { Sidebar } from './sidebar.component';
import { SidebarService } from './sidebar.service';

@Component({
    selector: 'x-window',
    directives: [NavigationBar, Sidebar],
    template: `
            <x-navigation-bar></x-navigation-bar>
            <div>
                <x-sidebar></x-sidebar>
                <div class="content"></div>
            </div>
        `,
    providers: [SidebarService]
})

export class Window {
    constructor (private sidebarService: SidebarService) { }
}