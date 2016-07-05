define(["require", "exports", '@angular/platform-browser-dynamic', './app.component', '@angular/http'], function (require, exports, platform_browser_dynamic_1, app_component_1, http_1) {
    "use strict";
    platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, http_1.ConnectionBackend]);
});
//# sourceMappingURL=main.js.map