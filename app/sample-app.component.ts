import { Component } from 'angular2/core';
import { AppComponent } from './app.component';
import { SampleContentComponent } from './sample-content.component';

@Component({
    selector: 'sample-app',
    templateUrl: 'app/sample-app.component.html',
    directives: [AppComponent, SampleContentComponent]
})

export class SampleAppComponent {

}