import { Component } from 'angular2/core';
import { HamburgerButton } from './hamburger-button.component';

@Component({
    selector: 'x-navigation-bar',
    directives: [HamburgerButton],
    templateUrl: 'app/navigation-bar.component.html',
    styleUrls: ['app/navigation-bar.component.css']
})

export class NavigationBar {
    
}