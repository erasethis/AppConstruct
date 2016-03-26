import { Component } from 'angular2/core';
import { HamburgerButton } from './hamburger-button.component';

@Component({
    selector: "x-sidebar",
    template: `
        <x-hamburger-button (toggled)="onToggled($event)" [ngClass]="{collapsed: collapsed}">
        </x-hamburger-button>
        `
})

export class Sidebar {
    collapsed: boolean = false;
    onToggled (value) {
        this.collapsed = !this.collapsed;
        console.log('event caught');
    };
}