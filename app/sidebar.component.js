System.register(['angular2/core', './sidebar.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sidebar_service_1;
    var Sidebar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sidebar_service_1_1) {
                sidebar_service_1 = sidebar_service_1_1;
            }],
        execute: function() {
            Sidebar = (function () {
                function Sidebar(sidebarService) {
                    var _this = this;
                    this.sidebarService = sidebarService;
                    this.collapsed = false;
                    sidebarService.sidebarToggled$.subscribe(function (data) {
                        _this.collapsed = !_this.collapsed;
                        console.log('event caught');
                    });
                }
                Sidebar = __decorate([
                    core_1.Component({
                        selector: "x-sidebar",
                        template: "\n        <div [ngClass]=\"{collapsed: collapsed}\">\n            <ul>\n                <li>Menu Item 1</li>\n                <li>Menu Item 2</li>\n                <li>Menu Item 3</li>\n                <li>Menu Item 4</li>\n                <li>Menu Item 5</li>\n            </ul>\n        </div>\n        ",
                        styles: ["\n        div {\n            width: 180px;\n            transition: all 0.25s ease-in-out;\n        }\n        div.collapsed {\n            width: 0;\n            transition: all 0.25s ease-in-out;\n        }\n        div ul {\n            list-style: none;\n            color: #eee;\n            padding: 14px;\n            margin: 0;\n        }   \n        div ul li {\n            white-space: nowrap;\n            margin-left: 0;\n            transition: all 0.25s ease-in-out;\n        }\n        div.collapsed ul li {\n            white-space: nowrap;\n            margin-left: -180px;\n            transition: all 0.25s ease-in-out;\n        }\n        "
                        ]
                    }), 
                    __metadata('design:paramtypes', [sidebar_service_1.SidebarService])
                ], Sidebar);
                return Sidebar;
            }());
            exports_1("Sidebar", Sidebar);
        }
    }
});
//# sourceMappingURL=sidebar.component.js.map