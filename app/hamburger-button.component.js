System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var HamburgerButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HamburgerButton = (function () {
                function HamburgerButton() {
                    this.toggled = new core_1.EventEmitter();
                }
                HamburgerButton.prototype.toggleSidebar = function () {
                    this.toggled.emit(null);
                    console.log('toggled.emit()');
                };
                ;
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], HamburgerButton.prototype, "toggled", void 0);
                HamburgerButton = __decorate([
                    core_1.Component({
                        selector: 'x-hamburger-button',
                        template: "\n        <div (click)=\"toggleSidebar()\">\n           <i class=\"fa fa-bars\">\n              <a href=\"#\"></a>\n           </i>\n        </div>\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HamburgerButton);
                return HamburgerButton;
            }());
            exports_1("HamburgerButton", HamburgerButton);
        }
    }
});
//# sourceMappingURL=hamburger-button.component.js.map