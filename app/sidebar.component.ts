import { Component } from 'angular2/core';
import { SidebarService } from './sidebar.service';

@Component({
    selector: "x-sidebar",
    template: `
        <div [ngClass]="{collapsed: collapsed}">
            <ul>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
                <li>Menu Item 4</li>
                <li>Menu Item 5</li>
            </ul>
        </div>
        `,
    styles: [`
        div {
            width: 180px;
            transition: all 0.25s ease-in-out;
        }
        div.collapsed {
            width: 0;
            transition: all 0.25s ease-in-out;
        }
        div ul {
            list-style: none;
            color: #eee;
            padding: 14px;
            margin: 0;
        }   
        div ul li {
            white-space: nowrap;
            margin-left: 0;
            transition: all 0.25s ease-in-out;
        }
        div.collapsed ul li {
            white-space: nowrap;
            margin-left: -180px;
            transition: all 0.25s ease-in-out;
        }
        `
    ]
})

export class Sidebar {
    collapsed: boolean = false;
    constructor (private sidebarService: SidebarService) { 
        sidebarService.sidebarToggled$.subscribe(data => {
             this.collapsed = !this.collapsed;
             console.log('event caught');
        });
    }
}