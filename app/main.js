System.register(["angular2/platform/browser", "./window.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, window_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (window_component_1_1) {
                window_component_1 = window_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(window_component_1.Window)
                .then(function (success) { return console.log("bootstrap succesful"); })
                .catch(function (error) { return console.log("bootstrap failed: " + error); });
        }
    }
});
//# sourceMappingURL=main.js.map