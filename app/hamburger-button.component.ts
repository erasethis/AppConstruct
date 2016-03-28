import { Component } from 'angular2/core';
import { ShellService } from './shell.service';

@Component({
    selector: 'x-hamburger-button',
    templateUrl: 'app/hamburger-button.component.html',
    styleUrls: ['app/hamburger-button.component.css']
})

export class HamburgerButton {
    constructor (private shellService: ShellService) { }
    toggleSidebar() {
        this.shellService.toggleSidebar(true);
    };
}