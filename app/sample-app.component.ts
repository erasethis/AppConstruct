import { Component } from 'angular2/core';
import { Shell } from './shell.component';

@Component({
    selector: 'sample-app',
    directives: [Shell],
    templateUrl: 'app/sample-app.component.html'
})

export class SampleAppComponent {

}