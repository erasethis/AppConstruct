import { Component } from 'angular2/core';
import { SidebarService } from './sidebar.service';

@Component({
    selector: 'x-hamburger-button',
    template: `
        <div (click)="toggleSidebar()">
           <i class="fa fa-bars">
              <a href="#"></a>
           </i>
        </div>
        `,
    providers: [SidebarService]
})

export class HamburgerButton {
    constructor(private sidebarService: SidebarService) { }
    toggleSidebar = function () {
        this.sidebarService.toggle();
    };
}