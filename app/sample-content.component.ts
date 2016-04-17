import { Component } from 'angular2/core';

@Component({
    selector: 'sample-content',
    template: '<div><h1>Hello, this is the content with ID {{id}}.</h1></div>'
})
export class SampleContentComponent {
    id: number = 42;
}