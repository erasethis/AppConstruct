import { Component } from 'angular2/core';
import { HamburgerButton } from './hamburger-button.component';

@Component({
    selector: 'x-navigation-bar',
    directives: [HamburgerButton],
    template: `
            <x-hamburger-button></x-hamburger-button>
            <span class="title">Title</span>
        `
})

export class NavigationBar {
    
}