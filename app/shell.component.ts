import { Component, ViewChild } from 'angular2/core';
import { NavigationBar } from './navigation-bar.component';
import { Sidebar } from './sidebar.component';

@Component({
    selector: 'x-shell',
    directives: [NavigationBar, Sidebar],
    templateUrl: 'app/shell.component.html',
    styleUrls: ['app/shell.component.css']
})

export class Shell {
    @ViewChild(Sidebar) sidebar: Sidebar;
    onMenuButtonClicked() {
        this.sidebar.toggle();
    }
}