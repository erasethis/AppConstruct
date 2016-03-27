import { Component } from 'angular2/core';
import { Shell } from './shell.component';
import { SidebarService } from './sidebar.service';

@Component({
    selector: 'x-app',
    directives: [Shell],
    template: `
            <x-shell></x-shell>
        `,
    providers: [SidebarService]
})

export class App {
    constructor (private sidebarService: SidebarService) { }
}