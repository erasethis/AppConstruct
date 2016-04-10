import { Component } from 'angular2/core';
import {NavigationService } from './navigation.service';

@Component({
    selector: 'app-bar',
    templateUrl: 'app/app-bar.component.html',
    styleUrls: ['app/app-bar.component.css']
})

export class AppBarComponent {
    constructor(private _navigationService: NavigationService) {
        
    }
    toggleSideMenu() {
        this._navigationService.toggleSideMenu();
    }
    toggleContextMenu() {
        this._navigationService.toggleContextMenu();
    }
}