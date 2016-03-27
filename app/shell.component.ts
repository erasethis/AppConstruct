import { Component } from 'angular2/core';
import { NavigationBar } from './navigation-bar.component';
import { Sidebar } from './sidebar.component';

@Component({
    selector: 'x-shell',
    directives: [NavigationBar, Sidebar],
    templateUrl: 'app/shell.component.html'
})

export class Shell {
    
}