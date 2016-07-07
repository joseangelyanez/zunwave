var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', '../services/api.service', './codeprojectentry.component'], function (require, exports, core_1, api_service_1, codeprojectentry_component_1) {
    "use strict";
    var CodeProjectListComponent = (function () {
        function CodeProjectListComponent(_service) {
            this._service = _service;
        }
        CodeProjectListComponent.prototype.render = function () {
            var _this = this;
            this._service.getSessionState().subscribe(function (value) {
                _this.codeProjects = value.json().codeProjects;
            }, function (error) { }, function () { });
        };
        CodeProjectListComponent.prototype.ngOnInit = function () {
            this.render();
        };
        CodeProjectListComponent = __decorate([
            core_1.Component({
                selector: 'codeprojectlist',
                providers: [api_service_1.ApiService],
                styleUrls: ['app/components/codeprojectlist.component.css'],
                templateUrl: 'app/components/codeprojectlist.component.html',
                directives: [
                    codeprojectentry_component_1.CodeProjectEntryComponent
                ]
            }), 
            __metadata('design:paramtypes', [api_service_1.ApiService])
        ], CodeProjectListComponent);
        return CodeProjectListComponent;
    }());
    exports.CodeProjectListComponent = CodeProjectListComponent;
});
//# sourceMappingURL=codeprojectlist.component.js.map