import { Component } from 'angular2/core';
import { NgClass } from 'angular2/common';
import { NavigationBar } from './navigation-bar.component';
import { Sidebar } from './sidebar.component';

@Component({
    selector: 'x-window',
    directives: [NavigationBar, Sidebar],
    template: `
            <x-navigation-bar></x-navigation-bar>
            <div>
                <x-sidebar></x-sidebar>
                <div class="content"></div>
            </div>
        `
})

export class Window {

}