System.register(['angular2/core', './navigation-bar.component', './sidebar.component', './sidebar.service'], function(exports_1, context_1) {
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
    var core_1, navigation_bar_component_1, sidebar_component_1, sidebar_service_1;
    var Window;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navigation_bar_component_1_1) {
                navigation_bar_component_1 = navigation_bar_component_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (sidebar_service_1_1) {
                sidebar_service_1 = sidebar_service_1_1;
            }],
        execute: function() {
            Window = (function () {
                function Window(sidebarService) {
                    this.sidebarService = sidebarService;
                }
                Window = __decorate([
                    core_1.Component({
                        selector: 'x-window',
                        directives: [navigation_bar_component_1.NavigationBar, sidebar_component_1.Sidebar],
                        template: "\n            <x-navigation-bar></x-navigation-bar>\n            <div>\n                <x-sidebar></x-sidebar>\n                <div class=\"content\"></div>\n            </div>\n        ",
                        providers: [sidebar_service_1.SidebarService]
                    }), 
                    __metadata('design:paramtypes', [sidebar_service_1.SidebarService])
                ], Window);
                return Window;
            }());
            exports_1("Window", Window);
        }
    }
});
//# sourceMappingURL=window.component.js.map