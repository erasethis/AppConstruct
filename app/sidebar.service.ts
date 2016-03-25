import { Injectable, Output, EventEmitter } from 'angular2/core';

@Injectable()

export class SidebarService {
    @Output() collapse: EventEmitter<boolean> = new EventEmitter();
    private collapsed = false;
    toggle = function () {
        this.collapsed = !this.collapsed;
        this.collapse.emit(this.collapsed);
        console.log('emit = ' + this.collapsed);
    };
}