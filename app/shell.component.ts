import { Component } from 'angular2/core';
import { NavigationBar } from './navigation-bar.component';
import { SidebarComponent, SidebarItemComponent } from './sidebar.component';
import { ShellService } from './shell.service';

@Component({
    selector: 'x-shell',
    directives: [NavigationBar, SidebarComponent, SidebarItemComponent],
    templateUrl: 'app/shell.component.html',
    styleUrls: ['app/shell.component.css'],
    providers: [ShellService]
})

export class Shell {
    constructor (private shellservice: ShellService) { }
}