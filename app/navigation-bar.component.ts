import { Component } from 'angular2/core';
import {NavigationService } from './navigation.service';

@Component({
    selector: 'x-navigation-bar',
    templateUrl: 'app/navigation-bar.component.html',
    styleUrls: ['app/navigation-bar.component.css']
})

export class NavigationBar {
    constructor(private _navigationService: NavigationService) {
        
    }
    toggleSidebarLeft() {
        this._navigationService.toggleSidebarLeft();
    }
}