import { Component } from 'angular2/core';
import { AppBarComponent } from './app-bar.component';
import { SideMenuComponent, SideMenuItemComponent } from './side-menu.component';
import { NavigationService } from './navigation.service';

@Component({
    selector: 'app',
    directives: [AppBarComponent, SideMenuComponent, SideMenuItemComponent],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [NavigationService]
})

export class AppComponent {
    constructor (private _navigationService: NavigationService) { 
        
    }
}