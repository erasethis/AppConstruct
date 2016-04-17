import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { AppComponent } from './app.component';
import { SampleContentComponent } from './sample-content.component';

@Component({
    selector: 'sample-app',
    templateUrl: 'app/sample-app.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        AppComponent, 
        SampleContentComponent
    ],
    providers: [
        ROUTER_PROVIDERS
    ]
})
@RouteConfig([
    { path: '/sample/:id', name: 'Sample', component: SampleContentComponent, useAsDefault: true }
])
export class SampleAppComponent {

}