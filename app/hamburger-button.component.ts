import { Component, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'x-hamburger-button',
    template: `
        <div (click)="toggleSidebar()">
           <i class="fa fa-bars">
              <a href="#"></a>
           </i>
        </div>
        `
})

export class HamburgerButton {
    @Output() toggled = new EventEmitter();
    toggleSidebar() {
        this.toggled.emit(null);
        console.log('toggled.emit()');
    };
}