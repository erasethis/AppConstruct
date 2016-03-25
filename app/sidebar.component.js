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
                    this.sidebarService = sidebarService;
                    this.collapsed = false;
                    this.onCollapse = function (e) {
                        alert('EVENT');
                        this.event = e;
                    };
                }
                Sidebar = __decorate([
                    core_1.Component({
                        selector: "x-sidebar",
                        template: "\n        <div (collapse)=\"onCollapse($event)\" [ngClass]=\"{collapsed: collapsed}\">\n            {{event | json}}\n        </div>\n        ",
                        providers: [sidebar_service_1.SidebarService]
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