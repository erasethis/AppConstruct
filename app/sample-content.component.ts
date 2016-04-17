import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
    selector: 'sample-content',
    template: '<div><h1>Hello, this is the content with ID {{id}}.</h1></div>'
})
export class SampleContentComponent {
    id: number;
    constructor(private _routeParams: RouteParams) {
        this.id = +_routeParams.get('id');
    }
}