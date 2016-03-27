import { Component } from 'angular2/core';
import { SidebarService } from './sidebar.service';

@Component({
    selector: 'x-hamburger-button',
    templateUrl: 'app/hamburger-button.component.html',
    styleUrls: ['app/hamburger-button.component.css']
})

export class HamburgerButton {
    constructor (private sidebarService: SidebarService) { }
    toggleSidebar() {
        this.sidebarService.toggleSidebar(true);
    };
}