import { Component } from 'angular2/core';
import { Shell } from './shell.component';

@Component({
    selector: 'x-app',
    directives: [Shell],
    template: `
            <x-shell></x-shell>
        `
})

export class App {

}